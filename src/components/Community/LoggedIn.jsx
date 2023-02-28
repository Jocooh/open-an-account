import React, { useState } from "react";
import PostingModal from "../PostingModal/PostingModal";
import {
  Wrapper,
  Content,
  Title,
  UserWrapper,
  User,
  Category,
  Categories,
  ProfileImg,
  PostButton,
} from "./style";

function LoggedIn({ username }) {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };
  return (
    <Wrapper>
      <Categories>
        <Category>금융상품 후기</Category>
        <Category>팁과 노하우</Category>
        <Category>공지사항</Category>
      </Categories>

      <Content>
        <Title>관심있는 팁을 찾아보세요</Title>
        {/* 작성창 제일 위  */}
        {/* 그 다음 글 카테고리 순서대로 쌓기 */}
        {postingModalOpen && (
          <PostingModal setPostingModalOpen={setPostingModalOpen} />
        )}
      </Content>

      <UserWrapper>
        <User>
          <ProfileImg src={require("../../assets/profileimg.png")} />

          {username}
        </User>
        <PostButton onClick={OpenPostingModal}>글 작성하기</PostButton>
      </UserWrapper>
    </Wrapper>
  );
}

export default LoggedIn;
