import React from "react";

const Services = () => {
  return (
    <div id="services" className="container sm:p-8">
      <h1 className="text-center my-14">Services We Can Offer</h1>

      {/* --------------- services-content ---------------*/}
      <div className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-4 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <img
            className="m-auto"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-secure-internet-security-soft-fill-soft-fill-juicy-fish-3.png"
          />
          <p className="text-center my-4 font-bold text-lg">Web Security</p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi repellendus qui optio aperiam, temporibus debitis
            velit eos quis officiis.
          </p>
        </div>
        <div>
          <img
            className="m-auto"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-internet-internet-security-soft-fill-soft-fill-juicy-fish.png"
          />
          <p className="text-center my-4 font-bold text-lg">
            Website Development
          </p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi repellendus qui optio aperiam, temporibus debitis
            velit eos quis officiis.
          </p>
        </div>
        <div>
          <img
            className="m-auto"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-protective-internet-security-soft-fill-soft-fill-juicy-fish.png"
          />
          <p className="text-center my-4 font-bold text-lg">
            Web Application Firewall
          </p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi repellendus qui optio aperiam, temporibus debitis
            velit eos quis officiis.
          </p>
        </div>
        <div>
          <img
            className="m-auto"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-protection-internet-security-soft-fill-soft-fill-juicy-fish.png"
          />
          <p className="text-center my-4 font-bold text-lg">Testing</p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi repellendus qui optio ape text-smriam, temporibus
            debitis velit eos quis officiis.
          </p>
        </div>
        <div>
          <img
            className="m-auto"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-server-internet-security-soft-fill-soft-fill-juicy-fish.png"
          />
          <p className="text-center my-4 font-bold text-lg">Maintenance</p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi repellendus qui optio ape text-smriam, temporibus
            debitis velit eos quis officiis.
          </p>
        </div>
        <div>
          <img
            className="m-auto"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-computer-internet-security-soft-fill-soft-fill-juicy-fish-2.png"
          />
          <p className="text-center my-4 font-bold text-lg">UI/UX Design</p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi repellendus qui optio ape text-smriam, temporibus
            debitis velit eos quis officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
