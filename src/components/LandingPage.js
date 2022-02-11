import React from "react";
import "../styles/index.css";
import video from "../assets/CPU.mp4";
import {gsap} from "gsap";
const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <section className="first-section">
        <video id="video-bg" muted loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
        <div className="landing-page-text">
          <h1>Computer Parts & Electronics</h1>
        </div>
        <div className="overlay"></div>
        <div className="overlay1"></div>
      </section>
      <section className="second-section">
          <h2>Second-Section</h2>
      </section>
      <section className="third-section">
        <h2>Third-Section</h2>
      </section>
    </div>
  );
};

export default LandingPage;
