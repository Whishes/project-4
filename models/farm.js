const db = require("../database/db.js");

const Farm = {
	newFarm: (user_id) => {
		const sql = `INSERT INTO farm(user_id) VALUES($1)`;
		return db.query(sql, [user_id]).then((dbRes) => dbRes);
	},
	updateCPM: (farm_id, newValue) => {
		const sql = `UPDATE farm
SET total_c_pm = $1
WHERE farm_id = $2`;
		return db.query(sql, [newValue, farm_id]).then((dbRes) => dbRes);
	},
	updateCurrency: (farm_id, newValue) => {
		const sql = `UPDATE farm
SET currency = $1, c_collected = CURRENT_TIMESTAMP
WHERE farm_id = $2`;
		return db.query(sql, [newValue, farm_id]).then((dbRes) => dbRes);
	},
	buyEgg: (farm_id, newEggCost) => {
		const sql = `UPDATE farm
SET currency = currency - egg_cost, egg_cost = $1
WHERE farm_id = $2`;
		return db.query(sql, [newEggCost, farm_id]).then((dbRes) => dbRes);
	},
};

module.exports = Farm;
