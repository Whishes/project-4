import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Collection from "./Collection";

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => mockAxios.restore());

afterEach(() => mockAxios.reset());

const user = {
	id: 1,
};

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
};

test("Collection renders correctly", async () => {
	const setShowCollection = () => {
		return;
	};
	mockAxios.onGet("/api/collection/1").reply(200, [pokemonData]);
	await act(() =>
		render(
			<Collection
				showCollection={true}
				setShowCollection={setShowCollection}
				user={user}
			/>
		)
	);

	const collection_count = screen.getByTestId("collection-count");
	const collection_container = screen.getByTestId("collection-container");

	expect(collection_count).toBeInTheDocument();
	expect(collection_container).toBeInTheDocument();
});

test("Collection count shows the right number", async () => {
	const setShowCollection = () => {
		return;
	};
	mockAxios.onGet("/api/collection/1").reply(200, [pokemonData]);
	await act(() =>
		render(
			<Collection
				showCollection={true}
				setShowCollection={setShowCollection}
				user={user}
			/>
		)
	);

	const collection_count = screen.getByTestId("collection-count");

	expect(parseInt(collection_count.textContent)).toBe(1);
});

test("Collection container renders the correct amount of rows", async () => {
	const setShowCollection = () => {
		return;
	};
	mockAxios.onGet("/api/collection/1").reply(200, [pokemonData]);
	await act(() =>
		render(
			<Collection
				showCollection={true}
				setShowCollection={setShowCollection}
				user={user}
			/>
		)
	);

	const collection_rows = screen.getAllByTestId("collection-row");

	expect(collection_rows).toHaveLength(151);
});

test("Collection container renders the correct amount of collected pokemon", async () => {
	const setShowCollection = () => {
		return;
	};
	mockAxios.onGet("/api/collection/1").reply(200, [pokemonData]);
	await act(() =>
		render(
			<Collection
				showCollection={true}
				setShowCollection={setShowCollection}
				user={user}
			/>
		)
	);

	const collection_rows = screen
		.getAllByTestId("collection-row")
		.filter((e) => e.className === "collection-row collected");

	expect(collection_rows[0]).toHaveClass("collection-row", "collected");
	expect(collection_rows).toHaveLength(1);
});
