import React from "react";
import { useState } from "react";
import { ChangeNickNameDiv, UserInput } from "../../pages/MyPage/style";

function ChangeNickname({ newNickName, setNewNickName }) {
  const changeNickHandler = (e) => {
    setNewNickName(e.target.value);
  };
  return (
    <ChangeNickNameDiv className="닉네임변경">
      <h3 style={{ fontSize: "25px" }}>닉네임 변경</h3>
      <UserInput
        type="text"
        value={newNickName}
        onChange={(e) => changeNickHandler(e)}
      ></UserInput>
    </ChangeNickNameDiv>
  );
}

export default ChangeNickname;
