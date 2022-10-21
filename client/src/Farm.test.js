import Farm from "./Farm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Farm component renders correctly", () => {
	render(<Farm />);
	const container = screen.getByTestId("farm-container");

	expect(container).toBeInTheDocument();
});
