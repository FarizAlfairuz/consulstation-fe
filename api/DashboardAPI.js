import API from "./API";
import Cookie from "js-cookie";

const DashboardAPI = {
  getDashboard() {
    return API.get("/dashboard", {
      headers: { Authorization: "Bearer " + Cookie.get("token") },
      withCredentials: true,
    })
  }
};

export default DashboardAPI;
