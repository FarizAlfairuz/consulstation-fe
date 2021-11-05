import API from "./API"

const ArticleAPI = {
    getArticle() {
        return API.get("/articles")
    },

    createArticle(data) {
        return API.post("/article", data)
    }
}

export default ArticleAPI