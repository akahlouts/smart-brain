import React from "react";
import "./Navigation.css";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <div className="nav">
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </div>
    );
  } else {
    return (
      <div className="nav">
        <span onClick={() => onRouteChange("signin")}>Sign in</span>
        <span onClick={() => onRouteChange("register")}>Register</span>
      </div>
    );
  }
};

export default Navigation;
