import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import * as useFetchNewsHook from "../hooks/useFetchNews";
import { NewsArticle } from "../types/news";
import TopHeadlines from "../top-headlines/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

const mockUseFetchNews = useFetchNewsHook as jest.Mocked<typeof useFetchNewsHook>;

describe("TopHeadlines Component", () => {
const mockNews: NewsArticle[] = [
  {
    title: "Article 1",
    description: "desc",
    urlToImage: "",
    url: "",
    author: "John Doe",
    content: "This is a mock content.",
    publishedAt: "2025-07-17T00:00:00Z",
    source: {
      id: null,
      name: "MockSource"
    }
  },
  {
    title: "Article 2",
    description: "desc",
    urlToImage: "",
    url: "",
    author: "Jane Smith",
    content: "Another mock content.",
    publishedAt: "2025-07-17T00:00:00Z",
    source: {
      id: null,
      name: "MockSource"
    }
  }
];

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(useFetchNewsHook, "useFetchNews").mockReturnValue({
      newsData: mockNews,
      loading: false,
      error: null,
    });
  });

  it("renders correctly with headlines", () => {
    render(<TopHeadlines />);
    expect(screen.getByText("Top Headlines")).toBeInTheDocument();
    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    jest.spyOn(useFetchNewsHook, "useFetchNews").mockReturnValue({
      newsData: [],
      loading: true,
      error: null,
    });

    render(<TopHeadlines />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows error state", () => {
    jest.spyOn(useFetchNewsHook, "useFetchNews").mockReturnValue({
      newsData: [],
      loading: false,
      error: "Something went wrong",
    });

    render(<TopHeadlines />);
    expect(screen.getByText(/Error: Something went wrong/i)).toBeInTheDocument();
  });

  it("handles category change", async () => {
    render(<TopHeadlines />);
    const dropdown = screen.getByRole("combobox");

    fireEvent.change(dropdown, { target: { value: "sports" } });
    await waitFor(() => {
      expect(dropdown).toHaveValue("sports");
    });
  });

  it("handles search input", async () => {
    render(<TopHeadlines />);
    const input = screen.getByPlaceholderText("Search news...");

    fireEvent.change(input, { target: { value: "AI" } });
    await waitFor(() => {
      expect(input).toHaveValue("AI");
    });
  });
});
