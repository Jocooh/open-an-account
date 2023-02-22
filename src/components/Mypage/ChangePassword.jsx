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
  editUserPassword,
  setEditUserPassword,
  setUserPassword,
  inputValidation,
  setInputValidation,
  userPassword,
}) {
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState(password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [corfirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const checkPassword = useRef(null);

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
    } else {
      setPasswordMessage("비밀번호가 일치해요");
      setIsPassword(true);
      setInputValidation(false);
    }
  };

  //################################################# 새 비밀번호 확인
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  // 비밀번호 재입력
  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const checkValidation = (e) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const checkPasswordValidation = password.match(passwordRegex);
    if (!checkPasswordValidation || !password) {
      if (!password) {
        setConfirmPasswordMessage("비밀번호를 입력해주세요");
        return false;
      } else {
        setConfirmPasswordMessage(
          "비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다."
        );
      }

      // if (!confirmPassword) {
      //   alert("비밀번호를 다시 한번 더 입력해주세요.");
      //   // confirmPasswordRef?.current?.focus();
      //   setPassword("");
      //   return false;
      // }
      // if (password !== confirmPassword) {
      //   alert("비밀번호가 일치하지 않습니다.");
      //   // confirmPasswordRef?.current?.focus();
      //   // setPassword("");
      //   setConfirmPassword("");
      //   return false;
      // }
    }
    setConfirmPasswordMessage("올바른 비밀번호 형식입니다.");
    return true;
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
          ref={checkPassword}
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
          onChange={(e) => setUserPassword(e.target.value)}
          disabled={inputValidation}
          value={userPassword}
        />
        {/* <p>{corfirmPasswordMessage}</p> */}
        {/* 새비밀번호 확인 */}
        <p>새 비밀번호 확인</p>
        <UserInput
          type="password"
          disabled={inputValidation}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          // value={userPassword}
        />
        {/* <p>{corfirmPasswordMessage}</p> */}
      </ChangePasswordDiv>
    </>
  );
}

export default ChangePassword;
