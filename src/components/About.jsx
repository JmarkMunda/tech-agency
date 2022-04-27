import React from "react";
import teamPhoto from "../assets/img/aboutus.jpg";

const About = () => {
  return (
    <div id="aboutus" className="container">
      <h1 className="my-16">
        <span className="bg-slate-100">About Us</span>
      </h1>
      <div className="grid grid-cols-2 gap-x-40">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          repellat, accusantium quia similique debitis unde! Temporibus id
          sapiente quasi veritatis. Rerum quam eum porro fuga magni doloribus
          soluta suscipit, similique aliquid consectetur animi tempore impedit
          veniam eveniet dicta? Officiis quam quod blanditiis delectus impedit
          similique iure quidem mollitia itaque corporis. Laudantium ullam
          asperiores provident illum minima porro, eius quisquam praesentium
          quae delectus modi nulla recusandae, dolores omnis voluptas nihil
          eaque maiores vero voluptatem autem eligendi nobis! Reprehenderit
          architecto dolorem voluptatum soluta. Itaque odit nisi, sint excepturi
          quo, illo ea temporibus animi autem ipsam illum nostrum sapiente
          placeat cupiditate vel molestias.
        </p>
        <img src={teamPhoto} alt="Team Photo" className="h-96" />
      </div>
    </div>
  );
};

export default About;
