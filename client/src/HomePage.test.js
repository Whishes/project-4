import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";

test("HomePage component renders correctly when the user isn't logged in", () => {
	render(<HomePage loggedIn={false} />);
	const mainHeaderElement = screen.getByText("Pokemon");
	const secondaryHeaderElement = screen.getByText("Rancher");
	expect(mainHeaderElement).toBeInTheDocument();
	expect(secondaryHeaderElement).toBeInTheDocument();
});
test("HomePage component renders correctly when the user is logged in", () => {
	render(<HomePage loggedIn={true} />);
	expect(screen.queryByText("Pokemon")).not.toBeInTheDocument();
	expect(screen.queryByText("Rancher")).not.toBeInTheDocument();
});
