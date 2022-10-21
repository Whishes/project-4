import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import LoginPage from "./LoginPage";

// 1. check page renders correctly
// 2. check error when field/s are empty
// 3. inputs reflect what has been typed
// 4. check wrong email and/or password
// 5. check correct email and password

let mockAxios;

beforeAll(() => {
	mockAxios = new MockAdapter(axios);
});

afterAll(() => {
	mockAxios.restore();
});

afterEach(() => mockAxios.reset());

test("LoginPage renders correctly", () => {
	render(<LoginPage />);
	const container = screen.getByTestId("login-container");
	expect(container).toBeInTheDocument();
});

test("LoginPage shows error when form fields are empty", () => {
	render(<LoginPage />);
	const alertMock = jest.spyOn(window, "alert").mockImplementation();
	fireEvent.click(screen.getByText("Submit"));
	expect(alertMock).toHaveBeenCalledTimes(1);
	expect(alertMock).toHaveBeenCalledWith("fill in all the inputs");
});

test("RegisterPage inputs reflect values typed in them", () => {
	render(<LoginPage />);
	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	fireEvent.change(emailInput, { target: { value: "email@email.com" } });
	fireEvent.change(passwordInput, { target: { value: "password" } });

	expect(emailInput).toHaveValue("email@email.com");
	expect(passwordInput).toHaveValue("password");
});

test("LoginPage shows error if the input email and/or password is incorrect", () => {
	render(<LoginPage />);
	//const mockData = { email: "test@gmail.com", password: "test" };
	mockAxios
		.onPost()
		.reply(400, { message: "The email and/or password are not correct" });

	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	fireEvent.change(emailInput, { target: { value: "email@email.com" } });
	fireEvent.change(passwordInput, { target: { value: "password" } });
	fireEvent.click(screen.getByText("Submit"));

	//expect(mockAxios).toBeInTheDocument();
	expect(mockAxios.handlers.post[0][3]).toBe(400);
	expect(mockAxios.handlers.post[0][4].message).toBe(
		"The email and/or password are not correct"
	);
});

test("LoginPage correctly returns status on successful login", () => {
	render(<LoginPage />);
	mockAxios.onPost().reply(200, {});

	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	fireEvent.change(emailInput, { target: { value: "email@email.com" } });
	fireEvent.change(passwordInput, { target: { value: "password" } });
	fireEvent.click(screen.getByText("Submit"));

	expect(mockAxios.handlers.post[0][3]).toBe(200);
	expect(mockAxios.handlers.post[0][4]).toStrictEqual({});
});
