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

module.exports = router;
