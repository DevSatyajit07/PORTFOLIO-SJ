import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-10 rounded-lg"
    >
      <div>
        <h1 className="text-6xl font-bold mb-10 text-center">About</h1>

        {/* Card for Introduction */}
        <div className="mb-10 p-6 rounded-lg shadow-xl bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
          <p>
            Hello, I'm Satyajit, a passionate Web developer with a keen eye for
            MERN Stack. With a background in IT, I strive to create impactful and
            visually stunning software solutions that leave a lasting impression.
          </p>
        </div>

        {/* Card for Education & Training */}
        <div className="mb-10 p-6 rounded-lg shadow-xl bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
          <h2 className="text-green-600 font-semibold text-xl">Education & Training</h2>
          <span>
            Pursuing MCA from Srusti Academy of Management<br />
             <br />
            
          </span>
        </div>

        {/* Card for Skills & Expertise */}
        <div className="mb-10 p-6 rounded-lg shadow-xl bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
          <h2 className="text-green-600 font-semibold text-xl">Skills & Expertise</h2>
          <span>
            JAVASCRIPT,HTML,CSS,MYSQL,JAVA<br />
            Experienced with ReactJs <br />
            Strong grasp of Design Principles/Concepts <br />
            Excellent problem-solving skills <br />
            Effective communicator and collaborator
          </span>
        </div>

        {/* Card for Professional Experience */}
        <div className="mb-10 p-6 rounded-lg shadow-xl bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
          <h2 className="text-green-600 font-semibold text-xl">Professional Experience</h2>
          <span>
            INTERN AT TECHNOBOOT PVT.LTD [7.08.24-15.10.24]
          </span>
        </div>

    

        {/* Card for Mission Statement */}
        <div className="p-6 rounded-lg shadow-xl bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
          <h2 className="text-green-600 font-semibold text-xl">Mission Statement</h2>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative solutions that exceed client expectations and contribute
            positively to the digital landscape. I am committed to continuous
            learning and growth, always seeking new challenges and opportunities
            to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
