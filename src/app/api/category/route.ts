import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const API_KEY = process.env.NEWS_API_KEY;
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "general";

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=20&page=1&apiKey=${API_KEY}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}
