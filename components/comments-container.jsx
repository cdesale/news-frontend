import { getCommentsById } from "../utils/get-comments-by-article-id";
import { useState, useEffect } from "react";
import { CommentCard } from "./comment-card";
import { deleteComment } from "../utils/api";
import Toast from "react-bootstrap/Toast";

export const CommentContainer = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showCommentDeletedToast, setShowCommentDeletedToast] = useState(false);
  const toggleShowCommentDeletedToast = () =>
    setShowCommentDeletedToast(!showCommentDeletedToast);

  const { article_id } = props;

  const deleteCommentFromContainer = (comment_id) => {
    return deleteComment(comment_id).then(() => {
      toggleShowCommentDeletedToast();
    });
  };

  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [deleteCommentFromContainer]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Toast
          onClose={toggleShowCommentDeletedToast}
          show={showCommentDeletedToast}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">NC News</strong>
          </Toast.Header>
          <Toast.Body>Comment deleted successfully.</Toast.Body>
        </Toast>
      </div>
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
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              deleteCommentFromContainer={deleteCommentFromContainer}
            />
          );
        })}
    </>
  );
};
