import React from "react";
import Chat from '../../../Component/Assets/Explore/chat.webp';
import Chat1 from '../../../Component/Assets/Explore/chat2.webp';
import Chat2 from '../../../Component/Assets/Explore/chat2.webp';
import Header from "../../Header";
import Footer from "../../Footer";

const App = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-8">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-10">Project: ACL Chat</p>
                        <br />
                        <p>
                            I worked on an innovative ACL Chat, developing a comprehensive chat application
                            utilizing <span className="font-bold">Angular</span> for the front-end, <span className="font-bold">Node.js</span> for the back-end, and <span className="font-bold">CSS</span> for the design.
                            The front-end was crafted with <span className="font-bold">Angular</span>, allowing for a dynamic and responsive user
                            interface. This choice enabled seamless integration of real-time messaging features,
                            ensuring a smooth user experience. On the back-end, I utilized <span className="font-bold">Node.js</span> to handle
                            server-side logic, manage user connections, and facilitate real-time data communication via WebSockets.
                            The design was implemented with <span className="font-bold">CSS</span>, focusing on creating a clean, user-friendly layout that enhances the overall usability of the application. This project showcases my ability to integrate various technologies to build a functional and efficient chat system.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <img
                            src={Chat1}
                            alt="Chat Screenshot"
                            className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
                    <div className="mb-4 lg:mb-0">
                        <img src={Chat} alt="Chat Screenshot" className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div>
                        <img
                            src={Chat2}
                            alt="Chat Screenshot"
                            className="h-64 lg:h-96 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
