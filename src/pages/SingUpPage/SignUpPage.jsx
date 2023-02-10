import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../common/firebase";
import {
  AuthBackground,
  AuthButton,
  AuthForm,
  AuthInput,
  AuthInputWrapper,
  AuthLabel,
  AuthLogo,
  AuthLogoImg,
  AuthText,
  AuthTitle,
  AuthWrapper,
} from "./style";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // 이메일 입력
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  // 비밀번호 입력
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  // 비밀번호 재입력
  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // 이메일, 비밀번호 유효성 검사
  const checkValidation = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const checkEmailValidation = email.match(emailRegex);
    const checkPasswordValidation = password.match(passwordRegex);

    if (!email || !checkEmailValidation) {
      if (!email) {
        alert("이메일을 입력해주세요.");
        emailRef?.current?.focus();
        return false;
      } else {
        alert("이메일 형식을 올바르게 입력해주세요.");
        emailRef?.current?.focus();
        return false;
      }
    }

    if (!password || !checkPasswordValidation) {
      if (!password) {
        alert("비밀번호를 입력해주세요.");
        passwordRef?.current?.focus();
        return false;
      } else {
        alert(
          "비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다."
        );
        passwordRef?.current?.focus();
        setPassword("");
        return false;
      }
    }
    return true;
  };

  // 비밀번호 일치 여부
  const checkValidationForSignUp = () => {
    if (!confirmPassword) {
      alert("비밀번호를 다시 한번 더 입력해주세요.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      confirmPasswordRef?.current?.focus();
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    return true;
  };

  // 회원가입
  const submitSignUp = () => {
    // 이메일, 비밀번호 유효성 검사 확인
    if (!checkValidation()) return;

    // 비밀번호 일치여부 확인
    if (!checkValidationForSignUp()) return;

    setPersistence(authService, browserSessionPersistence)
      .then(() => createUserWithEmailAndPassword(authService, email, password))
      .then(() => {
        alert("회원가입이 완료 되었습니다.");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/mypage");
      })
      .catch((err) => {
        if (err.message.includes("already-in-use")) {
          alert("이미 가입된 계정입니다.");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigate("/login");
        }
      });
  };

  return (
    <AuthBackground>
      <AuthWrapper>
        <AuthLogo>
          <Link to="/">
            <AuthLogoImg src={require("../../assets/star.png")} />
          </Link>
        </AuthLogo>
        <AuthTitle>회원 가입 정보 입력</AuthTitle>
        <AuthText>
          회원이신가요? <Link to="/login">로그인하기</Link>
        </AuthText>
        <AuthForm>
          <AuthInputWrapper>
            <AuthLabel>아이디</AuthLabel>
            <AuthInput
              type="email"
              id="email"
              placeholder="example.gmail.com"
              value={email}
              onChange={changeEmail}
              valueRef={emailRef}
            />
            <AuthLabel>비밀번호</AuthLabel>
            <AuthInput
              type="password"
              id="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={changePassword}
              valueRef={passwordRef}
            />
            <AuthLabel>비밀번호 재입력</AuthLabel>
            <AuthInput
              type="password"
              id="confirm-password"
              placeholder="비밀번호 재입력"
              value={confirmPassword}
              onChange={changeConfirmPassword}
              valueRef={confirmPasswordRef}
            />
          </AuthInputWrapper>
          <AuthButton
            onClick={() => {
              submitSignUp();
            }}
          >
            회원가입
          </AuthButton>
        </AuthForm>
      </AuthWrapper>
    </AuthBackground>
  );
};

export default SignUpPage;
