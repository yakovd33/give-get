const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require('bcrypt');

// Signup
router.post("/", async (req, res, next) => {
	let fullname = req.body.fullname;
	let email = req.body.email;
	let phone = req.body.phone;
	let password = req.body.password;
	let type = req.body.type;

	var result = {
		success: false,
		msg: "",
	};

	console.log(req.body);

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
										} else if (type == 'getter') {
											let needs = req.body.needs;
											let purpose = req.body.purpose;
											let field = req.body.field;

											if (needs && purpose && field) {
												await pool.query("INSERT INTO getters (user_id, need, purpose, field) VALUES ($1, $2, $3, $4)", [ lastInsertId, needs, purpose, field ]).then((res) => {
													// Success
												});
											} else {
												// Delete user row
												result.msg = "נראה שיש שדות חסרים.";
												await pool.query(`DELETE FROM users WHERE id = ${ lastInsertId }`);
											}
										}
									}
								});
							});
						});
					} else {
						// Email already exists
						result.msg = 'כתובת אימייל כבר רשומה.';
					}
				});
		} catch (e) {
			result.msg = "אירעה שגיאה.";
			console.log(e);
		}
	} else {
		result.msg = "נראה שיש שדות חסרים.";
	}

	res.status(200).json(result);
});

/* GET users listing. */
// router.get('/', async function(req, res, next) {
//   const users = await pool.query("SELECT * FROM users", []);
//   console.log(users.rows);

//   res.render('index', { title: 'Express', users: users.rows });
// });

module.exports = router;
