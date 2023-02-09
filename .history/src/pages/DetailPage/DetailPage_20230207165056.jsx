import React from 'react';
import { Body, Header, Button, Container, Content, Title } from './style';

function DetailPage() {
  return (
    <Container>
      <Header>
        <Button>목록으로</Button>
        <Button>신고</Button>
      </Header>
      <Body>
        <Title plaseholder='행복한 71억만...' />
        <Content plaseholder='로또에 당첨되었으면 좋겠습니다.' />
      </Body>
    </Container>
  );
}

export default DetailPage;
