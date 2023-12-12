import axios from "axios";

export const getCommentsById = (article_id) => {
  return axios
    .get(
      `https://news-back-end.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data["comments"];
    });
};
