const express = require("express");
const Collection = require("../models/collection");
const router = express.Router();

router.get("/:collectionId", (req, res) => {
	const collection_id = req.params.collectionId;
	const user_id = req.session.userid;

	if (!user_id) {
		return res.status(400).send({ message: "Not Authorised" });
	}

	Collection.getAllPokemon(collection_id, user_id)
		.then((data) => {
			//console.log(data);
			return res.status(200).send(data);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
