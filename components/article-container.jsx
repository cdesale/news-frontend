import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { ArticlesCard } from "./articles-card";
import { SearchContainer } from "./search-container";
import { useSearchParams } from "react-router-dom";

export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    setArticles([]);
    setShowError(false);

    getAllArticles(searchParams.get("topic"))
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setShowError(true);
      });
  }, [searchParams]);

  return (
    <>
      <SearchContainer />

      {isLoading && <p>Loading ...</p>}

      {articles &&
        articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}

      {showError && "Something went wrong"}
    </>
  );
};
