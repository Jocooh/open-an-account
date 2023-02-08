import React from 'react';
import { Body, Header, Button, Container, Content, Title } from './style';

function DetailPage() {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <Container>
      <Header>
        <Button>목록으로</Button>
        {currentUser ? (
          <Button>신고</Button>
        ) : (
          <>
            <Button>수정</Button>
            <Button>삭제</Button>
          </>
        )}
      </Header>
      <Body>
        <Title>행복한 71억만...</Title>
        <Content>
          로또에 당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다. 로또에
          당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다. 로또에
          당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다.로또에
          당첨되었으면 좋겠습니다. 로또에 당첨되었으면 좋겠습니다.
        </Content>
      </Body>
    </Container>
  );
}

export default DetailPage;
