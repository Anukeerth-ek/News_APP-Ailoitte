import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryDropdown from "../components/CategoryFilter";

describe("CategoryDropdown", () => {
  const mockHandleChange = jest.fn();

  it("renders all category options", () => {
    render(<CategoryDropdown value="" handleSearchChange={mockHandleChange} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("All Categories")).toBeInTheDocument();
    expect(screen.getByText("Sports")).toBeInTheDocument();
    expect(screen.getByText("Business")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("Entertainment")).toBeInTheDocument();
    expect(screen.getByText("Health")).toBeInTheDocument();
    expect(screen.getByText("Science")).toBeInTheDocument();
  });

  it("calls handleSearchChange on selecting an option", () => {
    render(<CategoryDropdown value="" handleSearchChange={mockHandleChange} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "sports" } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange.mock.calls[0][0].target.value).toBe("sports");
  });
});
