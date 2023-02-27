import React from "react";
import {
  Wrapper,
  Content,
  Title,
  UserWrapper,
  Message,
  User,
  Category,
} from "./style";

function CommunityMain() {
  return (
    <Wrapper>
      <Content>
        <Title>관심있는 팁을 찾아보세요</Title>
      </Content>
      <Category>
        <div>금융상품 후기</div>
        <div>팁과 노하우</div>
        <div>공지사항</div>
      </Category>
      <UserWrapper>
        <Message>
          다른 유저들의 팁을 공유받고
          <br />
          여러분만의 노하우로 만들어보세요
        </Message>
        <User>
          <img src={require("../../assets/profileimg.png")} />
          로그인
        </User>
      </UserWrapper>
    </Wrapper>
  );
}

export default CommunityMain;
