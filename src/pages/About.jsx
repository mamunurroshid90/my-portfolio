import React from "react";
import SectionHeading from "../components/SectionHeading";
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

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-container mx-auto px-10 h-[100vh] py-12">
        <SectionHeading heading={"about"} span={"me"} />
        <div className="flex justify-center  gap-[100px] mt-[50px]">
          <div className=" mt-12 ">
            <h2 className=" font-roboto text-3xl uppercase text-white font-bold">
              professional info
            </h2>
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-10 py-6 mt-16 rounded-lg">
              <h3 className=" font-roboto text-xl capitalize text-white font-semibold">
                <span className=" text-[#888888]">Name:</span> Mamunur Roshid
              </h3>
              <p className=" mt-3 font-roboto text-xl text-white font-semibold">
                <span className=" text-[#888888]">Email: </span>{" "}
                nijummamun7@gmail.com
              </p>
              <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
                <span className=" text-[#888888]">Nationality:</span>{" "}
                Bangladeshi
              </p>
              <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
                <span className=" text-[#888888]">Phone:</span> +8801761700244
              </p>
              <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
                <span className=" text-[#888888]">Language:</span> Bengali,
                English
              </p>
            </div>
          </div>
          <div className="w-[800px] ">
            <h2 className=" font-roboto text-3xl text-center uppercase mr-[150px] text-white font-bold mt-12">
              skills
            </h2>

            <div className="flex flex-wrap gap-10 mt-16 justify-center">
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 80 }}
                  role="progressbar"
                >
                  <TfiHtml5 className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <IoLogoCss3 className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <SiBootstrap className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  <SiTailwindcss className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 50 }}
                  role="progressbar"
                >
                  <IoLogoJavascript className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 50 }}
                  role="progressbar"
                >
                  <FaReact className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 30 }}
                  role="progressbar"
                >
                  <SiNextdotjs className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
                  style={{ "--value": 30 }}
                  role="progressbar"
                >
                  <IoLogoFirebase className=" text-2xl" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 py-4 rounded-lg">
                <div
                  className="radial-progress font-roboto"
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
