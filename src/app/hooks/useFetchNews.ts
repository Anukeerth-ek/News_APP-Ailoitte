import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const useFetchNews = (category: string, query: string) => {
     const [newsData, setNewsData] = useState<any[]>([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchNews = async () => {
               setLoading(true);
               setError(null);

               try {
                    let url = "";

                    if (query) {
                         url = `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`;
                    } else if (category) {
                         url = `${BASE_URL}/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`;
                    } else {
                         url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
                    }

                    const response = await axios.get(url);
                    setNewsData(response.data.articles || []);
               } catch (err: any) {
                    setError("Failed to fetch news.");
               } finally {
                    setLoading(false);
               }
          };

          fetchNews();
     }, [category, query]);

     return { newsData, loading, error };
};
