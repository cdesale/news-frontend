import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://news-back-end.onrender.com/api/articles")
    .then(({ data }) => {
      return data["articles"];
    });
};
