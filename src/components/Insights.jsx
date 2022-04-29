import React from "react";
import insightsCover from "../assets/img/hipster-hand-using-digital-tablet-docking-keyboard.jpg";
import { FiCheckCircle } from "react-icons/fi";

const Insights = () => {
  return (
    <div id="insights" className="container sm:p-8">
      <h1 className="text-right w-auto my-16 ">
        <span className="bg-slate-100">What Should You Expect?</span>
      </h1>
      {/*-------- content-container--------- */}
      <div className="grid grid-cols-2 gap-x-40 items-center md:grid-cols-1">
        {/*------= insights-cover-image----------- */}
        <>
          <img
            src={insightsCover}
            alt="Insights Cover"
            className="h-96 md:hidden"
          />
        </>
        {/* ---------list of texts---------- */}
        <div className="flex flex-col justify-evenly h-full">
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Fully Functional Websites</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Multi-Platform Experience</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Responsive and Elegant Designs</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Easy to Use</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Optimize for Search and Social web</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Information Accessibility</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">Secured Website</p>
          </div>
          <div className="flex items-center">
            <FiCheckCircle />
            <p className="text-lg ml-2">On Track and On Budget</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
