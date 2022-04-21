import React from "react";
import businessImg1 from "../assets/businessman-working-stylus-pen-and-digital.jpg";
import businessImg2 from "../assets/meeting-concept.jpg";

const Home = () => {
  return (
    <div className="py-36">
      <h1 className="text-5xl font-bold">
        A strategic approach to website design <br /> and development
      </h1>
      <div className="my-36 grid grid-cols-2 grid-rows-2 gap-24">
        <div>
          <h2 className="text-4xl mb-4">
            Solving varying problems with technological solutions
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi unde
            magnam, esse, maxime dolorum quidem voluptatem dignissimos aliquam
            placeat asperiores incidunt omnis quos veniam! Explicabo illum,
            corporis ullam dolores velit labore illo, ratione doloribus dolorem
            numquam, aliquid assumenda nisi laboriosam?
          </p>
          <button className="my-5 cursor-pointer border-2 border-slate-500 hover:text-white hover:bg-slate-600">
            Learn more
          </button>
        </div>
        <img src={businessImg1} alt="businessman" />
        <img src={businessImg2} alt="designer" />
        <div>
          <h2 className="text-4xl mb-4">
            Designing success through creative web design
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi unde
            magnam, esse, maxime dolorum quidem voluptatem dignissimos aliquam
            placeat asperiores incidunt omnis quos veniam! Explicabo illum,
            corporis ullam dolores velit labore illo, ratione doloribus dolorem
            numquam, aliquid assumenda nisi laboriosam?
          </p>
          <button className="my-5 cursor-pointer border-2 border-slate-500 hover:text-white hover:bg-slate-600">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
