import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../components/Search";


describe("SearchInput", () => {
  const mockHandleChange = jest.fn();

  it("renders input with placeholder", () => {
    render(<SearchInput value="" handleSearchChange={mockHandleChange} />);

    const input = screen.getByPlaceholderText("Search news...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("calls handleSearchChange when user types", () => {
    render(<SearchInput value="" handleSearchChange={mockHandleChange} />);

    const input = screen.getByPlaceholderText("Search news...");
    fireEvent.change(input, { target: { value: "cricket" } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange.mock.calls[0][0].target.value).toBe("cricket");
  });
});
