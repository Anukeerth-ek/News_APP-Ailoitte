"use client";

import { useEffect, useState } from "react";
import { getCategoryNews, getTopHeadlines, searchNews } from "../utils/newsApi";
import { NewsArticle } from "../types/news";

export const useFetchNews = (category?: string, query?: string) => {
     const [newsData, setNewsData] = useState<NewsArticle[]>([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          if (!query) return;

          const debounceTimeout = setTimeout(() => {
               const fetchSearchResults = async () => {
                    setLoading(true);
                    setError(null);
                    try {
                         const data = await searchNews(query, 1);

                         setNewsData(data.articles || []);
                    } catch (err) {
                         setError("Failed to fetch search results.");
                         console.log("Error", err);
                    } finally {
                         setLoading(false);
                    }
               };

               fetchSearchResults();
          }, 500);

          return () => clearTimeout(debounceTimeout);
     }, [query]);

     useEffect(() => {
          if (query) return;

          const fetchNews = async () => {
               setLoading(true);
               setError(null);
               try {
                    let data;
                    if (category) {
                         data = await getCategoryNews(category, 1);
                    } else {
                         data = await getTopHeadlines(1);
                    }
                    console.log("arti", data.articles);
                    setNewsData(data.articles || []);
               } catch (err) {
                    setError("Failed to fetch news.");
                    console.log("Error", err);
               } finally {
                    setLoading(false);
               }
          };

          fetchNews();
     }, [category, query]);

     return { newsData, loading, error };
};
