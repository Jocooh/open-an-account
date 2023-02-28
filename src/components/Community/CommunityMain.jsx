import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Content,
  Title,
  UserWrapper,
  Message,
  User,
  Category,
  Categories,
} from "./style";

function CommunityMain() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Categories>
        <Category>금융상품 후기</Category>
        <Category>팁과 노하우</Category>
        <Category>공지사항</Category>
      </Categories>

      <Content>
        <Title>관심있는 팁을 찾아보세요</Title>
      </Content>

      <UserWrapper>
        <Message>
          다른 유저들의 팁을 공유받고
          <br />
          여러분만의 노하우로 만들어보세요
        </Message>
        <User>
          <img src={require("../../assets/profileimg.png")} />
          <div>로그인하러가기</div>
        </User>
      </UserWrapper>
    </Wrapper>
  );
}

export default CommunityMain;
