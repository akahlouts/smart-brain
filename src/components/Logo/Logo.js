import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt className="tilt">
      <img src={brain} alt="Logo" />
    </Tilt>
  );
};

export default Logo;
