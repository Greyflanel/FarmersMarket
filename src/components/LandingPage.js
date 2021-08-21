import React from "react";
import video from "../assets/Flower.mp4";
import "../styles/index.css";

const LandingPage = () => {
  return (
    <section className="showcase">
      {/* <video muted loop autoPlay>
        <source src={video} type="video/mp4"/>
      </video> */}
      <div className="overlay"></div>
    </section>
  );
};

export default LandingPage;
