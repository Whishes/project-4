const express = require("express");
const router = express.Router();
const Farm = require("../models/farm");
const Pokemon = require("../models/pokemon");

router.get("/:farmId", (req, res) => {
	const paramsId = parseInt(req.params.farmId);
	console.log("get request on farm id: ", paramsId);
});

router.post("/:farmId", (req, res) => {
	const farm_id = parseInt(req.params.farmId);
	const sessionId = req.session.userid;
	const { user_id, newEggCost } = req.body;
	if (!sessionId || user_id !== sessionId || !farm_id) {
		return res.status(401).send({ message: "Not Authorised" });
	}

	if (!newEggCost) {
		return res.status(400).send({});
	}

	Farm.buyEgg(farm_id, newEggCost)
		.then((data) => {
			Pokemon.newEgg(farm_id)
				.then((response) => {
					const eggData = response.rows[0];
					return res.status(200).send(eggData);
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => console.log(err));
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
