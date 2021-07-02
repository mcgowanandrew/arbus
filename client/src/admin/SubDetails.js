import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import Login from "./Login";
import useToken from "../Hooks/useToken";

const SubDetails = () => {
  let history = useHistory();
  const { _id } = useParams();
  const [error, setError] = useState();
  const [currentSub, setCurrentSub] = useState([]);
  const [coverImage, setCoverImage] = useState();
  const [spreadOne, setSpreadOne] = useState();
  const [spreadTwo, setSpreadTwo] = useState();
  const [spreadThree, setSpreadThree] = useState();
  const [approve, setApprove] = useState({
    title: "",
    photographer: "",
    size: "",
    pages: "",
    edition: "",
    editionSize: "",
    publicationDate: "",
    publisher: "",
    language: "",
    printing: "",
    extraDetails: "",
    images: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
  });


  useEffect(() => {
    fetch(`/admin/sub/edit/${_id}`)
      .then((rest) => rest.json())
      .then((json) => {
        setCurrentSub({ ...json.data });
      });
  }, []);
  const cs = currentSub;

  const handleSubmit = (e) => {
    // e.preventDefault();
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
    history.go(0)
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

  const submitDelete = (e) => {
    // e.preventDefault();
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


  };
  const handleApprove = (e) => {
    e.preventDefault()
    handleSubmit();
    submitDelete();
  };
  const handleChange = (e) => {
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
    }
    if (cs.images) {
      setApprove({ ...cs, images: cs.images });
    }
    if (cs.imageTwo) {
      setApprove({ ...cs, imageTwo: cs.imageTwo });
    }
    if (cs.imageThree) {
      setApprove({ ...cs, imageThree: cs.imageThree });
    }
    if (cs.imageFour) {
      setApprove({ ...cs, imageFour: cs.imageFour });
    }
  }, [cs]);

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
    setCoverImage(base64);

    setApprove({ ...approve, images: base64 });
  };

  const uploadImageTwo = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSpreadOne(base64);
    setApprove({ ...approve, imageTwo: base64 });
  };

  const uploadImageThree = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSpreadTwo(base64);
    setApprove({ ...approve, imageThree: base64 });
  };

  const uploadImageFour = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSpreadThree(base64);
    setApprove({ ...approve, imageFour: base64 });
  };

  const { token, setToken } = useToken();
  
  if (!token) {
    return <Login setToken={setToken} />;
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
          <Wrap>
            <Text> Cover: </Text>{" "}
            <input
              id="image"
              type="file"
              onChange={(e) => {
                uploadImage(e);
              }}
              required
            />
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
            {coverImage ? (
              <img src={coverImage} height="90px" alt={approve.title} />
            ) : cs.images ? (
              <img src={cs.images} height="90px" alt={approve.title} />
            ) : (
              ""
            )}
            {spreadOne ? (
              <img src={spreadOne} height="90px" alt={approve.title} />
            ) : cs.imageTwo ? (
              <img src={cs.imageTwo} height="90px" alt={approve.title} />
            ) : (
              ""
            )}
          </LeftThumbWrap>
          <RightThumbWrap>
            {spreadTwo ? (
              <img src={spreadTwo} height="90px" alt={approve.title} />
            ) : cs.imageThree ? (
              <img src={cs.imageThree} height="90px" alt={approve.title} />
            ) : (
              ""
            )}
            {spreadThree ? (
              <img src={spreadThree} height="90px" alt={approve.title} />
            ) : cs.imageFour ? (
              <img src={cs.imageFour} height="90px" alt={approve.title} />
            ) : (
              ""
            )}
          </RightThumbWrap>
        </ThumbWrap>
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
          <Button onClick={(e) => handleApprove(e)}>Add Book</Button>
          <DelButton onClick={deleteSubHandler}>Delete</DelButton>
        </ButWrap>
      </FormWrap>
    </BigWrap>
  );
};

const ThumbWrap = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 15px;
  @media (max-width: 619px) {
    grid-template-columns: 1fr;
    width: 300px;
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
