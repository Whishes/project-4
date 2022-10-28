import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// 1. not logged in
// 2. logged in

const farmData = {
	farm_id: 1,
	total_c_pm: 0,
	c_collected: "2022-10-21T06:34:18.507Z",
	egg_cost: 5000,
};

test("Nav Bar renders correctly when user isn't logged in", () => {
	render(
		<BrowserRouter>
			<NavBar loggedIn={false} farmData={farmData} currency={5000} />
		</BrowserRouter>
	);
	const navBars = screen.getByTestId("home-nav");
	expect(navBars).toBeInTheDocument();
});

test("Nav Bar renders correctly when user is logged in", () => {
	render(
		<BrowserRouter>
			<NavBar loggedIn={true} farmData={farmData} currency={5000} />
		</BrowserRouter>
	);
	const logOutBtn = screen.getByTestId("logOutBtn");
	const eggBtn = screen.getByTestId("eggBtn");
	const collectionBtn = screen.getByTestId("collectionBtn");
	const currency_amt = screen.getByTestId("currency-amt").textContent;

	expect(logOutBtn).toBeInTheDocument();
	expect(eggBtn).toBeInTheDocument();
	expect(collectionBtn).toBeInTheDocument();
	expect(currency_amt).toBe("$5000");
});
