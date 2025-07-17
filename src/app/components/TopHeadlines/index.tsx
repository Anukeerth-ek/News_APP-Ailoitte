"use client";

import React, { useEffect, useState } from "react";
import { useFetchNews } from "../../hooks/useFetchNews";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryDropdown from "../CategoryFilter";
import SearchInput from "../Search";
import NewsCard from "../NewsCard";
import ErrorMessage from "../ErrorMessage";
import { CountrySelector } from "../CountrySelector";

export const TopHeadlines = () => {
     const router = useRouter();
     const searchParams = useSearchParams();

     const initialCountry = searchParams.get("country") || "us";
     const initialCategory = searchParams.get("category") || "";
     const initialQuery = searchParams.get("q") || "";

     const [country, setCountry] = useState(initialCountry);
     const [category, setCategory] = useState(initialCategory);
     const [query, setQuery] = useState(initialQuery);
     const [visibleCount, setVisibleCount] = useState(8);

     const { newsData, loading, error } = useFetchNews(category, query, country);

     useEffect(() => {
          const params = new URLSearchParams();
          if (country) params.set("country", country);
          if (category) params.set("category", category);
          if (query) params.set("q", query);
          router.push(`?${params.toString()}`);
     }, [country, category, query]);

     useEffect(() => {
          setVisibleCount(8);
     }, [category, query, country]);

     useEffect(() => {
          const handleScroll = () => {
               if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
                    setVisibleCount((prev) => Math.min(prev + 8, newsData.length));
               }
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, [loading, newsData]);

     const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setCountry(e.target.value);
     };

     const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setCategory(e.target.value);
     };

     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
     };

     if (error) return <ErrorMessage error={error} />;

     return (
          <section className="px-4">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Top Headlines</h2>
                    <div className="flex gap-3 w-full sm:w-auto">
                         <CountrySelector value={country} handleCountryChange={handleCountryChange} />
                         <CategoryDropdown value={category} handleSearchChange={handleCategoryChange} />
                         <SearchInput value={query} handleSearchChange={handleSearchChange} />
                    </div>
               </div>

               <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newsData.slice(1, visibleCount).map((news, index) => (
                         <NewsCard key={index} news={news} />
                    ))}
               </div>

               {loading && <p className="text-center mt-4">Loading...</p>}
               {!loading && visibleCount >= newsData.length && (
                    <p className="text-center text-gray-500 my-4">I think you have reached the end!</p>
               )}
          </section>
     );
};
