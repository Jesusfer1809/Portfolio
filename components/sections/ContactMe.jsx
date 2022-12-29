import React from "react";

import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";

import Link from "next/link";

function ContactMe() {
  return (
    <motion.div
      initial={animScrollProps.animInitial}
      transition={animScrollProps.animTransition}
      whileInView={animScrollProps.animWhileInView}
      viewport={animScrollProps.animViewport}
      className=" p-8 pt-0  md:p-16 md:pt-8  flex items-center  md:justify-center"
    >
      <motion.div className="flex flex-col md:items-center">
        <span className=" text-xs sm:text-base text-gray_project block mb-4 tracking-[3px] sm:tracking-[7px]">
          NEED A DEVELOPER?
        </span>
        <Link href="/contact">
          <span className=" text-4xl sm:text-5xl md:text-6xl font-bold block border-b-4 pb-2 border-transparent hover:border-project cursor-pointer transition-all duration-300">
            Let's work together &rarr;
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default ContactMe;
