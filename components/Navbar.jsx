import React from "react";
import Logo from "./Logo";
import HamburguerButton from "./HamburguerButton";

function Navbar() {
  return (
    <div className="p-4 pl-0 sm:pl-4 sm:pr-12 fixed w-full top-0 left-0 flex justify-between items-center ">
      <div>
        <Logo />
      </div>

      <div className="flex items-center space-x-4">
        <span className="font-semibold text-sm sm:text-base">MENU</span>
        <HamburguerButton />
      </div>
    </div>
  );
}

export default Navbar;
