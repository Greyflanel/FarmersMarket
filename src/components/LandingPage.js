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
      <div className="overlay"></div>
    </section>
   
    </>
  );
};

export default LandingPage;
