const db = require("../database/db.js");

const Collection = {
	getAllPokemon: (collection_id, user_id) => {
		const sql = `SELECT DISTINCT px.dex_id, px.name, px.type_1, px.type_2, px.description, px.img_link, px.gif_link
FROM users_collection u
JOIN pokemon_collected p ON u.id = p.collection_id
JOIN pokedex px ON p.pokemon_id = px.dex_id
WHERE (p.collection_id = $1 AND u.user_id = $2)
ORDER BY px.dex_id DESC`;
		return db.query(sql, [collection_id, user_id]).then((dbRes) => dbRes.rows);
	},
	newCollection: (user_id) => {
		const sql = `INSERT INTO users_collection (user_id)
VALUES ($1)`;
		return db.query(sql, [user_id]).then((dbRes) => dbRes);
	},
	newPokemon: (dex_id, collection_id) => {
		const sql = `INSERT INTO pokemon_collected (collection_id, pokemon_id)
VALUES ($1, $2)`;
		return db.query(sql, [collection_id, dex_id]).then((dbRes) => dbRes);
	},
};

module.exports = Collection;
