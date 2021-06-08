import React from "react";
import styled from "styled-components";
import daido from "./assests/daido.jpg";
import {useHistory} from "react-router-dom"

// import { Link } from "react-router-dom";

const Book = ({ book }) => {
let history=useHistory()

const handleDetailsClick = (e)=>{
    history.push(`/catalogue/${book._id}`)
}

return (
    // to={`/catalogue/${book._id}`}
    <BookWrap key={book._id}>
      <BookCover src={`${daido}`} />
      <Hover>
        <TitleWrap>
          <Title>{book.title}</Title>
          <Tog>{book.photographer}</Tog>
        </TitleWrap>
        <ButWrap>
          <Button onClick={handleDetailsClick}>Details</Button>
        </ButWrap>
      </Hover>
      {/* <Title>{book.title}</Title> */}
    </BookWrap>
  );
};
const ButWrap = styled.div`
width:100%;
display: flex;
justify-content: center;
  align-content: flex-end;

`;
const Button = styled.button`
  border: 2px solid #000;
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  /* margin-left: 10px; */
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
const TitleWrap = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const Hover = styled.div`
  position: absolute;
  /* margin:0 auto; */
  display: flex;
  padding:15px;

  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  width: 300px;
  height: 100%;
  z-index: 10;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Tog = styled.div`
width:100%`;

const Title = styled.div`
width:100%`;

const BookWrap = styled.div`
  width: 300px;
  height:auto;
  margin: 15px;
  position: relative;
  z-index: 1;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BookCover = styled.img`
  /* position: absolute;
  z-index: 2; */
  width: 300px;
  height: auto;
  margin:0 auto;
`;
export default Book;
