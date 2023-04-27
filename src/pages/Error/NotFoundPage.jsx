import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../../config/firebase";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <ErrBackground>
      <ErrMsg>
        <Img src={require("../../assets/no.png")} />
        <Text>페이지를 찾을 수 없습니다. 어떤 페이지로 이동할까요?</Text>
      </ErrMsg>
      <ErrNav>
        <Menu
          onClick={() => {
            navigate("/main");
          }}
        >
          메인
        </Menu>
        <Menu
          onClick={() => {
            navigate("/service");
          }}
        >
          상품비교
        </Menu>
        <Menu
          onClick={() => {
            navigate("/community");
          }}
        >
          커뮤니티
        </Menu>
        <Menu
          onClick={() => {
            authService.currentUser ? navigate("/mypage") : navigate("/login");
            // }
          }}
        >
          로그인
        </Menu>
      </ErrNav>
    </ErrBackground>
  );
};

export default NotFoundPage;

const ErrBackground = styled.div`
  height: calc(100vh - 102px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ErrMsg = styled.div`
  width: 1000px;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 300px;
  height: 250px;
  margin: 80px 0;
`;
const Text = styled.div`
  font-size: 35px;
`;
const ErrNav = styled.div`
  width: 1000px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 150px;
`;
const Menu = styled.div`
  width: 100px;
  height: 100px;

  font-size: large;
  font-weight: bold;
  color: #6a24ff;
  text-align: center;
  line-height: 100px;

  transition: transform 300ms ease-in-out;
  transition: -webkit-transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  cursor: pointer;
`;
