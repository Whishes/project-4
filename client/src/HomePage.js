import "./HomePage.css";
import "./SignModal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewGame from "./NewGame";
import back_fence from "./images/back_fench.png";
import front_fence from "./images/front_fence.png";
import sign_post from "./images/signPost.png";
import { RiCloseLine } from "react-icons/ri";

// {
//   "id": 2,
//   "farm_id": 1,
//   "dex_id": 10000,
//   "current_exp": 0,
//   "date_created": "2022-10-22T03:19:40.258Z",
//   "date_updated": "2022-10-22T03:19:40.258Z",
//   "name": "egg",
//   "evo_stage": "egg",
//   "evo_pokemon": null,
//   "type_1": "egg",
//   "type_2": null,
//   "description": "It's an egg. I wonder what's inside",
//   "egg_group": null,
//   "img_link": "https://archives.bulbagarden.net/media/upload/archive/e/ed/20170805233207%21Spr_5b_Egg.png",
//   "gif_link": "https://archives.bulbagarden.net/media/upload/e/ed/Spr_5b_Egg.png",
//   "exp_required": 1000,
//   "currency_pm": 0
// }

const SignModal = ({ setModalIsOpen, pokemon }) => {
	const barWidth =
		pokemon.current_exp > 0
			? (pokemon.current_exp / pokemon.exp_required) * 100
			: 0;

	// console.log(pokemon);

	return (
		<>
			<div className="darkBG" onClick={() => setModalIsOpen(false)} />
			<div className="centered">
				<div className="sign" data-testid="modal-open">
					<div className="img-section">
						<img src={pokemon.img_link} alt={pokemon.name}></img>
						<div className="vl" />
					</div>
					<div className="details-section">
						<h1 className="pokemon-name">{pokemon.name}</h1>
						<button className="closeBtn" onClick={() => setModalIsOpen(false)}>
							<RiCloseLine style={{ marginBottom: "-3px" }} />
						</button>
						<div className="exp-section">
							<h4>Exp:</h4>
							<div className="bar-section">
								<div className="total-exp-bar"></div>
								<div
									className="current-exp-bar"
									style={{
										width: `${barWidth}%`,
										backgroundColor: barWidth >= 100 ? "#9FFE36" : "#4CF6EC",
									}}
								></div>
								<div className="exp-num-section">
									<p>{pokemon.current_exp}</p>
									<p>/</p>
									<p>{pokemon.exp_required}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Pokemon = ({ pokemon, user, setLoading }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	// console.log(pokemon);
	const getNewExp = (inputDate, maxExp) => {
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
		const newExpValue = getNewExp(pokemon.date_updated, pokemon.exp_required);
		setLoading(true);
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
	};

	return (
		<div className="fence" data-testid="pokemon-cage">
			{modalIsOpen && (
				<SignModal setModalIsOpen={setModalIsOpen} pokemon={pokemon} />
			)}
			<img src={back_fence} className="back_fence" alt={"back fence"}></img>
			<img
				src={pokemon.gif_link}
				alt={pokemon.name}
				className="pokemon_img"
			></img>
			<img src={front_fence} className="front_fence" alt={"front fence"}></img>
			<button className="sign_post" onClick={() => signClick()}>
				<img src={sign_post} alt={"sign post"}></img>
			</button>
		</div>
	);
};

const HomePage = ({ user, farmData }) => {
	const [pokemonData, setPokemonData] = useState([]);
	const [loading, setLoading] = useState(true);
	// console.log(farmData);
	// console.log(user);
	useEffect(() => {
		const id = farmData.farm_id;
		axios
			.get(`/api/pokemon/${id}`)
			.then((response) => {
				//console.log("here: ", response.data);
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
				<NewGame farmId={farmData.farm_id} user_id={user.id} />
			)}
		</div>
	);
};

export default HomePage;
