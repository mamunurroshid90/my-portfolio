import React, { useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import Data from "../../pages/my-portfolio/Data";
import { Link } from "react-router-dom";

// console.log(Items);

const Portfolio = () => {
  const [items, setItems] = useState(Data);

  const filterItem = (cetegItem) => {
    const updatedItems = Data.filter((curItem) => {
      return curItem.category === cetegItem;
    });
    setItems(updatedItems);
  };

  console.log(items);
  return (
    <section>
      <div className="max-w-container mx-auto">
        <SectionHeading heading={"my"} span={"portfolio"} />
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
        <div className="grid grid-cols-3 gap-5 mt-20 pb-20">
          {items.map((item, index) => {
            const { id, image, category, liveLink, sourceCode, title } = item;

            return (
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title uppercase font-roboto font-bold text-xl">
                    {item.title}
                  </h2>
                  <p className=" font-roboto text-base">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions justify-between">
                    <Link
                      target="_blank"
                      className="btn btn-outline btn-warning text-white capitalize text-lg"
                    >
                      live link
                    </Link>
                    <Link
                      target="_blank"
                      className="btn btn-warning btn-outline hover:text-white capitalize text-lg"
                    >
                      source code
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
