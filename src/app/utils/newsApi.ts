const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (page = 1) => {
  const res = await fetch(
    `${BASE_URL}/top-headlines?country=us&pageSize=20&page=${page}&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error('Failed to fetch top headlines');
  return await res.json();
};

export const getCategoryNews = async (category: string, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&page=${page}&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error(`Failed to fetch news for category: ${category}`);
  return await res.json();
};

export const searchNews = async (query: string, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/everything?q=${query}&pageSize=20&page=${page}&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error(`Failed to search for: ${query}`);
  return await res.json();
};
