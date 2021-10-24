import API from "./API";

const AuthAPI = {
  register(data) {
    return API.post("/register", data);
  },

  login(data) {
    return API.post("/login", data)
  },

  logout(data) {
    return API.post("/logout", data)
  }
};

export default AuthAPI;
