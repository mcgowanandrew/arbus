import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Login from "./Login";
import useToken from "../Hooks/useToken";
import SuccessModal from "../Modals/SuccessModal"

const Add = () => {
const history = useHistory()  // eslint-disable-next-line
  const [addError, setAddError] = useState("");
  const [sucessIsOpen, setSuccessIsOpen]=useState(false)
  const [coverImage, setCoverImage] = useState();
  const [spreadOne, setSpreadOne] = useState();
  const [spreadTwo, setSpreadTwo] = useState();
  const [spreadThree, setSpreadThree] = useState();
  const [addBook, setAddBook] = useState({
    title: "",
    photographer: "",
    size: "",
    pages: "",
    images: "",
    edition: "",
    editionSize: "",
    publicationDate: "",
    publisher: "",
    language: "",
    printing: "",
    extraDetails: "",
    bookCover: "",
    imageTwo: "",
    imageThree:"",
    imageFour:"",
  });

  const { token, setToken } = useToken();
  
  if (!token) {
    return <Login setToken={setToken} />;
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddBook({ ...addBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/admin/add", {
      method: "POST",
      body: JSON.stringify({ ...addBook }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        setAddError("error");
      });
    // handleClear();
    setSuccessIsOpen(true)

  };

  const handleClear = () => {
    document
      .querySelectorAll("input,textarea")
      .forEach((input) => (input.value = ""));
      history.go(0);
  };

  const viewCollection=()=>{
    history.push("/catalogue/collection")
    window.scrollTo(0, 0)

  }

  const convertBase64 = (file) => {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        res(fileReader.result);
      };
      fileReader.onerror = (error) => {
        rej(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setCoverImage(base64)
    setAddBook({ ...addBook, images: base64});
  };

  const uploadImageTwo = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSpreadOne(base64)
    setAddBook({ ...addBook, imageTwo: base64 });
  };

  const uploadImageThree = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSpreadTwo(base64)
    setAddBook({ ...addBook, imageThree: base64 });
  };

  const uploadImageFour = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSpreadThree(base64)
    setAddBook({ ...addBook, imageFour: base64 });
  };

  const xHandler=()=>{
    setSuccessIsOpen(false)
    handleClear()
  
  }

  return (
    <BigWrap>
      <FormWrap autocomplete="off">
        <InputGrid>
          <Input
            id="title"
            placeholder="Title"
            type="text"
            name="title"
            value={addBook.title}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="photographer"
            placeholder="Photographer"
            type="text"
            name="photographer"
            value={addBook.photographer}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="size"
            placeholder="Size"
            type="text"
            name="size"
            value={addBook.size}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="pages"
            placeholder="Pages"
            type="text"
            name="pages"
            value={addBook.pages}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="edition"
            placeholder="Edition"
            type="text"
            name="edition"
            value={addBook.edition}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="editionSize"
            placeholder="Edition Size"
            type="text"
            name="editionSize"
            value={addBook.editionSize}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="publicationDate"
            placeholder="Publication Date"
            type="text"
            name="publicationDate"
            value={addBook.publicationDate}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="publisher"
            placeholder="Publisher"
            type="text"
            name="publisher"
            value={addBook.publisher}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="language"
            placeholder="Language"
            type="text"
            name="language"
            value={addBook.language}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="printing"
            placeholder="Printing"
            type="text"
            name="printing"
            value={addBook.printing}
            onChange={(e) => handleChange(e)}
          />
          <Wrap>
            <Text> Cover: </Text>{" "}
            <input
              id="image"
              type="file" 
              onChange={(e) => {
                uploadImage(e);
              }}
              required/>
          </Wrap>
          <Wrap>
            <Text> Spread One: </Text>{" "}
            <input
              id="image"
              type="file"
              onChange={(e) => {
                uploadImageTwo(e);
              }}
            />
          </Wrap>
          <Wrap>
            <Text> Spread Two: </Text>{" "}
            <input
              id="image"
              type="file"
              onChange={(e) => {
                uploadImageThree(e);
              }}
            />
          </Wrap>
          <Wrap>
            <Text> Spread Three: </Text>{" "}
            <input
              id="image"
              type="file"
              onChange={(e) => {
                uploadImageFour(e);
              }}
            />
          </Wrap>
        </InputGrid>
        <ThumbWrap>
              <LeftThumbWrap>
                {coverImage ? <img src={coverImage} height="90px" alt={addBook.title}/> : ""}
                {spreadOne ? <img src={spreadOne} height="90px" alt={addBook.title} /> : ""}
              </LeftThumbWrap>
              <RightThumbWrap>
                {spreadTwo ? <img src={spreadTwo} height="90px" alt={addBook.title}/> : ""}
                {spreadThree ? <img src={spreadThree} height="90px" alt={addBook.title}/> : ""}
              </RightThumbWrap>
            </ThumbWrap>
        <TextArea
          id="extraDetails"
          placeholder="Extra Details"
          wrap="hard"
          type="text"
          name="extraDetails"
          value={addBook.extraDetails}
          onChange={(e) => handleChange(e)}
        />
        <ButWrap>
          <Button onClick={(e) => handleSubmit(e)}>Add Book</Button>
          <Button onClick={handleClear}>Reset</Button>
        </ButWrap>
      </FormWrap>
      <SuccessModal open={sucessIsOpen}>
        <Success>
          <X onClick={xHandler}>X</X>
          <Message>Book has been added to the collection</Message><Button onClick={viewCollection}>View Collection</Button>
        </Success>
      </SuccessModal>
    </BigWrap>
  );
};
const X = styled.div`
  border: 2px solid #000;
  padding: 10px 8px;
  background-color: #000;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 6px;
  font-size: 15px;
  display: inline-block;
  margin-right: 5px;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

const Message = styled.div`
margin-left:15px;`

const Success = styled.div`
  border: 2px solid #000;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  line-height: 1.6;
  animation: fadein 2s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const ThumbWrap = styled.div`
width:600px;
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap:15px;
margin-bottom: 15px;
@media (max-width: 619px) {
    grid-template-columns: 1fr;
    width:300px;
  }
`;

const RightThumbWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftThumbWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ButWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 15px;
  @media (max-width: 619px) {
    grid-template-columns: 1fr;
  }
`;

const TextArea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  margin-bottom: 15px;
  height: 300px;
  border: 2px solid #000;
  padding: 5px;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: 2px solid #000;
  padding: 5px;
  background-color: #000;
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

const Input = styled.input`
  border: 2px solid #000;
  padding: 5px;
  :focus {
    outline: none;
  }
`;

const BigWrap = styled.div``;

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  margin: 30px auto;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

export default Add;
