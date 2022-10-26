const express = require("express");
const router = express.Router();
const Pokedex = require("../models/pokedex");

router.get("/", (req, res) => {
	const sessionId = req.session.userid;
	if (!sessionId) {
		res.status(401).send({ message: "Not Authorised" });
	}
});

router.get("/basic", (req, res) => {
	//console.log("here");
	Pokedex.getAllBasic()
		.then((dbRes) => {
			const randomPokemon = dbRes[Math.floor(Math.random() * dbRes.length)];
			res.status(200).send(randomPokemon);
		})
		.catch((err) => console.log(err));
});

router.get("/:dex_id", (req, res) => {
	const dex_id = req.params.dex_id;
	const sessionId = req.session.userid;
	if (!sessionId) {
		res.status(401).send({ message: "Not Authorised" });
	}

	Pokedex.getNextStage(dex_id)
		.then((dbRes) => {
			//console.log("here");
			const data = dbRes.rows[0];
			return res.status(200).send(data);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
