import React from "react";
import styled from "styled-components";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Wrap>
      <Copy>© Arbus 2021</Copy>
      <Social>
        <StyledAiOutlineTwitter />
        <StyledAiOutlineFacebook />
        <StyledAiOutlineInstagram />
      </Social>
    </Wrap>
  );
};
const StyledAiOutlineTwitter = styled(AiOutlineTwitter)`
  width: 20px;
  height: auto;
  &:hover {
    color: #828282;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media (max-width: 619px) {
  width:15px;
  height:auto;
  }
`;
const StyledAiOutlineFacebook = styled(AiOutlineFacebook)`
  width: 20px;
  height: auto;
  &:hover {
    color: #828282;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media (max-width: 619px) {
  width:15px;
  height:auto;
  }
`;

const StyledAiOutlineInstagram = styled(AiOutlineInstagram)`
  width: 20px;
  height: auto;
  &:hover {
    color: #828282;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media (max-width: 619px) {
  width:15px;
  height:auto;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100px;
`;

const Copy = styled.div`
  font-size: 14px;
  @media (max-width: 619px) {
 font-size: 12px;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  width: 100vw;
  @media (max-width: 619px) {
padding:5px
  }
`;

export default Footer;
