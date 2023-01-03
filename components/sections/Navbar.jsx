import React, { useState } from "react";

import Link from "next/link";
import Menu from "components/pieces/Menu";
import { AnimatePresence } from "framer-motion";
import { AiOutlineFileText } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const openMenu = () => {
    setIsOpened(true);
  };
  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <div
      className={`flex justify-between px-4 md:px-8 lg:px-20 py-4 sticky w-full top-0 left-0 right-0  items-center bg-slate-900 z-[90]  `}
    >
      <AnimatePresence mode="wait">
        {isOpened && (
          <div className="absolute top-0 left-0 w-screen h-screen flex lg:hidden justify-end overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              onClick={closeMenu}
              className="absolute top-0 left-0 bg-indigo-400 bg-opacity-50 w-full h-full"
            />
            <Menu isOpened={isOpened} closeMenu={closeMenu} />
          </div>
        )}
      </AnimatePresence>

      <Link href="/">
        <a className="text-xl sm:text-2xl font-medium">Jesus Rondon</a>
      </Link>

      <div className="flex items-center gap-6  md:gap-8 lg:gap-10 font-semibold text-sm md:text-base xl:text-lg">
        <div className="lg:flex gap-2 items-center hidden ">
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1500}
          >
            <span className="text-indigo-300">01.</span>
            <span className="border-b pb-1 border-transparent hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all">
              Projects
            </span>
          </ScrollLink>
        </div>

        <div className="lg:flex gap-2 items-center hidden ">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1500}
          >
            <span className="text-indigo-300">02.</span>
            <span className="border-b pb-1 border-transparent hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all">
              About me
            </span>
          </ScrollLink>
        </div>

        <div className="lg:flex gap-2 items-center hidden ">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1500}
          >
            <span className="text-indigo-300">03.</span>
            <span className="border-b pb-1 border-transparent hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all">
              Contact me
            </span>
          </ScrollLink>
        </div>

        <div className="flex items-center  gap-2 md:items-center cursor-pointer px-3 py-1 bg-indigo-400 rounded-md hover:bg-indigo-500 transition-all">
          <AiOutlineFileText className="text-xl" />
          <span className="hidden sz500:block">Resume</span>
        </div>

        <div onClick={openMenu} className="lg:hidden gap-2 items-center flex ">
          <span>MENU</span>
          <RxHamburgerMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
