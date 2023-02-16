import React, { useState } from "react";
import PostingModal from "../../components/PostingModal/PostingModal";
import Board from "../../components/Board/Board";
import {
  Wrap,
  BoardPageWrap,
  BoardTitle,
  BoardButton,
  BoardWrap,
  BoardContainer,
} from "./style";

function BoardPage() {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };

  return (
    <Wrap>
      <BoardPageWrap>
        <BoardWrap>
          <BoardTitle>게시판</BoardTitle>
          <BoardButton onClick={OpenPostingModal}>글쓰기</BoardButton>
          {postingModalOpen && (
            <PostingModal
              setPostingModalOpen={setPostingModalOpen}
              setBoards={setBoards}
            />
          )}
          <BoardContainer>
            <Board boards={boards} />
          </BoardContainer>
        </BoardWrap>
      </BoardPageWrap>
    </Wrap>
  );
}

export default BoardPage;

// const initialBoard = [
//   {
//     title: "제목1",
//     contents: "내용1",
//     userId: "abc",
//   },
//   {
//     title: "제목2",
//     contents: "내용2",
//     userId: "qwe",
//   },
// ];
