import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContactUs from "./sections/ContactUs";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Auric Asia</title>
        <meta name="description" content="Auric Asia" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
