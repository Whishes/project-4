import "./NavBar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes, FaDoorOpen } from "react-icons/fa";
import axios from "axios";

const NavBar = ({ loggedIn }) => {
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

	return (
		<header>
			{loggedIn ? (
				<>
					<h1>Logged In bar</h1>
					<nav>
						<button className="nav-btn" onClick={logOut}>
							<FaDoorOpen />
						</button>
					</nav>
				</>
			) : (
				<>
					<h1>yo</h1>
					<nav className="home-nav" ref={navRef}>
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
