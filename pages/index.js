import Head from "next/head";
import Image from "next/image";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Tijanic | Home</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Author Ben Tijanic. Web portfolio with project links.
      Front End Development. Back end development. Techologies: MongoDB, React.js, JavaScript, Html5, CSS3, Node.js , Express.js "
        />

        <link rel="apple-touch-icon" href="/bluefav.png" />
        <link rel="shortcut icon" type="image/png" href="/bluefav.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.bentijanic.com" />
        <meta
          property="og:title"
          content="Full Stack Web Developer, Ben Tijanic"
        />
        <meta
          name="twitter:title"
          content="Full Stack Web Developer, Ben Tijanic"
        />
        <meta
          property="og:description"
          content="Full Stack Web Developer,Ben Tijanic. Making responsive, efficient and reliable web pages and applications.  Combined with clean, representative and modern designs. Get your web presence noticed today!"
        />

        <meta
          name="twitter:description"
          content="Full Stack Web Developer,Ben Tijanic. Making responsive, efficient and reliable web pages and applications.  Combined with clean, representative and modern designs. Get your web presence noticed today!"
        />
        <link rel="icon" href="/bluefav.png" />
      </Head>
      <Navbar />
      <Skills />
      <Bio />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
