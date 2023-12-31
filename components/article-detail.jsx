import { getDateString } from "../utils/date";

export const ArticleData = (props) => {
  const { article } = props;

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "1rem",
        padding: "1rem",
        margin: "5px",
        maxWidth: "500px",
      }}
    >
      <div className="text-center">
        <h2>{article.title}</h2>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>Author: {article.author}</div>
          <div>Date: {getDateString(article.created_at)}</div>
        </div>
        <div className="row justify-content-center">
          <img
            style={{ padding: "0px", maxWidth: "575px", maxHeight: "350px" }}
            src={article.article_img_url}
          ></img>
        </div>
        <div className="row">{article.body}</div>
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "2rem" }}
        >
          <div>Votes: {article.votes}</div>
          <div>
            <button>Vote this article</button>
          </div>
        </div>
      </div>
    </div>
  );
};
