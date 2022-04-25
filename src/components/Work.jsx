import React from "react";
import workimg1 from "../assets/works/samplepage1.png";
import workimg2 from "../assets/works/samplepage2.png";
import workimg3 from "../assets/works/samplepage3.png";
import workimg4 from "../assets/works/samplepage4.jpg";
import ceoAvatar from "../assets/works/personfeedback.jpg";

import { FaStar } from "react-icons/fa";

const Work = () => {
  return (
    <div
      id="works"
      className="py-20 px-28 sm:p-16 text-center bg-slate-100 p-6 ">
      <h1>
        As promised, we’re the most professional website designing company.
      </h1>

      {/* Cards */}
      <div className="flex justify-evenly items-center w-full p-8 h-auto my-16 md:flex-col sm:p-0 sm:m-0">
        <div className="card cursor-pointer transition-all hover:scale-150">
          <img src={workimg1} alt="works" className="w-full mb-2" />
          <p className="text-slate-400 text-xs">Corporate Web Design</p>
        </div>
        <div className="card cursor-pointer transition-all hover:scale-150">
          <img src={workimg2} alt="works" className="w-full mb-2" />
          <p className="text-slate-400 text-xs">E-commerce</p>
        </div>
        <div className="card cursor-pointer transition-all hover:scale-150">
          <img src={workimg3} alt="works" className="w-full mb-2" />
          <p className="text-slate-400 text-xs">Business</p>
        </div>
        <div className="card cursor-pointer transition-all hover:scale-150">
          <img src={workimg4} alt="works" className="w-full mb-2" />
          <p className="text-slate-400 text-xs">Branding</p>
        </div>
      </div>

      {/* Feedback */}
      <div className="container">
        <div className="border-l-4 mr-8 border-slate-400">
          <p className="p-6 text-justify">
            <span>&ldquo;</span>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus optio cum dolor reprehenderit. Ipsa vero
            voluptatibus inventore. Labore, consectetur explicabo! Cum quo ipsam
            nobis sapiente veritatis esse explicabo numquam, error beatae
            mollitia quibusdam fugiat quaerat consequatur natus accusamus qui
            recusandae odio delectus earum adipisci reiciendis obcaecati
            corrupti id voluptatibus. Temporibus.<span>&rdquo;</span>
          </p>
          <div className="flex justify-center">
            <FaStar className="fill-yellow-500" />
            <FaStar className="fill-yellow-500" />
            <FaStar className="fill-yellow-500" />
            <FaStar className="fill-yellow-500" />
            <FaStar className="fill-yellow-500" />
          </div>
          <div className="flex items-center py-4 px-10">
            <img
              src={ceoAvatar}
              alt="Ceo Avatar"
              className="w-20 h-20 rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold ">Chibuzo Martinez</p>
              <p className="text-slate-500 text-sm">
                - Founder and CEO at WorkTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
