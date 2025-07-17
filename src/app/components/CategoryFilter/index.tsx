"use client";

import { ChevronDown, Filter } from "lucide-react";
import React from "react";

type CategoryDropdownProps = {
     value: string;
     handleSearchChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ value, handleSearchChange }) => {
     return (
          <div className="relative">
               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
               <select
                    className="w-full sm:min-w-[180px] pl-10 pr-10 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 appearance-none cursor-pointer transition-all duration-200"
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
          </div>
     );
};

export default CategoryDropdown;
