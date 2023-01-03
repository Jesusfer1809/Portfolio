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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="index"
    >
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="px-4 md:px-10 lg:px-20 ">
        <main>
          <Hero />

          <Projects />

          <AboutComponent />

          <ContactMe />
        </main>

        <Footer />
      </div>
    </motion.div>
  );
}
