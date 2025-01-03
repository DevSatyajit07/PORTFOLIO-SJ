import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5 text-center">Experience</h1>
        <p className="text-center text-lg mb-8">
          I have experience in the following technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-lg p-1 cursor-pointer hover:scale-110 hover:shadow-pink-500 duration-500 bg-white text-black"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] rounded-full transition-transform duration-300 hover:rotate-6"
                alt=""
              />
              <div className="mt-3 text-center font-bold text-lg">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
