import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TokenAPI from "api/TokenAPI";
import API from "api/API";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(() => {
      const token = Cookie.get("token");
      const refreshToken = Cookie.get("refreshToken");
      // console.log(refreshToken)

      if (!token) {
        setVerified(false);
        router.replace("/");
        // console.log("hehe");
        // if (refreshToken) {
        //   API.post("/token", { refreshToken })
        //     .then((res) => {
        //       console.log(res);
        //       Cookie.set("refreshToken", res.data.refreshToken);
        //       Cookie.set("token", res.data.accessToken);
        //     })
        //     .catch(() => {
        //       console.log("Something wrong!");
        //     });
        // } else {
        //   setVerified(false);
        //   router.replace("/");
        // }
      } else {
        // API.interceptors.response.use(
        //   (response) => response,
        //   (error) => {
        //     if (error.response && error.response.status === 403) {
        //       TokenAPI.getToken(refreshToken)
        //         .then(() => {
        //           setVerified(true);
        //         })
        //         .catch(() => {
        //           Cookie.remove("token");
        //           Cookie.remove("refreshToken");
        //           Cookie.remove("logged");
        //         });
        //       return Promise.reject();
        //     }
        //     return Promise.reject(error);
        //   }
        // );
        setVerified(true);
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
