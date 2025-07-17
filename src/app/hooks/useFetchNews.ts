"use client";

import { useEffect, useState } from "react";
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
          const res = await fetch(`/api/news/search?query=${query}`);
          if (!res.ok) throw new Error("Failed to fetch search results");

          const data = await res.json();
          setNewsData(data.articles || []);
        } catch (err) {
          setError("Failed to fetch search results.");
          console.error("Error", err);
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
        let endpoint = "/api/news/top-headlines";
        if (category) {
          endpoint = `/api/news/category?category=${category}`;
        }

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        setNewsData(data.articles || []);
      } catch (err) {
        setError("Failed to fetch news.");
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, query]);

  return { newsData, loading, error };
};
