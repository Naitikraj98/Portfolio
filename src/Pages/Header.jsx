import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faFileAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Component/Assets/Logo1.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navColour, setNavColour] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div className={`flex justify-between items-center p-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navColour ? 'bg-black shadow-md' : 'bg-transparent'}`}>
            <img src={Logo} alt="logo" className="h-12" />
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-block p-2 rounded-lg text-white md:hidden focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <ul className={`flex-col md:flex md:flex-row ${menuOpen ? 'flex' : 'hidden'} ml-auto text-sm font-medium text-white`}>
                {/* <li className="md:mx-2">
                    <a href="/" className="block p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </a>
                </li> */}
                {/* <li className="md:mx-2">
                    <a href="/About" className="block p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                        About
                    </a>
                </li> */}
                <li className="md:mx-2">
                    <a href="/Project" className="block p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                        Project
                    </a>
                </li>
                <li className="md:mx-2">
                    <a href="/" className="block p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
