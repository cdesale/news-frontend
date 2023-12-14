import axios from "axios";

export const getAllArticles = (topic) => {
  let url = "https://news-back-end.onrender.com/api/articles";
  if (topic) {
    url += `?topic=${topic}`;
  }
  return axios.get(url).then(({ data }) => {
    return data["articles"];
  });
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://news-back-end.onrender.com/api/comments/${comment_id}`
  );
};

export const addNewComment = (article_id, comment) => {
  return axios
    .post(
      `https://news-back-end.onrender.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data["comment"][0];
    });
};

export const getTopics = () => {
  return axios
    .get(`https://news-back-end.onrender.com/api/topics`)
    .then(({ data }) => {
      return data["topics"];
    });
};
