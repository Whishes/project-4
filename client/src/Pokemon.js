import back_fence from "./images/back_fench.png";
import front_fence from "./images/front_fence.png";
import sign_post from "./images/signPost.png";
import arrow from "./images/Arrow.png";
import { useState } from "react";
import axios from "axios";
import "./HomePage.css";
import SignModal from "./SignModal";

const Pokemon = ({ pokemon, user, setLoading }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	// console.log(pokemon);
	const getNewExp = (inputDate, maxExp) => {
		//console.log(inputDate);
		const passiveExpRate = 0.3;
		//
		const pokemonDate = new Date(inputDate);
		const currentDate = Date.now();
		const diffTimeInMilli = Math.abs(currentDate - pokemonDate);
		const diffInSecs = Math.ceil(diffTimeInMilli / (1000 * 60));
		const newExp = parseInt(diffInSecs * passiveExpRate);

		if (newExp >= maxExp) {
			return maxExp;
		}
		return newExp;
	};

	const signClick = () => {
		//console.log("sign has been clicked on pokemon id: ", pokemon.id);
		const newExpValue =
			pokemon.current_exp !== pokemon.exp_required
				? getNewExp(pokemon.date_updated, pokemon.exp_required)
				: pokemon.exp_required;

		setLoading(true);

		if (newExpValue !== pokemon.current_exp && pokemon.exp_required !== null) {
			axios
				.post(`/api/pokemon/exp/${pokemon.id}`, {
					user_id: user.id,
					farm_id: pokemon.farm_id,
					new_exp: newExpValue,
				})
				.then((response) => {
					//console.log(response);
					setLoading(false);
					pokemon.current_exp = newExpValue;
					setModalIsOpen(true);
				})
				.catch((err) => {
					console.log(
						"log ~ file: HomePage.js ~ line 104 ~ axios.patch ~ err",
						err
					);
				});
		} else {
			setLoading(false);
			setModalIsOpen(true);
		}
	};

	return (
		<div className="fence" data-testid="pokemon-cage">
			{modalIsOpen && (
				<SignModal
					setModalIsOpen={setModalIsOpen}
					pokemon={pokemon}
					user_id={user.id}
				/>
			)}
			<img src={back_fence} className="back_fence" alt="back fence"></img>
			<img
				src={pokemon.gif_link}
				alt={pokemon.name}
				className="pokemon_img"
			></img>
			<img src={front_fence} className="front_fence" alt="front fence"></img>
			<button className="sign_post" onClick={() => signClick()}>
				<img src={sign_post} alt="sign post"></img>
			</button>
			{pokemon.current_exp >= pokemon.exp_required &&
				pokemon.exp_required !== null &&
				(pokemon.evo_pokemon !== null || pokemon.evo_stage === "egg") && (
					<img
						className="bounce evo_indicator"
						src={arrow}
						alt="evolution arrow"
					></img>
				)}
		</div>
	);
};

export default Pokemon;
