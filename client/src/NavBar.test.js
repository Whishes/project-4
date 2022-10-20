import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// 1. not logged in
// 2. logged in

test("Nav Bar renders correctly when user isn't logged in", () => {
	render(
		<BrowserRouter>
			<NavBar loggedIn={false} />
		</BrowserRouter>
	);
	const navBars = screen.getByTestId("home-nav");
	expect(navBars).toBeInTheDocument();
});

test("Nav Bar renders correctly when user is logged in", () => {
	render(
		<BrowserRouter>
			<NavBar loggedIn={true} />
		</BrowserRouter>
	);
	const logOutBtn = screen.getByTestId("logOutBtn");
	expect(logOutBtn).toBeInTheDocument();
});
