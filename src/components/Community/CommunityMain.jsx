import React from "react";
import { Wrapper, Content, Title, UserWrapper, Message, User } from "./style";

function CommunityMain() {
  return (
    <Wrapper>
      <Content>
        <Title>관심있는 팁을 찾아보세요</Title>
      </Content>

      <UserWrapper>
        <Message>
          다른 유저들의 팁을 공유받고
          <br />
          여러분만의 노하우로 만들어보세요
        </Message>
        <User>로그인</User>
      </UserWrapper>
    </Wrapper>
  );
}

export default CommunityMain;
