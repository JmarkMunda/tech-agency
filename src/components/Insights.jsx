import React from "react";
import insightsCover from "../assets/img/hipster-hand-using-digital-tablet-docking-keyboard.jpg";

const Insights = () => {
  return (
    <div id="insights" className="container">
      <h1 className="text-center my-16">What Does Tech Agency Do?</h1>
      {/* content-container */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <h3>Website design agency that delivers exactly what you need</h3>
          {/* <h2>We work with our clients to achieve success</h2> */}
          <div className="flex my-3">
            <span className="mx-2">- </span>
            <p>
              Our web design services are all about delivering results that make
              an impact on your business.
              <br />
              See how we achieve our clients’ online goals through innovative
              website design.
            </p>
          </div>
        </div>
        <div>
          <img src={insightsCover} alt="Insights Cover" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default Insights;
