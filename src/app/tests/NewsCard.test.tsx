import React from "react";
import { render, screen } from "@testing-library/react";
import { NewsArticle } from "@/app/types/news";
import NewsCard from "../components/NewsCard";

const mockNews: NewsArticle = {
  title: "Test News Title",
  content: "This is a test content of the article that should be used for read time calculation.",
  url: "https://example.com/news/test-news",
  description: "This is Description of the dummy news",
  urlToImage: "",
  source: {id: '1', name: "Mock Source" },
  publishedAt: "2025-07-16T10:00:00Z",
  author: "John Doe",
};

jest.mock("@/app/utils/readTime", () => ({
  handleCalculateReadTime: jest.fn(() => 2), 
}));

describe("NewsCard", () => {
  it("renders all the key elements", () => {
    render(<NewsCard news={mockNews} />);

    expect(screen.getByText(/Test News Title/i)).toBeInTheDocument();

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

    expect(screen.getByText(/Mock Source/i)).toBeInTheDocument();

    expect(screen.getByText(/2 min read/i)).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockNews.url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("falls back to default image if urlToImage is empty", () => {
    render(<NewsCard news={mockNews} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/FeatureArticle_FallBack.webp");
  });
});
