import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TokenAPI from "api/TokenAPI";
import API from "api/API";
import Swal from "sweetalert2";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(() => {
      const token = Cookie.get("token");
      const refreshToken = Cookie.get("refreshToken");

      if (!token) {
        setVerified(false);
        Swal.fire({
          icon: "error",
          title: "Mohon login terlebih dahulu",
        }).then(() => {
          router.replace("/sign-in");
        });
      } else {
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
