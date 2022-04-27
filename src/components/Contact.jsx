import React from "react";

const Contact = () => {
  return (
    <div className="py-24 px-28 sm:p-16 flex flex-col items-center bg-slate-100 p-6 ">
      <h1 className="text-center my-16">Contact Us</h1>
      {/* ------------------ Form ------------------ */}
      <form className="flex flex-col drop-shadow-lg bg-white p-8 rounded-md ">
        <label htmlFor="name" className="text-left mt-4 ">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="border border-slate-500 rounded-md"
        />
        <label htmlFor="email " className="text-left mt-4 ">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className="border border-slate-500 rounded-md"
        />
        <label htmlFor="number " className="text-left mt-4 ">
          Contact number:
        </label>
        <input
          type="number"
          name="number"
          className="border border-slate-500 rounded-md"
        />
        <label htmlFor="message " className="text-left mt-4 ">
          Message:
        </label>
        <textarea
          name="message"
          className="border border-slate-500 rounded-md"
        />
      </form>
    </div>
  );
};

export default Contact;
