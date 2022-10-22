const db = require("../database/db.js");

const Farm = {
	newFarm: (user_id) => {
		const sql = `INSERT INTO farm(user_id) VALUES($1)`;
		return db.query(sql, [user_id]).then((dbRes) => dbRes);
	},
};

module.exports = Farm;
