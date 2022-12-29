import React, { useState } from "react";
import Logo from "components/pieces/Logo";
import HamburguerButton from "components/pieces/HamburguerButton";
import Link from "next/link";
import Menu from "components/pieces/Menu";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={` px-4 md:px-8 lg:px-20 py-6 fixed w-full top-0 left-0 flex justify-end items-center bg-slate-900 z-[999]  `}
    >
      {/* <Link href="/">
        <div>
          <Logo isOpened={isOpened} />
        </div>
      </Link> */}

      {/* <div
        className={`flex items-center space-x-4 ${
          isOpened ? "text-white" : "text-project"
        } cursor-pointer relative z-[1000] transition-all duration-1000`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <span className="font-semibold text-sm sm:text-base z">
          {!isOpened ? "MENU" : "CLOSE"}
        </span>
        <HamburguerButton isOpened={isOpened} />
      </div>

      <AnimatePresence>
        {isOpened && <Menu isOpened={isOpened} setIsOpened={setIsOpened} />}
      </AnimatePresence> */}

      <div className="flex gap-6  md:gap-8 lg:gap-10 font-semibold text-sm md:text-base lg:text-lg">
        <div className="flex gap-2">
          <span className="text-indigo-300">01.</span>
          <span className="border-b pb-1 border-transparent hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all">
            Projects
          </span>
        </div>

        <div className="flex gap-2">
          <span className="text-indigo-300">02.</span>
          <span className="border-b pb-1 border-transparent hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all">
            About me
          </span>
        </div>

        <div className="flex gap-2">
          <span className="text-indigo-300">03.</span>
          <span className="border-b pb-1 border-transparent hover:border-indigo-400 hover:text-indigo-400 cursor-pointer transition-all">
            Contact me
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
