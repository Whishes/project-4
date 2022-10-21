import "./HomePage.css";
import Farm from "./Farm";

const HomePage = ({ loggedIn, user, farmData }) => {
	return (
		<>
			{loggedIn ? (
				<div>
					<Farm user={user} farmData={farmData} />
				</div>
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
