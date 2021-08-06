import React from "react";
import video from "../Flowers.mp4";
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
