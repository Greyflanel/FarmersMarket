import React, {useRef, useEffect} from "react";
import lionText from "../assets/Lion-Logo-Text.png";
import lion from "../assets/cartoon-lion-logo2.png";
import styled from "styled-components";
import { gsap } from "gsap";
import "../styles/index.css";

export default function CircleLogo() {
const circleRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0 });
    tl.set(circleRef.current, {
      autoAlpha: 0,
      clipPath: "circle(0.0% at 50% 50%)"
    }).to(
      circleRef.current,
      {
        autoAlpha: 1,
        clipPath: "circle(50% at 100% 50%)",
        duration: 2.5,
        ease: "power4.inout",
      }
    );
  }, []);

  return ( 
    <LogoContainer ref={circleRef}>
      <Logo>
        <LogoText src={lionText} alt="sharif logo text" className="logo-text" />
        <Lion src={lion} alt="lion logo" className="lion" />
      </Logo>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Logo = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 100;
`

const Lion = styled.img`
  position: absolute;
  width: 28rem;
  left: -13.9rem;
  z-index: 10;
`

const LogoText = styled.img`
  position: absolute;
  transform-origin: 49.2%;
`

