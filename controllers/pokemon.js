const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");
const Farm = require("../models/farm");

router.get("/:farmId", (req, res) => {
	const paramsId = parseInt(req.params.farmId);
	// const sessionId = req.session.userid;
	// if (sessionId !== paramsId) {
	// 	return res.status(401).json({ message: "Not Authorized" });
	// }
	Pokemon.getAllInFarm(paramsId)
		.then((data) => {
			res.status(200).json(data.rows);
		})
		.catch((err) => {
			console.log(
				"log ~ file: farm.js ~ line 16 ~ Farm.getAllInFarm ~ err",
				err
			);
		});
});

router.patch("/:pokemonId", (req, res) => {
	const pokemonId = req.params.pokemonId;
	const sessionId = req.session.userid;
	const { farm_id, user_id, dex_id } = req.body;

	if (!sessionId || user_id !== sessionId || !farm_id) {
		res.status(401).send({ message: "Not Authorised" });
	} else if (!dex_id) {
		return res.status(400).send({});
	} else {
		Pokemon.updatePokemon(farm_id, pokemonId, dex_id)
			.then((dbRes) => {
				//console.log(dbRes);
				Pokemon.getTotalCurrency(farm_id)
					.then((data) => {
						console.log(data[0].sum);
						const sumValue = data[0].sum;
						Farm.updateCPM(farm_id, sumValue)
							.then((d) => {
								return res.status(200).send({ success: true });
							})
							.catch((err) => console.log(err));
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}

	return;
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

router.post("/", (req, res) => {
	//console.log("post request on route '/' with body:", req.body);
	const sessionId = req.session.userid;
	const bodyId = req.body.user_id;
	const { farm_id } = req.body;
	if (!farm_id || !sessionId || bodyId !== sessionId) {
		res.status(401).send({ message: "Not Authorised" });
	}

	Pokemon.newEgg(farm_id).then((data) => {
		//console.log("return: ", data.rows);
		return res.status(200).send({ success: true });
	});
});

module.exports = router;
