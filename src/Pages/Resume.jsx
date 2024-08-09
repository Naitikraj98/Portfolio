import React from "react";
import pdf from "../Component/Assets/Naitik_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const ResumeNew = () => {
  return (
    <div className="bg-design mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <AiOutlineDownload className="mr-2" size={20} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;
