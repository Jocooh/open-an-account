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
  emailValid, // login 실시간 유효성 검사
  emailMessage, // sign up 실시간 유효성 검사
  isEmail, // sign up 실시간 유효성 검사
  password,
  changePassword,
  passwordRef,
  passwordValid, // login 실시간 유효성 검사 - 기존 유효성 검사로 사용 중
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
            {signUp ? (
              <>
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
              <>
                <AuthLabel>이메일</AuthLabel>
                <AuthInput
                  id="email"
                  type="email"
                  placeholder="example.gmail.com"
                  value={email}
                  onChange={changeEmail}
                  ref={emailRef}
                />
                {!emailValid && email.length > 0 && (
                  <p>올바른 이메일을 형식을 입력해주세요.</p>
                )}

                <AuthLabel>비밀번호</AuthLabel>
                <AuthInput
                  id="password"
                  type="password"
                  placeholder="사용하실 비밀번호를 입력해주세요."
                  value={password}
                  onChange={changePassword}
                  ref={passwordRef}
                />
              </>
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
