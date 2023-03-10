import React from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <ErrBackground>
      <ErrImg src={require("../../assets/no.png")} />
      <ErrText>페이지를 찾을 수 없습니다.</ErrText>
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
const ErrImg = styled.img`
  width: 400px;
  height: 300px;
  margin: 80px 0;
`;
const ErrText = styled.div`
  font-size: 50px;
`;
