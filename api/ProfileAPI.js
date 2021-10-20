import API from "./API";
// import TokenAPI from "./TokenAPI"

const ProfileAPI = {
  getUserProfile() {
    return API.get("/user/profile");
  },
  getConsultantProfile() {
    return API.get("/consultant/profile");
  },
};

export default ProfileAPI;
