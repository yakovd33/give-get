const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { verifyAdmin } = require("../middleware/auth");

// Signup
router.post("/", async (req, res, next) => {
	let fullname = req.body.fullname;
	let email = req.body.email;
	let phone = req.body.phone;
	let password = req.body.password;
	let type = req.body.type;

	if (fullname && email && phone && password && type) {
		try {
			// Check if email exists
			await pool
				.query(`SELECT * FROM users WHERE email = '${email}'`)
				.then(async (docs) => {
					if (!docs.rowCount) {
						// Encrypt password
						bcrypt.genSalt(10, (err, salt) => {
							bcrypt.hash(
								password,
								salt,
								async (err, pass_hashed) => {
									// Add to users table
									await pool
										.query(
											"INSERT INTO users (fullname, email, phone, pass_hashed, type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
											[
												fullname,
												email,
												phone,
												pass_hashed,
												type
											]
										)
										.then(async (docs) => {
											if (docs.rowCount) {
												let lastInsertId =
													docs.rows[0].id;
												// Add to getters/givers table
												if (type == "giver") {
													// let needs = req.body.needs;
													let needs = '';
													let status =
														req.body.status;
													let fields = req.body.fields;
													let age = req.body.age;
													let experience =
														req.body.experience;
													let hobbies =
														req.body.hobbies;
													let questions =
														req.body.questions;
													let statusAnswer =
														req.body.statusAnswer;

													if (
														status &&
														fields &&
														age &&
														experience &&
														hobbies &&
														questions
													) {
														await pool
															.query(
																"INSERT INTO givers (user_id, age, experience, hobbies, questions, needs, status, fields, status_answer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
																[
																	lastInsertId,
																	age,
																	experience,
																	hobbies,
																	questions,
																	needs,
																	status,
																	fields,
																	statusAnswer,
																]
															)
															.then((docs) => {
																// Success
																res.status(
																	200
																).json({
																	msg: "נרשמת בהצלחה. כעת ניתן להתחבר.",
																});
															});
													} else {
														// Delete user row
														res.status(200).json({
															msg: "נראה שיש שדות חסרים.",
														});
														await pool.query(
															`DELETE FROM users WHERE id = ${lastInsertId}`
														);
													}
												} else if (type == "getter") {
													// let needs = req.body.needs;
													let needs = '';
													let purpose = req.body.purpose;
													let fields = req.body.fields;
													let wouldLikeToShare = req.body.wouldLikeToShare;

													// if (needs && purpose && field && needs.length && purpose.length && field.length) {
													if (
														purpose &&
														fields
													) {
														await pool
															.query(
																"INSERT INTO getters (user_id, need, purpose, fields, would_like_to_share) VALUES ($1, $2, $3, $4, $5)",
																[
																	lastInsertId,
																	needs,
																	purpose,
																	fields,
																	wouldLikeToShare
																]
															)
															.then((docs) => {
																// Success
																res.status(
																	200
																).json({
																	msg: "נרשמת בהצלחה. כעת ניתן להתחבר.",
																});
															});
													} else {
														// Delete user row
														res.status(200).json({
															msg: "נראה שיש שדות חסרים.",
														});
														await pool.query(
															`DELETE FROM users WHERE id = ${lastInsertId}`
														);
													}
												}
											}
										});
								}
							);
						});
					} else {
						// Email already exists
						res.status(200).json({
							msg: "כתובת אימייל כבר רשומה.",
						});
					}
				});
		} catch (e) {
			res.status(200).json({ msg: "אירעה שגיאה." });
			console.log(e);
		}
	} else {
		res.status(200).json({ msg: "נראה שחסרים שדות." });
	}
});

// Login
router.post("/login/", async (req, res, next) => {
	let email = req.body.email;
	let password = req.body.password;

	let response = {
		feedback: "",
		success: false,
		user: null,
	};

	if (email && password) {
		// Check if email exists
		let emailRow = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email]
		);

		if (emailRow.rows.length) {
			let passMatch = await bcrypt.compare(
				password,
				emailRow.rows[0].pass_hashed
			);

			if (passMatch) {
				// Save a new token with JWT
				const user = emailRow.rows[0];

				const token = jwt.sign(
					{ user_id: user.id, email, isAdmin: user.isAdmin},
					process.env.TOKEN_KEY,
					{ expiresIn: "999999h" }
				);

				user.token = token;
				dback = "התחברת בהצלחה.";
				response.success = true;
				response.user = user;
			} else {
				// Password is incorrect
				response.feedback = "סיסמא שגויה";
			}
		} else {
			// Email doesn't exist
			response.feedback = "כתובת זו אינה רשומה";
		}
	} else {
		response.feedback = "שדות חסרים";
	}

	res.status(200).json(response);
});

// Get user details
router.get("/user/:id", async (req, res, next) => {
	let user_id = req.params.id;

	if (!user_id) return;

	let userRow = await pool.query(`SELECT * FROM users WHERE id = ${user_id}`);

	if (!userRow.rows.length) return;

	const { pass_hashed, ...others } = userRow.rows[0];
	res.status(200).json(others);

	return;

	res.status(500);
});

/* GET users listing. */
// router.get('/', async function(req, res, next) {
//   const users = await pool.query("SELECT * FROM users", []);
//   console.log(users.rows);

//   res.render('index', { title: 'Express', users: users.rows });
// });

// Get statuses options
router.get("/get_status_options", async (req, res, next) => {
	let options = {};

	// Loop through all givers
	try {
		let givers_query = await pool.query("SELECT * FROM givers");

		if (givers_query.rows) {
			for (var i = 0; i < givers_query.rows.length; i++) {
				let giver = givers_query.rows[i];
				console.log(giver);

				// Check if options already used
				if (options[giver.status]) {
					options[giver.status].push(giver.status_answer);
				} else {
					options[giver.status] = [giver.status_answer];
				}
			}
		}
	} catch (e) {
		console.log(e);
	}

	res.status(200).json(options);
});

router.get("/get_givers_by_status/:status/:option", async (req, res, next) => {
	let status = req.params.status;
	let option = req.params.option;

	let givers = [];

	if (status && option) {
		try {
			let givers_query = await pool.query(
				`SELECT * FROM givers WHERE status = $1 AND status_answer = $2`,
				[status, option]
			);

			if (givers_query.rows) {
				for (var i = 0; i < givers_query.rows.length; i++) {
					let giver = givers_query.rows[i];
					let giver_user_query = await pool.query(
						`SELECT * FROM users WHERE id = ${giver.user_id}`
					);

					if (giver_user_query.rows && giver_user_query.rows.length) {
						let giver_user = giver_user_query.rows[0];
						givers.push({
							id: giver_user.id,
							name: giver_user.fullname,
							description: `${giver.status} - ${giver.status_answer}`,
						});
					}
				}
			}
		} catch (e) {
			console.log(e);
		}
	}

	res.status(200).json(givers);
});

router.get("/get_givers_by_fields/:fields", async (req, res, next) => {
	let fields = req.params.fields;
	let fieldsSeparated = fields.split(',');
	let finalLikeQuery = `fields LIKE 'eeee' OR `;

	console.log(fieldsSeparated);

	fieldsSeparated.forEach(field => {
		if (field) {
			finalLikeQuery += `fields LIKE '%${ field }%' OR `;
		}
	});

	finalLikeQuery += 'FALSE';

	let givers = [];

	if (fields) {
		try {
			console.log(`SELECT * FROM givers WHERE TRUE AND (${ finalLikeQuery })`);

			let givers_query = await pool.query(
				`SELECT * FROM givers WHERE TRUE AND (${ finalLikeQuery })`,
			);


			if (givers_query.rows) {
				for (var i = 0; i < givers_query.rows.length; i++) {
					let giver = givers_query.rows[i];
					let giver_user_query = await pool.query(
						`SELECT * FROM users WHERE id = ${giver.user_id}`
					);

					// Check if user exists
					if (giver_user_query.rows && giver_user_query.rows.length) {
						let giver_user = giver_user_query.rows[0];
						givers.push({
							id: giver_user.id,
							name: giver_user.fullname,
							description: `${giver.status} - ${giver.status_answer}`,
						});
					}
				}
			}
		} catch (e) {
			console.log(e);
		}
	}

	res.status(200).json(givers);
});

// Get all users for admin
router.get("/:page", verifyAdmin, async (req, res, next) => {
	let page = req.params.page;
	let finalUsers = [];

	let allUsersQuery = await pool.query("SELECT * FROM users");
	let usersQuery = await pool.query(`SELECT * FROM users LIMIT 5 OFFSET ${ 5 * page }`);

	usersQuery.rows.map((userItem) => {
		let { pass_hashed, ...others } = userItem;

		finalUsers.push(others);
	})

	res.json({
		users: finalUsers,
		usersCount: allUsersQuery.rows.length
	});
});

module.exports = router;
