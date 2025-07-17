"use client";

import React from "react";

type CategoryDropdownProps = {
  value: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ value, handleSearchChange }) => {
  return (
    <select
      className="px-5 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      value={value}
      onChange={handleSearchChange}
    >
      <option value="">All Categories</option>
      <option value="sports">Sports</option>
      <option value="business">Business</option>
      <option value="technology">Technology</option>
      <option value="entertainment">Entertainment</option>
      <option value="health">Health</option>
      <option value="science">Science</option>
    </select>
  );
};

export default CategoryDropdown;
