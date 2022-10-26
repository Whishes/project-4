const db = require("../database/db.js");

const Pokedex = {
	getAll: () => {
		const sql = `SELECT dex_id, name, img_link
FROM pokedex`;
		return db.query(sql).then((dbRes) => dbRes);
	},
	getAllBasic: () => {
		const sql = `SELECT * 
FROM pokedex 
WHERE evo_stage = 'basic'`;
		return db.query(sql).then((dbRes) => dbRes.rows);
	},
	getNextStage: (pointer_id) => {
		const sql = `SELECT *
FROM pokedex
WHERE dex_id = $1`;
		return db.query(sql, [pointer_id]).then((dbRes) => dbRes);
	},
};

module.exports = Pokedex;
