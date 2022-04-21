import React, { useState } from "react";
import { ImMenu, ImCross } from "react-icons/im";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sticky top-0 left-0 bg-white">
      <nav className="h-16 flex justify-between items-center">
        <h1 className="mx-5 font-bold drop-shadow-md text-xl">Tech Agency</h1>
        <ul className="flex justify-end items-center md:hidden">
          <li className="mx-5">Work</li>
          <li className="mx-5">Services</li>
          <li className="mx-5">Insights</li>
          <li className="mx-5">About us</li>
          <button className="mx-5 cursor-pointer bg-slate-500 text-white hover:bg-slate-600">
            Get Started
          </button>
        </ul>

        {!toggleMenu ? (
          <ImMenu
            className="hidden md:block w-5 cursor-pointer absolute top-6 right-2 z-10"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <ImCross
            className="hidden md:block w-5 cursor-pointer absolute top-6 right-2 z-10"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {/* Mobile Menu */}
        <ul
          className={
            !toggleMenu
              ? "hidden"
              : " bg-white absolute drop-shadow-md top-0 left-0 w-full h-screen flex flex-col justify-evenly items-center py-4"
          }>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            Work
          </li>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            Services
          </li>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            Insights
          </li>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            About us
          </li>
          <button
            className="my-5 cursor-pointer bg-slate-500 text-white hover:bg-slate-600"
            onClick={() => setToggleMenu(false)}>
            Get Started
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
