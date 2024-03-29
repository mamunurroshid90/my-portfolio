import React, { useState } from "react";
import Data from "../../pages/my-portfolio/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [items, setItems] = useState(Data);

  const filterItem = (categItem) => {
    const updatedItems = Data.filter((curItem) => {
      return curItem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-container mx-auto pb-20 bg-violet-950 px-10 pt-7 h-full">
        <h2 className=" font-dancing text-3xl uppercase dark:text-white text-center">
          projects
        </h2>
        <div className=" justify-center flex gap-5 mt-10">
          <button
            className=" py-1 px-8 rounded-md capitalize text-lg duration-300 font-roboto font-bold outline outline-yellow-400 hover:bg-yellow-400 text-white"
            onClick={() => setItems(Data)}
          >
            all
          </button>
          <button
            className="py-1 px-8 rounded-md capitalize text-lg duration-300 font-roboto font-bold outline outline-yellow-400 hover:bg-yellow-400 text-white"
            onClick={() => filterItem("html & css")}
          >
            html & css
          </button>
          <button
            className="py-1 px-8 rounded-md capitalize text-lg duration-300 font-roboto font-bold outline outline-yellow-400 hover:bg-yellow-400 text-white"
            onClick={() => filterItem("javascript")}
          >
            javascript
          </button>
          <button
            className="py-1 px-8 rounded-md capitalize text-lg duration-300 font-roboto font-bold outline outline-yellow-400 hover:bg-yellow-400 text-white"
            onClick={() => filterItem("react")}
          >
            react
          </button>
        </div>
        <div className="grid grid-cols-3 justify-around gap-8 mt-20">
          {items.map((item, index) => {
            const { id, image, liveLink, sourceCode, title, descriptions } =
              item;

            return (
              <motion.div
                className="card w-auto shadow-xl image-full "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <figure>
                  <img src={image} alt="image" />
                </figure>
                <div className="card-body hover:bg-yellow-500 hover:text-white duration-500 hover:rounded-xl">
                  <h2 className="card-title text-white uppercase font-roboto font-bold text-xl">
                    {title}
                  </h2>
                  <p className=" font-roboto text-base text-white font-semibold capitalize">
                    {descriptions}
                  </p>
                  <div className="card-actions justify-between">
                    <Link
                      to={liveLink}
                      target="_blank"
                      className=" text-white border-2 border-white hover:bg-yellow-600 transition-all duration-300 font-semibold py-2 px-6 rounded-lg capitalize text-lg"
                    >
                      live link
                    </Link>
                    <Link
                      to={sourceCode}
                      target="_blank"
                      className="text-white border-2 border-white hover:bg-yellow-600 transition-all duration-300 font-semibold py-2 px-6 rounded-lg capitalize text-lg"
                    >
                      source code
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
