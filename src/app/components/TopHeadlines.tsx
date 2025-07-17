"use client";

import React from "react";
import NewsCard from "./NewsCard";
import { getTopHeadlines } from "../utils/newsApi";
import { useFetchNews } from "../hooks/useFetchNews";

export const TopHeadlines = () => {
     console.log("from api", getTopHeadlines);
     const { newsData, loading, error } = useFetchNews(getTopHeadlines);
     console.log("new", newsData);
     return (
          <section className=" px-4">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Top Headlines</h2>
                    <div className="flex gap-3 w-full sm:w-auto">
                         <select className="px-5 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400">
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
                              className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
                         />
                    </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newsData.map((news, idx) => (
                         <NewsCard key={idx} news={news} />
                    ))}
               </div>
          </section>
     );
};
