import React, {useRef, useEffect} from "react";
import lionText from "../assets/Lion-Logo-Text.png";
import lion from "../assets/cartoon-lion-logo22.png";
import styled from "styled-components";
import { devices } from "./devices.js";
import { gsap } from "gsap";
import "../styles/index.css";

export default function CircleLogo() {
const circleRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0 });
    tl.set(circleRef.current, {
      autoAlpha: 0,
      clipPath: "circle(0.0% at 50% 100%)"
    }).to(
      circleRef.current,
      {
        autoAlpha: 1,
        clipPath: "circle(100% at 50% 50%)",
        duration: 1.5,
        ease: "power1.in",
      }
    );
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
  width: 100%;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  background-color: transparent !important;
  
`

const Lion = styled.img`
  position: relative;
  width: 60%;
  
  /* border: 1px solid red; */
  
`

const LogoText = styled.img`
  position: absolute;
  width: 100%;
  filter: drop-shadow(0.5px 1.5px 1.5px var(--primary));
`

