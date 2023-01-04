import React from "react";
import { motion } from "framer-motion";

import { animScrollProps, fadeVariant, staggerContainer } from "utils/anim";
import ProjectShowcase from "components/pieces/ProjectShowcase";
import { projectsData } from "utils/projectsData";

function Projects() {
  return (
    <div className="pb-20 mt-44" id="projects">
      <motion.div
        variants={fadeVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className=" text-sm text-indigo-400 tracking-widest">
          SEE MY LATEST JOB
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Main Projects
        </h2>
      </motion.div>

      <div className=" mt-20 flex flex-col gap-y-20 sz500:gap-32 sm:gap-y-40 md:gap-y-44 ">
        {projectsData.map((project, index) => (
          <ProjectShowcase
            key={project.title}
            project={project}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
