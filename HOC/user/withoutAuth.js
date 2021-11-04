import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const withoutAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [notLogged, setNotLogged] = useState(false);
    useEffect(async () => {
      const token = Cookie.get("token");

      if (token) {
        setNotLogged(false);
        router.replace("/");
      } else {
        setNotLogged(true);
      }
    }, []);

    if (notLogged) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withoutAuth;
