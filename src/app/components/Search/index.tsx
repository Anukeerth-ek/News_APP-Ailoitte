"use client";

import React from "react";

type SearchInputProps = {
  value: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search news..."
      value={value}
      onChange={handleSearchChange}
      className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
    />
  );
};

export default SearchInput;
