import React from "react";
import styled from "styled-components";
import bg from "./assests/bg.jpg";
import HomeHeader from "./Headers/HomeHeader";

const Homepage = () => {
  return (
    <BigWrap>
     
     <HomeHeader />
      <BgOverlay> </BgOverlay>
    </BigWrap>
  );
};

const BgOverlay = styled.div`
  width: 100vw;
  height: 110vh;
  background-color: #000;
  opacity: 0.3;
  margin-top: -10vh;
  position: relative;

`;

const BigWrap = styled.div`
  background-image: url(${bg});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  justify-content: center;
  overflow: hidden;

`;

export default Homepage;
