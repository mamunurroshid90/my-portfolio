import React from "react";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <section>
      <div className="max-w-container mx-auto px-10 h-[90vh] py-12">
        <SectionHeading heading={"about"} span={"me"} />
        <div className="flex justify-between items-start gap-[50px]">
          <div className=" mt-12 w-[330px]">
            <h2 className=" font-roboto text-3xl uppercase text-white font-bold">
              professional info
            </h2>
            <h3 className=" mt-12 font-roboto text-xl capitalize text-white font-semibold">
              <span className=" text-[#888888]">Name:</span> Mamunur Roshid
            </h3>
            <p className=" mt-3 font-roboto text-xl text-white font-semibold">
              <span className=" text-[#888888]">Email: </span>{" "}
              nijummamun7@gmail.com
            </p>
            <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
              <span className=" text-[#888888]">Nationality:</span> Bangladeshi
            </p>
            <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
              <span className=" text-[#888888]">Phone:</span> +8801761700244
            </p>
            <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
              <span className=" text-[#888888]">Language:</span> Bengali,
              English
            </p>
            <p className=" mt-3 font-roboto text-xl capitalize text-white font-semibold">
              <span className=" text-[#888888]">Age:</span> 27
            </p>
          </div>
          <div className="w-[800px] pl-[100px]">
            <h2 className=" font-roboto text-3xl text-center uppercase text-white font-bold mt-12">
              my skills
            </h2>
            <div className="flex flex-wrap gap-10 mt-12">
              <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 90 }}
                  role="progressbar"
                >
                  90%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  html
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 90 }}
                  role="progressbar"
                >
                  90%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  css
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 80 }}
                  role="progressbar"
                >
                  80%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  bootstrap
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 80 }}
                  role="progressbar"
                >
                  80%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  tailwind
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  70%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  javascript
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 80 }}
                  role="progressbar"
                >
                  80%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  react js
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  70%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  next js
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 50 }}
                  role="progressbar"
                >
                  50%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  firebase
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[180px]">
                <div
                  className="radial-progress text-yellow-400 font-roboto"
                  style={{ "--value": 50 }}
                  role="progressbar"
                >
                  50%
                </div>
                <p className=" font-roboto text-lg font-bold uppercase text-white">
                  node js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
