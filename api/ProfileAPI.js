import API from "./API";
import TokenAPI from "./TokenAPI"

const ProfileAPI = {
  getUserProfile() {

    return API.get("/user/profile");
  },

  editUserProfile(data) {
    return API.post("/user/profile/update", data);
  },

  uploadPhotoProfile(data) {
    return API.post("/user/avatar", data);
  },

  deletePhotoProfile(data) {
    return API.delete("/user/avatar", data);
  },

  getConsultantProfile() {
    return API.get("/consultant/profile");
  },
};

export default ProfileAPI;
