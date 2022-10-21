import { useEffect, useState } from "react";
import axios from "axios";

const Farm = ({ user, farmData }) => {
	const [pokemonData, setPokemonData] = useState([]);
	// console.log(farmData);
	// console.log(user);
	useEffect(() => {
		axios
			.get(`/api/farm/${farmData.farm_id}`)
			.then((response) => {
				console.log(response.data);
				setPokemonData(response.data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div id="farm-container" data-testid="farm-container">
			{pokemonData.length >= 1 ? (
				<h1>Pokemon Present</h1>
			) : (
				<h1>No Pokemon in db</h1>
			)}
		</div>
	);
};

export default Farm;
