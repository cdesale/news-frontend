import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { ArticlesCard } from "./articles-card";
import { SearchContainer } from "./search-container";

export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <SearchContainer />
      {isLoading && <p>Loading...</p>}
      {articles &&
        articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}
    </>
  );
};
