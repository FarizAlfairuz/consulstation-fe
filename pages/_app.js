import "tailwindcss/tailwind.css";
import "styles/tailwind.css";
import Head from "next/head";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import UserTemplate from "templates/UserTemplate";
import AdminTemplate from "templates/AdminTemplate";
import API from "api/API";
import { SocketProvider, useSockets } from "utils/socket";
import useSocket from "hooks/useSocket";

function MyApp({ Component, pageProps }) {
  const roleCookie = Cookie.get("role");
  const [role, setRole] = useState("");
  
  useEffect(() => {
    setRole(roleCookie);
  }, [roleCookie]);

 const socket = useSocket()
//  console.log(socket)

  useEffect(() => {
    
    API.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 403) {
          console.log("forbidden");
          API.post("/token", { refreshToken: Cookie.get("refreshToken") })
            .then((res) => {
              console.log(res)
              Cookie.set("refreshToken", res.data.data.refreshToken);
              Cookie.set("token", res.data.data.token);
              Cookie.set("role", res.data.data.role);
              console.log("berhasil refresh token")
              window.location.reload()
            })
            .catch(() => {
              console.log("Something wrong!");
            });
    
          return Promise.reject();
        }

        if (error.response && error.response.status === 401) {

        }
    
        return Promise.reject(error);
      }
    );
  })

  return role === "admin" ? (
    <div>
      <Head>
        <title>Consulstation Admin</title>
      </Head>
      <AdminTemplate>
        <Component {...pageProps} />
      </AdminTemplate>
    </div>
  ) : (
    <SocketProvider>
      <Head>
        <title>Consulstation</title>
      </Head>

      <UserTemplate>
        <Component {...pageProps}  />
      </UserTemplate>
    </SocketProvider>
  );
}

export default MyApp;
