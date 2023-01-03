import React from "react";

import { motion } from "framer-motion";
import { animScrollProps, fadeVariant } from "utils/anim";

import Link from "next/link";

function ContactMe() {
  return (
    <motion.div
      variants={fadeVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contact"
      className=" my-44  flex items-center  md:justify-center"
    >
      <motion.div className="flex flex-col">
        <span className=" text-xs sm:text-base text-indigo-400 block mb-4 tracking-[3px] sm:tracking-[7px]">
          WANT TO SAY HI?
        </span>
        <Link href="/contact">
          <span className=" text-4xl sm:text-5xl md:text-6xl font-bold block border-b-4 pb-2 border-indigo-400 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer transition-all duration-300">
            Drop me a line &rarr;
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default ContactMe;
