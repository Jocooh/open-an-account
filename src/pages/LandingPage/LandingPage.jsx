import React from 'react';

import { Wraper, MainTitle, SubTitle, StartButton } from './LandingCss';
const LandingPage = () => {
  return (
    <>
      <Wraper>
        <MainTitle>
          목표금액에 맞는 예적금
          <br /> 클릭 한번으로 찾아드려요
        </MainTitle>
        <SubTitle>모금에서 한번에 검색하고 결정해요</SubTitle>
        <StartButton>시작하기</StartButton>
      </Wraper>
    </>
  );
};
export default LandingPage;
