import React from "react";
import styled from "styled-components";


const SearchModal = ({ open, children }) => {
  if (!open) {
    return null;
  }
  return (
    <Overlay>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  transition: all 1s ease-out;
  animation: fadein 0.5s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 600px;
  padding:15px;
  transition: all 1s ease-out;
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 619px) {
    width: 300px;
  }
`;

export default SearchModal;
