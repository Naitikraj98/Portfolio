import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
            <h3>Designed and Developed by Naitik Raj</h3>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <h3>Copyright © {year} Naitik</h3>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li className="social-icons">
                <a
                 href="https://github.com/Naitikraj1998"                 
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naitik-raj-b33053206"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
