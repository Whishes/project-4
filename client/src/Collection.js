import "./Collection.css";
import CollectionRow from "./CollectionRow";
import DexEntry from "./DexEntry";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const Collection = ({ showCollection, setShowCollection, user }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [collection, setCollection] = useState(null);
	const [collectedCount, setCollectedCount] = useState(0);
	const [entryData, setEntryData] = useState(null);
	const [showEntry, setShowEntry] = useState(false);

	useEffect(() => {
		if (collection === null) {
			setLoading(true);
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
					setLoading(false);
					setCollectedCount(data.length);
					setCollection([...arr]);
					//console.log(arr);
				})
				.catch((err) => setError(true));
		}
	}, []);

	return (
		<div
			className={showCollection ? "collection responsive_nav" : "collection"}
		>
			{loading && <Loading error={error} />}
			<h1>Collection</h1>
			<h3>
				<span data-testid="collection-count">{collectedCount}</span> / 151
			</h3>
			<button
				className="nav-btn nav-close-btn"
				onClick={() => setShowCollection(false)}
			>
				<FaTimes />
			</button>
			<div className="collection-container" data-testid="collection-container">
				{collection &&
					collection.map((pokemon) => {
						return (
							<CollectionRow
								key={pokemon.dex_id}
								data={pokemon}
								setShowEntry={setShowEntry}
								setEntryData={setEntryData}
							/>
						);
					})}
			</div>

			{showEntry && (
				<DexEntry
					data={entryData}
					setShowEntry={setShowEntry}
					showEntry={showEntry}
				/>
			)}
		</div>
	);
};

export default Collection;
