import React from "react";
import Dect from "../../../Component/Assets/Explore/detection.jpg";
import Dect1 from "../../../Component/Assets/Explore/detection1.jpg";
import Dect2 from '../../../Component/Assets/Explore/detection2.jpg';
import Dect3 from '../../../Component/Assets/Explore/detection3.webp.jpg';
import Header from "../../Header";
import Footer from "../../Footer";

const Detection = () => {
    return (
        <>
            <Header />
            <div className="px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-8">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-10 lg:mt-20">Project: Digital Experience (DXC)</p>
                        <br />
                        <p>
                            I demonstrated the application of cutting-edge AI and ML technologies, specifically focusing on
                            Natural Language Processing (NLP), Computer Vision, and Speech Recognition. The project
                            highlighted the potential of these technologies in various sectors, including hospitals, schools,
                            and worksites. For the front-end, I used <span className="font-bold">React</span>, which allowed me to create an interactive and user-
                            -friendly interface. The back-end was powered by <span className="font-bold">Node.js</span>, ensuring robust server-side logic and
                            efficient data handling. <span className="font-bold">MongoDB</span> was used as the database, providing a flexible and scalable
                            solution for storing and retrieving data. The design was implemented with <span className="font-bold">Tailwind CSS</span>, enab-
                            -ling a sleek, responsive, and visually appealing layout. This project exemplifies my ability to 
                            integrate advanced technologies to build innovative solutions that can be applied across 
                            multiple domains.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-20">
                        <img
                            src={Dect}
                            alt="Detection Project"
                            className="h-48 lg:h-64 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
                    <div className="mb-4 lg:mb-0">
                        <img src={Dect1} alt="Detection Project" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="mb-4 lg:mb-0">
                        <img src={Dect2} alt="Detection Project" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div>
                        <img src={Dect3} alt="Detection Project" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Detection;
