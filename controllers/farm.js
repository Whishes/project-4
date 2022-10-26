const express = require("express");
const router = express.Router();
const Farm = require("../models/farm");

router.get("/:farmId", (req, res) => {
	const paramsId = parseInt(req.params.farmId);
	console.log("get request on farm id: ", paramsId);
});

router.post("/:farmId", (req, res) => {
	const paramsId = parseInt(req.params.farmId);
	console.log("post request on farm id: ", paramsId);
});

router.patch("/:farmId", (req, res) => {
	const farm_id = parseInt(req.params.farmId);
	const sessionId = req.session.userid;
	const { user_id, newValue } = req.body;

	if (!sessionId || user_id !== sessionId || !farm_id) {
		return res.status(401).send({ message: "Not Authorised" });
	}
	if (!newValue) {
		return res.status(400).send({});
	}

	Farm.updateCurrency(farm_id, newValue)
		.then((data) => {
			return res.status(200).send({ success: true });
		})
		.catch((err) => console.log(err));
});

module.exports = router;
