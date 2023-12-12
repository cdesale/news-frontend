import { useEffect, useState } from "react";
import { getArticlesById } from "../utils/article-by-id";
import { ArticleData } from "./article-detail";
import { useParams } from "react-router-dom";
import { CommentContainer } from "./comments-container";

export const IndividualArticleDetails = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticlesById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <div>
      <ArticleData article={article} />
      <CommentContainer article_id={article.article_id} />
    </div>
  );
};
