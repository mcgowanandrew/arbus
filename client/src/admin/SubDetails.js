import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
// import { combineReducers } from "redux";
// import daido from "../assests/daido.jpg";

const SubDetails = () => {
  let history = useHistory();
  const { _id } = useParams();
  const [error, setError] = useState();
  const [currentSub, setCurrentSub] = useState([]);
  const [approve, setApprove] = useState({
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
  useEffect(() => {
    fetch(`/admin/sub/edit/${_id}`)
      .then((rest) => rest.json())
      .then((json) => {
        setCurrentSub({...json.data});
      });
  }, []);
  const cs = currentSub;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/admin/add", {
      method: "POST",
      body: JSON.stringify({ ...approve }),
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
      };

  const deleteSubHandler = (e) => {
    e.preventDefault();
    fetch(`/admin/sub/${_id}`, {
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

    history.push("/admin/all-submissions");
  };

  const handleChange = (e, type) => {
    const name = e.target.name;
    const value = e.target.value;

    setApprove({ ...approve, [name]: value });
  };

  useEffect(() => {
    if (cs.title) {
      setApprove({ ...cs, title: cs.title });
    }
    if (cs.photographer) {
      setApprove({ ...cs, photographer: cs.photographer });
    }
    if (cs.size) {
      setApprove({ ...cs, size: cs.size });
    }
    if (cs.pages) {
      setApprove({ ...cs, pages: cs.pages });
    }
    if (cs.edition) {
      setApprove({ ...cs, edition: cs.edition });
    }
    if (cs.editionSize) {
      setApprove({ ...cs, editionSize: cs.editionSize });
    }
    if (cs.publisher) {
      setApprove({ ...cs, publisher: cs.publisher });
    }
    if (cs.language) {
      setApprove({ ...cs, language: cs.language });
    }
    if (cs.printing) {
      setApprove({ ...cs, printing: cs.printing });
    }
    if (cs.extraDetails) {
      setApprove({ ...cs, extraDetails: cs.extraDetails });
    } if (cs.images) {
        setApprove({ ...cs, images: cs.images });
      }
  }, [cs]);
  return (
    <BigWrap>
      <FormWrap autocomplete="off">
        <InputGrid>
          <Input
            id="title"
            placeholder="Title"
            type="text"
            name="title"
            defaultValue={cs.title}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="photographer"
            placeholder="Photographer"
            type="text"
            name="photographer"
            defaultValue={cs.photographer}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="size"
            placeholder="Size"
            type="text"
            name="size"
            defaultValue={cs.size}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="pages"
            placeholder="Pages"
            type="text"
            name="pages"
            defaultValue={cs.pages}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="edition"
            placeholder="Edition"
            type="text"
            name="edition"
            defaultValue={cs.edition}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="editionSize"
            placeholder="Edition Size"
            type="text"
            name="editionSize"
            defaultValue={cs.editionSize}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="publicationDate"
            placeholder="Publication Date"
            type="text"
            name="publicationDate"
            defaultValue={cs.publicationDate}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="publisher"
            placeholder="Publisher"
            type="text"
            name="publisher"
            defaultValue={cs.publisher}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="language"
            placeholder="Language"
            type="text"
            name="language"
            defaultValue={cs.language}
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="printing"
            placeholder="Printing"
            type="text"
            name="printing"
            defaultValue={cs.printing}
            onChange={(e) => handleChange(e)}
          />
        </InputGrid>
        <TextArea
          id="extraDetails"
          placeholder="Extra Details"
          wrap="hard"
          type="text"
          name="extraDetails"
          defaultValue={cs.extraDetails}
          onChange={(e) => handleChange(e)}
        />
        <ButWrap>
          <Button onClick={(e) => handleSubmit(e)}>Add Book</Button>
          <DelButton onClick={deleteSubHandler}>Delete</DelButton>
        </ButWrap>
      </FormWrap>
    </BigWrap>
  );
};
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
  @media (max-width: 619px) {
    width: 300px;
  }
`;

export default SubDetails;
