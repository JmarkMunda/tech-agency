import React, { useState } from "react";
import { ImMenu, ImCross } from "react-icons/im";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 64) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  });

  return (
    <div
      className={
        !navScroll
          ? "sticky top-0 left-0 z-10 bg-white mt-16 px-28 sm:px-16 "
          : "sticky top-0 left-0 z-10 bg-white mt-16 px-28 sm:px-16  drop-shadow-lg"
      }>
      <nav className="h-16 flex justify-between items-center ">
        <h1 className="mx-5 font-bold drop-shadow-md text-xl">Tech Agency</h1>
        <ul className="flex justify-end items-center whitespace-nowrap md:hidden">
          <li className="mx-5">
            <a href="#works"> Works</a>
          </li>
          <li className="mx-5">
            <a href="#services">Services</a>
          </li>
          <li className="mx-5">
            <a href="#insights">Insights</a>
          </li>
          <li className="mx-5">
            <a href="#aboutus">About us</a>
          </li>
          <a
            href="#contact"
            className="rounded-md px-3 py-2 mx-5 cursor-pointer bg-slate-500 text-white hover:bg-slate-600">
            Interested
          </a>
        </ul>

        {!toggleMenu ? (
          <ImMenu
            className="hidden md:block w-5 cursor-pointer absolute top-6 right-16 z-10"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <ImCross
            className="hidden md:block w-5 cursor-pointer absolute top-6 right-16 z-10"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {/*---------- Mobile Menu ----------- */}
        <ul
          className={
            !toggleMenu
              ? "hidden"
              : " bg-white absolute drop-shadow-md top-0 left-0 w-full h-screen flex flex-col justify-evenly items-center py-4"
          }>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            <a href="#work">Work</a>
          </li>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            <a href="#services">Services</a>
          </li>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            <a href="#insights">Insights</a>
          </li>
          <li className="my-4" onClick={() => setToggleMenu(false)}>
            <a href="#aboutus">About us</a>
          </li>
          <a
            href="#contact"
            className="rounded-md px-3 py-2 mx-5 cursor-pointer bg-slate-500 text-white hover:bg-slate-600"
            onClick={() => setToggleMenu(false)}>
            Interested
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
