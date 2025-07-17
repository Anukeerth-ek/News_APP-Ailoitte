"use client"

import { ChevronDown, Globe } from "lucide-react";
import React from "react";

export const CountrySelector = ({
     value,
     handleCountryChange,
}: {
     value: string;
     handleCountryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
     return (
          <div className="relative">
               <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
               <select
                    value={value}
                    onChange={handleCountryChange}
                    className="w-full sm:min-w-[180px] pl-10 pr-10 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 appearance-none cursor-pointer transition-all duration-200"
               >
                    <option value="us">United States</option>
                    <option value="in">India</option>
                    <option value="gb">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="ca">Canada</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
               </select>
          </div>
     );
};
