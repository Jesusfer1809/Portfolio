import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import mapBg from "../public/amazon_project.jpg";

const MapWrapper = dynamic(() => import("../components/MapWrapper"), {
  ssr: false,
});
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

function contact() {
  const [loadingIsShowing, setLoadingIsShowing] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoadingIsShowing(false), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="font-helvetica_now text-project relative selection:bg-gray_project selection:text-white"
    >
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Head>

      <AnimatePresence exitBeforeEnter>
        {loadingIsShowing ? (
          <Loading key="uwu2" sub="CONTACT" title="Get in touch" bg={mapBg} />
        ) : (
          <div>
            <Navbar />

            <MapWrapper />

            <ContactForm />

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default contact;
