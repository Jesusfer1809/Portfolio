import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Loading from "../components/Loading";
import AboutComponent from "../components/AboutComponent";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loadingIsShowing, setLoadingIsShowing] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoadingIsShowing(false), 1300);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      key="index"
      className=" font-helvetica_now text-project relative selection:bg-gray_project selection:text-white"
    >
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        {loadingIsShowing ? (
          <Loading key="uwu" sub="WELCOME" title="Wait a bit..." />
        ) : (
          <motion.div>
            <Navbar />

            <Hero />

            <Projects />

            <AboutComponent />

            <ContactMe />

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
