import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { authService } from "../../config/firebase";
import { ChangePasswordDiv, UserInput } from "../../pages/MyPage/style";
import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
function ChangePassword({
  editUserPassword, //현재 비밀번호 확인
  setEditUserPassword, //현재 비밀번호 확인
  setBtnValidation, //btn활성화
  userPassword,
  setUserPassword,
  inputValidationConfirm,
  setInputValidationConfirm,
  password,
  setPassword,
}) {
  const [inputValidation, setInputValidation] = useState(true);

  //첫번째 인풋 state
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //두번째 인풋 state
  const [corfirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  //세번째 인풋 state
  const [isDoublePasswordConfirm, setIsDoublePasswordConfirm] = useState(false);
  const [doubleCheckPasswordMessage, setDoubleCheckPasswordMessage] =
    useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const thirdInput = useRef(null);

  //현재 비밀번호 확인 함수
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setEditUserPassword(currentPassword);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(editUserPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
      setBtnValidation(true);
    } else {
      setPasswordMessage("비밀번호가 일치해요");
      setIsPassword(true);
      setInputValidation(false);
      setBtnValidation(true);
    }
  };

  //################################################# 새 비밀번호 확인
  const changePassword = (event) => {
    setPassword(event.target.value);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(event.target.value)) {
      setConfirmPasswordMessage(
        "대소문자, 특수문자를 포함하여 8자리 이상 입력해주세요."
      );
      // setInputValidation(true);
      setBtnValidation(true);
      setIsPasswordConfirm(false);
    } else if (event.target.value === userPassword) {
      setBtnValidation(true);
      setDoubleCheckPasswordMessage("비밀번호가 일치하지 않습니다.");
    } else if (event.target.value === editUserPassword) {
      setBtnValidation(true);
      setConfirmPasswordMessage("현재 비밀번호와 일치해요!");
      setIsPasswordConfirm(false);
      setInputValidationConfirm(true);
    } else {
      setConfirmPasswordMessage("사용 가능한 비밀번호 형식입니다.");
      setBtnValidation(true);
      setIsPasswordConfirm(true);
      setInputValidationConfirm(false);
    }
  };
  //################################################## 새 비밀번호 두번째 확인
  const changeConfirmPassword = (event) => {
    const currentPasswordConfirm = event.target.value;
    setUserPassword(currentPasswordConfirm);
    if (password === currentPasswordConfirm) {
      setDoubleCheckPasswordMessage("비밀번호가 일치해요.");
      setIsDoublePasswordConfirm(true);
      setBtnValidation(false);
    } else if (event.target.value !== password) {
      setBtnValidation(true);
      setDoubleCheckPasswordMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setDoubleCheckPasswordMessage("비밀번호가 일치하지 않습니다.");
      setIsDoublePasswordConfirm(false);
      setBtnValidation(true);
    }
  };

  return (
    <>
      <ChangePasswordDiv className="비밀번호변경">
        {/* 기존의 비밀번호 */}
        <h3 style={{ fontSize: "25px" }}>비밀번호 변경</h3>
        <p>현재 비밀번호 </p>
        <UserInput
          type="password"
          value={editUserPassword}
          placeholder="현재 비밀번호를 입력해주세요"
          onChange={(e) => {
            onChangePassword(e);
          }}
        />
        {isPassword === true ? (
          <p style={{ color: "red" }}>{passwordMessage}</p>
        ) : (
          <p>{passwordMessage}</p>
        )}

        {/* 새비밀번호 */}
        <div>
          <p>새 비밀번호</p>
          <p style={{ color: "#aaa" }}>
            8~16자 이내의 영문, 숫자, 기호를 포함한 문자열
          </p>
        </div>
        <UserInput
          type="password"
          onChange={(e) => changePassword(e)}
          disabled={inputValidation}
          value={password}
        />
        {isPasswordConfirm === true ? (
          <p style={{ color: "red" }}>{corfirmPasswordMessage}</p>
        ) : (
          <p>{corfirmPasswordMessage}</p>
        )}
        {/* 새비밀번호 확인 */}
        <p>새 비밀번호 확인</p>
        <UserInput
          type="password"
          disabled={inputValidationConfirm}
          onChange={(e) => {
            changeConfirmPassword(e);
          }}
          value={userPassword}
          ref={thirdInput}
        />
        {isDoublePasswordConfirm === true ? (
          <p style={{ color: "red" }}>{doubleCheckPasswordMessage}</p>
        ) : (
          <p>{doubleCheckPasswordMessage}</p>
        )}
      </ChangePasswordDiv>
    </>
  );
}

export default ChangePassword;
