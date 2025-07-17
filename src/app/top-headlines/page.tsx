"use client";

import React, { useEffect, useState } from "react";
import { useFetchNews } from "../hooks/useFetchNews";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryDropdown from "../components/CategoryFilter";
import SearchInput from "../components/Search";
import NewsCard from "../components/NewsCard";
import ErrorMessage from "../components/ErrorMessage";
import { CountrySelector } from "../components/CountrySelector";

const TopHeadlines = () => {
     const router = useRouter();
     const searchParams = useSearchParams();

     let localPrefs = { country: "us", category: "", query: "" };

     if (typeof window !== "undefined") {
          const stored = localStorage.getItem("userPreferences");
          if (stored) {
               try {
                    localPrefs = JSON.parse(stored);
               } catch (e) {
                    console.error("Invalid localStorage preferences:", e);
               }
          }
     }

     const initialCountry = searchParams.get("country") || localPrefs.country;
     const initialCategory = searchParams.get("category") || localPrefs.category;
     const initialQuery = searchParams.get("q") || localPrefs.query;

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

          localStorage.setItem(
               "userPreferences",
               JSON.stringify({
                    country,
                    category,
                    query,
               })
          );
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
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-6">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Top Headlines</h2>
                    <div className="flex flex-col lg:flex-row gap-3 w-full sm:w-auto">
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

export default TopHeadlines