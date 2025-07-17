import { useEffect, useState } from "react";
import { getCategoryNews, getTopHeadlines, searchNews } from "../utils/newsApi";

// const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
// const BASE_URL = "https://newsapi.org/v2";

export const useFetchNews = (category: string, query: string) => {
     const [newsData, setNewsData] = useState<any[]>([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);
     const [page, setPage] = useState(1);
     useEffect(() => {
          const fetchNews = async () => {
               setLoading(true);
               setError(null);

               try {
                    let data;

                    if (query) {
                         data = await searchNews(query, page);
                    } else if (category) {
                         data = await getCategoryNews(category, page);
                    } else {
                         data = await getTopHeadlines(page);
                    }

                    setNewsData(data.articles || []);
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
