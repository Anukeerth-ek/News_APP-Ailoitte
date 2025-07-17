"use client"

import { useEffect, useState } from 'react';

type FetchFunction = (param?: any) => Promise<any>;

export const useFetchNews = (
  fetchFn: FetchFunction,
  param?: any
) => {
  const [newsData, setnewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchFn(param);
        setnewsData(data.articles || []);
      } catch (err: any) {
        setError(err.message || 'Error loading news');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [fetchFn, param]);

  return { newsData, loading, error };
};
