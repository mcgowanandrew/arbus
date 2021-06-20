import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import useToken from "../Hooks/useToken";

const HomeHeader = ({ allBooks }) => {
  const { token, setToken } = useToken();

  let history = useHistory();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.go(0);
  };

  const handleContactClick = (e) => {
    e.preventDefault()
    history.push("/contact");
  };

  return (
    <HeadWrap>
      <Link to="/">Arbus</Link>
      <Link to="/catalogue/collection">Collection</Link>
      {token ? (
        <Link to="/admin/all-submissions">View Submissions</Link>
      ) : (
        <Link to="/submissions">Submissions</Link>
      )}
      <StyledBiSearchAlt2 />
      {token ? (
        <LogOut onClick={handleLogOut}>Log Out</LogOut>
      ) : (
        <StyledGoMail onClick={handleContactClick} />
      )}
    </HeadWrap>
  );
};

const LogOut = styled.div`
  color: #000;
  font-size: 20px;
  padding: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Link = styled(NavLink)`
  color: #000;
  font-size: 20px;
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
