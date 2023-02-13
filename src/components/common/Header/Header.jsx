import React from "react";
import { Container, Logo, NavBar, Nav, LoginToggle } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../../../config/firebase";

function Header() {
  const navigate = useNavigate();
  // 마리나님 코드 임시 주석
  // const [currentUser, setCurrentUser] = useState(false);

  // 로그인 확인을 위한 세션스토리지 키 확인. 키 존재? => 로그인 되어있음 / 없음 => 로그인 안 되어있음
  const isLoggedIn = sessionStorage.key(0);

  // // 로그아웃 => 왜 한 번에 안되는지 연구해야함.
  // const onLogoutClick = () => {
  //   authService.signOut();
  //   navigate("/", { replace: true });
  //   alert("로그아웃 되었습니다.");
  // };

  // 로그아웃
  const onLogoutClick = () => {
    authService.signOut().then(() => {
      sessionStorage.clear(); // ?
      alert("로그아웃 되었습니다.");
      navigate("/", { replace: true });
    });
  };

  return (
    <Container>
      <Logo
        onClick={() => navigate("/")}
        src={require("../../../assets/star.png")}
        alt="메인"
      />
      <NavBar>
        <Nav onClick={() => navigate("/boardpage")}>커뮤니티</Nav>
        <Nav onClick={() => navigate("/")}>문의하기</Nav>
        <LoginToggle>
          {!isLoggedIn && (
            <>
              <Nav
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </Nav>
              <Nav
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </Nav>
            </>
          )}
          {isLoggedIn && (
            <>
              <Nav
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                마이페이지
              </Nav>
              <Nav
                onClick={() => {
                  onLogoutClick();
                }}
              >
                로그아웃
              </Nav>
            </>
          )}
          {/* 마리나님 코드 임시 주석 */}
          {/* {currentUser ? (
            <>
              <Nav onClick={() => navigate("/my")}>마이페이지</Nav>
              <Nav>로그아웃</Nav>
            </>
          ) : (
            <>
              <Nav onClick={() => navigate("/signUp")}>회원가입</Nav>
              <Nav onClick={() => navigate("/login")}>로그인</Nav>
            </>
          )} */}
        </LoginToggle>
      </NavBar>
    </Container>
  );
}

export default Header;
