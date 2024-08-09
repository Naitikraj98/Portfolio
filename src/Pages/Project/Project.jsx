import React from "react";
import ProjectCards from "./pCard";
import Acl from "../../Component/Assets/acl.jpg";
import Chat from "../../Component/Assets/chat.webp";
import Dxc from "../../Component/Assets/DXC.jpg";
import GlassDetection from "../../Component/Assets/glass detection.webp";
import HOH from "../../Component/Assets/Page.png";
import Bhive from "../../Component/Assets/bhive-ft.jpg";
import '../../Style/style.css'
import { GrInProgress } from "react-icons/gr";
import { TiTick } from "react-icons/ti";



const Projects = () => {
  return (
    <div className="project-section bg-design py-12">
      {/* Viewport meta tag for better responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="container mx-auto px-4">
        <h1 className="project-heading text-3xl font-bold text-center text-white mb-8">
          My Works
        </h1>
        <p className="text-center text-white mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <div className="flex flex-wrap justify-center">
          {/* Project Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit my-4 mx-2 shadow-purple-500 shadow-lg rounded-xl">
            <ProjectCards
              imgPath={Acl}
              isBlog={false}
              title={
                <div className="flex items-center space-x-2 text-lg md:text-xl text-white text-center lg:text-2xl font-bold">
                  <TiTick className="text-3xl text-green-500" />
                  <span>Web Page</span>
                </div>               
              }
              description={
                <div className="text-sm md:text-base text-white text-center lg:text-lg">
                  This project showcases static web pages developed using Angular, demonstrating proficient use of modern web development techniques.
                  <div className="flex justify-center mt-4">
                    {/* <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                      <button className="bg-gray-800 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </a> */}
                    <a href="/web" target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
                        Explore
                      </button>
                    </a>
                  </div>
                </div>
              }
              imgStyle="w-full h-48 object-cover rounded-t-xl" // Ensure consistent width
            />
          </div>


          {/* Project Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit my-4 mx-2 shadow-purple-500 shadow-lg rounded-xl">
            <ProjectCards
              imgPath={Chat}
              isBlog={false}
              title={
                <div className="flex items-center space-x-2 text-lg md:text-xl text-white text-center lg:text-2xl font-bold">
                  <TiTick className="text-3xl text-green-500" />
                  <span>ACL Chat</span>
                </div>   
              }
              description={
                <div className="text-sm md:text-base text-white text-center lg:text-lg">
                  Developed a robust chat application for ACL, enabling seamless communication among employees.
                  It includes features,like group chats.
                  <div className="flex justify-center">
                    {/* <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                      <button className="bg-gray-800 text-white py-2 px-4 mt-4 rounded-lg mr-2 hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </a> */}
                    <a href="/chat" target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-400 transition">
                        Explore
                      </button>
                    </a>
                  </div></div>
              }
            />
          </div>



          {/* Project Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit my-4 mx-2 shadow-purple-500 shadow-lg rounded-xl">
            <ProjectCards
              imgPath={Dxc}
              isBlog={false}
              title={
                <div className="flex items-center space-x-2 text-lg md:text-xl text-white text-center lg:text-2xl font-bold">
                <TiTick className="text-3xl text-green-500" />
                <span>Digital Experiance</span>
              </div>   
              }
              description={
                <div className="text-sm md:text-base text-white text-center lg:text-lg">
                  This project educates users on the applications of AI/ML in various sectors such as healthcare and education.
                  <div className="flex justify-center mt-4">
                    {/* <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-gray-800 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </a> */}
                    <a href="/Detection" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
                        Explore
                      </button>
                    </a>
                  </div>
                </div>
              }
            />
          </div>

          {/* Project Card 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit my-4 mx-2 shadow-purple-500 shadow-lg rounded-xl">
            <ProjectCards
              imgPath={GlassDetection}
              isBlog={false}
              title={
                <div className="flex items-center space-x-2 text-lg md:text-xl text-white text-center lg:text-2xl font-bold">
                  <TiTick className="text-3xl text-green-500" />
                  <span>Glass Detection</span>
                </div>   
              }
              description={
                <div className="text-sm md:text-base text-white text-center lg:text-lg">
                  Developed software to ensure employee compliance with safety protocols by detecting the use of safety glasses upon factory entry.
                  <div className="flex justify-center mt-4">
                    {/* <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-gray-800 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </a> */}
                    <a href="/GlassDetection" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
                        Explore
                      </button>
                    </a>
                  </div>
                </div>
              }
            />
          </div>



          {/* Project Card 5 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit my-4 mx-2 shadow-purple-500 shadow-lg rounded-xl">
            <ProjectCards
              imgPath={Bhive}
              isBlog={false}
              title={
                <div className="flex items-center space-x-2 text-lg md:text-xl text-white text-center lg:text-2xl font-bold">
                  <TiTick className="text-3xl text-green-500" />
                  <span>Bhive</span>
                </div>   
              }
              description={
                <div className="text-sm md:text-base text-white text-center lg:text-lg">
                  Developed a website for a friend, integrating backend image and video content seamlessly with the frontend. The design was crafted using FIGMA.
                  <div className="flex justify-center mt-4">
                    <a href="https://github.com/Naitikraj98/Bhive_Assignment" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-gray-800 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
                        Explore
                      </button>
                    </a>
                  </div>
                </div>
              }
            />
          </div>

          {/* Project Card 6 */}
          
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit my-4 mx-2 shadow-purple-500 shadow-lg rounded-xl">
            <ProjectCards
              imgPath={HOH}
              isBlog={false}
              title={
                <div className="flex items-center space-x-2 text-lg md:text-xl text-white text-center lg:text-2xl font-bold">
                  <GrInProgress className="text-xl text-yellow-400" />
                  <span>House Of Hunger</span>
                </div>
              }

              description={
                <div className="text-sm md:text-base text-white text-center lg:text-lg">
                  I developed this comprehensive restaurant website, allowing customers to browse the menu, place orders online, book tables, and more.
                  <div className="flex justify-center mt-4">
                    <a href="https://github.com/Naitikraj1998" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-gray-800 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </a>
                    <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">
                      <button className="ios-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
                        Explore
                      </button>
                    </a>
                  </div>

                </div>
              }
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;