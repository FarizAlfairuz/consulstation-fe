import API from "./API";

const AuthAPI = {
  register(data) {
    return API.post("/register", data);
  },

  login(data) {
    return API.post("/login", data)
  }
};

export default AuthAPI;
