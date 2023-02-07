import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  SocialLoginButton,
  SocialLoginButtonLogo,
  SocialLoginButtonLogoImg,
  SocialLoginButtonText,
  SocialLoginForm,
  SocialLoginTitle,
} from './style';

function LoginPage() {
  const socialBtn = [
    { title: '카카오', img: require('../../assets/kakaotalk.png') },
    { title: '네이버', img: require('../../assets/naver.png') },
    { title: '구글', img: require('../../assets/google.png') },
    { title: '페이스북', img: require('../../assets/facebook.png') },
    { title: '애플', img: require('../../assets/apple.png') },
  ];

  return (
    <AuthBackground>
      <AuthWrapper>
        <AuthLogo>
          <Link to="/">
            <AuthLogoImg src={require('../../assets/Logo.png')} />
          </Link>
        </AuthLogo>
        <AuthTitle>예·적금이 필요한 순간, 목돈</AuthTitle>
        <AuthText>
          아직 회원이 아니신가요? <Link to="/">회원가입하기</Link>
        </AuthText>
        <AuthForm>
          <AuthInputWrapper>
            <AuthLabel>아이디</AuthLabel>
            <AuthInput type="text" placeholder="example.gmail.com" />
            <AuthLabel>비밀번호</AuthLabel>
            <AuthInput type="text" placeholder="비밀번호 입력" />
          </AuthInputWrapper>
          <AuthButton>로그인</AuthButton>
        </AuthForm>

        <SocialLoginTitle>또는</SocialLoginTitle>
        <SocialLoginForm>
          {socialBtn.map((item) => {
            return (
              <SocialLoginButton
                onClick={() => {
                  alert('아직은 안돼요~');
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
        <AuthText>
          <Link to="/">비밀번호를 잊으셨나요?</Link>
        </AuthText>
      </AuthWrapper>
    </AuthBackground>
  );
}

export default LoginPage;
