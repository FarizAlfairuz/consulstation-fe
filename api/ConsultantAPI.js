import API from "./API";
import Cookie from "js-cookie";

const ConsultantAPI = {
  getConsultants() {
    return API.get("/consultants");
  },

  getPublicProfile(id) {
    return API.get(`/consultant/${id}`)
  },

  getConsProfile() {
    return API.get("/consultant/profile", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: false,
    })
  }
};

export default ConsultantAPI;
