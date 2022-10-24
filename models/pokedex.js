const db = require("../database/db.js");

const Pokedex = {
	getAll: () => {
		return;
	},
	getAllBasic: () => {
		const sql = `SELECT * 
FROM pokedex 
WHERE evo_stage = 'basic'`;
		return db.query(sql).then((dbRes) => dbRes.rows);
	},
	getNextStage: () => {
		return;
	},
};

module.exports = Pokedex;
