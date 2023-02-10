import React from 'react';
import {
  Container,
  BestContainer,
  BestComment,
  BestInfo,
  Board,
  BoardComment,
  BoardButton,
} from './style';

function BoardPage() {
  return (
    <>
      <Container>
        <BestContainer>
          <BestInfo>불타는 상품 들어가는곳</BestInfo>
          <BestComment>인기 글 들어가는곳</BestComment>
        </BestContainer>
        <hr />
        {/* <div>상품 후기</div> */}
        <Board>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
          <BoardComment>게시글 들어가는 곳입니다. 글을 써주세요.</BoardComment>
        </Board>
        <BoardButton>글쓰기</BoardButton>
      </Container>
    </>
  );
}

export default BoardPage;
