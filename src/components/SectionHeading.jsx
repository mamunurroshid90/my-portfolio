import React from "react";

const SectionHeading = ({ heading, span }) => {
  return (
    <div>
      <h1 className="text-[50px] text-center font-roboto font-bold uppercase text-white leading-normal">
        {heading} <span className=" text-yellow-400">{span}</span>
      </h1>
    </div>
  );
};

export default SectionHeading;
