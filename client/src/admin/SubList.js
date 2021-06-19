import React, { useState } from "react";
import styled from "styled-components";
// import daido from "../assests/daido.jpg";
import { useHistory } from "react-router-dom";
// import useToken from "../Hooks/useToken";

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
  };

  const handleViewClick=(e)=>{
      e.preventDefault()
      history.push(`/admin/sub/edit/${sub._id}`)
  }

  return (
    <Wrap>
      Title: {sub.title}
      <Button onClick={handleViewClick}>View</Button>
      <Button type="submit" onClick={deleteSubHandler}>Reject</Button>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin: 25px;
  width: 300px;
`;
const Button = styled.button`
  border: 2px solid #000;
  padding: 5px;
  background-color: #000;
  color: #fff;
  margin-left: 10px;
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
export default SubList;
