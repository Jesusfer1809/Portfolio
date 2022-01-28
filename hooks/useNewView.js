import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useNewView = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
          delay: 0.1,
        },
      });
    }
  }, [inView]);

  return { ref, inView, animation };
};
