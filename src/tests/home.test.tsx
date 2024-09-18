import { render, screen } from "@testing-library/react";
import Home from "../pages/home";

test("h1 should be in home page", () => {
  render(<Home />);
  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toBeInTheDocument();
});

test("card number input field should be in the component", () => {
  render(<Home />);

  const nameInput = screen.getByRole("textbox", {
    name: /cardNumber/i,
  });
  expect(nameInput).toBeInTheDocument();
});

test("card name input field should be in the component", () => {
  render(<Home />);

  const nameInput = screen.getByRole("textbox", {
    name: /cardName/i,
  });
  expect(nameInput).toBeInTheDocument();
});
