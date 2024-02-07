import React from "react";
import { Link } from "react-router-dom";
import PortfolioImage from "../assets/images/portfolio.jpg";
import { motion } from "framer-motion";
import { FaUpRightFromSquare } from "react-icons/fa6";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-container mx-auto py-12 px-10 h-[100vh] ">
        <div className="flex items-center justify-between gap-16">
          <div className="w-[950px] h-[500px] overflow-hidden">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={PortfolioImage}
              alt="portfolio"
            />
          </div>
          <div>
            <div className=" relative">
              <div>
                <div className="w-max">
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap font-roboto pr-5 text-5xl font-bold capitalize text-yellow-400">
                    hello, I'm mamunur roshid
                  </h1>
                </div>
                <h2 className="font-roboto text-[35px]  font-bold capitalize leading-none mt-1">
                  junior <span className=" text-yellow-400">front-end</span>{" "}
                  developer
                </h2>
              </div>
            </div>
            <p className=" font-roboto text-xl mt-7 leading-8 ">
              I'm a Bangladeshi based web designer & front-end developer focused
              on crafting clean & user-friendly experiences, I am passionate
              about building excellent software that improves the lives of those
              around me.
            </p>
            <div className="relative inline-flex  group mt-10">
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
      </div>
    </motion.section>
  );
};

export default Home;
