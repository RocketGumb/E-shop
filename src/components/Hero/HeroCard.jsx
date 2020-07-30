import React from "react";
import HeroBackground from "./HeroBackground";
import manImage from "../../static/man.jpg";
import { ScrumbEffect } from "../ScrumbEffect";

const HeroCard = ({ cardData, coordX, coordY }) => {
  return (
    <>
      <div className="hero__text">
        <ScrumbEffect defaultTitle="Hello world" />
      </div>

      <div className="hero__card">
        <div className="hero__image-wrapper">
          <HeroBackground coordX={coordX} coordY={coordY} />
        </div>

        <div className="hero__rotation" style={{ transform: cardData }}>
          <img src={manImage} alt="" />
          <div className="hero__text">
            <ScrumbEffect defaultTitle="Hello world" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
