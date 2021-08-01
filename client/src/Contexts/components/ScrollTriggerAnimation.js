import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerAnimation = () => {
  const boxRef = useRef();
  useEffect(() => {
    let tl = gsap.timeline({ perspective: 1000, repeat: 0 });

    tl.set([boxRef.current], {
      xPercent: "-150",
      yPercent: "-100",
      
      overflowX: "hidden",
    })
      .to([boxRef.current], {
        delay: 0.7,
        x: "150%",
        
        
      })
      
  });

  return (
    <div
      
      ref={boxRef}
      style={{
        transformStyle: "preserve-3d",
        
        
        width: "25vw",
        height: "4vh",
        padding: "1rem",
        background: "#74fd24",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.3em",
        perspective: "1000px",
      }}
    >
      This is a Test
    </div>
  );
};

export default ScrollTriggerAnimation;
