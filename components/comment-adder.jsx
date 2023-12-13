import { useState } from "react";
import { addNewComment } from "../utils/api";
import { currentUser } from "../utils/user";

export const AddCommentContainer = (props) => {
  const [commentInput, setCommentInput] = useState("");
  const [showCommentAdded, setShowCommentAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const { article_id, addCommentInContainer } = props;

  const updateComment = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    setShowError(false);

    const newComment = {
      body: commentInput,
      username: currentUser,
    };

    addNewComment(article_id, newComment)
      .then((data) => {
        setIsLoading(false);
        addCommentInContainer(data);
        setShowCommentAdded(true);
        setCommentInput("");
      })
      .catch((err) => {
        setShowError(true);
        setIsLoading(false);
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
      <div className="d-flex justify-content-center">
        <p>Add a comment</p>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <textarea
              type="text"
              placeholder="Type comment.."
              value={commentInput}
              onChange={updateComment}
              required={true}
            ></textarea>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end p-0 mt-2">
              {!isLoading && <button>Post</button>}

              {isLoading && (
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {showCommentAdded && (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          <p>Comment added</p>
        </div>
      )}

      {showError && (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          <p>Something went wrong</p>
        </div>
      )}
    </div>
  );
};
