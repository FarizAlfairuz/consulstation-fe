import API from "./API";
import Cookie from "js-cookie";

const ProfileAPI = {
  getUserProfile() {
    return API.get("/user/profile", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  editUserProfile(data) {
    return API.post("/user/profile/update", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },
  
  editConsProfile(data) {
    return API.post("/user/consultant/update", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  uploadPhotoProfile(data) {
    return API.post("/user/avatar", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  uploadConsProfile(data) {
    return API.post("/consultant/avatar", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  deletePhotoProfile(data) {
    return API.delete("/user/avatar", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  deleteConsProfile(data) {
    return API.delete("/consultant/avatar", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  getConsultantProfile() {
    return API.get("/consultant/profile", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },

  changePassUser(data) {
    return API.post("/user/password/update", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },
  
  changePassCons(data) {
    return API.post("/consultant/password/update", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    });
  },
};

export default ProfileAPI;
