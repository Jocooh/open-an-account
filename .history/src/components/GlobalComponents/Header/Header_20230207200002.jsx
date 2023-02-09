import React from 'react';
import { Container, Logo, NavBar, Nav, LoginToggle } from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <Container>
      <Logo
        onClick={() => navigate('/')}
        src={require('../../../assets/Star.png')}
        alt='css'
      />
      <NavBar>
        <Nav onClick={() => navigate('/boardpage')}>커뮤니티</Nav>
        <Nav onClick={() => navigate('/')}>문의하기</Nav>
        <LoginToggle>
          {currentUser ? (
            <>
              <Nav onClick={() => navigate('/my')}>마이페이지</Nav>
              <Nav>로그아웃</Nav>
            </>
          ) : (
            <>
              <Nav onClick={() => navigate('/signUp')}>회원가입</Nav>
              <Nav onClick={() => navigate('/login')}>로그인</Nav>
            </>
          )}
        </LoginToggle>
      </NavBar>
    </Container>
  );
}

export default Header;
