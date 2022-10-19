const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;

// file imports
const db = require("./database/db");
const { expressSession, pgSession } = require("./session");

// express
app.use(express.json());
app.use(express.static("./client/build"));
// getting session info working into the db
app.use(
	expressSession({
		resave: false,
		saveUninitialized: false,
		store: new pgSession({
			pool: db, // Connects to our postgres db
			createTableIfMissing: true, // Creates a session table in your database (go look at it!)
		}),
		secret: process.env.EXPRESS_SESSION_SECRET_KEY,
	})
);

//routes
app.use("/api/session", sessionController);

// start server + check to make sure api works
app.get("/api/healthcheck", (req, res) => res.statusCode(200));
app.listen(port, () => console.log(`Listening at localhost:${port}`));
