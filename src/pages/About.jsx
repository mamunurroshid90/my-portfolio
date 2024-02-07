import React from "react";
import { motion } from "framer-motion";
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdCloudDownload } from "react-icons/io";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-container mx-auto px-10 h-[100vh] py-8">
        <h2 className=" uppercase font-dancing text-white text-center font-bold text-4xl ">
          About <span className=" text-yellow-400">me</span>
        </h2>
        <div className="flex justify-between items-center mt-[20px] gap-x-28">
          <div className=" mt-12 ">
            <h2 className=" font-roboto text-xl uppercase text-white  font-bold">
              professional <span className=" text-yellow-400">info</span>
            </h2>
            <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r px-5 py-3 rounded-lg mt-8">
              <h4 className=" font-roboto text-lg font-bold uppercase text-center text-white">
                Education
              </h4>
              <div className=" font-roboto text-sm font-semibold capitalize mt-2 text-white">
                <p className="">graduation: department of bangla</p>
                <p>institution: dhaka college</p>
                <p>session: 2017-22</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-10 w-[300px]">
              <div
                title="GitHub link"
                className="bg-gradient-to-bl from-gray-700 to-gray-600 hover:to-yellow-400 transition-all duration-700 p-6 rounded-full cursor-pointer inline-block text-white"
              >
                <Link
                  className="text-xl "
                  to="https://github.com/mamunurroshid90?tab=repositories"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </div>
              <button className="bg-gradient-to-r from-gray-700 via-gray-500 to-black  px-3 py-3 rounded-lg uppercase font-roboto font-medium text-lg hover:to-yellow-600 animate-pulse inline-block text-white">
                <Link
                  to="https://documentviewer.herokuapp.com/?state=%7B%22ids%22:%5B%221avHSyIPJChUEuFVabhG4ZZIFLMHxJAkf%22%5D,%22action%22:%22open%22,%22userId%22:%22100792006489718517770%22,%22resourceKeys%22:%7B%7D%7D"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  download cv{" "}
                  <IoMdCloudDownload className=" text-xl animate-bounce w-6 h-6" />
                </Link>
              </button>
            </div>
          </div>
          <div className=" text-white  pb-10">
            <h2 className=" font-roboto text-3xl text-center uppercase  font-bold mt-5">
              skill<span className=" text-yellow-400">s</span>
            </h2>
            <div className="flex flex-wrap gap-10 mt-10 justify-center">
              <div
                title="HTML"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 80 }}
                  role="progressbar"
                >
                  <TfiHtml5 className=" text-2xl" />
                </div>
              </div>
              <div
                title="CSS"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <IoLogoCss3 className=" text-2xl" />
                </div>
              </div>
              <div
                title="bootstrap"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <SiBootstrap className=" text-2xl" />
                </div>
              </div>
              <div
                title="tailwind css"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <SiTailwindcss className=" text-2xl" />
                </div>
              </div>
              <div
                title="figma"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <FaFigma className=" text-2xl" />
                </div>
              </div>
              <div
                title="javaScript"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 50 }}
                  role="progressbar"
                >
                  <IoLogoJavascript className=" text-2xl" />
                </div>
              </div>
              <div
                title="react.js"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 50 }}
                  role="progressbar"
                >
                  <FaReact className=" text-2xl" />
                </div>
              </div>
              <div
                title="next.js"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 30 }}
                  role="progressbar"
                >
                  <SiNextdotjs className=" text-2xl" />
                </div>
              </div>
              <div
                title="firebase"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 30 }}
                  role="progressbar"
                >
                  <IoLogoFirebase className=" text-2xl" />
                </div>
              </div>
              <div
                title="redux"
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg"
              >
                <div
                  className="radial-progress font-roboto "
                  style={{ "--value": 20 }}
                  role="progressbar"
                >
                  <SiRedux className=" text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
