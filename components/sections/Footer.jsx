import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { fadeVariant } from "utils/anim";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <motion.div
      variants={fadeVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-8 sm:py-12 mt-16 border-t border-indigo-900"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-x-20 md:gap-x-28 lg:gap-x-40 gap-y-16">
        <div className="">
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl block">
            Contact information
          </h3>
          {/* <p className="block text-slate-400 mt-3 font-medium lg:text-lg">
            Feel free to reach out to me any time. I prefer to talk over email,
            since I'm very active there.
          </p> */}
          <div className="flex flex-col sm:text-lg font-medium mt-6 space-y-1">
            <div className="flex space-x-4">
              <span className="text-slate-400">Email:</span>{" "}
              <span>jesusf.rondon1809@gmail.com</span>
            </div>
            <div className="flex space-x-4">
              <span className="text-slate-400">Phone:</span>{" "}
              <span>+51-992-435-526</span>
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl block">
            My social media -
          </h3>
          <div className=" text-lg font-medium mt-4 flex gap-x-8 gap-y-4 flex-col">
            <div>
              <Link href="https://www.linkedin.com/in/jesus-rondon-963b1321a/">
                <a
                  target="_blank"
                  className="w-max hover:text-indigo-500 flex gap-x-4 items-center tracking-wide  cursor-pointer transition-all "
                >
                  <AiOutlineLinkedin className="text-3xl transition-all" />
                  <span className="tracking-wide  transition-all ">
                    LinkedIn
                  </span>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/Jesusfer1809">
                <a
                  target="_blank"
                  className="w-max hover:text-indigo-500  flex gap-x-4 items-center tracking-wide  cursor-pointer transition-all "
                >
                  <AiOutlineGithub className="text-3xl transition-all" />
                  <span className="tracking-wide  transition-all ">GitHub</span>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://twitter.com/Jesus_R_1809">
                <a
                  target="_blank"
                  className="w-max hover:text-indigo-500  flex gap-x-4 items-center tracking-wide  cursor-pointer transition-all "
                >
                  <AiOutlineTwitter className="text-3xl transition-all" />
                  <span className="tracking-wide  transition-all ">
                    Twitter
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-slate-500 font-medium mt-16">
        <p>&copy; Jesus Rondon.</p>
        <p>Made with 🖤 in Lima, Peru</p>
      </div>
    </motion.div>
  );
}

export default Footer;
