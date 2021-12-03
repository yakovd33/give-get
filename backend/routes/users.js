const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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
			await pool.query(`SELECT * FROM users WHERE email = '${email}'`).then(async (docs) => {
					if (!docs.rowCount) {
						// Encrypt password
						bcrypt.genSalt(10, (err, salt) => {
							bcrypt.hash(password, salt, async(err, pass_hashed) => {
								// Add to users table
								await pool.query("INSERT INTO users (fullname, email, phone, pass_hashed) VALUES ($1, $2, $3, $4) RETURNING *", [fullname, email, phone, pass_hashed]).then(async (docs) => {
									if (docs.rowCount) {
										let lastInsertId = docs.rows[0].id;
										// Add to getters/givers table
										if (type == 'giver') {
											console.log('giver');
											let needs = req.body.needs;
											let status = req.body.status;
											let field = req.body.field;
											let age = req.body.age;
											let experience = req.body.experience;
											let hobbies = req.body.hobbies;
											let questions = req.body.questions;

											if (needs && status && field && age && experience && hobbies && questions) {
												await pool.query("INSERT INTO givers (user_id, age, experience, hobbies, questions, needs, status, field) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [ lastInsertId, age, experience, hobbies, questions, needs, status, field ]).then((docs) => {
													// Success
													res.status(200).json({ msg: "נרשמת בהצלחה. כעת ניתן להתחבר." });
												});
											} else {
												// Delete user row
												res.status(200).json({ msg: "נראה שיש שדות חסרים." });
												await pool.query(`DELETE FROM users WHERE id = ${ lastInsertId }`);
											}
										} else if (type == 'getter') {
											let needs = req.body.needs;
											let purpose = req.body.purpose;
											let field = req.body.field;

											// if (needs && purpose && field && needs.length && purpose.length && field.length) {
											if (needs && purpose && field) {
												await pool.query("INSERT INTO getters (user_id, need, purpose, field) VALUES ($1, $2, $3, $4)", [ lastInsertId, needs, purpose, field ]).then((docs) => {
													// Success
													res.status(200).json({ msg: "נרשמת בהצלחה. כעת ניתן להתחבר." });
												});
											} else {
												// Delete user row
												res.status(200).json({ msg: "נראה שיש שדות חסרים." });
												await pool.query(`DELETE FROM users WHERE id = ${ lastInsertId }`);
											}
										}
									}
								});
							});
						});
					} else {
						// Email already exists
						res.status(200).json({ msg: "כתובת אימייל כבר רשומה." });
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
router.post('/login/', async (req, res, next) => {
	let email = req.body.email;
	let password = req.body.password;

	let response = {
		feedback: '',
		success: false,
		user: null
	};

	if (email && password) {
		// Check if email exists
		let emailRow = await pool.query("SELECT * FROM users WHERE email = $1", [ email ]);
		
		if (emailRow.rows.length) {
			let passMatch = await bcrypt.compare(password, emailRow.rows[0].pass_hashed);
			
			if (passMatch) {
				// Save a new token with JWT
				const user = emailRow.rows[0];

				const token = jwt.sign(
					{ user_id: user.id, email },
					process.env.TOKEN_KEY,
					{  expiresIn: "999999h", }
				);

				user.token = token;
				response.feedback = 'התחברת בהצלחה.';
				response.success = true;
				response.user = user;
			} else {
				// Password is incorrect
				response.feedback = 'סיסמא שגויה';
			}
		} else {
			// Email doesn't exist
			response.feedback = 'כתובת זו אינה רשומה';
		}
	} else {
		response.feedback = 'שדות חסרים';
	}

	res.status(200).json(response);
});

/* GET users listing. */
// router.get('/', async function(req, res, next) {
//   const users = await pool.query("SELECT * FROM users", []);
//   console.log(users.rows);

//   res.render('index', { title: 'Express', users: users.rows });
// });

module.exports = router;
