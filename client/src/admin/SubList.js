import React, { useState } from "react";
import styled from "styled-components";
// import daido from "../assests/daido.jpg";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import useToken from "../Hooks/useToken";

const SubList = ({ sub }) => {
  let history = useHistory();
  const [error, setError] = useState();
  const deleteSubHandler = (e) => {
    e.preventDefault();
    fetch(`/admin/sub/${sub._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        setError("error");
      });

    history.push("/admin/all-submissions");
    history.go(0)
  };

  const handleViewClick=(e)=>{
      e.preventDefault()
      history.push(`/admin/sub/edit/${sub._id}`)
  }
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
 
    <BookWrap key={sub._id}>
    <BookCover src={sub.images} alt={sub.title} />
    <Hover>
      <TitleWrap>
        <Title>{sub.title}</Title>
        <Tog>{sub.photographer}</Tog>
      </TitleWrap>
     
          <ButWrap>
          <Button onClick={handleViewClick}>View</Button>
      <DelButton type="submit" onClick={deleteSubHandler}>Reject</DelButton>
          </ButWrap>
   
    </Hover>
  </BookWrap>
  );
};
const DelButton = styled.button`
  border: 2px solid #f00;
  padding: 5px;
  background-color: #f00;
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
const ButWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
`;

const Button = styled.button`
  border: 2px solid #000;
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

const TitleWrap = styled.div`
width:100%;
height:auto;
`;

const Hover = styled.div`
  position: absolute;
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  width: 300px;
  height: 100%;
  z-index: 10;
  opacity: 0;
  &:hover {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
`;

const Tog = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  margin-bottom: 15px;;
`;

const BookWrap = styled.div`
  width: 300px;
  height: auto;
  margin: 15px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BookCover = styled.img`
  width: 300px;
  height: auto;
  margin: 0 auto;
`;
export default SubList;
