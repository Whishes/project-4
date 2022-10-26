import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewGame from "./NewGame";
import Pokemon from "./Pokemon";

const HomePage = ({ user, farmData, pokemonData, setPokemonData }) => {
	const [loading, setLoading] = useState(true);
	// console.log(farmData);
	// console.log(user);
	useEffect(() => {
		const id = farmData.farm_id;
		axios
			.get(`/api/pokemon/${id}`)
			.then((response) => {
				// console.log("here: ", response.data);
				setLoading(false);
				if (response.data.length >= 1) {
					setPokemonData(response.data);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div id="farm-container" data-testid="farm-container">
			{loading && <p>loading</p>}

			{pokemonData.length >= 1 ? (
				pokemonData.map((pokemon) => {
					return (
						<Pokemon
							key={pokemon.id}
							pokemon={pokemon}
							user={user}
							setLoading={setLoading}
						/>
					);
				})
			) : (
				<NewGame
					farmId={farmData.farm_id}
					user_id={user.id}
					setPokemonData={setPokemonData}
					pokemonData={pokemonData}
				/>
			)}
		</div>
	);
};

export default HomePage;
