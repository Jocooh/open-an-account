import React from "react";
import styled from "styled-components";

function UserInput() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <label style={{ marginBottom: "15px" }}>
          닉네임 <ModalInput></ModalInput>
        </label>
        <ChangeInfoBtn>변경</ChangeInfoBtn>
      </div>
      <div style={{ display: "flex" }}>
        <label>
          비밀번호 <ModalInput style={{ marginLeft: "-1px" }}></ModalInput>
        </label>
        <ChangeInfoBtn>변경</ChangeInfoBtn>
      </div>
    </div>
  );
}

export default UserInput;

const ModalInput = styled.input`
  height: 30px;
  width: 390px;
  border: none;
  border-bottom: 1px solid #ddd;
  :focus {
    outline: none;
  }
  margin-left: 10px;
`;

const ChangeInfoBtn = styled.button`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  color: gray;
  margin-left: 20px;
  padding: 7px;
  height: 40px;
  cursor: pointer;
  :hover {
    border: 1px solid #6a24ff;
  }
`;
