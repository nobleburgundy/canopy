import { act, render, screen } from "@testing-library/react";
import App from "./App";

describe("Expected UI elements", () => {
  test("renders Welcome to Canopy heading", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Canopy/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders employee table", () => {
    render(<App />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  test("renders search bar", () => {
    render(<App />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });

  test("renders Role filter", () => {
    render(<App />);
    const input = screen.getByLabelText("Filter by Role:");
    expect(input).toBeInTheDocument();
  });

  test("renders State filter", () => {
    render(<App />);
    const input = screen.getByLabelText("Filter by State:");
    expect(input).toBeInTheDocument();
  });
});
