import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import useToken from "./Hooks/useToken";

const BookDetails = ({ book }) => {
  const { _id } = useParams();
  const [currentBook, setCurrentBook] = useState([]);
  const [error,setError]=useState("")
  const { token} = useToken();
  const history = useHistory();


  useEffect(() => {
    fetch(`/catalogue/${_id}`)
      .then((rest) => rest.json())
      .then((json) => setCurrentBook(json.data));
  }, []);

  const cb = currentBook;

  const deleteBookHandler = (e) => {
    e.preventDefault();
    fetch(`/admin/catalogue/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        setError("error");
      });

    history.push("/catalogue/collection");
    history.go(0)
  };
  return (
    <BigWrap>
      <BookWrap>
        <CoverWrap>
          {" "}
          <BookCover src={cb.images} alt={cb.title} />
          <Spread>
            {cb.imageTwo ? (
              <SpreadThumb src={cb.imageTwo} alt={cb.title}  />
            ) : (
              ""
            )}
            {cb.imageThree ? (
              <SpreadThumb src={cb.imageThree} alt={cb.title} />
            ) : (
              ""
            )}
            {cb.imageFour ? (
              <SpreadThumb src={cb.imageFour} alt={cb.title} />
            ) : (
              ""
            )}
          </Spread>
        </CoverWrap>
        <DetailsWrap>
          <Title>{cb.title}</Title>
          <Photographer>{cb.photographer}</Photographer>
          {cb.size ? <InfoDiv>Size: {cb.size}</InfoDiv> : ""}
          {cb.pages ? <InfoDiv>Pages: {cb.pages}</InfoDiv> : ""}
          {cb.edition ? <InfoDiv>Edition: {cb.edition}</InfoDiv> : ""}
          {cb.publicationDate ? (
            <InfoDiv>Publication Date: {cb.publicationDate}</InfoDiv>
          ) : (
            ""
          )}
          {cb.publisher ? <InfoDiv>Publisher: {cb.publisher}</InfoDiv> : ""}
          {cb.language ? <InfoDiv>Language: {cb.language}</InfoDiv> : ""}
          {cb.printing ? <InfoDiv>Printing: {cb.printing}</InfoDiv> : ""}
          {cb.extraDetails ? <Extra>Details: {cb.extraDetails}</Extra> : ""}
          <ButWrap>
            {" "}
            {token ? (
              <DelButton onClick={deleteBookHandler}>Delete</DelButton>
            ) : (
              ""
            )}
          </ButWrap>
        </DetailsWrap>
      </BookWrap>
    </BigWrap>
  );
};
const Spread = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;
const SpreadThumb = styled.img`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border: none;
`;

const DelButton = styled.button`
  border: 2px solid #f00;
  padding: 5px;
  background-color: #f00;
  color: #fff;
  margin-left: 10px;
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

const ButWrap = styled.div`
  width: 100%;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
  /* align-content: flex-end; */
  @media (max-width: 619px) {
    width: 300px;
  }
`;
const Extra = styled.div``;
const InfoDiv = styled.span`
  margin-bottom: 10px;
`;
const Photographer = styled.h2`
  margin-bottom: 10px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
`;
const DetailsWrap = styled.div`
  margin-left: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap:wrap;
 @media (max-width: 619px) {
    width: 300px;
  } */
`;
const BookCover = styled.img`
  width: 100%;
  height: auto;
`;
const CoverWrap = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BookWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 700px;
`;
const BigWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default BookDetails;
