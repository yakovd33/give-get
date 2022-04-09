const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.token;

	if (!token) return res.status(403).send("A token is required for authentication");

	try {
		const decoded = jwt.verify(token, config.TOKEN_KEY);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send("Invalid Token");
	}
	return next();
};

const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.headers.uid) {
			let userId = req.headers.uid;

			if (req.user.user_id == userId && req.user.isAdmin) {
				next();
			} else {
				res.status(403).send("You're not authorized to do that.")
			}
		} else {
			return res.status(401).send('No uid found');
		}
	});
};

module.exports = { verifyToken, verifyAdmin };