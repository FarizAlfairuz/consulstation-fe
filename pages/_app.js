import "tailwindcss/tailwind.css";
import "styles/tailwind.css";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer";
import Head from "next/head";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import UserTemplate from "templates/UserTemplate";
import AdminTemplate from "templates/AdminTemplate";

function MyApp({ Component, pageProps }) {
  const roleCookie = Cookie.get("role");
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(roleCookie);
  }, []);

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
    <div>
      <Head>
        <title>Consulstation</title>
      </Head>

      <UserTemplate>
        <Component {...pageProps} />
      </UserTemplate>
    </div>
  );
}

export default MyApp;
