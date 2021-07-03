import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";


const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const loginUser = (credentials) => {
    return fetch("http://localhost:4000/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/jason",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    history.go(0);
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <BigWrap>
      <FormWrap autocomplete="off" onSubmit={handleSubmit}>
        <InputGrid>
          <Input
            id="name"
            placeholder="Username"
            type="text"
            name="name"
            autocomplete="off"
            onChange={(e) => handleChange(e)}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </InputGrid>
        <ButWrap>
          <Button type="submit">Submit</Button>
        </ButWrap>
      </FormWrap>
    </BigWrap>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
const ButWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
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
const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 15px;
  @media (max-width: 619px) {
    grid-template-columns: 1fr;
  }
`;

const BigWrap = styled.div``;

const FormWrap = styled.form`
  flex-wrap: wrap;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  margin: 30px auto;
`;
export default Login;
