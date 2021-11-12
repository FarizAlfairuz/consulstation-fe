import Cookie from "js-cookie";
import API from "./API";

const ArticleAPI = {
  getArticle() {
    return API.get("/articles");
  },

  getById(id) {
    return API.get(`/article/${id}`)
  },

  createArticle(data) {
    return API.post("/article", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },
};

export default ArticleAPI;
