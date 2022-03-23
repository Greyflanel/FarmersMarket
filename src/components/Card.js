import React, { useEffect } from "react";
import "../styles/index.css";
import { Card, Content, Front, Back, FrontH1 } from "../components/styled-components/Styled-Card.js";
import gsap from "gsap";

const FlipCard = () => {
  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0 });

    tl.set(".flip-card", { y: "-100%", rotateX: "0deg"}).to(".flip-card",{ y: "20%", duration: 3, rotateX: "360deg"});
  })
  return (
    <div>
      <Card>
        <Content>
          <Front>
            <FrontH1>
                Sharif's
                <br />
                Computer Parts
                <br /> & Electronics
            </FrontH1>
          </Front>
          <Back></Back>
        </Content>
      </Card>
    </div>
  );
}

export default FlipCard;