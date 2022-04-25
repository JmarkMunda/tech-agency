import React from "react";

const Services = () => {
  return (
    <div id="services" className="container">
      <h1 className="text-center my-8">Services We Can Offer</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4">
        <div className="card">
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-secure-internet-security-soft-fill-soft-fill-juicy-fish-3.png" />
          <p>Web Security</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-internet-internet-security-soft-fill-soft-fill-juicy-fish.png" />
          <p>Website Development</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-protective-internet-security-soft-fill-soft-fill-juicy-fish.png" />
          <p>Web application firewall</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-protection-internet-security-soft-fill-soft-fill-juicy-fish.png" />
          <p>Testing</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-server-internet-security-soft-fill-soft-fill-juicy-fish.png" />
          <p>Maintenance</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-computer-internet-security-soft-fill-soft-fill-juicy-fish-2.png" />
          <p>UI/UX Design</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
