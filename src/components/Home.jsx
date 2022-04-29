import React from "react";
import businessImg1 from "../assets/img/businessman-working-stylus-pen-and-digital.jpg";
import businessImg2 from "../assets/img/meeting-concept.jpg";

const Home = () => {
  return (
    <div className="container sm:px-8 sm:py-20 py-36">
      <h1 className=" font-bold">
        A strategic approach to website design <br /> and development
      </h1>

      {/*---------- Overview -------------*/}
      <div className="mt-44 grid grid-cols-2 grid-rows-2 gap-40 items-center md:flex md:flex-col">
        <div>
          <h2 className="mb-4">
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
        <div className="w-full h-96 relative bg-slate-100 p-6 md:hidden">
          <img
            src={businessImg1}
            alt="businessman"
            className="absolute top-[-80px] left-[-40px] h-96 "
          />
        </div>
        <div className="w-full h-96 relative bg-slate-100 p-6 md:hidden">
          <img
            src={businessImg2}
            alt="designer"
            className="absolute top-[-80px] right-[-40px] h-96"
          />
        </div>
        <div>
          <h2 className="mb-4">
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
