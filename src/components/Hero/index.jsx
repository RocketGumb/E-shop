import React, { useState } from "react";
import "./Hero.sass";
import HeroBackground from "./HeroBackground.jsx";
import HeroCard from "./HeroCard.jsx";

const Hero = () => {
  // Half background image width
  const getImageHalfX = () => (window.innerWidth * 1.2) / 2;
  const getImageHalfY = () => (window.innerHeight * 1.2) / 2;

  const [cardData, setCardData] = useState("rotate3d(0, 0, 0, 0deg)");
  const [coordX, setCoordX] = useState(getImageHalfX());
  const [coordY, setCoordY] = useState(getImageHalfY());

  // Resetting styles
  window.onresize = function () {
    setCoordX(getImageHalfX());
    setCoordY(getImageHalfY());
  };

  return (
    <section
      className="hero"
      onMouseMove={(event) => {
        // Mouse coords
        const mouseX = event.pageX,
          mouseY = event.pageY,
          // Half screen width
          halfScreenX = window.innerWidth / 2,
          halfScreenY = window.innerHeight / 2,
          // Parameters for card animate
          rotateX = (mouseY - halfScreenY) / -halfScreenY,
          rotateY = (mouseX - halfScreenX) / halfScreenX,
          radius = Math.sqrt((rotateX, 5) + Math.pow(rotateY, 5)) * 15;

        // Background parallax
        setCoordX(0.05 * mouseX + 1.15 * halfScreenX);
        setCoordY(0.05 * mouseY + 1.15 * halfScreenY);
        // Card parallax
        setCardData(`rotate3d(${rotateX}, ${rotateY}, 0, ${radius}deg)`);
      }}
      onMouseLeave={() => {
        // Resetting styles
        setCoordX(getImageHalfX());
        setCoordY(getImageHalfY());
        setCardData("rotate3d(0, 0, 0, 0deg)");
      }}>
      <HeroBackground coordX={coordX} coordY={coordY} />
      <HeroCard cardData={cardData} coordX={coordX} coordY={coordY} />
    </section>
  );
};

export default Hero;
