import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


const Animation = () => {
  const boxRef = useRef();
  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0 });

    tl.set([boxRef.current], {
      xPercent: 0,
      overflowX: "hidden",
    }).to([boxRef.current], {
      xPercent:-100,
      ease: "linear",
      
    });
  });

  return (
    <div
      ref={boxRef}
      style={{
        position: "absolute",
        overflowX: "hidden",
        zIndex: 1000,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(#9cedfa, #cef5fa)",
      }}
    />
  );
};

export default Animation;
