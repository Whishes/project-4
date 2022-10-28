import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Pokemon from "./Pokemon";

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

const user = {
	id: 1,
};

test("Pokemon cage/fence components all render correctly", () => {
	render(<Pokemon pokemon={eggData} />);
	const back_fence = screen.getByTestId("back-fence");
	const pokemon_img = screen.getByTestId("fence-pokemon");
	const front_fence = screen.getByTestId("front-fence");
	const sign_post = screen.getByTestId("fence-sign");
	expect(back_fence).toBeInTheDocument();
	expect(pokemon_img).toBeInTheDocument();
	expect(front_fence).toBeInTheDocument();
	expect(sign_post).toBeInTheDocument();
});

test("Clicking on the sign post button opens the modal successfully", async () => {
	mockAxios.onPost("/api/pokemon/exp/1").reply(200);
	const setLoading = () => {
		return;
	};
	render(<Pokemon pokemon={eggData} setLoading={setLoading} user={user} />);
	const sign_post = screen.getByTestId("fence-sign");
	expect(sign_post).toBeInTheDocument();

	await act(() => fireEvent.click(sign_post));
	const sign_modal = screen.getByTestId("modal-open");
	expect(sign_modal).toBeInTheDocument();
});

test("Pokemon evolution indicator doesn't show if the pokemon's exp isn't max", () => {
	eggData.current_exp = 0;
	render(<Pokemon pokemon={eggData} />);
	const indicator = screen.queryByTestId("evo-indicator");
	expect(indicator).not.toBeInTheDocument();
});

test("Pokemon evolution indicator shows if the pokemon's exp is max", () => {
	eggData.current_exp = 1000;
	render(<Pokemon pokemon={eggData} />);
	const indicator = screen.queryByTestId("evo-indicator");
	expect(indicator).toBeInTheDocument();
});
