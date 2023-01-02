import React from "react";
import { motion } from "framer-motion";

import { animScrollProps } from "utils/anim";
import ProjectShowcase from "components/pieces/ProjectShowcase";
import { projectsData } from "utils/projectsData";

function Projects() {
  return (
    <div className="pb-20 mt-40" id="projects">
      <motion.div
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
      >
        <motion.span className=" text-sm text-indigo-400 tracking-widest">
          SEE MY LATEST JOB
        </motion.span>
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Main Projects
        </motion.h2>
      </motion.div>

      <motion.div className=" mt-20 flex flex-col gap-y-20 sz500:gap-32 sm:gap-y-40 md:gap-y-44 ">
        {projectsData.map((project, index) => (
          <ProjectShowcase
            key={project.title}
            project={project}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
