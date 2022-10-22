import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import HomePage from "./HomePage";

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => mockAxios.restore());

afterEach(() => mockAxios.reset());

const farmData = {
	farm_id: 1,
};

test("HomePage component renders correctly", async () => {
	mockAxios.onGet("/api/farm/1").reply(200, []);

	await act(() => render(<HomePage farmData={farmData} />));
	const container = screen.getByTestId("farm-container");

	expect(container).toBeInTheDocument();
});

test("HomePage components render the correct content when no pokemon in farm can be found", async () => {
	mockAxios.onGet("/api/farm/1").reply(200, []);

	await act(() => render(<HomePage farmData={farmData} />));

	const elderly_man = screen.getByTestId("elderly_man");
	//expect(mockAxios).toBeInTheDocument();
	expect(mockAxios.history.get.length).toBe(1);
	expect(elderly_man).toBeInTheDocument();
});
