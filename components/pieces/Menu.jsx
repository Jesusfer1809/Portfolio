import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import HamburguerButton from "components/pieces/HamburguerButton";
import LogoMenu from "components/pieces/LogoMenu";

import { IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BsFilePerson } from "react-icons/bs";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { fadeInLeftVariant, staggerContainer } from "utils/anim";

function Menu({ isOpened, closeMenu }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%", transition: { duration: 0.7, ease: "easeInOut" } }}
      exit={{ x: "100%", transition: { duration: 0.7, ease: "easeInOut" } }}
      className="flex justify-end items-center w-4/5 sz500:w-3/5 md:w-1/2 relative z-[100] bg-slate-900 rounded-tl-full rounded-bl-full"
    >
      <button
        onClick={closeMenu}
        className="flex items-center gap-x-2 absolute top-10 right-4 text-white "
      >
        <IoClose className="text-3xl " />
        <span className="text-xl">CLOSE</span>
      </button>
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-white  w-3/5  font-medium mt-12  flex flex-col  space-y-12 pr-4"
      >
        <Link href="/">
          <motion.div
            variants={fadeInLeftVariant()}
            className="cursor-pointer flex gap-x-3 items-center"
          >
            <BsFilePerson className="text-3xl" />
            <span className="text-lg">Projects / about me</span>
          </motion.div>
        </Link>

        <Link href="/contact">
          <motion.div
            variants={fadeInLeftVariant()}
            className="cursor-pointer flex gap-x-3 items-center"
          >
            <CiMail className="text-3xl" />
            <span className="text-lg">Contact me</span>
          </motion.div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/jesus-rondon-963b1321a/"
          passHref
        >
          <motion.a
            variants={fadeInLeftVariant()}
            target="_blank"
            className="cursor-pointer flex gap-x-3 items-center"
          >
            <AiOutlineLinkedin className="text-3xl" />
            <span className="text-lg">LinkedIn</span>
          </motion.a>
        </Link>

        <Link href="https://github.com/Jesusfer1809" passHref>
          <motion.a
            variants={fadeInLeftVariant()}
            target="_blank"
            className="cursor-pointer flex gap-x-3 items-center"
          >
            <AiOutlineGithub className="text-3xl" />
            <span className="text-lg">GitHub</span>
          </motion.a>
        </Link>

        <Link href="https://twitter.com/Jesus_R_1809" passHref>
          <motion.a
            variants={fadeInLeftVariant()}
            target="_blank"
            className="cursor-pointer flex gap-x-3 items-center"
          >
            <AiOutlineTwitter className="text-3xl" />
            <span className="text-lg">.Twitter</span>
          </motion.a>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
