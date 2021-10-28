import API from "./API";
import Cookie from "js-cookie"

const TokenAPI = {
  getToken(refreshToken) {
    return API.post("/token", {refreshToken})
  },

  getCookieToken() {
    const token = Cookie.get("token")
    return { token }
  }
};

export default TokenAPI;
