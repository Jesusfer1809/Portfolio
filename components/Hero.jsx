import { motion } from "framer-motion";
import React from "react";
import scrollStyles from "../styles/scrollIcon.module.css";

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Hero() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="h-screen relative flex flex-col  justify-center p-8 mb-8"
    >
      <motion.div variants={stagger} className=" w-full lg:w-4/5 xl:w-3/5 ">
        <motion.span
          variants={fadeInUp}
          className="text-gray_project tracking-[7px] text-xs sm:text-sm"
        >
          JESUS RONDON
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className=" text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2"
        >
          Full-stack web developer{" "}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="block text-gray_project text-base sm:text-lg md:text-[1.375rem] font-medium mt-8 leading-relaxed"
        >
          Over two years in the industry. I'm a junior software engineer with a
          passion for technology and always learning new features. Let's work
          together and make amazing websites that your users will love!
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex items-center space-x-4 sm:space-x-8 mt-8"
        >
          <span className="font-semibold text-base sm:text-lg md:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300">
            View my projects
          </span>{" "}
          <span className="font-medium text-gray_project text-sm sm:text-base">
            or
          </span>{" "}
          <span className="font-semibold text-base sm:text-lg md:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300">
            Read about me
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="absolute right-0 bottom-4 sm:bottom-8 md:bottom-12 left-0 m-auto w-8 h-14"
      >
        <div className={scrollStyles.mousey}>
          <div className={scrollStyles.scroller}></div>
        </div>
      </motion.div>
    </motion.div>
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
