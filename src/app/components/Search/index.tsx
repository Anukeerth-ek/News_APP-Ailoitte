"use client";

import { Search } from "lucide-react";
import React from "react";

type SearchInputProps = {
     value: string;
     handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, handleSearchChange }) => {
     return (
          <div className="relative w-full sm:w-64">
               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
               <input
                    type="text"
                    placeholder="Search news..."
                    value={value}
                    onChange={handleSearchChange}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-200"
               />
          </div>
     );
};

export default SearchInput;
