import React from "react";
import Map from "./Map";
import { motion } from "framer-motion";

function MapWrapper() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      className=" h-80  w-full lg:w-4/5 mt-36 z-50 relative"
      id="map"
    >
      <Map />
    </motion.div>
  );
}

export default MapWrapper;
