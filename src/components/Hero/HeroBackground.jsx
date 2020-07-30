import React from "react";
import bgImage from "../../static/banner.jpg";

const HeroBackground = ({ coordX, coordY }) => {
  return (
    <img
      className="hero__image"
      src={bgImage}
      style={{
        transform: `translate(-${coordX}px, -${coordY}px)`,
      }}
      alt=""
    />
  );
};

export default HeroBackground;
