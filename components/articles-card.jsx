export const ArticlesCard = (props) => {
  const { article } = props;
  return (
    <div
      style={{
        maxHeight: "350px",
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
        <h3 style={{ margin: "0px" }}>{article.title}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px",
            marginTop: "16px",
          }}
        >
          <h5
            style={{
              margin: "0px",
            }}
          >
            Topic: {article.topic}
          </h5>
          <h5
            style={{
              margin: "0px",
            }}
          >
            Author: {article.author}
          </h5>
        </div>
      </div>
    </div>
  );
};