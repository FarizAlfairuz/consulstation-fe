import Cookie from "js-cookie";
import API from "./API";

const ArticleAPI = {
  getArticle() {
    return API.get("/articles");
  },

  createArticle(data) {
    return API.post("/article", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },
};

export default ArticleAPI;
