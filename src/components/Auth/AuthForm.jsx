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
  AuthLogoText,
  AuthLogoWrapper,
  AuthTitleWrapper,
  AuthTextWrapper,
  AuthTitleTextWrapper,
  AuthInputValidationText,
  AuthSignUpForm,
  AuthLoginForm,
  SocialLoginTitleWrapper,
  SocialLoginItem,
  BoundaryLineWrapper,
  BoundaryLine,
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
  passwordMessage, // sign up 실시간 유효성 검사
  isPassword, // sign up 실시간 유효성 검사
  confirmPassword,
  changeConfirmPassword,
  confirmPasswordRef,
  passwordConfirmMessage, // sign up 실시간 유효성 검사
  isPasswordConfirm, // sign up 실시간 유효성 검사
  nickname,
  changeNickname,
  nicknameRef,
  nicknameMessage, // sign up 실시간 유효성 검사
  isNickname, // sign up 실시간 유효성 검사
  submitSignUp,
  submitLogin,
}) => {
  const signUp = title === "회원 가입 정보 입력";

  return (
    <AuthBackground>
      <AuthWrapper>
        <AuthLogoWrapper>
          <Link to="/">
            <AuthLogo>팁퍼</AuthLogo>
          </Link>
        </AuthLogoWrapper>

        <AuthTitleTextWrapper>
          <AuthTitleWrapper>
            <AuthTitle>{title}</AuthTitle>
          </AuthTitleWrapper>

          <AuthTextWrapper>
            <AuthText>
              {text}
              <Link to={`${signUp ? "/login" : "/signup"}`}>
                <LinkText>{linkText}</LinkText>
              </Link>
            </AuthText>
          </AuthTextWrapper>
        </AuthTitleTextWrapper>

        <>
          {signUp ? (
            <AuthSignUpForm>
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
                {email.length > 0 && (
                  <AuthInputValidationText>
                    {emailMessage}
                  </AuthInputValidationText>
                )}
              </AuthInputWrapper>

              <AuthInputWrapper>
                <AuthLabel>비밀번호</AuthLabel>
                <AuthInput
                  id="password"
                  type="password"
                  placeholder="사용하실 비밀번호를 입력해주세요."
                  value={password}
                  onChange={changePassword}
                  ref={passwordRef}
                />

                {password.length > 0 && (
                  <AuthInputValidationText>
                    {passwordMessage}
                  </AuthInputValidationText>
                )}
              </AuthInputWrapper>

              <AuthInputWrapper>
                <AuthLabel>비밀번호 재입력</AuthLabel>
                <AuthInput
                  id="confirm-password"
                  type="password"
                  placeholder="사용하실 비밀번호를 재입력해주세요."
                  value={confirmPassword}
                  onChange={changeConfirmPassword}
                  ref={confirmPasswordRef}
                />

                {confirmPassword.length > 0 && (
                  <AuthInputValidationText>
                    {passwordConfirmMessage}
                  </AuthInputValidationText>
                )}
              </AuthInputWrapper>

              <AuthInputWrapper>
                <AuthLabel>닉네임</AuthLabel>
                <AuthInput
                  id="nickname"
                  type="text"
                  placeholder="사용하실 닉네임을 입력해주세요."
                  maxLength={6}
                  value={nickname}
                  onChange={changeNickname}
                  ref={nicknameRef}
                />

                {nickname.length > 0 && (
                  <AuthInputValidationText>
                    {nicknameMessage}
                  </AuthInputValidationText>
                )}
              </AuthInputWrapper>
              <AuthButton onClick={submitSignUp}>회원가입</AuthButton>
            </AuthSignUpForm>
          ) : (
            <AuthLoginForm>
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

                {!emailValid && email.length > 0 && (
                  <AuthInputValidationText>
                    올바른 이메일을 형식을 입력해주세요.
                  </AuthInputValidationText>
                )}
              </AuthInputWrapper>

              <AuthInputWrapper>
                <AuthLabel>비밀번호</AuthLabel>
                <AuthInput
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={password}
                  onChange={changePassword}
                  ref={passwordRef}
                />
              </AuthInputWrapper>
              <AuthButton onClick={submitLogin}>로그인</AuthButton>
            </AuthLoginForm>
          )}
        </>
        {!signUp && (
          <>
            <BoundaryLineWrapper>
              <BoundaryLine>또는</BoundaryLine>
            </BoundaryLineWrapper>

            <SocialLoginForm>
              <SocialLoginTitleWrapper></SocialLoginTitleWrapper>
              <SocialLoginItem>gqweqweqwdqwd</SocialLoginItem>
              {/* <SocialLoginList>
              <KakaoLogin />
              <NaverLogin />
              <GoogleLogin />
            </SocialLoginList> */}
            </SocialLoginForm>
          </>
        )}
      </AuthWrapper>
    </AuthBackground>
  );
};

export default AuthForm;
