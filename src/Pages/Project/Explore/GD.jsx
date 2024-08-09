import React from "react";
import Gd from '../../../Component/Assets/Explore/GD.jpg';
import Gd1 from '../../../Component/Assets/Explore/GD1.jpg';
import Gd2 from '../../../Component/Assets/Explore/GD2.jpg';
import Gd3 from '../../../Component/Assets/Explore/Gd3.webp';
import Header from "../../Header";
import Footer from "../../Footer";

const GlassDetection = () => {
    return (
        <>
            <Header />
            <div className="px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-8">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-10 lg:mt-20">Project: Glass Detection</p>
                        <br />
                        <p>
                            I developed a system designed to ensure that employees entering a factory
                            are wearing all required safety equipment. The solution I created leverages
                            real-time detection and verification technology. For the user interface, I used
                            <span className="font-bold"> React</span>, which provided a dynamic and intuitive front-end experience for monit-
                            -oring and managing safety compliance. <span className="font-bold">Node.js</span> was utilized for the back-end,
                            handling the server-side operations, including data processing and integration
                            with detection systems. <span className="font-bold">MongoDB</span> served as the database, offering a scalable
                            solution for storing employee and equipment data. The design was crafted with
                            <span className="font-bold"> Tailwind CSS</span>, ensuring a modern, responsive, and user-friendly interface. This
                            project highlights my ability to create practical solutions that enhance work-
                            -place safety through technology.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-20">
                        <img
                            src={Gd3}
                            alt="Glass Detection"
                            className="h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
                    <div className="mb-4 lg:mb-0">
                        <img src={Gd} alt="Glass Detection" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="mb-4 lg:mb-0">
                        <img src={Gd2} alt="Glass Detection" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div>
                        <img src={Gd1} alt="Glass Detection" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GlassDetection;
