import React from "react";
import { useState } from "react";
import { ChangeNickNameDiv, UserInput } from "../../pages/MyPage/style";

function ChangeNickname({
  newNickName,
  setNewNickName,
  setIsNickName,
  isNickName,
  setBtnValidation,
  name,
}) {
  const [nicknameMessage, setNicknameMessage] = useState("");

  const changeNickHandler = (event) => {
    //만약 currentNickname이 setNewnickname과 같다면? btnInvalidation true 유지
    const currentNickname = event.target.value;
    setNewNickName(currentNickname);
    if (currentNickname.length < 2 || currentNickname > 6) {
      setNicknameMessage("닉네임은 2글자 이상, 6글자 미만으로 입력해주세요.");
      setIsNickName(false);
    } else if (name === currentNickname) {
      setNicknameMessage("현재 닉네임과 같아요");
      setBtnValidation(true);
    } else {
      setNicknameMessage("사용 가능한 닉네임입니다.");
      setIsNickName(true);
      setBtnValidation(false);
    }
  };
  return (
    <ChangeNickNameDiv className="닉네임변경">
      <h3 style={{ fontSize: "25px" }}>닉네임 변경</h3>
      <UserInput
        type="text"
        value={newNickName}
        onChange={(e) => changeNickHandler(e)}
      ></UserInput>
      {isNickName === true ? (
        <p style={{ color: "red" }}>{nicknameMessage}</p>
      ) : null}
    </ChangeNickNameDiv>
  );
}

export default ChangeNickname;
