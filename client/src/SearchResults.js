import React from "react";
import styled from "styled-components";
import AllBooks from "./AllBooks";

const SearchResults = ({ searchResults}) => {

  return (    <>
    <BookWrap>
      {searchResults.map((book) => {
        return <AllBooks key={book._id} book={book} />;
      })}
    </BookWrap>
  </>
  )}

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


export default SearchResults;
