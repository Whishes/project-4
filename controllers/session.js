const express = require("express");
const router = express.Router();
const { isValidPassword } = require("../utils/hash");
const Session = require("../models/session");

// logging in
router.post("/", (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res
			.status(400)
			.json({ message: "Email and/or password fields are empty" });
	}

	Session.login(email).then((userRows) => {
		if (userRows.length !== 1) {
			return res
				.status(400)
				.json({ message: "The email and/or password are not correct" });
		}
		//console.log(userRows);
		const user = userRows[0];
		const hashedPassword = user.hashed_password;

		if (isValidPassword(password, hashedPassword)) {
			req.session.userid = user.id;
			req.session.email = email;
			return res.json({});
		}
		return res
			.status(400)
			.json({ message: "The email and/or password are not correct" });
	});
});

// logging out
router.delete("/", (req, res) => {
	req.session.destroy();
	return res.status(204).json({ message: "logged out successfully" });
});

module.exports = router;
