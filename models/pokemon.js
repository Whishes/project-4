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
	newEgg: (farm_id, egg_exp = 0) => {
		const sql = `INSERT INTO pokemon_in_farm(farm_id, current_exp) 
VALUES($1, $2) 
RETURNING *`;
		return db.query(sql, [farm_id, egg_exp]).then((dbRes) => dbRes);
	},
	updateExp: (farm_id, newExp, pokemon_id) => {
		const sql = `UPDATE pokemon_in_farm
SET current_exp = $1 
WHERE farm_id = $2 AND id = $3;`;
		return db.query(sql, [newExp, farm_id, pokemon_id]).then((dbRes) => dbRes);
	},
	updatePokemon: (farm_id, pokemon_id, dex_id) => {
		const sql = `UPDATE pokemon_in_farm
SET dex_id = $1, date_updated = CURRENT_TIMESTAMP, current_exp = 0
WHERE farm_id = $2 AND id = $3`;
		return db.query(sql, [dex_id, farm_id, pokemon_id]).then((dbRes) => dbRes);
	},
	getTotalCurrency: (farm_id) => {
		const sql = `SELECT SUM(p.currency_pm)
FROM pokemon_in_farm f
JOIN pokedex p
ON f.dex_id = p.dex_id 
	AND f.farm_id = $1;`;

		return db.query(sql, [farm_id]).then((dbRes) => dbRes.rows);
	},
};

module.exports = Pokemon;
// UPDATE pokemon_in_farm
// SET dex_id = 10000, date_updated = CURRENT_TIMESTAMP, current_exp = 1000
// WHERE id = 1;

// SELECT SUM(p.currency_pm)
// FROM pokemon_in_farm f
// JOIN pokedex p
// ON f.dex_id = p.dex_id
// 	AND f.farm_id = 1;
