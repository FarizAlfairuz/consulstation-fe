import API from "./API";
// import TokenAPI from "./TokenAPI"

const ConsultantAPI = {
  getConsultants() {
    return API.get("/consultants");
  },

  getPublicProfile(id) {
    return API.get(`/consultant/${id}`)
  },

  getConsProfile() {
    return API.get("/consultant/profile")
  }
};

export default ConsultantAPI;
