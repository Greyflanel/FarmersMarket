import React, {useRef, useEffect} from "react";
import lionText from "../assets/currently3.png";
import lion from "../assets/currently2.png";
import styled from "styled-components";
import { devices } from "./devices.js";
import { gsap } from "gsap";
import "../styles/index.css";

export default function CircleLogo() {
const circleRef = useRef(null);
  

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
  width: 40%;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  background-color: transparent !important;
  
`

const Lion = styled.img`
  position: absolute;
  width: 62%;
  
  
`

const LogoText = styled.img`
  position: absolute;
  width: 64%;
  filter: drop-shadow(1px 0.8px 1px var(--primary));
`

