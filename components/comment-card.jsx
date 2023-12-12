import { getDateString } from "../utils/date";

export const CommentCard = (props) => {
  const { comment } = props;
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
      <div className="row" style={{ marginBottom: "5px" }}>
        <div>Author: {comment.author}</div>
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
    </div>
  );
};
