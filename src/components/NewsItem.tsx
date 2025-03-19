import React from "react";
import "../styles/styles.css";

interface NewsItemProps {
  title: string;
  description: string;
  url: string;
  source: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  url,
  source,
}) => {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <span className="source">{source}</span>
    </div>
  );
};

export default NewsItem;
