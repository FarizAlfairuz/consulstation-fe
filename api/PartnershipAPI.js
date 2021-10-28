import API from "./API"

const PartnershipAPI = {
    request(data) {
        return API.post("/partnership", data)
    }
}

export default PartnershipAPI