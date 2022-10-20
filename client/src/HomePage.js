import "./HomePage.css";

const HomePage = ({ loggedIn }) => {
	return (
		<>
			{loggedIn ? (
				<>
					<h1>Logged In</h1>
				</>
			) : (
				<div id="home-container">
					<div id="home-titles">
						<h1>Pokemon</h1>
						<h2>Rancher</h2>
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
