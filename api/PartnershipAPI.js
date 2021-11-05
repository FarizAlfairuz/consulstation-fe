import API from "./API"

const PartnershipAPI = {
    request(data) {
        return API.post("/partnership", data)
    },

    getPartnerships() {
        return API.get("/partnerships")
    },

    acc(id) {
        return API.post(`/partnership/${id}/accept`)
    }
}

export default PartnershipAPI