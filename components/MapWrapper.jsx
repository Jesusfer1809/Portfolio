import React from "react";
import Map from "./Map";
import { motion, useAnimation } from "framer-motion";

import { useNewView } from "../hooks/useNewView";

function MapWrapper() {
  const { ref: ref1, inView: inView1, animation: animation1 } = useNewView();
  return (
    <motion.div
      ref={ref1}
      initial={{ y: 60, opacity: 0 }}
      animate={animation1}
      className=" h-80  w-full lg:w-4/5 mt-36 z-50 relative"
      id="map"
    >
      <Map />
    </motion.div>
  );
}

export default MapWrapper;
