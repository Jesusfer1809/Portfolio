import React from "react";
import Accordion from "./Accordion";
import { useNewView } from "../hooks/useNewView";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AboutComponent() {
  const { ref: ref1, inView: inView1, animation: animation1 } = useNewView();
  const { ref: ref2, inView: inView2, animation: animation2 } = useNewView();

  return (
    <div ref={ref1} className="px-8 pb-20 my-16">
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          animate={animation1}
          className="text-sm text-gray_project tracking-widest"
        >
          NICE TO MEET YOU!
        </motion.span>
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          animate={animation1}
          className=" text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Introducing Myself
        </motion.h2>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={stagger}
        className="mt-12 leading-relaxed font-medium sm:text-lg md:text-xl"
      >
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={animation2}
          className="block"
        >
          Hi. I'm Jesus Rondon, a totally self-taught web developer who can help
          you with any idea you have. Always focused on giving the best UX/UI
          and responsiveness to the websites I make.
        </motion.p>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={animation2}
          className="block mt-4"
        >
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
