const db = require("../database/db.js");

const Farm = {
	newFarm: (user_id) => {
		const sql = `INSERT INTO farm(user_id) VALUES($1)`;
		return db.query(sql, [user_id]).then((dbRes) => dbRes);
	},
	getAllInFarm: (farm_id) => {
		const sql = `SELECT *
FROM pokemon_in_farm
INNER JOIN pokedex ON pokemon_in_farm.dex_id = pokedex.dex_id
WHERE pokemon_in_farm.farm_id = $1;`;
		return db.query(sql, [farm_id]).then((dbRes) => dbRes.rows);
	},
};

module.exports = Farm;
