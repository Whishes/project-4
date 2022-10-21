const express = require("express");
const router = express.Router();
const Farm = require("../models/farm");

router.get("/:farmId", (req, res) => {
	const paramsId = parseInt(req.params.farmId);
	// const sessionId = req.session.userid;
	// if (sessionId !== paramsId) {
	// 	return res.status(401).json({ message: "Not Authorized" });
	// }

	Farm.getAllInFarm(paramsId)
		.then((data) => {
			console.log("log ~ file: farm.js ~ line 13 ~ .then ~ data", data);
			res.status(200).json(data);
		})
		.catch((err) => {
			console.log(
				"log ~ file: farm.js ~ line 16 ~ Farm.getAllInFarm ~ err",
				err
			);
		});

	return;
});

module.exports = router;
