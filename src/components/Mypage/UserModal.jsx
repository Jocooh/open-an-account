import React from "react";
import styled from "styled-components";
import UserInput from "../UserInput";

function UserModal({ setModalOpen, id, title, content }) {
  return (
    <Container>
      <StyledContainer>
        <h2 style={{ display: "flex", justifyContent: "center" }}>logo</h2>
        <CloseBtn
          onClick={() => {
            setModalOpen(false);
          }}
        >
          x
        </CloseBtn>
        <ModalDiv>
          <UserInput></UserInput>
        </ModalDiv>
      </StyledContainer>
    </Container>
  );
}

export default UserModal;

const StyledContainer = styled.div`
  width: 1000px;
  height: 600px;
  z-index: 999;
  position: absolute;
  background-color: #6a24ff;
  top: 20%;
  left: 25%;
  border-radius: 20px;
  /* border: 3px solid #6a24ff; */
  box-shadow: 15px 15px 20px #222;
  padding: 20px;
  box-sizing: border-box;
`;
const CloseBtn = styled.div`
  position: absolute;
  font-size: 30px;
  right: 25px;
  top: 15px;
  cursor: pointer;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 450px;
  background-color: white;
  margin: 25px auto;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
