import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import useToken from "../Hooks/useToken";
import SubList from "../admin/SubList";

const ViewSubmissions = () => {
  const { token, setToken } = useToken();
  const [allSubs, setAllSubs] = useState([]);

  useEffect(() => {
    fetch("/admin/all-submissions", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        const bookArray = Object.values(data)[1];
        setAllSubs(bookArray);
      });
  });
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <BookWrap>
        {allSubs.map((sub) => {
          return <SubList key={sub._id} sub={sub} />;
        })}
      </BookWrap>
    </>
  );
};
const BookWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default ViewSubmissions;
