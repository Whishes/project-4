import "./NavBar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes, FaDoorOpen, FaBook } from "react-icons/fa";
import egg from "./images/egg.png";
import axios from "axios";

const NavBar = ({ loggedIn, farmData }) => {
	console.log(farmData);
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

	const collectionClick = () => {
		console.log("collection button has been clicked");
	};

	const eggClick = () => {
		//console.log("egg button has been clicked");
		const check = window.confirm(
			`Are you sure you want to buy an egg for $${farmData.egg_cost}?`
		);
		console.log(check);
	};

	return (
		<header>
			{loggedIn ? (
				<>
					<p data-testid="currency-amt">${farmData.currency}</p>
					<nav>
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
