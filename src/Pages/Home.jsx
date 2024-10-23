import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import background from "../Component/Assets/video.mp4";
import homeLogo from "../Component/Assets/home.png";
import Type from "./Type";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Project/Project";

const Home = () => {
  return (
    <>
      <Header />
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={background}
          autoPlay
          loop
          muted
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="w-full md:w-1/2  text-white text-center">
              <h1 className="text-4xl mt-25 font-bold mb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-3xl font-bold mb-4">
                I'M
                <strong className="text-4xl"> NAITIK RAJ</strong>
              </h1>
              <div className="py-12 text-2xl text-yellow-300">
                <Type />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-10 md:mt-0">
              <img
                src={homeLogo}
                alt="home pic"
                className="h-auto w-auto max-h-60 md:max-h-80"
              />
            </div>
          </div>
        </div>
      </section>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
