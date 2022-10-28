import exclamation from "./images/Exclamation.png";
import { RiCloseLine } from "react-icons/ri";
import egg_man from "./images/Egg-man.png";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const NewGame = ({ farmId, user_id, setPokemonData, pokemonData }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const addNewEgg = () => {
		setModalIsOpen(false);
		//console.log("new egg added");
		setLoading(true);
		axios
			.post(`/api/pokemon/`, {
				farm_id: farmId,
				user_id: user_id,
				egg_exp: 990,
			})
			.then((response) => {
				const data = response.data;
				const egg = {
					id: data.id,
					farm_id: data.farm_id,
					dex_id: 10000,
					current_exp: 0,
					date_created: data.date_created,
					date_updated: data.date_updated,
					name: "egg",
					evo_stage: "egg",
					evo_pokemon: null,
					type_1: "egg",
					type_2: null,
					description: "It's an egg. I wonder what's inside",
					egg_group: null,
					img_link:
						"https://archives.bulbagarden.net/media/upload/archive/e/ed/20170805233207%21Spr_5b_Egg.png",
					gif_link:
						"https://archives.bulbagarden.net/media/upload/4/45/Spr_4d_Egg.png",
					exp_required: 1000,
					currency_pm: 0,
				};
				setLoading(false);
				setPokemonData([...pokemonData, egg]);
			})
			.catch((err) => setError(true));
	};

	return (
		<div id="man-container">
			{loading && <Loading error={error} />}
			{modalIsOpen ? (
				<>
					<div className="darkBG" onClick={() => setModalIsOpen(false)} />
					<div className="centered">
						<div className="modal" data-testid="modal-open">
							<div className="modalHeader">
								<h5 className="heading">Elderly Man</h5>
							</div>
							<button
								className="closeBtn"
								onClick={() => setModalIsOpen(false)}
							>
								<RiCloseLine style={{ marginBottom: "-3px" }} />
							</button>
							<div className="modalContent">
								<p>It's time to start your new farm!</p>
								<p> Shall we get started with your first egg?</p>
							</div>
							<div className="modalActions">
								<div className="actionsContainer">
									<button
										className="yesBtn"
										onClick={() => addNewEgg()}
										data-testid="yesBtn"
									>
										Yes!
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<button
					className="bounce"
					onClick={() => setModalIsOpen(true)}
					data-testid="exclamation-button"
				>
					<img src={exclamation} alt="exclamation mark"></img>
				</button>
			)}
			<img src={egg_man} alt="Egg man" data-testid="elderly_man"></img>
		</div>
	);
};

export default NewGame;
