import React from "react";
import Accordion from "components/pieces/Accordion";

import { motion } from "framer-motion";
import { animScrollProps, fadeVariant, staggerContainer } from "utils/anim";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiSass } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiStripe,
} from "react-icons/si";

import { RxGear, RxFramerLogo } from "react-icons/rx";
import { FaGitAlt } from "react-icons/fa";

function AboutComponent() {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=" mt-16"
      id="about"
    >
      <motion.div variants={fadeVariant()}>
        <motion.span className="text-sm text-indigo-400 tracking-widest">
          NICE TO MEET YOU!
        </motion.span>
        <motion.h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold">
          Introducing Myself
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeVariant()}
        className="mt-12 leading-relaxed  sm:text-lg "
      >
        <motion.p className="block text-slate-200">
          Hi. I'm Jesus Rondon, a totally self-taught and long-life learner
          developer who can help you with any idea you have.
          <br />
          With over 2 years in the industry, I can add value through every stage
          of the web construction process.
        </motion.p>

        <motion.p className="block mt-4">
          At the time, I'm into the MERN stack and Next.js. I'm a big fan of
          JavaScript ecosystem!. <br />
          Here are all the technologies I've learnt so far:
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeVariant()}
        className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5  lg:grid-cols-6 xl:grid-cols-7 md:px-4 gap-y-16  mt-20"
      >
        <div className="flex flex-col items-center gap-y-2">
          <AiFillHtml5 className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base  font-medium ">HTML5</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <DiCss3 className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">CSS3</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <IoLogoJavascript className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">JavaScript</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <DiReact className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">React.js</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiNextdotjs className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Next.js</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiTailwindcss className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">
            Tailwind CSS
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <RxFramerLogo className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">
            Framer Motion
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <DiSass className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Sass</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiRedux className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Redux</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <IoLogoNodejs className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Node.js</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiExpress className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Express</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiMongodb className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">MongoDB</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <RxGear className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">
            RESTful APIs
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiGraphql className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">GraphQL</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiStripe className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Stripe</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <FaGitAlt className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Git</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <AiFillGithub className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">GitHub</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <SiFirebase className="text-5xl xl:text-6xl text-slate-400" />
          <span className="text-sm xl:text-base font-medium ">Firebase</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutComponent;
