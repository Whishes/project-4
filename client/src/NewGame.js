import exclamation from "./images/Exclamation.png";
import { RiCloseLine } from "react-icons/ri";
import egg_man from "./images/Egg-man.png";
import { useState } from "react";
import axios from "axios";

const NewGame = ({ farmId, user_id }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const addNewEgg = () => {
		setModalIsOpen(false);
		//console.log("new egg added");
		axios
			.post(`/api/pokemon/`, { farm_id: farmId, user_id: user_id })
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	};

	return (
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
	);
};

export default NewGame;
