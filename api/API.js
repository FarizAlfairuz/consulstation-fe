import axios from "axios";
import Cookie from "js-cookie";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
// console.log("blac")
// const token = Cookie.get("token")
// console.log(Cookie.get("token"))
const refreshToken = Cookie.get("refreshToken");

const API = axios.create({
  baseURL: baseURL
});

// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.log("unauthorized");
//       // API.post("/token", {refreshToken})
//       // .then((res) => {
//       //   Cookie.set("refreshToken", res.data.refreshToken)
//       //   Cookie.set("token", res.data.accessToken)
//       // })
//       // .catch(() => {
//       //   console.log("Something wrong!");
//       // });

//       return Promise.reject();
//     }
//     if (error.response && error.response.status === 403) {
//       console.log("forbidden");
//       // API.post("/token", { refreshToken })
//       //   .then((res) => {
//       //     console.log(res)
//       //     Cookie.set("refreshToken", res.data.refreshToken);
//       //     Cookie.set("token", res.data.accessToken);
//       //   })
//       //   .catch(() => {
//       //     console.log("Something wrong!");
//       //   });

//       return Promise.reject();
//     }

//     return Promise.reject(error);
//   }
// );

// API.interceptors.request.use((req) => {
//   // token = Cookie.get("token")
//   // console.log(token)
//   // console.log(`${req.method} ${req.url}`);

//   return req;
// });

export default API;
