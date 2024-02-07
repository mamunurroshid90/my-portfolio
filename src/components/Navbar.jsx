import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/my portfolio logo.png";
import { FaUpRightFromSquare } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="max-w-container mx-auto py-10">
          <div className="flex items-center justify-between">
            <div className=" w-[180px] h-[80px]">
              <Link to="/">
                <img className=" w-full h-full" src={logo} alt="logo" />
              </Link>
            </div>
            <div className=" flex gap-16">
              <NavLink
                to="/"
                className="font-roboto  text-xl capitalize font-bold dark:text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
              >
                home
              </NavLink>
              <NavLink
                to="about"
                className="font-roboto text-xl capitalize font-bold dark:text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
              >
                about
              </NavLink>
              <NavLink
                to="portfolio"
                className="font-roboto text-xl capitalize font-bold dark:text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
              >
                portfolio
              </NavLink>
              <NavLink
                to="contact"
                className="font-roboto text-xl capitalize font-bold dark:text-white hover:text-gray-300 transition-all duration-300 [&.active]:text-yellow-400"
              >
                contact
              </NavLink>
            </div>
            <div className="relative inline-flex  group mt-10 ">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
                to="contact"
                href="#"
                title="Get quote now"
                className="relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-300 bg-gray-900 font-roboto rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 capitalize "
                role="button"
              >
                hire me <FaUpRightFromSquare className=" ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
