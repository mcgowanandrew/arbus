import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import AllBooks from "./AllBooks";
import useToken from "./Hooks/useToken";

const SearchResults = ({ searchResults, setSearchResults, value, book }) => {
  const { token, setToken } = useToken();



  return (    <>
    <BookWrap>
      {searchResults.map((book) => {
        return <AllBooks key={book._id} book={book} />;
      })}
    </BookWrap>
  </>
  )}
const SearchWrap = styled.div``;
const Span = styled.span``;
const ResultsWrap = styled.div``;
const Deet = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: flex-end;
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
  width: 100%;
  height: auto;
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
  margin-bottom: 15px; ;
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

export default SearchResults;
