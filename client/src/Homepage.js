import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AllBooks from "./AllBooks";

const Homepage = () => {
  const [newBooks, setNewBooks] = useState([]);
  useEffect(() => {
    fetch("/catalogue/all-books", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        const bookArray = Object.values(data)[1];
        setNewBooks(bookArray.reverse().slice(0, 3));
      });
  }, []);

  return (
    <>
      <BookWrap>
        {newBooks.map((book) => {
          return <AllBooks key={book._id} book={book} />;
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

export default Homepage;
