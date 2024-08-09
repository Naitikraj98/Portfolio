import React from "react";
import myImg from "../Component/Assets/images.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
  return (
      <div className="bg-customColor">
<div className="flex flex-wrap">
  <div className="w-full md:w-2/3 px-4 mt-5 mb-10 md:mb-0">
    <h1 className="text-4xl font-bold text-white mb-6 text-center font-serif">
      LET ME INTRODUCE MYSELF
    </h1>
    <p className="text-2xl leading-relaxed text-white text-center font-light">
      I fell in love with programming and have learned quite a bit along the way.<br></br>
      I'm fluent in <b className="text-white font-medium">JavaScript and .NET</b>.

      My interests lie in building new <br></br> <b className="text-white font-medium">web technologies and websites</b>.
      Whenever possible,<br></br> I channel my passion into developing products using <b className="text-white font-medium">Node.js</b>&nbsp;
       and <br></br>modern JavaScript libraries and frameworks such as <b className="text-white font-medium">React.js and Next.js</b>.
       </p>
       </div>
        <div className="w-full md:w-1/3 px-4 flex justify-center md:justify-end">
          <Tilt className="w-full max-w-sm mt-5 md:mt-0">
            <img src={myImg} className="w-64 h-auto rounded-lg shadow-lg mx-auto md:mx-0" alt="avatar" />
          </Tilt>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 font-serif">FIND ME ON</h1>
          <p className="text-lg mb-4 text-white font-light">
            Feel free to connect with me
          </p>
          <div className="flex justify-center space-x-4 mb-5">
            <a href="https://github.com/Naitikraj1998" target="_blank" className="text-2xl hover:text-purple-500 transition-colors duration-300">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/naitik-raj-b33053206" target="_blank" className="text-2xl hover:text-purple-500 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
