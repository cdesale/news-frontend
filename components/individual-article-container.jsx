import { useEffect, useState } from "react";
import { getArticlesById } from "../utils/article-by-id";
import { ArticleData } from "./article-detail";
import { useParams } from "react-router-dom";
import { CommentContainer } from "./comments-container";
import { Error } from "./error-handling";

export const IndividualArticleDetails = () => {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const { article_id } = useParams();

  useEffect(() => {
    setErrorMessage();

    getArticlesById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 404) {
          setErrorMessage("Article not found");
        } else {
          setErrorMessage("Something went wrong!");
        }
      });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {article && (
        <div>
          <ArticleData article={article} />
          {article.comment_count > 0 && (
            <CommentContainer article_id={article.article_id} />
          )}
          {article.comment_count === 0 && <p>No Comments</p>}
        </div>
      )}
      {errorMessage && <Error message={errorMessage} />}
    </div>
  );
};
