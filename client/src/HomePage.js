import "./HomePage.css";
import "./SignModal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewGame from "./NewGame";
import back_fence from "./images/back_fench.png";
import front_fence from "./images/front_fence.png";
import sign_post from "./images/signPost.png";
import { RiCloseLine } from "react-icons/ri";

const SignModal = ({ setModalIsOpen, pokemon }) => {
	const barWidth =
		pokemon.current_exp > 0
			? (pokemon.current_exp / pokemon.exp_required) * 100
			: 0;
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
						<h1>{pokemon.name}</h1>
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

const Pokemon = ({ pokemon }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	console.log(pokemon);
	const signClick = () => {
		console.log("sign has been clicked on pokemon id: ", pokemon.id);
		setModalIsOpen(true);
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
					return <Pokemon key={pokemon.id} pokemon={pokemon} />;
				})
			) : (
				<NewGame farmId={farmData.farm_id} />
			)}
		</div>
	);
};

export default HomePage;
