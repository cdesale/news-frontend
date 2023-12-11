import { useEffect, useState } from "react";
import { getArticlesById } from "../utils/article-by-id";
import { ArticleData } from "./article-detail";

export const IndividualArticleDetails = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesById(1).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);

  console.log(article);

  if (isLoading) {
    return <p>Is Loading..</p>;
  }
  return (
    <div>
      <h3>Article details</h3>
      <ArticleData article={article} />
    </div>
  );
};
