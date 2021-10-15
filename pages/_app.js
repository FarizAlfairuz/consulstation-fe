import "tailwindcss/tailwind.css";
import "styles/tailwind.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Consulstation</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
