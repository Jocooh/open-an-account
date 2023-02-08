import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Body,
  Header,
  ReturnButton,
  ButtonWrap,
  Button,
  LikeWrap,
  Like,
  Scrap,
  Container,
  Content,
  Title,
} from './style';

function DetailPage() {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <ReturnButton onClick={() => navigate('/boardpage')}>
        목록으로
      </ReturnButton>

      <Header>
        {currentUser ? (
          <Button>신고</Button>
        ) : (
          <ButtonWrap>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrap>
        )}
        <LikeWrap>
          <Like>좋아요 25</Like>
          <Scrap>스크랩 30</Scrap>
        </LikeWrap>
      </Header>
      <Body>
        <Title>행복한 71억만...</Title>
        {/* <Title>제목: {title}</Title> */}

        <Content>
          로또에 당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다. 로또에
          당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다. 로또에
          당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다.로또에
          당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다.
        </Content>
        {/* <Content>
          {content}
        </Content> */}
      </Body>
      <CommentWrap>
        <CommentTitle>총 댓글</CommentTitle>
        <Comment>저도 로또 당첨됐음 좋겠네여!!</Comment>
      </CommentWrap>
    </Container>
  );
}

export default DetailPage;
