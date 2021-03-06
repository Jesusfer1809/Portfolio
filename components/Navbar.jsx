import React, { useState } from "react";
import Logo from "./Logo";
import HamburguerButton from "./HamburguerButton";
import Link from "next/link";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`p-4 pl-0 sm:pl-4 sm:pr-12 fixed w-full top-0 left-0 flex justify-between items-center bg-[rgba(255,255,255,0.9)] z-[999]  `}
    >
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>

      <div
        className={`flex items-center space-x-4 text-project cursor-pointer`}
        onClick={() => setIsOpened(true)}
      >
        <span className="font-semibold text-sm sm:text-base">MENU</span>
        <HamburguerButton isOpened={isOpened} />
      </div>

      <AnimatePresence>
        {isOpened && <Menu isOpened={isOpened} setIsOpened={setIsOpened} />}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
