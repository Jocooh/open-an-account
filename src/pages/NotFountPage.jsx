import React from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Container>
      <Img src={require("../assets/no.png")} />
      <Text>페이지를 찾을 수 없습니다.</Text>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  /* height: calc(100vh - 78px); */ // 안먹음
  height: 817px; // 하드코딩으로 맞춤

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 400px;
  height: 300px;
  margin: 80px 0;
`;
const Text = styled.div`
  font-size: 50px;
`;
