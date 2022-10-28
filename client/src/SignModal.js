import { RiCloseLine } from "react-icons/ri";
import "./SignModal.css";
import axios from "axios";
import Loading from "./Loading";
import { useState } from "react";

const SignModal = ({ setModalIsOpen, pokemon, user_id }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	//console.log(pokemon);
	const barWidth =
		pokemon.current_exp > 0
			? (pokemon.current_exp / pokemon.exp_required) * 100
			: 0;

	const evolvePokemon = () => {
		const data = {
			farm_id: pokemon.farm_id,
			user_id: user_id,
			dex_id: pokemon.evo_pokemon,
		};
		setLoading(true);
		axios
			.patch(`/api/pokemon/${pokemon.id}`, data)
			.then((dbRes) => {
				axios
					.get(`api/pokedex/${data.dex_id}`)
					.then((response) => {
						const resPokemon = response.data;
						pokemon.gif_link = resPokemon.gif_link;
						pokemon.current_exp = 0;
						pokemon.img_link = resPokemon.img_link;
						pokemon.name = resPokemon.name;
						pokemon.dex_id = resPokemon.dex_id;
						pokemon.exp_required = resPokemon.exp_required;
						pokemon.date_updated = new Date().toISOString();
						setLoading(false);
						setModalIsOpen(false);
					})
					.catch((err) => setError(true));
			})
			.catch((err) => setError(true));
	};

	const hatchEgg = () => {
		setLoading(true);
		axios
			.get(`/api/pokedex/basic`)
			.then((response) => {
				const resPokemon = response.data;
				//console.log(resPokemon);
				// update pokemon in farm with dex_id
				const data = {
					farm_id: pokemon.farm_id,
					user_id: user_id,
					dex_id: resPokemon.dex_id,
				};
				axios
					.patch(`/api/pokemon/${pokemon.id}`, data)
					.then((dbRes) => {
						//console.log(dbRes);
						// update frontend state until user reloads page at some point
						pokemon.gif_link = resPokemon.gif_link;
						pokemon.current_exp = 0;
						pokemon.img_link = resPokemon.img_link;
						pokemon.name = resPokemon.name;
						pokemon.dex_id = resPokemon.dex_id;
						pokemon.exp_required = resPokemon.exp_required;
						pokemon.date_updated = new Date().toISOString();
						setLoading(false);
						setModalIsOpen(false);
					})
					.catch((err) => setError(true));
			})
			.catch((err) => setError);
	};

	return (
		<>
			{loading && <Loading error={error} />}
			<div className="darkBG" onClick={() => setModalIsOpen(false)} />
			<div className="centered">
				<div className="sign" data-testid="modal-open">
					<div className="img-section">
						<img
							src={pokemon.img_link}
							alt={pokemon.name}
							data-testid="pokemon-img"
						></img>
					</div>
					<div className="vl" />
					<div className="details-section">
						<h2 className="pokemon-name" data-testid="pokemon-name">
							{pokemon.name}
						</h2>
						<button className="closeBtn" onClick={() => setModalIsOpen(false)}>
							<RiCloseLine style={{ marginBottom: "-3px" }} />
						</button>
						{barWidth >= 100 && pokemon.evo_pokemon && (
							<button
								className="yesBtn"
								onClick={() => evolvePokemon()}
								data-testid="evolve-button"
							>
								Evolve
							</button>
						)}
						{barWidth >= 100 && pokemon.evo_stage === "egg" && (
							<button
								className="yesBtn"
								onClick={() => hatchEgg()}
								data-testid="hatch-button"
							>
								Hatch
							</button>
						)}
						{pokemon.exp_required !== null && (
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
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default SignModal;
