import React, { useState } from "react";
import styled from "styled-components";
// import AdminHeader from "../Headers/AdminHeader"
// import Login from "./Login"
// import useToken from "../Hooks/useToken"
const Submissions= () => {
  // const [token, setToken] = useState();
  const [addError, setAddError] = useState("");
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
  });
//   const {token,setToken}=useToken()
//   if (!token) {
//     return <Login setToken={setToken} />;
//   }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddBook({ ...addBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/submissions", {
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
    handleClear();
  };
  const handleClear = () => {
    document
      .querySelectorAll("input,textarea")
      .forEach((input) => (input.value = ""));
  };
  return (
    <BigWrap>
      {/* <AdminHeader/> */}
      <FormWrap autocomplete="off" >
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
        </InputGrid>
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
          <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
          <Button onClick={handleClear}>Reset</Button>
        </ButWrap>
      </FormWrap>
    </BigWrap>
  );
};
const ButWrap = styled.div`
  width: 600px;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
  /* align-content: flex-end; */
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 15px;
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
`;

export default Submissions;
