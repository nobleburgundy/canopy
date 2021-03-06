import { fireEvent, render, screen } from "@testing-library/react";
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
    fireEvent(screen.getByTestId("openFilter"), new MouseEvent("click"));
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });

  test("renders Role filter", () => {
    render(<App />);
    fireEvent(screen.getByTestId("openFilter"), new MouseEvent("click"));
    const roleFilter = screen.getByLabelText("Filter by Role:");
    expect(roleFilter).toBeInTheDocument();
  });

  test("renders State filter", () => {
    render(<App />);
    fireEvent(screen.getByTestId("openFilter"), new MouseEvent("click"));
    const stateFilter = screen.getByLabelText("Filter by State:");
    expect(stateFilter).toBeInTheDocument();
  });

  test("renders Name filter", () => {
    render(<App />);
    fireEvent(screen.getByTestId("openFilter"), new MouseEvent("click"));
    const nameFilter = screen.getByLabelText("Filter by Name:");
    expect(nameFilter).toBeInTheDocument();
  });
});
