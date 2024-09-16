import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);

  const strings = [
    { text: "FULL TIME SOFTWARE DEVELOPER", style: { fontSize: "3rem", color: "blue" } },
    { text: "MERN STACK DEVELOPER", style: { fontSize: "2.5rem", color: "green" } },   
    { text: "FRONT-END DEVELOPER", style: { fontSize: "2rem", color: "red" } },
    { text: "BACK-END DEVELOPER", style: { fontSize: "3rem", color: "blue" } },

  ];

  useEffect(() => {
    const typewriterElement = document.querySelector(".typewriter");
    if (typewriterElement) {
      typewriterElement.style.fontSize = strings[currentStringIndex].style.fontSize;
      typewriterElement.style.color = strings[currentStringIndex].style.color;
    }
  }, [currentStringIndex]);

  return (
    <div className="typewriter-text">
      <Typewriter
        options={{
          strings: strings.map(s => s.text),
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        onStringTyped={(index) => setCurrentStringIndex(index)}
      />
      <span className="typewriter"></span>
    </div>
  );
};

export default Type;
