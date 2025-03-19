import React from "react";
import { NewsProvider } from "./context/NewsContext";
import NewsList from "./components/NewsList";

const App: React.FC = () => {
  return (
    <NewsProvider>
      <div>
        <NewsList />
      </div>
    </NewsProvider>
  );
};

export default App;
