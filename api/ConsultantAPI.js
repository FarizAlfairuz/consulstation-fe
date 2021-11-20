import API from "./API";
import Cookie from "js-cookie";

const ConsultantAPI = {
  getConsultants() {
    return API.get("/consultants");
  },

  searchConsultants(query) {
    return API.get("/consultants?limit=2&page=0&search=" + query);
  },

  getPublicProfile(id) {
    return API.get(`/consultant/${id}`)
  },

  getConsProfile() {
    return API.get("/consultant/profile", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    })
  }
};

export default ConsultantAPI;
