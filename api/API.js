import axios from "axios";
import Cookie from "js-cookie"

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
const token = Cookie.get("token")
const refreshToken = Cookie.get("refreshToken");

const API = axios.create({
  baseURL: baseURL,
  headers: { 'Authorization': 'Bearer ' + token },
  withCredentials: true
});

API.interceptors.response.use(response => response, error => {
  if (error.response  && error.response.status === 401) {
      console.log("unauthorized")
      // API.post("/token", {refreshToken})
      // .then((res) => {
      //   Cookie.set("refreshToken", res.data.refreshToken)
      //   Cookie.set("token", res.data.accessToken)
      // })
      // .catch(() => {
      //   console.log("Something wrong!");
      // });

      return Promise.reject()
  }



  return Promise.reject(error)
})

export default API;
