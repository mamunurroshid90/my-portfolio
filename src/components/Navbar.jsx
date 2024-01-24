import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="max-w-container mx-auto py-10">
          <div className="flex items-center justify-around">
            <NavLink
              to="/"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
            >
              home
            </NavLink>
            <NavLink
              to="about"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
            >
              about
            </NavLink>
            <NavLink
              to="all-project"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
            >
              portfolio
            </NavLink>
            <NavLink
              to="contact"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
            >
              contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
