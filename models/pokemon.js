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
	updateExp: (farm_id, newExp, pokemon_id) => {
		const sql = `UPDATE pokemon_in_farm
SET current_exp = $1 
WHERE farm_id = $2 AND id = $3;`;
		return db.query(sql, [newExp, farm_id, pokemon_id]).then((dbRes) => dbRes);
	},
};

module.exports = Pokemon;
