import "./NavBar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ loggedIn }) => {
	const navRef = useRef();
	const showNavBar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	return (
		<header>
			{loggedIn ? (
				<h1>Logged In bar</h1>
			) : (
				<>
					<nav ref={navRef}>
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
