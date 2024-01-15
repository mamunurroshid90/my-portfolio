import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <section>
      <div className="max-w-container mx-auto py-12 px-10 h-[80vh]">
        <div className="flex items-center justify-between gap-16">
          <div className="w-full h-full overflow-hidden">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src="/src/assets/images/portfolio.png"
              alt="portfolio"
            />
          </div>
          <div>
            <div className=" relative">
              <div className=" pl-12">
                <h1 className="font-roboto text-[40px] text-yellow-400 font-bold uppercase">
                  i'm mamunur roshid.
                </h1>
                <h2 className="font-roboto text-[40px] text-white font-bold uppercase leading-none">
                  junior web developer
                </h2>
              </div>
              <div className=" absolute left-0 top-8 w-10 h-1 rounded bg-yellow-400"></div>
            </div>
            <p className=" font-roboto text-xl text-white mt-7 leading-8">
              I'm a Bangladeshi based web designer & front-end developer focused
              on crafting clean & user-friendly experiences, I am passionate
              about building excellent software that improves the lives of those
              around me.
            </p>
            <div className="w-[220px] mt-7 h-[50px] ">
              <Link className=" pl-6 h-full hover:bg-yellow-400 transition-all duration-300 text-white border border-yellow-400 rounded-full uppercase font-bold font-roboto flex items-center justify-between gap-4">
                more about me{" "}
                <div>
                  <FaArrowRight className=" text-2xl overflow-hidden font-bold bg-yellow-400 h-full w-[50px] inline-block rounded-full" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
