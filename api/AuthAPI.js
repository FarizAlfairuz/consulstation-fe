import API from "./API";

const AuthAPI = {
  register(data) {
    return API.post("/register", data);
  },

  login(data) {
    return API.post("/login", data);
  },

  logout(data) {
    return API.post("/logout", data);
  },

  loginAdmin(data) {
    return API.post("/login/admin", data);
  },
};

export default AuthAPI;
