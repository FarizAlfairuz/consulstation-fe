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
    }
}

export default PartnershipAPI