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
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-red-300"
            >
              home
            </NavLink>
            <NavLink
              to="about"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-red-300"
            >
              about
            </NavLink>
            <NavLink
              to="portfolio"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-red-300"
            >
              portfolio
            </NavLink>
            <NavLink
              to="contact"
              className="font-roboto text-lg capitalize font-bold text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-red-300"
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
