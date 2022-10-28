import Arrow from "./images/Arrow.svg";
import "./DexEntry.css";

const DexEntry = ({ data, showEntry, setShowEntry }) => {
	return (
		<div
			className={showEntry ? "dex-entry responsive_nav" : "dex-entry"}
			data-testid="dex-entry"
		>
			<button
				className="nav-btn back-arrow"
				onClick={() => setShowEntry(false)}
			>
				<img src={Arrow} alt="back-arrow"></img>
			</button>
			<div className="entry-header">
				<h1 data-testid="entry-name">{data.name}</h1>
				<h3 data-testid="entry-id">#{data.dex_id}</h3>
			</div>
			<img src={data.gif_link} alt={data.name}></img>
			<div className="entry-content">
				<p className={data.type_1} data-testid="type-1">
					<span>Type 1: </span>
					{data.type_1}
				</p>
				{data.type_2 && (
					<p className={data.type_2} data-testid="type-2">
						<span>Type 2:</span> {data.type_2}
					</p>
				)}
				<p>
					<span>Description: </span> {data.description}
				</p>
			</div>
		</div>
	);
};

export default DexEntry;
