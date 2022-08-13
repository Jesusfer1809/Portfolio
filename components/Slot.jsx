import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

function Slot({ name, items }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div className="p-4 text-2xl font-bold bg-project text-white flex justify-between relative">
        <span>{name}</span>
        {!isExpanded ? (
          <ChevronRightIcon
            className="w-10 h-10 cursor-pointer"
            onClick={expand}
          />
        ) : (
          <ChevronDownIcon
            className="w-10 h-10 cursor-pointer"
            onClick={expand}
          />
        )}
      </div>

      <AnimatePresence exitBeforeEnter>
        {isExpanded && (
          <motion.div
            key={name}
            initial={{ height: 0 }}
            animate={{
              height: "max-content",
              transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            }}
            exit={{
              height: 0,
              transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 box-border  items-center gap-y-8  text-lg relative"
          >
            {items?.map((item) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    delay: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0,
                  },
                }}
                className=" p-6 pl-8 flex items-center space-x-2"
              >
                {item.source ? (
                  <img loading="lazy" src={item.source} className="h-10 w-10" />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center text-xl">
                    &bull;
                  </div>
                )}
                <span>{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Slot;
