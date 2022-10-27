import Tick from "./images/Tick.svg";
import Cross from "./images/Cross.svg";

const CollectionRow = ({ data, setShowEntry, setEntryData }) => {
	const dexEntry = () => {
		if (!data.collected) return;
		setEntryData(data);
		setShowEntry(true);
	};
	return (
		<div
			className={data.collected ? "collection-row collected" : "collection-row"}
			onClick={() => dexEntry()}
		>
			<div className="row-left">
				<h3>{data.dex_id}.</h3>
			</div>
			<div className="vl" />
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
export default CollectionRow;
