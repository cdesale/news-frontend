import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { ArticlesCard } from "./articles-card";
import { SearchContainer } from "./search-container";
import { useSearchParams } from "react-router-dom";
import { SortByContainer } from "./sort-container";
import { Error } from "../components/error-handling";


export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setIsLoading(true);
    setArticles([]);
    setErrorMessage();

    getAllArticles(
      searchParams.get("topic"),
      searchParams.get("sort_by"),
      searchParams.get("order")
    )
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 400) {
          setErrorMessage("Incorrect sorting request");
        } else if (err.response.status === 404) {
          setErrorMessage("Topic not found");
        } else {
          setErrorMessage("Something went wrong!");
        }
      });
  }, [searchParams]);

  return (
    <>
      <SortByContainer />
      <SearchContainer />
      {isLoading && <p>Loading ...</p>}
      {articles &&
        articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}

      {errorMessage && <Error message={errorMessage} />}
    </>
  );
};
