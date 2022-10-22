import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import BackgroundImage from "./images/map1.png";

const TitleScreen = () => {
	return (
		<div id="home-container">
			<div id="home-titles">
				<h1>Pokemon</h1>
				<h2>Rancher</h2>
			</div>
		</div>
	);
};

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [farmData, setFarmData] = useState(null);
	//
	useEffect(() => {
		if (loggedIn) {
			return;
		}
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
			<NavBar loggedIn={loggedIn} farmData={farmData} />
			<Routes>
				{loggedIn ? (
					<Route
						path="/"
						element={
							<HomePage loggedIn={loggedIn} user={user} farmData={farmData} />
						}
					/>
				) : (
					<Route path="/" element={<TitleScreen />} />
				)}
				{!loggedIn && <Route path="/login" element={<LoginPage />} />}
				{!loggedIn && <Route path="/register" element={<RegisterPage />} />}
			</Routes>
		</div>
	);
}

export default App;
