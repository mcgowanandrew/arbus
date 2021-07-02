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
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;


export default SearchResults;
