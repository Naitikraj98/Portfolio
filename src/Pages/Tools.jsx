import React from "react";
import { IoLogoWindows } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaSlack } from "react-icons/fa";

const Tool = () => {
    return(
        <div className="flex flex-wrap justify-center">
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border shadow-purple-500 shadow-lg rounded-xl">
          <IoLogoWindows className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border shadow-purple-500 shadow-lg rounded-xl">
          < SiPostman className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border shadow-purple-500 shadow-lg rounded-xl">
          <SiVisualstudiocode className="text-7xl text-white" />
        </div>
      </div>
      <div className="w-1/3 md:w-1/6 p-4 flex justify-center">
        <div className="w-44 h-32 flex items-center justify-center border shadow-purple-500 shadow-lg rounded-xl">
          <FaSlack className="text-7xl text-white" />
        </div>
      </div>
      </div>
    )
}

export default Tool;