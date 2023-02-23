import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center text-white h-24 max-w-[1240px] mx-auto px-5">
      <h1 className="w-full text-3xl font-bold text-[#FFCC99]">ALDI JOKO.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleMenu} className="block md:hidden">
        {isOpen ? (
          <RxCross1 className="text-3xl" />
        ) : (
          <RxHamburgerMenu className="text-3xl" />
        )}
      </div>
      <ul
        className={
          isOpen
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#230de9] ease-in-out duration-300 block md:hidden z-10"
            : "fixed left-[100%] block md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#FFCC99] m-4">
          ALDI JOKO.
        </h1>
        <li className="p-4 border-b border-gray-800">Home</li>
        <li className="p-4 border-b border-gray-800">Company</li>
        <li className="p-4 border-b border-gray-800">Resources</li>
        <li className="p-4 border-b border-gray-800">About</li>
        <li className="p-4 border-b border-gray-800">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
