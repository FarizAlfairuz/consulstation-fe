import API from "./API";

const AuthAPI = {
  register(data) {
    return API.post("/register", data);
  },
};

export default AuthAPI;
