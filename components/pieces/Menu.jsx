import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import HamburguerButton from "components/pieces/HamburguerButton";
import LogoMenu from "components/pieces/LogoMenu";

const fadeInLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Menu({ isOpened, setIsOpened }) {
  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        exit={{ y: "-100%", transition: { duration: 0.7, ease: "easeInOut" } }}
        className=" bg-project h-screen w-full  absolute top-0 left-0 z-[999]"
        style={{
          backgroundImage: ` linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))`,
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          exit={{ y: "-100%", transition: { duration: 0.5 } }}
          key="menuDiv"
          className="  h-screen text-white relative w-full flex flex-col justify-center "
          onClick={closeMenu}
        >
          <motion.div
            variants={stagger}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="text-white  w-full items-center font-semibold mt-12  flex flex-col self-center text-3xl sm:text-4xl md:text-5xl space-y-12"
          >
            <Link href="/">
              <motion.div
                variants={fadeInLeft}
                className="cursor-pointer after:mt-2 after:m-auto after:w-0 hover:after:w-[20rem] after:transition-all after:duration-300 after:bg-white after:h-[2px] after:content-[''] after:block"
              >
                Projects & about me
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                variants={fadeInLeft}
                className="cursor-pointer after:mt-2 after:m-auto after:w-0 hover:after:w-[10rem] after:transition-all after:duration-300 after:bg-white after:h-[2px] after:content-[''] after:block"
              >
                Contact me
              </motion.div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/jesus-rondon-963b1321a/"
              passHref
            >
              <motion.a
                variants={fadeInLeft}
                target="_blank"
                className="cursor-pointer after:mt-2 after:m-auto after:w-0 hover:after:w-[8rem] after:transition-all after:duration-300 after:bg-white after:h-[2px] after:content-[''] after:block"
              >
                LinkedIn
              </motion.a>
            </Link>

            <Link href="https://github.com/Jesusfer1809" passHref>
              <motion.a
                variants={fadeInLeft}
                target="_blank"
                className="cursor-pointer after:mt-2 after:m-auto after:w-0 hover:after:w-[7rem] after:transition-all after:duration-300 after:bg-white after:h-[2px] after:content-[''] after:block"
              >
                GitHub
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Menu;
