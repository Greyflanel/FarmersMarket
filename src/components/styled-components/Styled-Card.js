import styled from "styled-components";



const Content = styled.div`
  position: absolute;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  text-shadow: 1px 2px 2px rgb(255, 255, 255);
`;

const Card = styled.div`
  position: absolute;
  z-index: 100000000;
  display: flex;
  flex-direction: column;
  perspective: 1200px;
  color: white;
  flex-wrap: wrap;
  top: 25%;
  left: 10%;
 
  height: 100%;
  max-height: 300px;
  max-width: 30vw;
  transform: rotateZ(0deg);
  /* &:hover ${Content} {
    transform: rotateX(-180deg);
    transition: transform 0.7s;
  } */
`;

const Front = styled.div`
  position: absolute;
  height: 100%;
  
  
  color: white;
  display: grid;
  place-items: center;
  border-radius: 10px;
  backface-visibility: hidden;
  background-color: rgba(255, 255, 255, 0.315);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border: 0.4px solid rgba(151, 183, 250, 0.5);

  box-shadow: 1px 2px 1px 1px #b4b4b486, -1px 0 28px 0 rgba(34, 33, 81, 0.12),
    54px 54px 28px 5px rgba(34, 33, 81, 0.85);
  box-shadow: 2px 2px 2px 4px #2f303165, 0 0 2px 3px #8b8b8b5e inset;
  box-shadow: 0px 15px 15px -3px #273044,
    inset 1px 1px 1px 2px rgba(255, 255, 255, 0.04);
  box-shadow: 1px 1px 0 1px #ffffff7a, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    54px 54px 28px -15px rgba(34, 33, 81, 0.15);
`;
const Back = styled.div`
  position: absolute;
  height: 100%;
 
  line-height: 250px;
  color: #03446a;
  text-align: center;
  border-radius: 10px;
  
  backface-visibility: hidden;
  background-position: center center;
  background-size: 35%;
  backdrop-filter: contrast(10%);
  background-repeat: repeat;
  
  background-color: #08218e42;
  color: white;
  transform: rotateX(180deg);
  text-shadow: 1px 3px 4px rgb(22, 22, 22);
  backdrop-filter: blur(1px);
  background-blend-mode: color-dodge;
`;

const FrontH1 = styled.h1`
  color: rgba(8, 32, 140, 0.915);
  font-weight: 350;
  font-size: clamp(2.4rem, 3vw + 1rem, 3.75rem);
  text-shadow: 0 1px 1px white;
`;
const BackH2 = styled.h2`
  color: white;
  font-weight: 250;
  font-size: 1rem;
  transform: rotateX(0deg);
`;

export { Card, Content, Front, Back, FrontH1, BackH2 };