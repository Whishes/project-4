import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import BackgroundImage from "./images/map1.png";
import TitleScreen from "./TitleScreen";
import Loading from "./Loading";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [farmData, setFarmData] = useState(null);
	const [currency, setCurrency] = useState(null);
	const [storedCurrency, setStoredCurrency] = useState(null);
	const [pokemonData, setPokemonData] = useState([]);
	const [loading, setLoading] = useState(false);
	//
	useEffect(() => {
		if (loggedIn) {
			return;
		}
		setLoading(true);
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

				const checkCurrency = () => {
					const lastClicked = new Date(c_collected);
					const currentDate = Date.now();
					const diffTimeInMilli = Math.abs(currentDate - lastClicked);
					const diffInMins = Math.ceil(diffTimeInMilli / (1000 * 60));
					return parseInt(diffInMins * 0.3);
				};
				setStoredCurrency(checkCurrency);

				setUser({ id: id, username: username, email: email });
				setCurrency(currency);
				setFarmData({
					farm_id: farm_id,
					currency: currency,
					total_c_pm: total_c_pm,
					c_collected: c_collected,
					egg_cost,
				});
				setLoading(false);
				setLoggedIn(true);
			})
			.catch((err) => {
				setLoading(false);
				setLoggedIn(false);
			});
	}, []);
	//
	const backgroundStyles = {
		backgroundImage: `url(${BackgroundImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div className="App" style={backgroundStyles}>
			{loading && <Loading />}
			<NavBar
				user={user}
				loggedIn={loggedIn}
				farmData={farmData}
				currency={currency}
				setCurrency={setCurrency}
				storedCurrency={storedCurrency}
				setStoredCurrency={setStoredCurrency}
				setPokemonData={setPokemonData}
				pokemonData={pokemonData}
			/>
			<Routes>
				{loggedIn ? (
					<Route
						path="/"
						element={
							<HomePage
								loggedIn={loggedIn}
								user={user}
								farmData={farmData}
								pokemonData={pokemonData}
								setPokemonData={setPokemonData}
							/>
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
