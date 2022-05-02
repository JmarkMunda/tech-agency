import React from "react";
import { BsGithub, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-500">
      <div className="container sm:p-8 flex justify-end md:justify-center">
        {/* -------------------Left--------------- */}
        <div>
          <div className="flex mb-2">
            <BsGithub className="mr-2 text-xl cursor-pointer fill-gray-400 hover:fill-gray-300" />
            <BsFacebook className="mr-2 text-xl cursor-pointer fill-gray-400 hover:fill-gray-300" />
            <BsInstagram className="mr-2 text-xl cursor-pointer fill-gray-400 hover:fill-gray-300" />
            <BsTwitter className="mr-2 text-xl cursor-pointer fill-gray-400 hover:fill-gray-300" />
          </div>
          <p className="text-gray-400">
            © Copyright Tech Agency. All Rights Reserved
          </p>
          <p className="text-gray-400">Created by Jmark</p>
        </div>
        {/* --------------- Right ------------- */}

        <div className="ml-24 lg:ml-6 md:hidden border-l-2 border-gray-400 pl-8 lg:border-none ">
          <p className="text-gray-400 my-4">Resources</p>
          <ul>
            <li className="text-gray-400">Docs</li>
            <li className="text-gray-400">Guidelines</li>
            <li className="text-gray-400">Support</li>
            <li className="text-gray-400">References</li>
          </ul>
        </div>
        <div className="ml-24 lg:ml-6 md:hidden">
          <p className="text-gray-400 my-4">Pricing</p>
          <ul>
            <li className="text-gray-400">Pricing Overview</li>
            <li className="text-gray-400">Flexible Data</li>
            <li className="text-gray-400">High Volume Data</li>
            <li className="text-gray-400">Enterprise</li>
            <li className="text-gray-400">Commercial</li>
            <li className="text-gray-400">Personal</li>
          </ul>
        </div>
        <div className="ml-24 lg:ml-6 md:hidden">
          <p className="text-gray-400 my-4">Developers</p>
          <ul>
            <li className="text-gray-400">Jay Mark Munda</li>
            <li className="text-gray-400">Jo Ann Mercado</li>
          </ul>
        </div>
        <div className="ml-24 lg:ml-6 md:hidden">
          <p className="text-gray-400 my-4">Company</p>
          <ul>
            <li className="text-gray-400">About Us</li>
            <li className="text-gray-400">Team</li>
            <li className="text-gray-400">Branches</li>
            <li className="text-gray-400">Partnerships</li>
            <li className="text-gray-400">Sponsors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
