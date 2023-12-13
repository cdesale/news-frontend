import { useEffect, useState } from "react";
import { getArticlesById } from "../utils/article-by-id";
import { ArticleData } from "./article-detail";
import { useParams } from "react-router-dom";
import { CommentContainer } from "./comments-container";

export const IndividualArticleDetails = () => {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showSomethingWrong, setShowSomethingWrong] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getArticlesById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setShowSomethingWrong(true);
        setIsLoading(false);
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
      {showSomethingWrong && <p>Something went wrong!</p>}
    </div>
  );
};

