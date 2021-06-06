import React from "react";
import styled from "styled-components";
// import useDeleteToken from "../Hooks/useDeleteToken"

const AdminHeader = () => {
//   const {token,setToken}=useDeleteToken()
  const handleLogout = (e) => {
    e.preventDefault();
    // setToken(!token) 

    localStorage.clear();
    window.location.reload();

  };
  return (
    <HeadWrap>
      <Title>Arbus</Title>
      <Home>Collection</Home>
      <LogOut onClick={handleLogout}>Log Out</LogOut>
    </HeadWrap>
  );
};
const LogOut = styled.div`
  color: #000;
  font-size: 20px;
  font-family: sans-serif;
  padding: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
const Home = styled.div`
  color: #000;
  font-size: 20px;
  font-family: sans-serif;
  padding: 20px;
  &:hover {
    color: #c25557;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
// const LogOut = styled.div`
//   color: #000;
//   font-size: 20px;
//   font-family: sans-serif;
//   padding: 20px;
//   &:hover {
//     color: #c25557;
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;
const Title = styled.div`
  color: #000;
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

export default AdminHeader;
