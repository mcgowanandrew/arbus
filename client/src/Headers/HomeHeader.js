import React from "react";
// import {NavLink} from "react-router-dom"
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const HomeHeader = () => {
  return (
    <HeadWrap>
      <Title>Arbus</Title>
      <Home>Collection</Home>
      <StyledBiSearchAlt2 />
    </HeadWrap>
  );
};

const StyledBiSearchAlt2 = styled(BiSearchAlt2)`
  color: #fff;
  width: 25px;
  height: auto;
  margin: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Home = styled.div`
  color: #fff;
  font-size: 20px;
  font-family: sans-serif;
  padding: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 20px;
  font-family: sans-serif;
  padding: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 10;
  width: 100vw;
`;

export default HomeHeader;
