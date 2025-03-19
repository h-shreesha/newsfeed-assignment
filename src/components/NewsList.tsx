import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsItem from "./NewsItem";
import "../styles/styles.css";

const NewsList: React.FC = () => {
  const newsContext = useContext(NewsContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (!newsContext) return null;
  const { articles, setFilters, selectedApi, setSelectedApi } = newsContext;

  const handleSearch = () => {
    setFilters({ keyword: searchTerm });
  };

  return (
    <div className="container">
      <h1>Latest News</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="api-buttons">
        <button
          className={selectedApi === "newsapi" ? "active" : ""}
          onClick={() => setSelectedApi("newsapi")}
        >
          NewsAPI
        </button>
        <button
          className={selectedApi === "guardian" ? "active" : ""}
          onClick={() => setSelectedApi("guardian")}
        >
          The Guardian
        </button>
        <button
          className={selectedApi === "nyt" ? "active" : ""}
          onClick={() => setSelectedApi("nyt")}
        >
          NY Times
        </button>
      </div>

      <div className="news-list">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsItem key={index} {...article} />
          ))
        ) : (
          <p>No news found</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
