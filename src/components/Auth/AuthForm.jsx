import React from "react";
import { Link } from "react-router-dom";
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
  SocialLoginButton,
  SocialLoginButtonLogo,
  SocialLoginButtonLogoImg,
  SocialLoginButtonText,
  SocialLoginForm,
  SocialLoginTitle,
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
  submitSignUp,
  submitLogin,
  socialBtn,
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
              defaultValue={email}
              onChange={changeEmail}
              ref={emailRef}
            />
            <AuthLabel>비밀번호</AuthLabel>
            <AuthInput
              id="password"
              type="password"
              placeholder="비밀번호 입력"
              defaultValue={password}
              onChange={changePassword}
              ref={passwordRef}
            />
            {signUp ? (
              <>
                <AuthLabel>비밀번호 재입력</AuthLabel>
                <AuthInput
                  id="confirm-password"
                  type="password"
                  placeholder="비밀번호 재입력"
                  defaultValue={confirmPassword}
                  onChange={changeConfirmPassword}
                  ref={confirmPasswordRef}
                />
              </>
            ) : (
              ""
            )}
          </AuthInputWrapper>
          {signUp && <AuthButton onClick={submitSignUp}>회원가입</AuthButton>}
          {!signUp && <AuthButton onClick={submitLogin}>로그인</AuthButton>}
        </DefaultLoginForm>
        {!signUp && (
          <>
            <SocialLoginTitle>또는</SocialLoginTitle>
            <SocialLoginForm>
              {socialBtn.map((item) => {
                return (
                  <SocialLoginButton
                    onClick={() => {
                      alert("아직은 안돼요~");
                    }}
                  >
                    <SocialLoginButtonLogo>
                      <SocialLoginButtonLogoImg src={item.img} />
                    </SocialLoginButtonLogo>
                    <SocialLoginButtonText>{item.title}</SocialLoginButtonText>
                  </SocialLoginButton>
                );
              })}
            </SocialLoginForm>
            <LinkText>
              <Link
                onClick={() => {
                  alert("아직은 안돼요~");
                }}
              >
                비밀번호를 잊으셨나요?
              </Link>
            </LinkText>
          </>
        )}
      </AuthWrapper>
    </AuthBackground>
  );
};

export default AuthForm;
