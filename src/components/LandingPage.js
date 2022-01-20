import React from "react";
import "../styles/index.css";
import video from "../assets/CPU.mp4";

const LandingPage = () => {
  return (
    <>
    <section className="showcase">
      <video muted loop autoPlay>
        <source src={video} type="video/mp4"/>
      </video>
      <div>
        <span className="underlined_text_container">
          <a href="https://github.com/">Computer Parts & Electronics</a>
        </span>
      </div>
      <div className="overlay"></div>
      <div className="overlay1"></div>
    </section>
   
    </>
  );
};

export default LandingPage;
