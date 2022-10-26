import "./NavBar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes, FaDoorOpen, FaBook } from "react-icons/fa";
import egg from "./images/egg.png";
import axios from "axios";
import { GiLockedChest, GiOpenChest } from "react-icons/gi";

const NavBar = ({
	loggedIn,
	farmData,
	currency,
	setCurrency,
	storedCurrency,
	setStoredCurrency,
	user,
	setPokemonData,
	pokemonData,
}) => {
	//console.log(farmData);
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const logOut = () => {
		axios
			.delete("/api/session")
			.then((response) => {
				//console.log(response);
				window.location.href = "/";
			})
			.catch((err) => {
				//console.log(err)
				alert("log out unsuccessful");
			});
	};

	const moneyClick = () => {
		const newTotalCurrency = currency + storedCurrency;
		axios
			.patch(`/api/farm/${farmData.farm_id}`, {
				user_id: user.id,
				newValue: newTotalCurrency,
			})
			.then((response) => {
				setStoredCurrency(0);
				setCurrency(newTotalCurrency);
			})
			.catch((err) => console.log(err));
	};

	const collectionClick = () => {
		console.log("collection button has been clicked");
	};

	const eggClick = () => {
		//console.log("egg button has been clicked");
		const check = window.confirm(
			`Are you sure you want to buy an egg for $${farmData.egg_cost}?`
		);

		if (check && farmData.egg_cost > currency) {
			return alert("Sorry, you do not have enough money for this purchase");
		}

		if (check) {
			const newEggCost = parseInt(farmData.egg_cost * 1.2);
			axios
				.post(`api/farm/${farmData.farm_id}`, {
					user_id: user.id,
					newEggCost: newEggCost,
				})
				.then((response) => {
					const data = response.data;
					const egg = {
						id: data.id,
						farm_id: data.farm_id,
						dex_id: 10000,
						current_exp: 0,
						date_created: data.date_created,
						date_updated: data.date_updated,
						name: "egg",
						evo_stage: "egg",
						evo_pokemon: null,
						type_1: "egg",
						type_2: null,
						description: "It's an egg. I wonder what's inside",
						egg_group: null,
						img_link:
							"https://archives.bulbagarden.net/media/upload/archive/e/ed/20170805233207%21Spr_5b_Egg.png",
						gif_link:
							"https://archives.bulbagarden.net/media/upload/4/45/Spr_4d_Egg.png",
						exp_required: 1000,
						currency_pm: 0,
					};
					setCurrency(currency - farmData.egg_cost);
					farmData.egg_cost = newEggCost;
					setPokemonData([...pokemonData, egg]);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<header>
			{loggedIn ? (
				<>
					<p data-testid="currency-amt">${currency}</p>
					<nav>
						{storedCurrency > 50 ? (
							<button className="nav-btn" onClick={() => moneyClick()}>
								<GiOpenChest />
							</button>
						) : (
							<button className="nav-btn">
								<GiLockedChest />
							</button>
						)}
						<button
							className="nav-btn"
							onClick={() => eggClick()}
							data-testid="eggBtn"
						>
							<img src={egg} alt="egg"></img>
						</button>
						<button
							className="nav-btn"
							onClick={() => collectionClick()}
							data-testid="collectionBtn"
						>
							<FaBook />
						</button>
						<button
							className="nav-btn"
							onClick={logOut}
							data-testid="logOutBtn"
						>
							<FaDoorOpen />
						</button>
					</nav>
				</>
			) : (
				<>
					<h1>yo</h1>
					<nav className="home-nav" ref={navRef} data-testid="home-nav">
						<Link to="/" onClick={showNavBar}>
							Home
						</Link>
						<Link to="/login" onClick={showNavBar}>
							Login
						</Link>
						<Link to="/register" onClick={showNavBar}>
							Register
						</Link>
						<button className="nav-btn nav-close-btn" onClick={showNavBar}>
							<FaTimes />
						</button>
					</nav>
					<button className="nav-btn" onClick={showNavBar}>
						<FaBars />
					</button>
				</>
			)}
		</header>
	);
};

export default NavBar;
