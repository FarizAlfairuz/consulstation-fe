import Cookie from "js-cookie";
import API from "./API";

const ArticleAPI = {
  getArticle() {
    return API.get("/articles");
  },

  searchArticle(query) {
    return API.get("/articles?limit=2&page=0&search=" + query);
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
