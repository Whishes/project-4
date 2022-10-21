const db = require("../database/db.js");

const User = {
	newAcc: (username, email, hashedPassword) => {
		const newUserSql = `INSERT INTO users( username, email, hashed_password) VALUES($1, $2, $3) RETURNING id`;
		return db
			.query(newUserSql, [username, email, hashedPassword])
			.then((dbRes) => dbRes)
			.catch((err) => err);
	},
	getDetails: (userId) => {
		const sql = `
SELECT users.id, username, email, created_at, farm.farm_id, currency, total_c_pm, c_collected, egg_cost
FROM users
INNER JOIN farm ON users.id = farm.user_id
WHERE users.id = $1;`;
		return db.query(sql, [userId]).then((dbRes) => dbRes);
	},
};

module.exports = User;
