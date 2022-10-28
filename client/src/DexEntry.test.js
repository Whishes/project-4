import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import DexEntry from "./DexEntry";

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => mockAxios.restore());

afterEach(() => mockAxios.reset());

const pokemonData = {
	id: 1,
	farm_id: 1,
	dex_id: 1,
	current_exp: 0,
	name: "bulbasaur",
	evo_stage: "basic",
	evo_pokemon: 2,
	type_1: "grass",
	type_2: "poison",
	description:
		"A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
	egg_group: "monster",
	img_link:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
	gif_link:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
	exp_required: 3000,
	currency_pm: 0.2,
	collected: true,
};

test("DexEntry renders correctly with data", () => {
	render(<DexEntry data={pokemonData} />);
	const container = screen.getByTestId("dex-entry");
	const entry_name = screen.getByTestId("entry-name");
	const entry_id = screen.getByTestId("entry-id");

	expect(container).toBeInTheDocument();
	expect(entry_name).toBeInTheDocument();
	expect(entry_id).toBeInTheDocument();
});

test("DexEntry correctly show type 1 & type 2 from data", () => {
	render(<DexEntry data={pokemonData} />);
	const type_1 = screen.getByTestId("type-1");
	const type_2 = screen.getByTestId("type-2");

	expect(type_1).toBeInTheDocument();
	expect(type_1.textContent).toBe("Type 1: grass");
	expect(type_2).toBeInTheDocument();
	expect(type_2.textContent).toBe("Type 2: poison");
});

test("DexEntry correctly shows only type 1 when type 2 isn't present in data", () => {
	pokemonData.type_2 = null;
	render(<DexEntry data={pokemonData} />);
	const type_1 = screen.getByTestId("type-1");
	const type_2 = screen.queryByTestId("type-2");

	expect(type_1).toBeInTheDocument();
	expect(type_1.textContent).toBe("Type 1: grass");
	expect(type_2).not.toBeInTheDocument();
});
