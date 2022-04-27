import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaViber, FaLinkedin, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="h-screen">
      {/* ---------- upper background ----------- */}
      <div className="py-24 px-28 sm:p-16  h-[50vh] flex flex-col items-center bg-slate-100 p-6 relative">
        <h1 className="text-center">Get In Touch</h1>
        <p className="my-6 text-slate-400">
          Any questions or want to talk? Just write us a message!
        </p>
        {/* ------------------ Form ------------------ */}
        <div className="absolute bottom-[-300px] grid grid-cols-2 gap-x-4 max-w-3xl w-full">
          {/* ----------------------First form---------------------- */}
          <form className="flex flex-col drop-shadow-xl bg-white p-8 rounded-md h-96">
            <div className="flex flex-col justify-center items-center mb-4">
              <BsTelephoneFill className="text-3xl mb-4" />
              <p className="font-bold">Talk to us</p>
            </div>
            <p className="text-center mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a
              esse adipisci, autem veniam voluptatibus.
            </p>
            <p className="text-center mb-4 text-slate-400">+639560561453</p>
            <p className="text-center mb-8 text-slate-400">+639221135497</p>
            <div className="flex justify-center">
              <FaViber className="mr-2 text-xl cursor-pointer fill-slate-500 hover:fill-slate-800" />
              <FaLinkedin className="mr-2 text-xl cursor-pointer fill-slate-500 hover:fill-slate-800" />
              <FaTelegram className="text-xl cursor-pointer fill-slate-500 hover:fill-slate-800" />
            </div>
          </form>
          {/*----------------------Second form---------------------- */}
          <form className="flex flex-col drop-shadow-xl bg-white p-8 rounded-md h-96">
            <div className="flex flex-col justify-center items-center mb-4">
              <AiFillMessage className="text-3xl mb-4" />
              <p className="font-bold">Message us</p>
            </div>
            <input
              placeholder="Name*"
              type="text"
              name="name"
              className="border border-slate-500 rounded-md p-2 mb-4 outline-slate-700"
            />
            <input
              placeholder="Email*"
              type="email"
              name="email"
              className="border border-slate-500 rounded-md p-2 mb-4 outline-slate-700"
            />
            <textarea
              placeholder="Write a message*"
              name="message"
              className="border border-slate-500 rounded-md resize-none p-2 mb-4 outline-slate-700 h-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
