import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../seeds/data.json";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar navbar={data.navbar} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
