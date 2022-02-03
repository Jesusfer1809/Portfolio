import React from "react";
import Navbar from "./Navbar";
import LogoMenu from "./LogoMenu";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
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

function Menu() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ y: "-100%", transition: { duration: 0.5 } }}
      key="menuDiv"
      className=" bg-project h-screen text-white relative"
    >
      <div className="p-4   flex justify-between items-center ">
        <LogoMenu />
      </div>

      <motion.div
        variants={pulseVariant}
        className="  h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20 bg-gray_project rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      <motion.div
        variants={fadeInUp}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="text-white font-medium  flex flex-col absolute bottom-8 md:bottom-16 left-8 md:left-16 "
      >
        <span className="block mb-4 text-sm md:text-base lg:text-xl ">
          WELCOME
        </span>
        <span className=" block text-5xl lg:text-6xl font-bold">
          WAIT A BIT
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
