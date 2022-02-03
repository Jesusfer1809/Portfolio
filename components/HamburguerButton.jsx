import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function HamburguerButton() {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div onClick={toggle} className="cursor-pointer">
      {!isOpened ? (
        <MenuIcon className="text-project w-10 h-10" />
      ) : (
        <XIcon className="text-project w-10 h-10" />
      )}
    </div>
  );
}

export default HamburguerButton;
