import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			alert("fill in all the inputs");
			return;
		}

		const data = {
			email: email,
			password: password,
		};

		axios
			.post("/api/session", data)
			.then(() => {
				window.location.href = "/";
			})
			.catch((err) => {
				//console.log(err);
				alert(err.response.data.message);
			});
	};

	return (
		<div id="login-container" data-testid="login-container">
			<h1>Login</h1>
			<form onSubmit={formSubmit} method="post">
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

export default LoginPage;
