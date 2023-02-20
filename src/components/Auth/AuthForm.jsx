import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "./GoogleLogin";
import { KakaoLogin } from "./KakaoLogin";
import { NaverLogin } from "./NaverLogin";
import {
  AuthBackground,
  AuthButton,
  AuthInput,
  AuthInputWrapper,
  AuthLabel,
  AuthLogo,
  AuthLogoImg,
  AuthText,
  LinkText,
  AuthTitle,
  AuthWrapper,
  DefaultLoginForm,
  SocialLoginForm,
  SocialLoginTitle,
  SocialLoginList,
} from "./style";

const AuthForm = ({
  title,
  text,
  linkText,
  email,
  changeEmail,
  emailRef,
  password,
  changePassword,
  passwordRef,
  confirmPassword,
  changeConfirmPassword,
  confirmPasswordRef,
  nickname,
  changeNickname,
  nicknameRef,
  submitSignUp,
  submitLogin,
}) => {
  const signUp = title === "회원 가입 정보 입력";

  return (
    <AuthBackground>
      <AuthWrapper>
        <AuthLogo>
          <Link to="/">
            <AuthLogoImg src={require("../../assets/star.png")} />
          </Link>
        </AuthLogo>
        <AuthTitle>{title}</AuthTitle>
        <AuthText>
          {text}
          <Link to={`${signUp ? "/login" : "/signup"}`}>
            <LinkText>{linkText}</LinkText>
          </Link>
        </AuthText>
        <DefaultLoginForm>
          <AuthInputWrapper>
            <AuthLabel>이메일</AuthLabel>
            <AuthInput
              id="email"
              type="email"
              placeholder="example.gmail.com"
              value={email}
              onChange={changeEmail}
              ref={emailRef}
            />
            <AuthLabel>비밀번호</AuthLabel>
            <AuthInput
              id="password"
              type="password"
              placeholder="사용하실 비밀번호를 입력해주세요."
              value={password}
              onChange={changePassword}
              ref={passwordRef}
            />
            {signUp ? (
              <>
                <AuthLabel>비밀번호 재입력</AuthLabel>
                <AuthInput
                  id="confirm-password"
                  type="password"
                  placeholder="사용하실 비밀번호를 재입력해주세요."
                  value={confirmPassword}
                  onChange={changeConfirmPassword}
                  ref={confirmPasswordRef}
                />
                <AuthLabel>닉네임</AuthLabel>
                <AuthInput
                  id="nickname"
                  type="text"
                  placeholder="사용하실 닉네임을 입력해주세요."
                  value={nickname}
                  onChange={changeNickname}
                  ref={nicknameRef}
                />
              </>
            ) : (
              ""
            )}
          </AuthInputWrapper>

          {signUp ? (
            <AuthButton onClick={submitSignUp}>회원가입</AuthButton>
          ) : (
            <AuthButton onClick={submitLogin}>로그인</AuthButton>
          )}
        </DefaultLoginForm>
        {!signUp && (
          <SocialLoginForm>
            <SocialLoginTitle>또는</SocialLoginTitle>
            <SocialLoginList>
              <KakaoLogin />
              <NaverLogin />
              <GoogleLogin />
            </SocialLoginList>
          </SocialLoginForm>
        )}
      </AuthWrapper>
    </AuthBackground>
  );
};

export default AuthForm;
