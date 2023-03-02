import React, { useState } from "react";
import PostingModal from "../PostingModal/PostingModal";
import {
  Wrapper,
  Content,
  Title,
  Boards,
  UserWrapper,
  User,
  Category,
  Categories,
  ProfileImg,
  PostButton,
  Message,
} from "./style";
import Tipper from "../../components/MainPage/Tipper";

function LoggedIn({ username }) {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };
  return (
    <Wrapper>
      <Content>
        <Title>
          마음에 드는 팁이 있다면 <br /> 하트!
        </Title>

        {postingModalOpen && (
          <PostingModal
            setPostingModalOpen={setPostingModalOpen}
            setBoards={setBoards}
          />
        )}

        <Boards>
          <Tipper boards={boards} />
        </Boards>
      </Content>

      <UserWrapper>
        <User>
          {username}
          <ProfileImg src={require("../../assets/profileimg.png")} />
          <PostButton onClick={OpenPostingModal}>팁 작성하기</PostButton>
        </User>
        <Categories>
          <Message>카테고리</Message>
          <Category>금융상품 후기</Category>
          <Category>팁과 노하우</Category>
          <Category>공지사항</Category>
        </Categories>
      </UserWrapper>
    </Wrapper>
  );
}

export default LoggedIn;
