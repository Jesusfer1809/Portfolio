import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuIsShowing, setMenuIsShowing] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setMenuIsShowing(false), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className=" font-helvetica_now text-project relative selection:bg-gray_project selection:text-white">
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        {menuIsShowing ? (
          <Menu key="uwu" />
        ) : (
          <div>
            <Navbar
              fillColor="black"
              hoverColor="gray_project"
              bg="[rgba(255,255,255,0.8)]"
            />

            <Hero />

            <Projects />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
