import React from "react";
import Slot from "./Slot";
import { useNewView } from "../hooks/useNewView";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Accordion() {
  const { ref: ref1, inView: inView1, animation: animation1 } = useNewView();

  return (
    <motion.div
      ref={ref1}
      initial={{ y: 60, opacity: 0 }}
      animate={animation1}
      className=" w-full md:w-4/5 lg:w-3/4 flex flex-col border-[1px] border-project rounded-md overflow-hidden shadow-sm shadow-project"
    >
      <Slot
        name="Front-end skills"
        items={[
          {
            name: "HTML",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          },
          {
            name: "CSS",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          },
          {
            name: "JavaScript",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            name: "React",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Redux",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          },
          {
            name: "NextJs",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "Tailwind",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          },
          {
            name: "Sass",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          },
        ]}
      />

      <Slot
        name="Back-end skills"
        items={[
          {
            name: "Node Js",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "Firebase",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          },
          {
            name: "Graph QL",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          },
          {
            name: "NextJs again :D",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "Mongo Db",
            source:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
          { name: "Mongoose" },
        ]}
      />

      <Slot
        name="Other skills"
        items={[
          { name: "Next Auth" },
          { name: "Axios" },
          { name: "Stripe" },
          { name: "Git / Github" },
          { name: "Framer Motion" },
        ]}
      />
    </motion.div>
  );
}

export default Accordion;
