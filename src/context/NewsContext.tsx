import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

const API_KEYS = {
  newsapi: import.meta.env.VITE_NEWSAPI_KEY,
  guardian: import.meta.env.VITE_GUARDIAN_KEY,
  nyt: import.meta.env.VITE_NYT_KEY,
};

console.log("News API Key:", import.meta.env.VITE_NEWSAPI_KEY);
interface Article {
  title: string;
  description: string;
  url: string;
  source: string;
}

interface NewsContextType {
  articles: Article[];
  setFilters: (filters: any) => void;
  setSelectedApi: (api: string) => void;
  selectedApi: string;
  searchSuggestions: string[];
  setSearchTerm: (term: string) => void;
}

export const NewsContext = createContext<NewsContextType | undefined>(
  undefined
);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filters, setFilters] = useState({ keyword: "" });
  const [selectedApi, setSelectedApi] = useState<string>("newsapi");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let response;
        const defaultQuery = "technology";

        if (selectedApi === "newsapi") {
          response = await axios.get(
            `https://newsapi.org/v2/everything?q=${
              filters.keyword || defaultQuery
            }&apiKey=${API_KEYS.newsapi}`
          );
          setArticles(
            response.data.articles.map((a: any) => ({
              title: a.title,
              description: a.description,
              url: a.url,
              source: "NewsAPI",
            }))
          );
        } else if (selectedApi === "guardian") {
          response = await axios.get(
            `https://content.guardianapis.com/search?q=${
              filters.keyword || defaultQuery
            }&api-key=${API_KEYS.guardian}`
          );
          setArticles(
            response.data.response.results.map((a: any) => ({
              title: a.webTitle,
              description: "",
              url: a.webUrl,
              source: "The Guardian",
            }))
          );
        } else if (selectedApi === "nyt") {
          response = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
              filters.keyword || defaultQuery
            }&api-key=${API_KEYS.nyt}`
          );
          setArticles(
            response.data.response.docs.map((a: any) => ({
              title: a.headline.main,
              description: a.abstract,
              url: a.web_url,
              source: "New York Times",
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [filters, selectedApi]);

  const setSearchTerm = (term: string) => {
    setFilters({ keyword: term });

    setSearchHistory((prev) => {
      const updatedHistory = [...new Set([term, ...prev])];
      return updatedHistory.slice(0, 10);
    });
  };

  useEffect(() => {
    if (filters.keyword) {
      const filteredSuggestions = searchHistory.filter((term) =>
        term.toLowerCase().includes(filters.keyword.toLowerCase())
      );
      setSearchSuggestions(filteredSuggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [filters.keyword, searchHistory]);

  return (
    <NewsContext.Provider
      value={{
        articles,
        setFilters,
        selectedApi,
        setSelectedApi,
        searchSuggestions,
        setSearchTerm,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
