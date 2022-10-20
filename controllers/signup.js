const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const Signup = require("../models/signup");

// signup stuff
router.post("/", (req, res) => {
	console.log(req.body);
	let { username, email, password } = req.body;
	username = username.toLowerCase();
	email = email.toLowerCase();

	if (!email || !password || !username) {
		return res.status(400).json({ message: "One of the fields is empty" });
	}

	const hashedPassword = generateHash(password);

	Signup.newAcc(username, email, hashedPassword)
		.then(() => res.status(200).json({ success: true }))
		.catch((err) => {
			console.log(err);
			if (err.code === "23505") {
				res
					.status(400)
					.json({ message: "Sorry, this username or email is already taken" });
			} else {
				res.sendStatus(500);
			}
		});
});

module.exports = router;
