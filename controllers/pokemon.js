const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");

router.get("/:farmId", (req, res) => {
	const paramsId = parseInt(req.params.farmId);
	// const sessionId = req.session.userid;
	// if (sessionId !== paramsId) {
	// 	return res.status(401).json({ message: "Not Authorized" });
	// }

	Pokemon.getAllInFarm(paramsId)
		.then((data) => {
			//console.log("log ~ file: farm.js ~ line 13 ~ .then ~ data", data.rows);
			res.status(200).json(data.rows);
		})
		.catch((err) => {
			console.log(
				"log ~ file: farm.js ~ line 16 ~ Farm.getAllInFarm ~ err",
				err
			);
		});
});

router.post("/", (req, res) => {
	console.log("post request on route '/' with body:", req.body);
	const sessionId = req.session.userid;
	const bodyId = req.body.user_id;
	const { farm_id } = req.body;
	if (!farm_id || !sessionId || bodyId !== sessionId) {
		res.status(401).send({ message: "Not Authorised" });
	}

	Pokemon.newEgg(farm_id).then((data) => {
		console.log("return: ", data.rows);
	});
});

router.post("/exp/:id", (req, res) => {
	const pokemonId = req.params.id;
	const sessionId = req.session.userid;
	const { farm_id, user_id, new_exp } = req.body;
	//console.log(req.body);
	if (!farm_id || !sessionId || user_id !== sessionId) {
		res.status(401).send({ message: "Not Authorised" });
	} else if (!new_exp) {
		return res.status(400).send({});
	} else {
		Pokemon.updateExp(farm_id, new_exp, pokemonId)
			.then((data) => {
				//console.log("here");
				res.status(200).send({ success: true });
			})
			.catch((err) => console.log(err));
	}
});

module.exports = router;
