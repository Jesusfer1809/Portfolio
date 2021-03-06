import React from "react";
import { useNewView } from "../hooks/useNewView";
import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function ContactMe() {
  const { ref: ref1, inView: inView1, animation: animation1 } = useNewView();

  return (
    <motion.div
      ref={ref1}
      variants={stagger}
      initial="initial"
      animate="animate"
      className=" p-8 pt-0  md:p-16 md:pt-8  flex items-center  md:justify-center"
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={animation1}
        className="flex flex-col md:items-center"
      >
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
