const db = require("../database/db.js");

const Signup = {
	newAcc: (username, email, hashedPassword) => {
		const sql = `INSERT INTO users( username, email, hashed_password) VALUES($1, $2, $3)`;
		return db
			.query(sql, [username, email, hashedPassword])
			.then((dbRes) => dbRes);
	},
};

module.exports = Signup;
