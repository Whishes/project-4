import { RiCloseLine } from "react-icons/ri";
import "./SignModal.css";
import axios from "axios";

const SignModal = ({ setModalIsOpen, pokemon, user_id }) => {
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
		axios
			.patch(`/api/pokemon/${pokemon.id}`, data)
			.then((dbRes) => {
				axios
					.get(`api/pokedex/${data.dex_id}`)
					.then((response) => {
						setModalIsOpen(false);
						const resPokemon = response.data;
						pokemon.gif_link = resPokemon.gif_link;
						pokemon.current_exp = 0;
						pokemon.img_link = resPokemon.img_link;
						pokemon.name = resPokemon.name;
						pokemon.dex_id = resPokemon.dex_id;
						pokemon.exp_required = resPokemon.exp_required;
						pokemon.date_updated = new Date().toISOString();
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	};

	const hatchEgg = () => {
		axios
			.get(`/api/pokedex/basic`)
			.then((response) => {
				const resPokemon = response.data;
				console.log(resPokemon);
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
						setModalIsOpen(false);
						// update frontend state until user reloads page at some point
						pokemon.gif_link = resPokemon.gif_link;
						pokemon.current_exp = 0;
						pokemon.img_link = resPokemon.img_link;
						pokemon.name = resPokemon.name;
						pokemon.dex_id = resPokemon.dex_id;
						pokemon.exp_required = resPokemon.exp_required;
						pokemon.date_updated = new Date().toISOString();
					})
					.catch((e) => console.log(e));
			})
			.catch((err) => console.log(err));
	};

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
						<h2 className="pokemon-name">{pokemon.name}</h2>
						<button className="closeBtn" onClick={() => setModalIsOpen(false)}>
							<RiCloseLine style={{ marginBottom: "-3px" }} />
						</button>
						{barWidth >= 100 && pokemon.evo_pokemon && (
							<button className="yesBtn" onClick={() => evolvePokemon()}>
								Evolve
							</button>
						)}
						{barWidth >= 100 && pokemon.evo_stage === "egg" && (
							<button className="yesBtn" onClick={() => hatchEgg()}>
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
