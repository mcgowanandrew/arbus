import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import daido from "./assests/daido.jpg";
// import { BiData } from "react-icons/bi";

const BookDetails = ({ book }) => {
  const { _id } = useParams();
  const [currentBook, setCurrentBook] = useState([]);
  useEffect(() => {
    fetch(`/catalogue/${_id}`)
      .then((rest) => rest.json())
      .then((json) => setCurrentBook(json.data));
  });
  const cb = currentBook;

  return (
    <BigWrap>
      <BookWrap>
        <CoverWrap>
          {" "}
          <BookCover src={`${daido}`} />
        </CoverWrap>
        <DetailsWrap>
            <Title>{cb.title}</Title>
            <Photographer>{cb.photographer}</Photographer>
            <Ed>Edition: {cb.edition}</Ed>
            <Date>Publication Date: {cb.publicationDate}</Date>
            <Pub>Publisher: {cb.publisher}</Pub>

        </DetailsWrap>
      </BookWrap>
    </BigWrap>
  );
};
const Pub = styled.span``
const Ed = styled.span``
const Date = styled.span``
const Photographer = styled.h2``
const Title = styled.h1``
const DetailsWrap=styled.div`
display:flex;
flex-direction:column;`
const BookCover = styled.img``
const CoverWrap = styled.div``
const BookWrap = styled.div`
display:flex;`;
const BigWrap = styled.div``;
export default BookDetails;
