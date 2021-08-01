import React, { useState } from "react";
import video from "../Flowers.mp4";
import "../index.css";
import NavBar from "./NavBar";


const LandingPage = () => {
  
  return (
    <section className="showcase">
      <video muted loop autoPlay>
        <source
          src={video}
          type="video/mp4"
        />
      </video>
      <div className="overlay"></div>
    </section>
  );
};

export default LandingPage;

