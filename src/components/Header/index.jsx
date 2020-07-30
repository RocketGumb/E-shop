import React from "react";
import { ScrumbEffectHover } from "../ScrumbEffect";
import "./Header.sass";

const Header = () => {
  let bool = false;
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__menu">
          <li className="header__link">
            <a href="">
              <ScrumbEffectHover defaultTitle="Shop" />
            </a>
          </li>
          <li className="header__link">
            <a href="">
              <ScrumbEffectHover defaultTitle="Lookbook" />
            </a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <svg
          className="header__logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 525.5 96.8">
          <path d="M7.1,76.6S14.5,82,23.6,82C36,82,42.3,75.8,42.5,61V2H57.9V63.9c-.2,19.5-10.7,32.9-33.2,32.9C9.1,96.8.8,89.7,0,89.1Z"></path>
          <path d="M102.7,48.5c0-27,18.7-48.5,48.5-48.5s48.7,21.5,48.7,48.5-18.7,48.3-48.7,48.3S102.7,75.2,102.7,48.5Zm81.4,0c0-19.2-13.1-33.8-32.9-33.8s-32.7,14.7-32.7,33.8S131.6,82,151.2,82,184.1,67.5,184.1,48.5Z"></path>
          <path d="M245.6,2h40.2c23.3,0,37.5,11.3,37.5,31.4,0,14.5-7.6,24.1-19.3,28.7V63l23,29.5v2.2H310L287.3,65.3H260.9V94.7H245.6Zm39.7,13.6H260.9V52.1h25.3c12.8,0,21.3-5.7,21.3-18.1S298.9,15.6,285.3,15.6Z"></path>
          <path d="M390,94.7H374.7V2H390Z"></path>
          <path d="M460.5,49.1,507,2h18.5V3.9L488.9,41.1l36.6,51.6v2H507.4L477.9,52.2,460.5,70.1V94.7H445.2V2h15.3Z"></path>
        </svg>
      </a>
      <nav className="header__navigation">
        <ul className="header__menu">
          <li className="header__link">
            <a href="">
              <ScrumbEffectHover defaultTitle="About" />
            </a>
          </li>
          <li className="header__link">
            <a href="">
              <ScrumbEffectHover defaultTitle="Cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
