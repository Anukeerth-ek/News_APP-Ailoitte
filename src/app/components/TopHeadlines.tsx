"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useFetchNews } from "../hooks/useFetchNews";
import { useRouter, useSearchParams } from "next/navigation";

export const TopHeadlines = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "";
  const initialQuery = searchParams.get("q") || "";

  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [visibleCount, setVisibleCount] = useState(8);

  const { newsData, loading, error } = useFetchNews(category, query);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (query) params.set("q", query);
    router.push(`?${params.toString()}`);
  }, [category, query]);

  useEffect(() => {
    setVisibleCount(8);
  }, [category, query]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        setVisibleCount((prev) => Math.min(prev + 8, newsData.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, newsData]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <section className="px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Top Headlines</h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <select
            className="px-5 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
          </select>
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={handleSearchChange}
            className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newsData.slice(0, visibleCount).map((news, index) => (
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
