import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

// auth background
const AuthBackground = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  background-color: #e9e9e9;
`;

// auth wrapper
const AuthWrapper = styled.div`
  width: 420px;
  /* min-width: 400px; */
  background-color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

// auth logo, title
const AuthLogo = styled.div`
  width: 250px;
`;
const AuthLogoImg = styled.img`
  width: 100%;
`;
const AuthTitle = styled.div`
  width: 300px;
  font-size: 1.4rem;
  font-weight: 600;

  margin-top: 1rem;
  text-align: center;
`;
const AuthText = styled.span`
  color: #656666;
  font-size: 0.7rem;
  font-weight: 600;

  margin: 0.5rem 0 2.2rem;
`;

// auth form
const AuthForm = styled.form``;
const AuthInputWrapper = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
`;
const AuthLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;
const AuthInput = styled.input`
  height: 1.6rem;
  font-size: 0.9rem;
  border: 1px solid #c7cace;
  border-radius: 0.2rem;

  margin: 0.3rem 0 0.8rem;
  padding: 0.3rem;
`;
const AuthButton = styled.button`
  width: 300px;
  height: 2.5rem;
  color: white;
  background-color: #1175c7;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.2rem;
  cursor: pointer;

  margin: 0.7rem 0;
`;

// social login form
const SocialLoginTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;

  display: block;
  text-align: center;
  /* color: #656666; */
  margin: 0.1rem 0 0.6rem;
  position: relative;

  &::before {
    width: 130px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: 2rem;
    top: 0.6rem;
    content: '';
  }

  &::after {
    width: 130px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    right: 2rem;
    top: 0.6rem;
    content: '';
  }
`;
const SocialLoginForm = styled.div`
  width: 300px;

  margin: 0.8rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SocialLoginButton = styled.div`
  border: 1px solid #c7cace;
  border-radius: 0.2rem;
  width: 48%;
  height: 2.5rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* justify-content: center; */
  /* align-items: center; */
  margin-bottom: 0.4rem;
`;
const SocialLoginButtonLogo = styled.div`
  width: 28px;

  padding: 4px 0 0 10px;
`;
const SocialLoginButtonLogoImg = styled.img`
  width: 100%;
`;
const SocialLoginButtonText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;

  margin: auto;
`;
