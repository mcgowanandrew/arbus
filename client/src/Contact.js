import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Contact = () => {
  const history = useHistory();

  const handleClear = () => {
    document
      .querySelectorAll("input,textarea")
      .forEach((input) => (input.value = ""));
    history.go(0);
  };

  const handleSumbit = (e) => {};

  return (
    <Wrapper>
      <Wrap>
        <FormWrap>
          <InputGrid>
            <Input
              id="Name"
              placeholder="Name"
              type="text"
              name="Name"
              required="true"
            />
            <Input
              id="email"
              placeholder="Email"
              type="text"
              name="email"
              required="true"
            />
          </InputGrid>
          <TextArea
            id="message"
            placeholder="Message"
            wrap="hard"
            type="text"
            name="message"
            required="true"
          />
        </FormWrap>
        <ButWrap>
          <Button
            onClick={(ev) => {
              handleSumbit(ev);
            }}
            type="submit"
            value="Submit"
          >
            Submit
          </Button>
          <Button onClick={handleClear}>Reset</Button>
        </ButWrap>
      </Wrap>
    </Wrapper>
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
const Button = styled.button`
  border: 2px solid #000;
  padding: 5px 10px;
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

const Wrapper = styled.div`
  width: 100vw;
  height: 82vh;
`;
const Wrap = styled.div`
  width: 600px;
  margin: 0 auto;
  @media (max-width: 619px) {
    width: 300px;
  }
`;
const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  margin: 30px 0 15px auto;
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
export default Contact;
