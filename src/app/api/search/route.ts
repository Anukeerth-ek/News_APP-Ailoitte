import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const API_KEY = process.env.NEWS_API_KEY;
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";
  const page = searchParams.get("page") || "1";

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=20&page=${page}&apiKey=${API_KEY}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}
