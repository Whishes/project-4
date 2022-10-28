import Running from "./images/pikachu-running.gif";
import Error from "./images/pikachu-error.gif";

const Loading = ({ error = false }) => {
	return (
		<div>
			<div className="darkBG" />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "fixed",
					top: "50%",
					left: "50%",
					zIndex: 10000,
					transform: "translate(-50%, -50%)",
					color: "var(--primary-font)",
				}}
			>
				{error ? (
					<>
						<img
							src={Error}
							alt="pikachu error"
							style={{ width: "64px" }}
						></img>
						<p>Something went wrong!</p>
						<p>Please try again later</p>
					</>
				) : (
					<>
						<img
							src={Running}
							alt="pikachu running"
							style={{ width: "64px" }}
						></img>
						<p>Loading...</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Loading;
