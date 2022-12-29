import Head from "next/head";
import Navbar from "components/sections/Navbar";
import Hero from "components/sections/Hero";
import Projects from "components/sections/Projects";
import Loading from "components/pieces/Loading";
import AboutComponent from "components/sections/AboutComponent";
import ContactMe from "components/sections/ContactMe";
import Footer from "components/sections/Footer";

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
      className=" font-roboto text-white relative bg-slate-800"
    >
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        {loadingIsShowing ? (
          <Loading key="uwu" sub="WELCOME" title="Wait a bit..." />
        ) : (
          <motion.div className="px-4 md:px-10 lg:px-20">
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
