/* DELETE TABLES FOR CLEAN CREATION*/
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS session;
DROP TABLE IF EXISTS farm;
DROP TABLE IF EXISTS pokemon_in_farm;
DROP TABLE IF EXISTS users_collection;
DROP TABLE IF EXISTS pokemon_collected;
-- DROP TABLE IF EXISTS pokedex;

/* CREATE NEW TABLES */
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  hashed_password TEXT NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE farm (
    farm_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    currency INT DEFAULT 5000 CHECK (currency >= 0),
    total_c_pm FLOAT DEFAULT 0.2,
    c_collected TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    egg_cost INT DEFAULT 2500
);

CREATE TABLE pokemon_in_farm (
    id SERIAL PRIMARY KEY,
    farm_id INT NOT NULL,
    dex_id INT DEFAULT 10000,
    current_exp INT DEFAULT 0,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, /* creation + evolution + is x days old */
    date_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP /* updating exp */
);

CREATE TABLE users_collection (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL
);

CREATE TABLE pokemon_collected (
    id SERIAL PRIMARY KEY,
    collection_id INT NOT NULL,
    pokemon_id INT NOT NULL
);

CREATE TABLE pokedex (
    dex_id INT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    evo_stage TEXT,
    evo_pokemon INT,
    type_1 TEXT NOT NULL,
    type_2 TEXT,
    description TEXT NOT NULL,
    egg_group TEXT,
    img_link TEXT NOT NULL UNIQUE,
    gif_link TEXT NOT NULL UNIQUE,
    exp_required INT,
    currency_pm FLOAT NOT NULL
);

-- SELECT users.id, username, email, created_at, farm.id, currency, total_c_pm, c_collected, egg_cost
-- FROM users
-- INNER JOIN farm ON users.id = farm.user_id
-- WHERE users.id = 1;

-- SELECT *
-- FROM pokemon_in_farm
-- INNER JOIN pokedex ON pokemon_in_farm.dex_id = pokedex.dex_id
-- WHERE pokemon_in_farm.farm_id = $1;