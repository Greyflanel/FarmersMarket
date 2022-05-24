import React from "react";
import lionText from "../assets/Lion-Logo-Text2.png";
import lion from "../assets/Lion-Logo.png";
import "../styles/index.css";

export default function CircleLogo() {
  return (
    <div className="circle-logo-container">
      <div className="circle-logo">
        <img src={lionText} alt="sharif logo text" className="logo-text" />
        <img src={lion} alt="lion logo" className="lion" />
      </div>
    </div>
  );
}