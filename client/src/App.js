import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	//const [user, setUser] = useState();
	//
	useEffect(() => {
		axios
			.get("http://localhost:3001/api/session")
			.then((response) => {
				console.log(response);
				setLoggedIn(true);
			})
			.catch((err) => setLoggedIn(false));
	}, [loggedIn]);
	//
	return (
		<div className="App">
			<NavBar loggedIn={loggedIn} />
			<Routes>
				<Route path="/" element={<HomePage loggedIn={loggedIn} />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</div>
	);
}

export default App;
