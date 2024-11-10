"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Portfolio", "Client", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-red-950 px-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Restaurant Logo" width={40} height={40} />
          <a className="btn btn-ghost text-xl">Restaurant</a>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a>{item}</a>
              </li>
            ))}
          </ul>

          <a className="btn bg-yellow-500 text-black ml-4">Book A Table</a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-red-950 px-6 py-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="text-white">{item}</a>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <a className="btn bg-yellow-500 text-black w-full">Book A Table</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
