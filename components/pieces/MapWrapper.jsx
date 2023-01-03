import React from "react";
import Map from "components/pieces/Map";
import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";

const { animInitial, animTransition, animWhileInView, animViewport } =
  animScrollProps;

function MapWrapper() {
  return (
    <motion.div className="mt-36 flex flex-col gap-y-8">
      <motion.div
        initial={animInitial}
        transition={animTransition}
        whileInView={animWhileInView}
        viewport={animViewport}
      >
        <motion.h2 className=" text-2xl md:text-3xl font-medium">
          You can find me here &darr;
        </motion.h2>
      </motion.div>
      <motion.div
        initial={animInitial}
        transition={animTransition}
        whileInView={animWhileInView}
        viewport={animViewport}
        className=" h-80  w-full z-50 relative"
        id="map"
      >
        <Map />
      </motion.div>
    </motion.div>
  );
}

export default MapWrapper;
