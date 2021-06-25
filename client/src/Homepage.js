import React from "react";
import styled from "styled-components";
import AllBooks from "./AllBooks";

const Homepage = ({allBooks}) => {

  return (
    <>
      <BookWrap>
        {allBooks.reverse().slice(0,3).map((book) => {
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
