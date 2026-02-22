"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { LuMenu, LuSearch } from "react-icons/lu";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen((prev) => !prev);
};

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
            <LuSearch size={16} />
          </div>
        </div>

        {/* Right Navbar  */}
        <div className="flex items-center gap-4 relative">
          <button className="hidden md:block text-sm font-medium px-4 py-2 rounded-b-full bg-gray-50 cursor-pointer hover:bg-gray-100">
            Airbnb your home
          </button>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-2 py-1 hover:shadow-md transition cursor-pointer">
            <button
              onClick={toggleMenu}
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <LuMenu size={18} />
            </button>
            <div className="relative size-8 rounded-full overflow-hidden">
              <Image
                src="/image.png"
                alt="user-avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* dropdown menu */}
          <div className="absolute right-0 top-14 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden px-4 py-2">
            <ul className="text-gray-800  text-sm ">
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Airbnb your home
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Help Center
              </li>
              <div className="border-t my-1 border-gray-300" />
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Sign up
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Help Center
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Sign in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
