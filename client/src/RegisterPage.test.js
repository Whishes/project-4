import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import RegisterPage from "./RegisterPage";

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => {
	mockAxios.restore();
});

afterEach(() => mockAxios.reset());

test("RegisterPage renders correctly", () => {
	render(<RegisterPage />);
	const container = screen.getByTestId("register-container");
	expect(container).toBeInTheDocument();
});

test("RegisterPage shows error when form fields are empty", () => {
	render(<RegisterPage />);
	const alertMock = jest.spyOn(window, "alert").mockImplementation();
	fireEvent.click(screen.getByText("Submit"));
	expect(alertMock).toHaveBeenCalledTimes(1);
	expect(alertMock).toHaveBeenCalledWith("fill in all the inputs");
});

test("RegisterPage inputs reflect values typed in them", () => {
	render(<RegisterPage />);
	const usernameInput = screen.getByTestId("username-input");
	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	fireEvent.change(usernameInput, { target: { value: "username" } });
	fireEvent.change(emailInput, { target: { value: "email@email.com" } });
	fireEvent.change(passwordInput, { target: { value: "password" } });

	expect(usernameInput).toHaveValue("username");
	expect(emailInput).toHaveValue("email@email.com");
	expect(passwordInput).toHaveValue("password");
});

test("RegisterPage shows error if the input username and/or email is taken", () => {
	render(<RegisterPage />);
	//const mockData = { email: "test@gmail.com", password: "test" };
	mockAxios
		.onPost()
		.reply(400, { message: "Sorry, this username or email is already taken" });

	const usernameInput = screen.getByTestId("username-input");
	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	fireEvent.change(usernameInput, { target: { value: "username" } });
	fireEvent.change(emailInput, { target: { value: "email@email.com" } });
	fireEvent.change(passwordInput, { target: { value: "password" } });
	fireEvent.click(screen.getByText("Submit"));

	//expect(mockAxios).toBeInTheDocument();
	expect(mockAxios.handlers.post[0][3]).toBe(400);
	expect(mockAxios.handlers.post[0][4].message).toBe(
		"Sorry, this username or email is already taken"
	);
});

test("RegisterPage correctly returns status on successful register", () => {
	render(<RegisterPage />);
	mockAxios.onPost().reply(200, { success: true });

	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	fireEvent.change(emailInput, { target: { value: "test@test.com" } });
	fireEvent.change(passwordInput, { target: { value: "test" } });
	fireEvent.click(screen.getByText("Submit"));

	expect(mockAxios.handlers.post[0][3]).toBe(200);
	expect(mockAxios.handlers.post[0][4]).toStrictEqual({ success: true });
});
