import API from "./API"
import Cookie from "js-cookie";

const PartnershipAPI = {
    request(data) {
        return API.post("/partnership", data, {
            headers: { Authorization: "Bearer " + Cookie.get("token") },
            withCredentials: true,
          })
    },

    getPartnerships() {
        return API.get("/partnerships", {
            headers: { Authorization: "Bearer " + Cookie.get("token") },
            withCredentials: true,
          })
    },

    acc(id) {
        return API.post(`/partnership/${id}/accept`, {}, {
            headers: { Authorization: "Bearer " + Cookie.get("token") },
            withCredentials: true,
          })
    },

    plan(data) {
        return API.post("/contractPlan", data, {
            headers: { Authorization: "Bearer " + Cookie.get("token") },
            withCredentials: true,
          })
    },

    getPlan() {
        return API.get("/contractPlans", {
            headers: { Authorization: "Bearer " + Cookie.get("token") },
            withCredentials: true,
          })
    }
}

export default PartnershipAPI