import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import NewGame from "./NewGame";

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => mockAxios.restore());

afterEach(() => mockAxios.reset());

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
];

test("Modal appears when user clicks on exclamation mark button", () => {
	render(<NewGame />);

	const button = screen.getByTestId("exclamation-button");
	expect(button).toBeInTheDocument();
	fireEvent.click(button);

	const modal = screen.getByTestId("modal-open");
	expect(modal).toBeInTheDocument();
});

test("Axios route receives the right data when the modal button is pressed", () => {
	const setPokemonData = () => {
		return;
	};
	mockAxios.onPost("/api/pokemon/").reply(200, { id: 1, farm_id: 1 });
	render(
		<NewGame
			farmId={1}
			user_id={1}
			setPokemonData={setPokemonData}
			pokemonData={mockData}
		/>
	);

	const modalButton = screen.getByTestId("exclamation-button");
	expect(modalButton).toBeInTheDocument();
	fireEvent.click(modalButton);

	const modal = screen.getByTestId("modal-open");
	expect(modal).toBeInTheDocument();

	const yesBtn = screen.getByTestId("yesBtn");
	fireEvent.click(yesBtn);

	const data = {
		farm_id: 1,
		user_id: 1,
		egg_exp: 990,
	};

	expect(JSON.parse(mockAxios.history.post[0].data)).toStrictEqual(data);
});
