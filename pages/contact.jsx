import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "components/sections/Navbar";
import Loading from "components/pieces/Loading";
import ContactForm from "components/pieces/ContactForm";
import Footer from "components/sections/Footer";

// const MapWrapper = dynamic(() => import("components/pieces/MapWrapper"), {
//   ssr: false,
// });
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

function contact() {
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
      className="font-roboto text-white relative bg-slate-800"
    >
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />

        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        /> */}
      </Head>

      <div className="px-4 md:px-10 lg:px-20">
        <Navbar />

        {/* <MapWrapper /> */}
        <main className=" pt-36 lg:pt-40">
          <ContactForm />
        </main>

        <Footer />
      </div>
    </motion.div>
  );
}

export default contact;
