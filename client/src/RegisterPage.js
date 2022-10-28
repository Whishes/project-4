import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const RegisterPage = () => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "" || username === "") {
			alert("fill in all the inputs");
			return;
		}

		const data = {
			email: email,
			username: username,
			password: password,
		};
		setLoading(true);
		axios
			.post("/api/user", data)
			.then(() => {
				setLoading(false);
				window.location.href = "/login";
			})
			.catch((err) => {
				//console.log(err);
				setError(true);
			});
	};

	return (
		<div id="login-container" data-testid="register-container">
			<h1>Register</h1>
			<form onSubmit={formSubmit} method="post">
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						required
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						data-testid="username-input"
					></input>
				</div>
				{loading && <Loading error={error} />}
				<div>
					<label htmlFor="email">Email </label>
					<input
						type="email"
						required
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						data-testid="email-input"
					></input>
				</div>
				<div>
					<label htmlFor="password">Password </label>
					<input
						type="password"
						required
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						data-testid="password-input"
					></input>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default RegisterPage;
