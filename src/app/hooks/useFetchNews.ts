"use client";

import { useEffect, useState } from "react";
import { NewsArticle } from "../types/news";

export const useFetchNews = (category?: string, query?: string, country: string = "us") => {
     const [newsData, setNewsData] = useState<NewsArticle[]>([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchNews = async () => {
               setLoading(true);
               setError(null);

               try {
                    let url = "";

                    if (query) {
                         url = `/api/search?q=${encodeURIComponent(query)}`;
                    } else if (category) {
                         url = `/api/category?category=${encodeURIComponent(category)}`;
                    } else {
                         url = `/api/top-headlines?country=${encodeURIComponent(country)}`;
                    }

                    const res = await fetch(url);
                    if (!res.ok) throw new Error("Failed to fetch news");

                    const data = await res.json();
                    setNewsData(data.articles || []);
               } catch (err) {
                    setError("Failed to fetch news.");
                    console.error("Error:", err);
               } finally {
                    setLoading(false);
               }
          };

          const debounce = setTimeout(() => {
               fetchNews();
          }, 400);

          return () => clearTimeout(debounce);
     }, [query, category, country]);

     return { newsData, loading, error };
};
