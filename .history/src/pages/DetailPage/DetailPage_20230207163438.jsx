import React from 'react';
import { Body, Button, Content, Title } from './style';

function DetailPage() {
  return (
    <Body>
      <Title plaseholder='행복한 71억만...' />
      <Content plaseholder='로또에 당첨되었으면 좋겠습니다.' />
      <Button>올리기</Button>
    </Body>
  );
}

export default DetailPage;
