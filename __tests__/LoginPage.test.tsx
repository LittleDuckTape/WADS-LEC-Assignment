import {render, screen} from "@testing-library/react";
import LoginPage from "../app/login/page";

describe("Login Page", () => {
    it("renders login form elements", () => {
        render(<LoginPage/>);

        expect(screen.getByText(/login/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole("button", {name:/login/i})).toBeInTheDocument();
    });
});