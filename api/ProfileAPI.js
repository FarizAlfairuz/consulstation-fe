import API from "./API";
import Cookie from "js-cookie";

const ProfileAPI = {
  getUserProfile() {
    return API.get("/user/profile", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: false,
    });
  },

  editUserProfile(data) {
    return API.post("/user/profile/update", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: false,
    });
  },

  uploadPhotoProfile(data) {
    return API.post("/user/avatar", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: false,
    });
  },

  deletePhotoProfile(data) {
    return API.delete("/user/avatar", data, {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: false,
    });
  },

  getConsultantProfile() {
    return API.get("/consultant/profile", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: false,
    });
  },
};

export default ProfileAPI;
