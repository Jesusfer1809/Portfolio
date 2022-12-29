import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

import { GoPrimitiveDot } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";

import Image from "next/image";
import { motion } from "framer-motion";

function ProjectShowcase({ position }) {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let yCell = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  if (position === "left") {
    return (
      <div
        ref={ref}
        className="flex flex-col lg:flex-row  relative min-h-screen  "
      >
        <div className="absolute top-4 sm:top-6 left-0   text-2xl md:text-3xl font-medium text-indigo-400">
          01
        </div>

        <div className=" pt-20 md:pt-28 lg:pb-20 lg:w-1/2">
          <h2 className="text-3xl font-medium">Netflix - Clone</h2>
          <p className="block mt-6 text-sm md:text-base">
            A Netflix page, made with NextJs. With Firebase authentication and
            connected with TMBD API
          </p>

          <div className="flex flex-col  sm:flex-row gap-y-2 gap-x-6  sm:items-center mt-8">
            <Link href="https://netflix-clone-beta-pearl.vercel.app">
              <a
                target="_blank"
                className="flex gap-x-2 items-center w-max font-semibold sm:text-lg   text-indigo-400  hover:text-indigo-500 cursor-pointer transition-all duration-300"
              >
                <CiLocationArrow1 className="text-2xl" />
                <span className="border-b-2 pb-1 border-indigo-400 hover:border-indigo-500">
                  Visit the page
                </span>
              </a>
            </Link>

            <span className="font-semibold pb-1  ">or</span>

            <Link href="https://github.com/Jesusfer1809/Netflix_clone">
              <a
                target="_blank"
                className="flex gap-x-2 items-center w-max font-semibold sm:text-lg   text-indigo-400  hover:text-indigo-500 cursor-pointer transition-all duration-300"
              >
                <AiFillGithub className="text-2xl" />{" "}
                <span className="border-b-2 pb-1 border-indigo-400 hover:border-indigo-500">
                  See the code on Github{" "}
                </span>
              </a>
            </Link>
          </div>

          <span className="mt-12 block text-lg">Key concepts:</span>
          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm md:text-base sm:w-3/5 lg:w-full">
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>React js</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Nextjs</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>TMDB</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Next - Auth</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>MongoDb</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Tailwindcss</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Stripe</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Framer motion</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div className="relative w-full lg:w-1/2 min-h-[36rem] lg:min-h-0">
          <motion.div
            style={{ y }}
            className="w-full sm:w-4/5 md:w-3/5 sm:left-12 md:left-44  lg:w-full xl:w-5/6 absolute top-0 left-0 lg:left-4 xl:left-20"
          >
            <Image
              width={1000}
              height={700}
              src="/images/netflix_landscape.png"
              layout="responsive"
            />
          </motion.div>

          <motion.div
            style={{ y: yCell }}
            className="w-1/3 sm:w-1/4 md:w-1/5  sm:right-4 md:right-20 lg:right-4 lg:w-[10rem] absolute top-1/4 right-0 xl:right-8"
          >
            <Image
              width={50}
              height={100}
              src="https://i.imgur.com/YcO5aNP.png"
              layout="responsive"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div
        ref={ref}
        className="flex flex-col lg:flex-row  relative min-h-screen  "
      >
        <div
          className={`absolute top-4 sm:top-6 left-0 lg:left-auto lg:right-0  text-2xl md:text-3xl font-medium text-indigo-400`}
        >
          01
        </div>

        <motion.div className="relative w-full lg:w-1/2 min-h-[36rem] lg:min-h-0 hidden lg:block">
          <motion.div
            style={{ y }}
            className="w-full sm:w-4/5 md:w-3/5 sm:left-12 md:left-44  lg:w-full xl:w-5/6 absolute top-0 left-0 lg:left-auto lg:right-4 xl:right-20"
          >
            <Image
              width={1000}
              height={700}
              src="/images/netflix_landscape.png"
              layout="responsive"
            />
          </motion.div>

          <motion.div
            style={{ y: yCell }}
            className="w-1/3 sm:w-1/4 md:w-1/5  sm:right-4 md:right-20 lg:right-auto lg:left-4 lg:w-[10rem] absolute top-1/4 right-0 xl:left-8"
          >
            <Image
              width={50}
              height={100}
              src="https://i.imgur.com/YcO5aNP.png"
              layout="responsive"
            />
          </motion.div>
        </motion.div>

        <div className=" pt-20 md:pt-28 lg:pb-20 lg:w-1/2">
          <h2 className="text-3xl font-medium">Netflix - Clone</h2>
          <p className="block mt-6 text-sm md:text-base">
            A Netflix page, made with NextJs. With Firebase authentication and
            connected with TMBD API
          </p>

          <div className="flex flex-col  sm:flex-row gap-y-2 gap-x-6  sm:items-center mt-8">
            <Link href="https://netflix-clone-beta-pearl.vercel.app">
              <a
                target="_blank"
                className="flex gap-x-2 items-center w-max font-semibold sm:text-lg   text-indigo-400  hover:text-indigo-500 cursor-pointer transition-all duration-300"
              >
                <CiLocationArrow1 className="text-2xl" />
                <span className="border-b-2 pb-1 border-indigo-400 hover:border-indigo-500">
                  Visit the page
                </span>
              </a>
            </Link>

            <span className="font-semibold pb-1  ">or</span>

            <Link href="https://github.com/Jesusfer1809/Netflix_clone">
              <a
                target="_blank"
                className="flex gap-x-2 items-center w-max font-semibold sm:text-lg   text-indigo-400  hover:text-indigo-500 cursor-pointer transition-all duration-300"
              >
                <AiFillGithub className="text-2xl" />{" "}
                <span className="border-b-2 pb-1 border-indigo-400 hover:border-indigo-500">
                  See the code on Github{" "}
                </span>
              </a>
            </Link>
          </div>

          <span className="mt-12 block text-lg">Key concepts:</span>
          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm md:text-base sm:w-3/5 lg:w-full">
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>React js</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Nextjs</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>TMDB</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Next - Auth</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>MongoDb</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Tailwindcss</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Stripe</span>
              </li>
              <li className="flex items-center gap-x-2">
                <GoPrimitiveDot className="text-indigo-400" />
                <span>Framer motion</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div className="relative w-full lg:w-1/2 min-h-[36rem] lg:min-h-0 lg:hidden">
          <motion.div
            style={{ y }}
            className="w-full sm:w-4/5 md:w-3/5 sm:left-12 md:left-44  lg:w-full xl:w-5/6 absolute top-0 left-0 lg:left-4 xl:left-20"
          >
            <Image
              width={1000}
              height={700}
              src="/images/netflix_landscape.png"
              layout="responsive"
            />
          </motion.div>

          <motion.div
            style={{ y: yCell }}
            className="w-1/3 sm:w-1/4 md:w-1/5  sm:right-4 md:right-20 lg:right-4 lg:w-[10rem] absolute top-1/4 right-0 xl:right-8"
          >
            <Image
              width={50}
              height={100}
              src="https://i.imgur.com/YcO5aNP.png"
              layout="responsive"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

export default ProjectShowcase;
