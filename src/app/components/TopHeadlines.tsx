"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getTopHeadlines } from "../utils/newsApi";
import { useFetchNews } from "../hooks/useFetchNews";

export const TopHeadlines = () => {
     console.log("from api", getTopHeadlines);
     const [category, setCategory] = useState("");
     const [query, setQuery] = useState("");
     const { newsData, loading, error } = useFetchNews(category, query);
     console.log("new", newsData);

     const [visibleCount, setVisibleCount] = useState(8);

     useEffect(() => {
          const handleScroll = () => {
               const scrollTop = window.scrollY;
               const windowHeight = window.innerHeight;
               const fullHeight = document.body.offsetHeight;

               if (scrollTop + windowHeight >= fullHeight - 100 && !loading) {
                    setVisibleCount((prev) => Math.min(prev + 8, newsData.length));
               }
          };

          window.addEventListener("scroll", handleScroll);

          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, [loading, newsData]);

     useEffect(() => {
          setVisibleCount(8);
     }, [category, query]);
     
     return (
          <section className=" px-4">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Top Headlines</h2>
                    <div className="flex gap-3 w-full sm:w-auto">
                         <select
                              className="px-5 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
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
                              onChange={(e) => setQuery(e.target.value)}
                              className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
                         />
                    </div>
               </div>

               <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newsData.slice(0, visibleCount).map((news, idx) => (
                         <NewsCard key={idx} news={news} />
                    ))}
               </div>

               {loading && <p className="text-center mt-4">Loading...</p>}
               {!loading && visibleCount >= newsData.length && (
                    <p className="text-center text-gray-500 my-4">I think you have reached the end!</p>
               )}
          </section>
     );
};
