import React from "react";

export const CountrySelector = ({
     value,
     handleCountryChange,
}: {
     value: string;
     handleCountryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
     return (
          <select value={value} onChange={handleCountryChange} className="border rounded px-3 py-2">
               <option value="us">🇺🇸 United States</option>
               <option value="in">🇮🇳 India</option>
               <option value="gb">🇬🇧 United Kingdom</option>
               <option value="au">🇦🇺 Australia</option>
               <option value="ca">🇨🇦 Canada</option>
               <option value="de">🇩🇪 Germany</option>
               <option value="fr">🇫🇷 France</option>
          </select>
     );
};
