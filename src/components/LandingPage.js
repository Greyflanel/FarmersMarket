import React, { useEffect } from "react";
import "../styles/index.css";
import compImage from "../assets/desktop-setup1.png";
import pic1 from "../assets/social-card-pic1.jpg";
import pic2 from "../assets/social-card-pic2.jpg";
import pic3 from "../assets/social-card-pic3.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
const LandingPage = () => {
 
  useEffect(() => {
    const tl1 = gsap.timeline({ repeat: 0, });
    const tl2 = gsap.timeline({ repeat: 0, });
    const tl3 = gsap.timeline({ repeat: 3});
    

    tl1.to("header", {
      scrollTrigger: {
        trigger: ".first-section",
        scrub: 0,
        start: "top top",
        
        ease: "power4",
      },
     
      background: "rgba(173, 193, 199, 1)",
      
    });
    tl2.set(".featured-items2", {
      
     
    }).to(".featured-items1, .featured-items2", {
      scrollTrigger: {
        trigger: ".first-section",
        scrub: 0.8,
        start: "top top",
        
        ease: "none",
        
      },
      
      
      
    });

    // tl3.to("a", {  repeat: 3, repeatDelay: 1, repeatRefresh: true });
    const handleOnMouseMove = e => {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    }

    for (const card of document.querySelectorAll(".cardi")) {
      card.onmousemove = e => handleOnMouseMove(e);
    }

  });
  return (
    <div className="landing-page-container">
      <section className="first-section">
        <div className="custom-shape-divider-bottom-1645215428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".2"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              opacity="1"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="featured-items1">
          {/* <img className="front-item" src={compImage} alt="computer" /> */}
        </div>
        <div className="browse-all-button-container">
          <button>
            <a className="browse-all-button" href="/products">
              Browse All
            </a>
          </button>
          </div>
          <div className="category-title-container">
            <h5>Or Browse By Category</h5>
          
        </div>
        <div className="featured-items2">
          {/* <img className="back-item" src={compImage} alt="computer" /> */}
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
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".1"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="product-categories">
          <div className="category">
            <a className="category-link" href="/cpu">
              <h4>CPUs</h4>
            </a>
          </div>
          <div className="category">
            <a className="category-link" href="/gpu">
              <h4>GPUs</h4>
            </a>
          </div>
          <div className="category">
            <a className="category-link" href="/psu">
              <h4>PSUs</h4>
            </a>
          </div>
          <div className="category">
            <a className="category-link" href="/motherboards">
              <h4>Motherboards</h4>
            </a>
          </div>
          <div className="category">
            <a className="category-link" href="/cases&accessories">
              <h4>Cases & Misc</h4>
            </a>
          </div>
          <div className="category">
            <a className="category-link" href="/monitors">
              <h4>Monitors</h4>
            </a>
          </div>
        </div>
      </section>

      <section className="third-section">
        <div className="custom-shape-divider-bottom-1645215428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".2"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0"
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
      <section className="fourth-section">
        <div className="cardi-container">
          <h5>What People are Saying...</h5>
          <div id="cards">
            <div className="cardi">
              <img src={pic1} alt="profile of person" />
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                tenetur reiciendis suscipit consectetur dolores. Aliquam."
              </p>
            </div>
            <div className="cardi">
              <img src={pic2} alt="profile of person" />
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                tenetur reiciendis suscipit consectetur dolores. Aliquam."
              </p>
            </div>
            <div className="cardi">
              <img src={pic3} alt="profile of person" />
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                tenetur reiciendis suscipit consectetur dolores. Aliquam."
              </p>
            </div>
          </div>
        </div>

        {/* <Svg /> */}
        <footer className="custom-shape-divider-top-1645218211">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".2"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </footer>

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
    </div>
  );
};

export default LandingPage;
