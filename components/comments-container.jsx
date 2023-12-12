import { getCommentsById } from "../utils/get-comments-by-article-id";
import { useState, useEffect } from "react";
import { CommentCard } from "./comment-card";

export const CommentContainer = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = props;

  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div
        className="text-center"
        style={{
          margin: "5px",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        Comments
      </div>
      {isLoading && <p>Loading...</p>}
      {comments &&
        comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })}
    </>
  );
};
