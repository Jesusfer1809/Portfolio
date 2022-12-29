import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function HamburguerButton({ isOpened }) {
  return (
    <div className="cursor-pointer">
      {!isOpened ? (
        <MenuIcon className={`text-project w-10 h-10`} />
      ) : (
        <XIcon className={` text-white w-10 h-10`} />
      )}
    </div>
  );
}

export default HamburguerButton;
