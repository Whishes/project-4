import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import egg_man from "./images/Egg-man.png";
import back_fence from "./images/back_fench.png";
import front_fence from "./images/front_fence.png";
import sign_post from "./images/signPost.png";
import exclamation from "./images/Exclamation.png";
import { RiCloseLine } from "react-icons/ri";

const Pokemon = ({ pokemon }) => {
	const signClick = () => {
		console.log("sign has been clicked on pokemon id: ", pokemon.id);
	};

	return (
		<div className="fence">
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
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	// console.log(farmData);
	// console.log(user);
	useEffect(() => {
		const id = farmData.farm_id;
		axios
			.get(`/api/pokemon/${id}`)
			.then((response) => {
				console.log("here: ", response.data);
				setLoading(false);
				if (response.data.length >= 1) {
					setPokemonData(response.data);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	const addNewEgg = () => {
		setModalIsOpen(false);
		console.log("new egg added");
		axios
			.post(`/api/pokemon/`, { farm_id: farmData.farm_id })
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div id="farm-container" data-testid="farm-container">
			{loading && <p>loading</p>}
			{pokemonData.length >= 1 ? (
				pokemonData.map((pokemon) => {
					return <Pokemon key={pokemon.id} pokemon={pokemon} />;
				})
			) : (
				<div id="man-container">
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
											<button className="yesBtn" onClick={() => addNewEgg()}>
												Yes!
											</button>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<button className="bounce" onClick={() => setModalIsOpen(true)}>
							<img src={exclamation} alt="exclamation mark"></img>
						</button>
					)}
					<img src={egg_man} alt="Egg man" data-testid="elderly_man"></img>
				</div>
			)}
		</div>
	);
};

export default HomePage;
