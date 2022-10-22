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

const mockData = [
	{
		id: 1,
		farm_id: 1,
		dex_id: 10000,
		current_exp: 0,
		date_created: "2022-10-22T03:11:09.728Z",
		date_updated: "2022-10-22T03:11:09.728Z",
		name: "egg",
		evo_stage: "egg",
		evo_pokemon: null,
		type_1: "egg",
		type_2: null,
		description: "It's an egg. I wonder what's inside",
		egg_group: null,
		img_link:
			"https://archives.bulbagarden.net/media/upload/archive/e/ed/20170805233207%21Spr_5b_Egg.png",
		gif_link:
			"https://archives.bulbagarden.net/media/upload/e/ed/Spr_5b_Egg.png",
		exp_required: 1000,
		currency_pm: 0,
	},
	{
		id: 2,
		farm_id: 1,
		dex_id: 10000,
		current_exp: 0,
		date_created: "2022-10-22T03:11:09.728Z",
		date_updated: "2022-10-22T03:11:09.728Z",
		name: "egg",
		evo_stage: "egg",
		evo_pokemon: null,
		type_1: "egg",
		type_2: null,
		description: "It's an egg. I wonder what's inside",
		egg_group: null,
		img_link:
			"https://archives.bulbagarden.net/media/upload/archive/e/ed/20170805233207%21Spr_5b_Egg.png",
		gif_link:
			"https://archives.bulbagarden.net/media/upload/e/ed/Spr_5b_Egg.png",
		exp_required: 1000,
		currency_pm: 0,
	},
];

test("HomePage component renders correctly", async () => {
	mockAxios.onGet("/api/pokemon/1").reply(200, []);

	await act(() => render(<HomePage farmData={farmData} />));
	const container = screen.getByTestId("farm-container");

	expect(container).toBeInTheDocument();
});

test("HomePage components render the correct content when no pokemon in farm can be found", async () => {
	mockAxios.onGet("/api/pokemon/1").reply(200, []);

	await act(() => render(<HomePage farmData={farmData} />));

	const elderly_man = screen.getByTestId("elderly_man");
	//expect(mockAxios).toBeInTheDocument();
	expect(mockAxios.history.get.length).toBe(1);
	expect(elderly_man).toBeInTheDocument();
});

test("HomePage component renders the correct amount of content when pokemon can be found", async () => {
	mockAxios.onGet("/api/pokemon/1").reply(200, mockData);

	await act(() => render(<HomePage farmData={farmData} />));
	expect(mockAxios.history.get.length).toBe(1);

	const pokemon_cages = screen.getAllByTestId("pokemon-cage");

	expect(pokemon_cages.length).toBe(2);
});
