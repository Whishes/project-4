import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewGame from "./NewGame";
import Pokemon from "./Pokemon";
import Loading from "./Loading";

const HomePage = ({ user, farmData, pokemonData, setPokemonData }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	// console.log(farmData);
	// console.log(user);
	useEffect(() => {
		const id = farmData.farm_id;
		setLoading(true);
		axios
			.get(`/api/pokemon/${id}`)
			.then((response) => {
				// console.log("here: ", response.data);
				if (response.data.length >= 1) {
					setPokemonData(response.data);
				}
				setLoading(false);
			})
			.catch((err) => setError(true));
	}, []);

	return (
		<div id="farm-container" data-testid="farm-container">
			{loading && (
				<Loading error={error} setError={setError} setLoading={setLoading} />
			)}

			{pokemonData.length >= 1 ? (
				pokemonData.map((pokemon) => {
					return (
						<Pokemon
							key={pokemon.id}
							pokemon={pokemon}
							user={user}
							setLoading={setLoading}
							setError={setError}
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
