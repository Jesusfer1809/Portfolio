import { motion } from "framer-motion";
import React from "react";
import scrollStyles from "styles/scrollIcon.module.css";
import { Link as ScrollLink } from "react-scroll";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
import { fadeVariant, staggerContainer } from "utils/anim";

function Hero() {
  return (
    <div className="h-screen relative flex flex-col  justify-center -mt-16 ">
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" w-full lg:w-4/5 xl:w-3/5 "
      >
        <motion.span
          variants={fadeVariant()}
          className="text-indigo-400 tracking-[1px] text-sm sm:text-base"
        >
          Hi, I'm
        </motion.span>

        <motion.h1
          variants={fadeVariant()}
          className=" text-4xl sm:text-5xl md:text-6xl font-bold mt-3 tracking-[1px]"
        >
          Jesus Rondon{" "}
        </motion.h1>

        <motion.h2
          variants={fadeVariant()}
          className=" text-3xl text-slate-200 sm:text-4xl md:text-4xl font-bold mt-4 tracking-[1px]"
        >
          Full-stack web developer{" "}
        </motion.h2>

        <motion.p
          variants={fadeVariant()}
          className="block text-slate-300 text-base sm:text-lg md:text-lg font-medium mt-8 leading-relaxed"
        >
          I'm a self-taught developer placed in Peru.
          <br /> Lover of the{" "}
          <span className="text-indigo-400">MERN stack</span>, I can bring to
          reality every web idea you have.
        </motion.p>

        <motion.div
          variants={fadeVariant()}
          className="flex items-center space-x-4 sm:space-x-8 mt-8"
        >
          <div className="font-semibold pb-1 text-base sm:text-lg md:text-xl border-b-2 border-indigo-400 hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all duration-300">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1500}
            >
              See my projects
            </ScrollLink>{" "}
          </div>
          <span className="font-medium text-indigo-400 text-sm sm:text-base">
            or
          </span>{" "}
          <div className="font-semibold pb-1 text-base sm:text-lg md:text-xl border-b-2 border-indigo-400 hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all duration-300">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1500}
            >
              Read about me
            </ScrollLink>{" "}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        }}
        className="absolute right-0 bottom-4 sm:bottom-8 md:bottom-12 left-0 m-auto w-8 h-14"
      >
        <div className={scrollStyles.mousey}>
          <div className={scrollStyles.scroller}></div>
        </div>
      </motion.div>

      <div className="absolute hidden right-0 top-28 sm:flex gap-8">
        <Link href="https://github.com/Jesusfer1809">
          <a target="_blank">
            <AiOutlineGithub className="w-6 h-6 md:w-8 md:h-8  lg:w-10 lg:h-10  text-indigo-400 hover:text-indigo-600 transition-all" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/jesus-rondon-963b1321a/">
          <a target="_blank">
            <AiOutlineLinkedin className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-indigo-400 hover:text-indigo-600 transition-all" />
          </a>
        </Link>
        <Link href="https://twitter.com/Jesus_R_1809">
          <a target="_blank">
            <AiOutlineTwitter className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-indigo-400 hover:text-indigo-600 transition-all" />
          </a>
        </Link>
      </div>
    </div>
  );
}

/*

.mousey {
  width: 3px;
  padding: 5px 10px;
  height: 35px;
  border: 2px solid #000;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #000;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
*/

export default Hero;
