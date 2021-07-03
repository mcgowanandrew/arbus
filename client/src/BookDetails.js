import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import useToken from "./Hooks/useToken";
import ImageModalOne from "./Modals/ImageModalOne";
import ImageModalTwo from "./Modals/ImageModalTwo";
import ImageModalThree from "./Modals/ImageModalThree";

const BookDetails = ({ book }) => {
  const { _id } = useParams();
  const { token } = useToken();
  const [currentBook, setCurrentBook] = useState([]);
  const [error, setError] = useState("");
  const [modalOneIsOpen, setModalOneIsOpen] = useState(false);
  const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
  const [modalThreeIsOpen, setModalThreeIsOpen] = useState(false);
  const history = useHistory();


  useEffect(() => {
    fetch(`/catalogue/${_id}`)
      .then((rest) => rest.json())
      .then((json) => setCurrentBook(json.data));
  }, []);


  const cb = currentBook;

  const handleEditClick = (e) => {
    e.preventDefault();
    history.push(`/edit/${_id}`);
  };

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
              <>
                <SpreadThumb
                  onClick={() => setModalOneIsOpen(true)}
                  src={cb.imageTwo}
                  alt={cb.title}
                />
                <ImageModalOne open={modalOneIsOpen}>
                  <ModalWrap>
                    <X onClick={() => setModalOneIsOpen(false)}>X</X>
                    <Popup>
                      <FullImage src={cb.imageTwo} alt={cb.title} />
                    </Popup>
                  </ModalWrap>
                </ImageModalOne>
              </>
            ) : (
              ""
            )}
            {cb.imageThree ? (
              <>
                <SpreadThumb
                  onClick={() => setModalTwoIsOpen(true)}
                  src={cb.imageThree}
                  alt={cb.title}
                />
                <ImageModalTwo open={modalTwoIsOpen}>
                  <ModalWrap>
                    <X onClick={() => setModalTwoIsOpen(false)}>X</X>
                    <Popup>
                      <FullImage src={cb.imageThree} alt={cb.title} />
                    </Popup>
                  </ModalWrap>
                </ImageModalTwo>
              </>
            ) : (
              ""
            )}
            {cb.imageFour ? (
              <>
                <SpreadThumb
                  onClick={() => setModalThreeIsOpen(true)}
                  src={cb.imageFour}
                  alt={cb.title}
                />
                <ImageModalThree open={modalThreeIsOpen}>
                  <ModalWrap>
                    <X onClick={() => setModalThreeIsOpen(false)}>X</X>
                    <Popup>
                      <FullImage src={cb.imageFour} alt={cb.title} />
                    </Popup>
                  </ModalWrap>
                </ImageModalThree>
              </>
            ) : (
              ""
            )}
          </Spread>
        </CoverWrap>
        <RightWrap>
          <DetailsWrap>
            <Title>{cb.title}</Title>
            <Photographer>{cb.photographer}</Photographer>
            {cb.size ? (
              <InfoDiv>
                <strong>Size: </strong>
                {cb.size}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.pages ? (
              <InfoDiv>
                <strong>Pages:</strong> {cb.pages}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.edition ? (
              <InfoDiv>
                <strong>Edition:</strong> {cb.edition}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.publicationDate ? (
              <InfoDiv>
                <strong>Publication Date:</strong> {cb.publicationDate}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.publisher ? (
              <InfoDiv>
                <strong>Publisher:</strong> {cb.publisher}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.language ? (
              <InfoDiv>
                <strong>Language:</strong> {cb.language}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.printing ? (
              <InfoDiv>
                <strong>Printing:</strong> {cb.printing}
              </InfoDiv>
            ) : (
              ""
            )}
            {cb.extraDetails ? (
              <Extra>
                <strong>Details:</strong> {cb.extraDetails}
              </Extra>
            ) : (
              ""
            )}
          </DetailsWrap>
          <ButWrap>
            {" "}
            {token ? (
              <>
                <Button onClick={handleEditClick}>Edit</Button>
                <DelButton onClick={deleteBookHandler}>Delete</DelButton>
              </>
            ) : (
              ""
            )}
          </ButWrap>
        </RightWrap>
      </BookWrap>
    </BigWrap>
  );
};
const X = styled.div`
  border: 2px solid #000;
  padding: 5px;
  background-color: #000;
  color: #fff;
  width: 20px;
  height: 20px;
  line-height: 6px;
  font-size: 10px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 15px;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

const ModalWrap = styled.div``;
const Popup = styled.div`
  padding: 15px;
  border: 2px solid #000;
  background: #fff;
`;
const FullImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const RightWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
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
  &:hover {
    cursor: pointer;
  }
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
  margin-left: 15px;
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

const Extra = styled.div`
line-height: 20px;`;

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
  @media (max-width: 619px) {
    margin: 15px 0;
  }
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
