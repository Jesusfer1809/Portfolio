import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function HamburguerButton({ isWhite = false, isOpened }) {
  return (
    <div className="cursor-pointer">
      {!isOpened ? (
        <MenuIcon
          className={`${isWhite ? "text-white" : "text-project"} w-10 h-10`}
        />
      ) : (
        <XIcon
          className={`${isWhite ? "text-white" : "text-project"} w-10 h-10`}
        />
      )}
    </div>
  );
}

export default HamburguerButton;
