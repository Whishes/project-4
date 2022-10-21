import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import BackgroundImage from "./images/map1.png";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [farmData, setFarmData] = useState(null);
	//
	useEffect(() => {
		if (loggedIn) return;
		axios
			.get("/api/user")
			.then((response) => {
				//console.log(response.data);
				const {
					id,
					username,
					email,
					farm_id,
					currency,
					total_c_pm,
					c_collected,
					egg_cost,
				} = response.data;

				setUser({ id: id, username: username, email: email });
				setFarmData({
					farm_id: farm_id,
					currency: currency,
					total_c_pm: total_c_pm,
					c_collected: c_collected,
					egg_cost,
				});
				setLoggedIn(true);
			})
			.catch((err) => setLoggedIn(false));
	});
	//
	const backgroundStyles = {
		backgroundImage: `url(${BackgroundImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div className="App" style={backgroundStyles}>
			<NavBar loggedIn={loggedIn} />
			<Routes>
				<Route
					path="/"
					element={<HomePage loggedIn={loggedIn} user={user} />}
				/>
				{!loggedIn && <Route path="/login" element={<LoginPage />} />}
				{!loggedIn && <Route path="/register" element={<RegisterPage />} />}
			</Routes>
		</div>
	);
}

export default App;
