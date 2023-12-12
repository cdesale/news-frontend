import { useState } from "react";
import { getDateString } from "../utils/date";

export const CommentCard = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteInProgress, setShowDeleteInProgress] = useState(false);
  const [showDeleteFailed, setShowDeleteFailed] = useState(false);
  const { comment, deleteCommentFromContainer } = props;

  const triggerCommentDeletion = () => {
    setShowDeleteFailed(false);
    setShowDeleteInProgress(true);

    deleteCommentFromContainer(comment.comment_id)
      .then(() => {
        setShowDeleteInProgress(false);
      })
      .catch((err) => {
        setShowDeleteInProgress(false);
        setShowDeleteFailed(true);
      });
  };

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "1rem",
        padding: "1rem",
        justifyContent: "center",
        margin: "5px",
        maxWidth: "500px",
      }}
    >
      {!showDelete && (
        <>
          <div
            className="d-flex justify-content-between"
            style={{ marginBottom: "5px" }}
          >
            <div>Author: {comment.author}</div>
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowDelete(true)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="row">
            <div>Comment: {comment.body}</div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "2rem" }}
          >
            <div>Date: {getDateString(comment.created_at)}</div>
            <div>Upvote: {comment.votes}</div>
          </div>
        </>
      )}
      
      {showDelete && (
        <>
          <div className="row text-center">
            <p>Do you want to delete this comment?</p>
          </div>

          {showDeleteInProgress && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}

          {!showDeleteInProgress && (
            <>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginRight: "5px" }}
                  onClick={triggerCommentDeletion}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginLeft: "5px" }}
                  onClick={() => {
                    setShowDelete(false);
                    setShowDeleteFailed(false);
                  }}
                >
                  No
                </button>
              </div>
            </>
          )}

          {showDeleteFailed && (
            <div className="text-center">Could not delete comment</div>
          )}
        </>
      )}
    </div>
  );
};
