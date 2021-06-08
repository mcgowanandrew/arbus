import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoMail } from "react-icons/go";
const HomeHeader = ({ allBooks }) => {
  return (
    <HeadWrap>
      <Link to="/">Arbus</Link>
      <Link to="/catalogue/collection">Collection</Link>
      <Link to="/submissions">Submissions</Link>

      <StyledBiSearchAlt2 />
      <StyledGoMail />
    </HeadWrap>
  );
};
const Link = styled(NavLink)`
  color: #000;
  font-size: 20px;
  font-family: sans-serif;
  padding: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  &:focus {
    color: #c25557;
  }
`;
const StyledBiSearchAlt2 = styled(BiSearchAlt2)`
  color: #000;
  width: 25px;
  height: auto;
  margin: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
const StyledGoMail = styled(GoMail)`
  color: #000;
  width: 25px;
  height: auto;
  margin: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  z-index: 10;
  width: 100vw;
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default HomeHeader;
