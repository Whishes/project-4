import "./Collection.css";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Tick from "./images/Tick.svg";
import Cross from "./images/Cross.svg";

const CollectionRow = ({ data }) => {
	return (
		<div className="collection-row">
			<div className="row-left">
				<h3>{data.dex_id}</h3>
			</div>
			<div className="row-middle">
				{data.collected ? (
					<>
						<img src={data.gif_link} alt={data.name}></img>
						<h3>{data.name}</h3>
					</>
				) : (
					<>
						<h1>?</h1>
						<h3>??????????</h3>
					</>
				)}
			</div>
			<div className="row-right">
				{data.collected ? (
					<img src={Tick} alt="tick" />
				) : (
					<img src={Cross} alt="cross" />
				)}
			</div>
		</div>
	);
};

const Collection = ({ showCollection, setShowCollection, user }) => {
	const [collection, setCollection] = useState(null);
	const [collectedCount, setCollectedCount] = useState(0);
	useEffect(() => {
		if (collection === null) {
			axios
				.get(`/api/collection/${user.id}`)
				.then((response) => {
					const data = response.data;
					//console.log(data);
					const arr = [];
					for (let i = 0; i < 151; i++) {
						if (data.find((e) => e.dex_id === i + 1)) {
							arr.push({ ...data[i], collected: true });
						} else {
							arr.push({ dex_id: i + 1, collected: false });
						}
					}
					setCollectedCount(data.length);
					setCollection([...arr]);
					//console.log(arr);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	return (
		<div
			className={showCollection ? "collection responsive_nav" : "collection"}
		>
			<h1>Collection</h1>
			<h3>{collectedCount} / 151</h3>
			<button
				className="nav-btn nav-close-btn"
				onClick={() => setShowCollection(false)}
			>
				<FaTimes />
			</button>
			<div className="collection-container">
				{collection &&
					collection.map((pokemon) => {
						return <CollectionRow key={pokemon.dex_id} data={pokemon} />;
					})}
			</div>
		</div>
	);
};

export default Collection;
