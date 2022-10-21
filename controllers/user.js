const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const User = require("../models/user");
const Farm = require("../models/farm");

// register route
router.post("/", (req, res) => {
	//console.log(req.body);
	let { username, email, password } = req.body;
	username = username.toLowerCase();
	email = email.toLowerCase();

	if (!email || !password || !username) {
		return res.status(400).json({ message: "One of the fields is empty" });
	}

	const hashedPassword = generateHash(password);

	User.newAcc(username, email, hashedPassword)
		.then((dbRes) => {
			if (dbRes.code === "23505")
				return res
					.status(400)
					.json({ message: "Sorry, this username or email is already taken" });

			//console.log(dbRes);
			const newUserId = dbRes.rows[0].id;
			Farm.newFarm(newUserId)
				.then((data) => {
					//console.log("data: ", data);
					res.status(200).json({ success: true });
				})
				.catch((err) => {
					//console.log("here:", err);
					res.status(500).send({ message: "Somewthing went wrong" });
				});
		})
		.catch((err) => {
			//console.log(err.code);
			if (err.code == "23505") {
				res
					.status(400)
					.json({ message: "Sorry, this username or email is already taken" });
			} else {
				//console.log(err);
				res.sendStatus(500);
			}
		});
});

// get user details
router.get("/", (req, res) => {
	const email = req.session.email;
	const sessionId = req.session.userid;
	if (!email || !sessionId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	User.getDetails(sessionId)
		.then((dbRes) => {
			//console.log(dbRes.rows);
			res.status(200).send(dbRes.rows[0]);
		})
		.catch((err) => {
			res.status(500).send({ message: "Something went wrong" });
			console.log(err);
		});
});

// router.get("/farm/:userid", (req, res) => {
// 	const paramsId = parseInt(req.params.userid);
// 	const sessionId = req.session.userid;
// 	// console.log(sessionId);
// 	// console.log(paramsId);
// 	if (sessionId !== paramsId) {
// 		return res.status(401).json({ message: "Not Authorized" });
// 	}

// 	User.getFarm(sessionId)
// 		.then((dbRes) => console.log(dbRes))
// 		.catch((err) => console.log(err));
// });

module.exports = router;
