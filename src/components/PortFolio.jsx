import React from "react";
import mongoDB from "../../public/TRAVEL.jpg";
import express from "../../public/SHOPPING.jpg";
import reactjs from "../../public/PF.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "TRIPPY",
      description: "A Tour and Travel Management System to help users plan and book their trips efficiently."
    },
    {
      id: 2,
      logo: express,
      name: "SHOPLIFY",
      description: "An E-commerce Website designed for a seamless online shopping experience."
    },
    {
      id: 3,
      logo: reactjs,
      name: "PORTFOLIO MAKING",
      description: "A personal portfolio website showcasing projects and skills in an interactive manner."
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PROJECTS</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 hover:shadow-pink-500 duration-300 bg-white text-black"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                alt=""
              />
              <div>
                <div className="text-center font-bold text-xl mb-2 mt-4">
                  {name}
                </div>
                <p className="text-center text-gray-700 px-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
