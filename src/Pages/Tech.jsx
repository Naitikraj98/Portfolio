import React from "react";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";


const Techstack = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border shadow-purple-500 shadow-lg rounded-xl">
          <DiJavascript1 className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border  shadow-purple-500 shadow-lg rounded-lg">
          <DiNodejs className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border shadow-lg shadow-purple-500 rounded-lg">
          <DiReact className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border  shadow-purple-500 shadow-lg rounded-lg">
          <DiMongodb className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border  shadow-purple-500 shadow-lg rounded-lg">
          <DiGit className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border  shadow-purple-500 shadow-lg rounded-lg">
          <SiPostgresql className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border  shadow-purple-500 shadow-lg rounded-lg">
          <RiTailwindCssFill className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border  shadow-purple-500 shadow-lg rounded-lg">
          <FaAngular className="text-7xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
 