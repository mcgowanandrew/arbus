import React from "react";
import styled from "styled-components";
import AllBooks from "./AllBooks";

const SearchResults = ({ searchResults}) => {

  return (    <><BigWrap>
    <BookWrap>
      {searchResults.map((book) => {
        return <AllBooks key={book._id} book={book} />;
      })}
    </BookWrap>
    </BigWrap>
  </>
  )}
const BigWrap=styled.div`
width:100vw;
height:84vh;`

const BookWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;


export default SearchResults;
