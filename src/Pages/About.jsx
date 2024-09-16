import React from "react";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../Component/Assets/images (1).jpg";
import Techstack from "./Tech";
import Tool from "./Tools";
import Tilt from "react-parallax-tilt";
import Resume from "./Resume";

const About = () => {
    return (
        <div className="about-section bg-design py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                    <div className="lg:w-7/12 lg:pr-8">
                        <h1 className="text-4xl font-bold text-center text-white mb-6">
                            Know Who <strong className="text-white">I'M</strong>
                        </h1>
                        <blockquote className="mb-0 text-lg font-medium">

                            <p className="text-2xl leading-relaxed text-white text-center font-light">
                                Hello, I am <span className=" font-medium">Naitik Raj,</span>&nbsp;
                                currently employed as a software developer at <span className=" font-medium">ACL Digital- an Alten Company</span>.
                                <br />
                                I have completed B.Tech in Computer Science at <span className=" font-medium">Sagar Institute <br />
                                    Of Research And Technology (Bhopal).</span>

                                <br />
                                Apart from coding, here are some other activities that I love to do:

                            </p>
                            {/* </blockquote>
</div> */}

                            <ul className="list-disc list-inside font-medium text-white mt-4">
                                <li className="flex items-center  space-x-2">
                                    <ImPointRight />
                                    <span>Playing Online Games</span>
                                </li>
                                <li className="flex items-center  space-x-2">
                                    <ImPointRight />
                                    <span>Travelling</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <ImPointRight />
                                    <span>Cooking</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <ImPointRight />
                                    <span>Treaking</span>
                                </li>
                                {/* <li className="flex items-center text-white space-x-2">
                                    <ImPointRight />
                                    <span></span>
                                </li> */}
                            </ul>
                        </blockquote>
                    </div>
                    <div className="lg:w-5/12 flex justify-center lg:justify-end py-8 lg:py-0">
                        <Tilt className="w-full max-w-sm">
                            <img src={laptopImg} className="w-64 h-auto rounded-lg shadow-lg" alt="avatar" />
                        </Tilt>
                    </div>
                </div>
            </div>
            <Resume />
            <h1 className="project-heading text-white text-3xl text-center mt-5 mb-5">
                Professional <strong className="text-purple-400">Skillset </strong>
            </h1>
            <Techstack />
            <h1 className="project-heading text-center text-white text-3xl mt-5 mb-5">
                <strong className="text-purple-400">Tools</strong> I use
            </h1>
            <Tool />
        </div>
    );
}

export default About;
