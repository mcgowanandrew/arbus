import React, { useContext } from "react";
import styled from "styled-components";
import AllBooks from "./AllBooks";

const SearchResults = ({ searchResults, setSearchResults, value ,AllBooks}) => {
  return (
    <SearchWrap>
      <ResultsWrap>
        {value ? <Span>Search results for "{value}" </Span> : ""}
        {searchResults.ReactResults.length === 0 ? (
          <Span>No results for "{value}"</Span>
        ) : (
          ""
        )}
      </ResultsWrap>
      <BookWrap>
        {searchResults.map((book) => {
          return <div>{book.title}</div>
        })}
      </BookWrap>
    </SearchWrap>
  );
};

export default SearchResults;
const BookWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const DisplayResult = styled.div``;
const ResultsWrap = styled.div``;
const Span = styled.span``;
const SearchWrap = styled.div`
width:100vw;
height:100vh;`;
