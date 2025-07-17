import {  NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.NEWS_API_KEY;

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=1&apiKey=${API_KEY}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}