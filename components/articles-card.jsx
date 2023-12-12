import { Link } from "react-router-dom";

export const ArticlesCard = (props) => {
  const { article } = props;
  return (
    <Link
      to={`/articles/${article.article_id}`}
      style={{
        textDecoration: "none",
        color: "black",
        maxHeight: "375px",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "0.1rem solid black",
        borderRadius: "0.5rem",
        overflow: "hidden",
        marginBottom: "0.5rem",
      }}
    >
      <img src={article.article_img_url}></img>
      <div style={{ padding: "8px" }}>
        <div style={{ margin: "0px" }}>{article.title}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              margin: "0px",
            }}
          >
            Topic: {article.topic}
          </div>
          <div
            style={{
              margin: "0px",
            }}
          >
            Author: {article.author}
          </div>
        </div>
      </div>
    </Link>
  );
};
