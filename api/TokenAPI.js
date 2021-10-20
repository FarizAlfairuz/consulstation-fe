import API from "./API";
import Cookie from "js-cookie";

const refreshToken = Cookie.get("refreshToken");

const TokenAPI = {
  getToken() {
    API.post("/token", {refreshToken})
      .then((res) => {
        console.log(res.data);
        // Cookie.set("refreshToken", res.data.refreshToken)
        // Cookie.set("token", res.data.accessToken)
      })
      .catch(() => {
        console.log("Something wrong!");
      });
  },
};

export default TokenAPI;
