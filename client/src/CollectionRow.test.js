import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import CollectionRow from "./CollectionRow";
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

test("Collection renders correctly when a pokemon has been collected", () => {
	render(<CollectionRow data={pokemonData} />);
	const row_middle = screen.getByTestId("row-middle");
	const row_right = screen.getByTestId("row-right");

	expect(row_middle).toBeInTheDocument();
	expect(row_right).toBeInTheDocument();

	expect(row_middle.childNodes).toHaveLength(2);
	expect(row_middle.childNodes[0].src).toBe(pokemonData.gif_link);
	expect(row_middle.childNodes[0].alt).toBe(pokemonData.name);
	expect(row_middle.childNodes[1].textContent).toBe("bulbasaur");
	expect(row_right.childNodes[0].alt).toBe("tick");
});

test("Collection opens dex entry modal when clicked", async () => {
	const setEntryData = () => {
		return;
	};
	const setShowEntry = async () => {
		await act(() => render(<DexEntry data={pokemonData} />));
	};

	render(
		<CollectionRow
			data={pokemonData}
			setEntryData={setEntryData}
			setShowEntry={setShowEntry}
		/>
	);
	const row = screen.getByTestId("collection-row");
	await act(() => fireEvent.click(row));
	const entry = screen.getByTestId("dex-entry");
	expect(entry).toBeInTheDocument();
});

test("Collection renders correctly when a pokemon hasn't been collected", () => {
	pokemonData.collected = false;
	render(<CollectionRow data={pokemonData} />);
	const row_middle = screen.getByTestId("row-middle");
	const row_right = screen.getByTestId("row-right");

	expect(row_middle).toBeInTheDocument();
	expect(row_right).toBeInTheDocument();

	expect(row_middle.childNodes).toHaveLength(2);
	expect(row_middle.childNodes[0].textContent).toBe("?");
	expect(row_middle.childNodes[1].textContent).toBe("??????????");
	expect(row_right.childNodes[0].alt).toBe("cross");
});
