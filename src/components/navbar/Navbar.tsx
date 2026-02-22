import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-18 lg:h-24 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-full mx-auto w-[95%] md:w-[90%]">
        <Logo />
        {/* Center the navbar */}
        <div className="flex items-center gap-3 px-4 py-2 shadow-md border-gray-200 rounded-full cursor-pointer">
          <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Image src="/home.png" alt="homeIcon" width={25} height={25} />
            <span className="hidden lg:block">AnyWhere</span>
          </span>
          <span className="h-6 w-px bg-gray-300 hidden md:block" />
          <span className="hidden md:block text-sm font-medium text-gray-700">
            AnyWeek
          </span>
          <span className="h-6 w-px bg-gray-300 hidden md:block" />
          <span className="hidden md:block text-sm text-gray-300">
            Add guests
          </span>
          <div className="w-8 h-8 text-white rounded-full bg-primary grid place-items-center">
            <LuSearch size={16}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
