import React, {useRef, useEffect} from "react";
import lionText from "../assets/Lion-Logo-Text.png";
import lion from "../assets/new-hi-res.png";
import styled from "styled-components";
import { devices } from "./devices.js";
import { gsap } from "gsap";
import "../styles/index.css";

export default function CircleLogo() {
const circleRef = useRef(null);
  useEffect(() => {
    
      let tl = gsap.timeline({ repeat: 0 });
      if (circleRef) {
      tl.set(circleRef.current, {
        autoAlpha: 0,
        clipPath: "circle(0% at 50% 50%)"
      }).to(
        circleRef.current,
        {
          delay: 0.5,
        
          clipPath: "circle(50% at 50% 50%)",
          duration: 2,
          ease: "sine.out",
        }
      );
      } else {
        return;
    }
  }, []);

  return ( 
    <LogoContainer className="logo-container" ref={circleRef}>
        <LogoText src={lionText} alt="sharif logo text" className="logo-text" />
        <Lion src={lion} alt="lion logo" className="lion" />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  width: 350%;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  background-color: transparent !important;
  
`

const Lion = styled.img`
  position: relative;
  width: 62%;
  padding-top: 0.8vh;
  /* border: 1px solid red; */
  
`

const LogoText = styled.img`
  position: absolute;
  width: 100%;
  filter: drop-shadow(1px 0.8px 1px var(--primary));
`

