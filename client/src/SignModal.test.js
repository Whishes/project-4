import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import SignModal from "./SignModal";

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => mockAxios.restore());

afterEach(() => mockAxios.reset());

const eggData = {
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
	gif_link: "https://archives.bulbagarden.net/media/upload/e/ed/Spr_5b_Egg.png",
	exp_required: 1000,
	currency_pm: 0,
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

test("Sign Modal renders correct pokemon data", () => {
	render(<SignModal pokemon={eggData} />);
	const name = screen.getByTestId("pokemon-name");
	const img_link = screen.getByTestId("pokemon-img");
	expect(name.textContent).toBe("egg");
	expect(img_link.src).toBe(eggData.img_link);
});

test("Sign Modal doesn't show hatch button if pokemon doesn't have max exp", () => {
	render(<SignModal pokemon={eggData} />);
	const hatchBtn = screen.queryByTestId("hatch-button");
	expect(hatchBtn).not.toBeInTheDocument();
});

test("Sign Modal shows hatch button if pokemon is an egg and has max exp", () => {
	eggData.current_exp = 1000;
	render(<SignModal pokemon={eggData} />);
	const hatchBtn = screen.getByTestId("hatch-button");
	expect(hatchBtn).toBeInTheDocument();
});

test("Sign Modal doesn't show evolve button if pokemon doesn't have max exp", () => {
	render(<SignModal pokemon={pokemonData} />);
	const evolveBtn = screen.queryByTestId("evolve-button");
	expect(evolveBtn).not.toBeInTheDocument();
});

test("Sign Modal shows evolve button if pokemon has max exp", () => {
	pokemonData.current_exp = 3000;
	render(<SignModal pokemon={pokemonData} />);
	const evolveBtn = screen.getByTestId("evolve-button");
	expect(evolveBtn).toBeInTheDocument();
});
