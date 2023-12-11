import axios from "axios";

export const getArticlesById = (article_id) => {
  return axios
    .get(`https://news-back-end.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data["article"];
    });
};
