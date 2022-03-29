import React, { useEffect } from "react";
import "../styles/index.css";
import video from "../assets/CPU.mp4";
import lion from "../assets/newbluelion4.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KUTE from "kute.js";
import FlipCard from "../components/Card.js";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    let tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 99999999999, duration: 4800, yoyo: true }
    );
    tween.start();

    let tween2 = KUTE.fromTo(
      "#blob3",
      { path: "#blob3" },
      { path: "#blob4" },
      { repeat: 99999999999, 
        duration: 4800, 
        yoyo: true }
    );
    tween2.start();

    
    let tl4 = gsap.timeline({
      yoyo: "true",
      repeat: -1,
      zIndex: 99999,
      ease: "power4.inout",
    });
    let tl5 = gsap.timeline({
      yoyo: "true",
      repeat: -1,
      zIndex: 9999,
      ease: "power4.inout",
    });

    

    // tl3
    //   .set(".svg-container", { rotateZ: "90deg", scale: 0.8 })

    tl4
      .set("#blob", { autoAlpha: 1, yPercent: 300, xPercent: -50 })
      .to("#blob", { x: "-30%", y: "-70%", duration: 30 });
    tl5
      .set("#new-blob", { autoAlpha: 1, yPercent: -200, xPercent: -40 })
      .to("#new-blob", { x: "40%", y: "-80%", duration: 30 });

    // tl6
    //   .set(".landing-page-text", {
    //     transformOrigin: "bottom",
    //     rotateY: "-30deg",
    //     rotateX: "-50deg",
    //     // backfaceVisibility: "hidden",
    //   })
    //   .to(".landing-page-text", {
    //     autoAlpha: 1,
    //     duration: 14,
    //     y: "12%",
    //     x: "24%",
    //     rotateX: "0deg",
    //     rotateY: "45deg",
    //     rotateZ: "1.5deg",

    //   })
    // .to(".landing-page-text", {
    //   rotateZ: "0deg",
    //   duration: 2
    // });
  }, []);

  return (
    <div className="landing-page-container">
      <svg
        id="blob"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(452.60822487675944 340.5005591574244)">
          <path
            id="blob1"
            d="M169.3 -167.7C215.2 -123.5 245.1 -61.8 242 -3.1C239 55.6 202.9 111.3 157.1 136.3C111.3 161.3 55.6 155.6 8.8 146.8C-37.9 138 -75.9 125.9 -125.9 100.9C-175.9 75.9 -237.9 37.9 -246.4 -8.5C-254.9 -54.9 -209.8 -109.8 -159.8 -154C-109.8 -198.2 -54.9 -231.6 3.4 -235C61.8 -238.4 123.5 -211.8 169.3 -167.7"
            opacity="1"
            fill="#F5BC18"
          ></path>
        </g>
        <g transform="translate(501.67205826772965 288.8382467986756)">
          <path
            id="blob2"
            d="M111.6 -105.2C129.9 -66.1 119.8 -20.5 107.2 20.3C94.5 61.1 79.4 97.2 39.4 138.1C-0.6 179 -65.4 224.6 -115.9 211.5C-166.4 198.4 -202.6 126.4 -217.5 52.2C-232.5 -22.1 -226.1 -98.6 -186.3 -142.7C-146.5 -186.8 -73.2 -198.4 -13.3 -187.8C46.6 -177.2 93.3 -144.4 111.6 -105.2"
            fill="#08208e"
          ></path>
        </g>
      </svg>
      <section className="first-section">
        {/* <video id="video-bg" muted autoPlay>
          <source src={video} type="video/mp4" />
        </video> */}
        <div className="blue-lion">
          <img  src={lion} alt="Stylized Lion"/>
        </div>
        
        {/* <div className="landing-page-text">
          <h1>
            Sharif's
            <br />
            Computer Parts
            <br /> & Electronics
          </h1>
        </div> */}
        <div className="landing-page-content"></div>
        <div className="landing-page-content2"></div>
        <div className="overlay"></div>
        <div className="overlay1"></div>
        <div className="custom-shape-divider-bottom-1645215428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".0"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              opacity="1"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="second-section">
        <div className="custom-shape-divider-top-1645218211">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2>Second-Section</h2>
      </section>

      <section className="third-section">
        {/* <div className="blob-text">
          <img src={blobText} alt="blob shape" />
        </div> */}

        <div className="custom-shape-divider-bottom-1645215428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1100 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".6"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* <Svg /> */}
        {/* <h2>Third-Section</h2> */}
      </section>
      <section className="fourth-section">
        <div className="custom-shape-divider-top-1645218211">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>

            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* <div className="cardinal">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-windows"></i>
              <h3>Windows</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <a href="#" type="button">
                Read More
              </a>
            </div>
          </div>
        </div> */}
      </section>
      <svg
        id="new-blob"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(478.1606622382705 214.8241973566969)">
          <path
            opacity="1"
            id="blob3"
            d="M71.4 -76.1C83.9 -58.9 79.5 -29.5 100 20.5C120.5 70.5 166 140.9 153.5 190.9C140.9 240.9 70.5 270.5 5.7 264.8C-59.2 259.2 -118.3 218.3 -159.7 168.3C-201 118.3 -224.5 59.2 -205 19.4C-185.6 -20.3 -123.2 -40.5 -81.9 -57.7C-40.5 -74.9 -20.3 -88.9 4.6 -93.5C29.5 -98.1 58.9 -93.3 71.4 -76.1"
            fill="#08208e"
          ></path>
        </g>
        <g transform="translate(443.3027353825947 328.938993779944)">
          <path
            id="blob4"
            d="M153.9 -174.4C166.4 -141.4 120.7 -70.7 105.9 -14.8C91 41 107 82 94.5 108.4C82 134.7 41 146.3 8.8 137.5C-23.3 128.7 -46.7 99.3 -75.8 73C-105 46.7 -140 23.3 -142.5 -2.5C-145 -28.3 -114.9 -56.6 -85.7 -89.6C-56.6 -122.6 -28.3 -160.3 21.2 -181.5C70.7 -202.7 141.4 -207.4 153.9 -174.4"
            fill="#08208e"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default LandingPage;

// let tl2 = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: ".first-section",

//     pin: true, // pin the trigger element while active
//     anticipatePin: 1,
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     end: "-=100", // end after scrolling 500px beyond the start
//     scrub: -10, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     // snap: {
//     //   snapTo: "labels", // snap to the closest label in the timeline
//     //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//     //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//     //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
//     // },
//   },
// });
// tl2.play()
