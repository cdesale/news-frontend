export const ArticleData = (props) => {
  const { article } = props;

  const getDateString = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const finalDate = day + "/" + month + "/" + year;
    return finalDate;
  };

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "1rem",
        padding: "1rem",
        margin: "5px",
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
        <div className="row">
          <img style={{ padding: "0px" }} src={article.article_img_url}></img>
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
