const db = require("../database/db.js");

const Pokemon = {
	getAllInFarm: (farm_id) => {
		const sql = `SELECT *
FROM pokemon_in_farm f
JOIN pokedex p
ON f.dex_id = p.dex_id 
	AND f.farm_id = $1;`;
		return db.query(sql, [farm_id]).then((dbRes) => dbRes);
	},
	newEgg: (farm_id) => {
		const sql = `INSERT INTO pokemon_in_farm(farm_id) 
VALUES($1) 
RETURNING *`;
		return db.query(sql, [farm_id]).then((dbRes) => dbRes);
	},
};

module.exports = Pokemon;
