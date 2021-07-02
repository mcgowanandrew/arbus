import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import useToken from "./Hooks/useToken";

const BookDetails = ({ book }) => {
  const { _id } = useParams();
  const [currentBook, setCurrentBook] = useState([]);
  const [error, setError] = useState("");
  const { token } = useToken();
  const history = useHistory();

  useEffect(() => {
    fetch(`/catalogue/${_id}`)
      .then((rest) => rest.json())
      .then((json) => setCurrentBook(json.data));
  }, []);

  // useEffect(()=>{
  //   fetchData();
  // },[currentBook])
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
    history.go(0);
  };

  return (
    <BigWrap>
      <BookWrap>
        <CoverWrap>
          {" "}
          <BookCover src={cb.images} alt={cb.title} />
          <Spread>
            {cb.imageTwo ? (
              <SpreadThumb src={cb.imageTwo} alt={cb.title} />
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
        </CoverWrap><RightWrap>
        <DetailsWrap>
          <Title>{cb.title}</Title>
          <Photographer>{cb.photographer}</Photographer>
          {cb.size ? <InfoDiv><strong>Size: </strong>{cb.size}</InfoDiv> : ""}
          {cb.pages ? <InfoDiv><strong>Pages:</strong> {cb.pages}</InfoDiv> : ""}
          {cb.edition ? <InfoDiv><strong>Edition:</strong> {cb.edition}</InfoDiv> : ""}
          {cb.publicationDate ? (
            <InfoDiv><strong>Publication Date:</strong> {cb.publicationDate}</InfoDiv>
          ) : (
            ""
          )}
          {cb.publisher ? <InfoDiv><strong>Publisher:</strong> {cb.publisher}</InfoDiv> : ""}
          {cb.language ? <InfoDiv><strong>Language:</strong> {cb.language}</InfoDiv> : ""}
          {cb.printing ? <InfoDiv><strong>Printing:</strong> {cb.printing}</InfoDiv> : ""}
          {cb.extraDetails ? <Extra><strong>Details:</strong> {cb.extraDetails}</Extra> : ""}
          </DetailsWrap>
          <ButWrap>
            {" "}
            {token ? (
              
              <DelButton onClick={deleteBookHandler}>Delete</DelButton>
            ) : (
              ""
            )}
          </ButWrap>
          </RightWrap>
      </BookWrap>
    </BigWrap>
  );
};
const RightWrap = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;`
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
  font-weight: bold;
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
  justify-content: flex-end;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const Extra = styled.div``;

const InfoDiv = styled.span`
  margin-bottom: 10px;
  font-size: 15px;
`;

const Photographer = styled.h2`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-bottom: 5px;
`;

const DetailsWrap = styled.div`
  margin-left: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const BookCover = styled.img`
  width: 350px;
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
  margin: 15px auto;
  width: 700px;
  @media (max-width: 619px) {
    flex-direction: column;
    width: 300px;
  }
`;

const BigWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default BookDetails;
