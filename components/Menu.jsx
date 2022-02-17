import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import HamburguerButton from "./HamburguerButton";
import LogoMenu from "./LogoMenu";

const fadeInLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
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
        animate={{ y: 0, transition: { duration: 0.5 } }}
        exit={{ y: "-100%", transition: { duration: 0.5 } }}
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
          className="  h-screen text-white relative w-full flex flex-col "
          onClick={closeMenu}
        >
          <div className="p-4 sm:pr-12 flex justify-between items-center w-full ">
            <Link href="/">
              <div>
                <LogoMenu />
              </div>
            </Link>

            <div
              className={`flex items-center space-x-4 text-white cursor-pointer`}
              onClick={closeMenu}
            >
              <span className="font-semibold text-sm sm:text-base">CLOSE</span>
              <HamburguerButton isWhite isOpened={isOpened} />
            </div>
          </div>

          <motion.div
            variants={stagger}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="text-white font-semibold mt-12  flex flex-col self-center text-3xl sm:text-4xl md:text-5xl space-y-12"
          >
            <Link href="/">
              <motion.div variants={fadeInLeft} className="cursor-pointer">
                Projects & about me
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div variants={fadeInLeft} className="cursor-pointer">
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
                className="cursor-pointer"
              >
                LinkedIn
              </motion.a>
            </Link>

            <Link href="https://github.com/Jesusfer1809" passHref>
              <motion.a
                variants={fadeInLeft}
                target="_blank"
                className="cursor-pointer"
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
