"use client";

import { useEffect, useState } from "react";
import { getCategoryNews, getTopHeadlines, searchNews } from "../utils/newsApi";
import { NewsArticle } from "../types/news";

export const useFetchNews = (category?: string, query?: string) => {
     const [newsData, setNewsData] = useState<NewsArticle[]>([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);
     const [page, setPage] = useState(1);

     useEffect(() => {
          if (!query) return;

          const debounceTimeout = setTimeout(() => {
               const fetchSearchResults = async () => {
                    setLoading(true);
                    setError(null);
                    try {
                         const data = await searchNews(query, page);

                         setNewsData(data.articles || []);
                    } catch (err) {
                         setError("Failed to fetch search results.");
                    } finally {
                         setLoading(false);
                    }
               };

               fetchSearchResults();
          }, 500);

          return () => clearTimeout(debounceTimeout);
     }, [query, page]);

     useEffect(() => {
          if (query) return;

          const fetchNews = async () => {
               setLoading(true);
               setError(null);
               try {
                    let data;
                    if (category) {
                         data = await getCategoryNews(category, page);
                    } else {
                         data = await getTopHeadlines(page);
                    }
                    console.log("arti", data.articles);
                    setNewsData(data.articles || []);
               } catch (err) {
                    setError("Failed to fetch news.");
               } finally {
                    setLoading(false);
               }
          };

          fetchNews();
     }, [category, page, query]);

     return { newsData, loading, error };
};
