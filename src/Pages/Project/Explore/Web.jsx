import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Img from '../../../Component/Assets/Explore/web.jpeg';
import Img1 from '../../../Component/Assets/Explore/web1.jpeg';
import Img2 from '../../../Component/Assets/Explore/web2.jpg';
import Img3 from '../../../Component/Assets/Explore/web3.webp';

const Web = () => {
    return (
        <>
            <Header />
            <div className="px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-8">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-10">Project: Creating Web Pages</p>
                        <br />
                        <p className="font-medium text-justify">
                            I am engaged in creating static web pages for my company using <span className="font-bold">Angular</span> for the front end and <span className="font-bold">CSS</span> for design. This technology stack allows me to build highly efficient and scalable web applications with a robust framework that enhances productivity. By leveraging <span className="font-bold">Angular's</span> powerful features, such as two-way data binding, modular architecture, and comprehensive tooling, I am able to deliver high-quality, responsive web pages that meet our company's needs. My work focuses on ensuring that the web pages are not only visually appealing but also optimized for performance and user experience. Using <span className="font-bold">CSS</span>, I create clean, modern designs that enhance the visual appeal and usability of our web pages.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <img
                            src={Img3}
                            alt="Web Development"
                            className="h-64 lg:h-80 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
                    <div className="mb-4 lg:mb-0">
                        <img src={Img1} alt="Web Development" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="mb-4 lg:mb-0">
                        <img
                            src={Img2}
                            alt="Web Development"
                            className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div>
                        <img
                            src={Img}
                            alt="Web Development"
                            className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Web;















// import React from "react";
// import web from "../../../Component/Assets/Explore/web.jpeg"
// import Header from "../../Header";

// const Web = () => {

//     return(
//         <>
//         <Header/>
//         <p className="text-center font-medium text-white bg-design">
//         I am engaged in creating static web pages for my company using <span className="font-bold">Angular.</span><br></br> This technology allows me to build highly efficient and
//         scalable web applications with<br></br>  a robustframework that enhances productivity. By leveraging Angular's powerful features,<br></br> such as two-way data binding, modular
//         architecture, and comprehensive tooling, <br></br>I am able to deliver high-quality, responsive web pages that meet our company's needs.<br></br> My work focuses on ensuring
//         that the web pages are not only visually appealing but also<br></br> optimized for performance and user experience. This project has been a rewarding experience,<br></br>
//         enabling me to deepen my expertise in Angular and contribute effectively to my company's <br></br>digital presence.
//         </p>
//         <img src={web} />
//         </>
//     )
// }
// export default Web