import React from "react";
import Navbar from "components/sections/Navbar";
import LogoMenu from "components/pieces/LogoMenu";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const pulseVariant = {
  initial: {
    scale: 0.5,
    opacity: 1,
  },
  animate: {
    scale: 2,
    opacity: 0,
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  },
};

function Loading({ sub, title, bg }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0, transition: { duration: 0.7 } }}
        exit={{ y: "-100%", transition: { duration: 0.7, ease: "easeInOut" } }}
        className=" bg-project h-full w-full  absolute top-0 left-0 "
        style={
          bg && {
            backgroundImage: ` linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)) ,url(https://i.imgur.com/hcZVgfs.jpg)`,
            backgroundSize: "cover",
          }
        }
      ></motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        exit={{ y: "-100%", transition: { duration: 0.5 } }}
        key="menuDiv"
        className="  h-screen text-white relative  "
      >
        <motion.div
          variants={fadeInUp}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="p-4   flex justify-between items-center"
        >
          <LogoMenu />
        </motion.div>

        <motion.div
          variants={pulseVariant}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="  h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20 bg-gray_project rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></motion.div>

        <motion.div
          variants={fadeInUp}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="text-white font-medium  flex flex-col absolute bottom-8 md:bottom-16 left-8 md:left-16 "
        >
          <span className="block mb-4 text-sm md:text-base lg:text-xl ">
            {sub}
          </span>
          <span className=" block text-5xl lg:text-7xl font-bold">{title}</span>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Loading;
