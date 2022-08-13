import React from "react";
import Accordion from "./Accordion";

import { motion } from "framer-motion";
import { animScrollProps } from "../utils/anim";

function AboutComponent() {
  return (
    <div className="px-8 pb-20 my-16" id="about">
      <motion.div
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
      >
        <motion.span className="text-sm text-gray_project tracking-widest">
          NICE TO MEET YOU!
        </motion.span>
        <motion.h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold">
          Introducing Myself
        </motion.h2>
      </motion.div>

      <motion.div
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className="mt-12 leading-relaxed font-medium sm:text-lg md:text-xl"
      >
        <motion.p className="block">
          Hi. I'm Jesus Rondon, a totally self-taught web developer who can help
          you with any idea you have. Always focused on giving the best UX/UI
          and responsiveness to the websites I make.
        </motion.p>

        <motion.p className="block mt-4">
          At the time, I work with the MERN stack. I'm a big fan of JavaScript
          ecosystem!. <br />
          Here are all the key concepts I've learnt so far:
        </motion.p>
      </motion.div>

      <div className="flex justify-center mt-20">
        <Accordion />
      </div>
    </div>
  );
}

export default AboutComponent;
