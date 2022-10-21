const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const fs = require("fs");
const sessionController = require("./controllers/session");
const userController = require("./controllers/user");
//const farmController = require("./controllers/farm");

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
app.use("/api/user", userController);
//app.use("/api/farm", farmController);
app.get("/api/healthcheck", (req, res) => res.send({ code: 200 }));
// app.get("*", (req, res) => {
// 	res.setHeader("content-type", "text/html");
// 	fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
// });

// start server + check to make sure api works
app.listen(port, () => console.log(`Listening at localhost:${port}`));
