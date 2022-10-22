import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import egg_man from "./images/Egg-man.png";
import exclamation from "./images/Exclamation.png";
import { RiCloseLine } from "react-icons/ri";

const HomePage = ({ user, farmData }) => {
	const [pokemonData, setPokemonData] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	// console.log(farmData);
	// console.log(user);
	useEffect(() => {
		const id = farmData.farm_id;
		axios
			.get(`/api/farm/${id}`)
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
				<h1>Pokemon Present</h1>
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
											<button
												className="yesBtn"
												onClick={() => setModalIsOpen(false)}
											>
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
