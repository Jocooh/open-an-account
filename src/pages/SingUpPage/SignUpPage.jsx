import React from "react";
import { Link } from "react-router-dom";
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
            <AuthInput type="id" placeholder="example.gmail.com" />
            <AuthLabel>비밀번호</AuthLabel>
            <AuthInput type="password" placeholder="비밀번호 입력" />
            <AuthLabel>비밀번호 재입력</AuthLabel>
            <AuthInput type="password" placeholder="비밀번호 재입력" />
          </AuthInputWrapper>
          <AuthButton>회원가입</AuthButton>
        </AuthForm>
      </AuthWrapper>
    </AuthBackground>
  );
};

export default SignUpPage;
