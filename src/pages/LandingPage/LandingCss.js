import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const BackgroundWraper = styled.div`
  /* background-color: #e7ecfa; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

//* 전체 랩퍼
export const Wraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
//* 첫번째 섹션
export const Firstsection = styled.div`
  align-items: center;
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;
  background: url(${require("../../assets/landing/FirstSectionBackground.png")})
    fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  img {
    top: 500px;
  }
`;
//* 첫번째 섹션 메인 타이틀
export const FirstSectionMainTitleWrap = styled.div`
  font-size: 100px;
  margin-right: 500px;
`;

export const FirstSectionMainTitle = styled.div`
  font-weight: bold;
`;

export const MainTilte = styled.div`
  width: 700px;
  position: absolute;
  top: -250px;
  text-shadow: 12px 12px 10px rgba(0, 0, 0, 0.5);
  color: #fff;

  animation: slidein 1s ease;
  @keyframes slidein {
    from {
      margin-left: -800px;
      opacity: 0;
    }
    to {
      opacity: 1;
      margin-left: 0px;
    }
  }
`;

//* 첫번째 섹션 서브 타이틀 Wraper
export const FirstSectionSubTitle = styled.div`
  width: 100%;
  background-color: #6a24ff;
`;
//* 첫번째 섹션 서브 타이틀
export const FirestSectionSubTitle = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px 0px 20px 0px;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #fff;

  animation: BounceText 1s alternate;
  @keyframes BounceText {
    0% {
      transform: translateX(-700px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

//* 첫번째 섹션 서브 타이틀 버튼 Wraper
export const FirestSectionButtonWrap = styled.div``;

//* 첫번째 섹션 서브 타이틀 버튼
export const TocompareButton = styled.button`
  width: 200px;
  height: 54px;
  border-radius: 60px;
  font-size: 16px;
  color: #505050;
  fill: none;
  background-color: #fff;
  margin-right: 20px;
  animation: ApperButton 1s ease-out;
`;

export const StartButton = styled.button`
  width: 200px;
  height: 54px;
  border-radius: 60px;
  font-size: 16px;
  margin: 100px 20px 0 0;
  color: #fff;
  border: 1px solid #fff;

  animation: ApperButton 1s ease-out;
  @keyframes ApperButton {
    0% {
      transform: translateY(70px);
      opacity: 0;
    }
    92% {
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

//? 여기부터 두번째 섹션
//* 두번째 섹션
export const SecondSection = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 1080px;
  background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const SecondSectioncontainer = styled.div``;

//* 두번째 섹션 타이틀
export const SecondSectionTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #000;
`;

//* 두번째 섹션 서브 타이틀
export const SecondSectionSubTitle = styled.div`
  font-size: 18px;
  margin-bottom: 60px;
  color: #505050;
`;

//* 두번째 섹션 이미지 Wraper
export const SecondImgWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;

//* 두번째 섹션 컨텐츠
export const Contents = styled.div`
  width: 420px;
  height: 488px;
  margin: 0 20px;
  border-radius: 8px;
`;

//* 두번째 섹션 컨텐츠 타이틀
export const ContentsTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
`;

//* 두번째 섹션 컨텐츠 서브 타이틀
export const ContentsSubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

//* 두번째 섹션 이미지 컨테이너
export const SecondImgContainer = styled.div`
  height: 350px;
  background-color: #f0f0f0; //* 색이 안보여요
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const SecondImgThree = styled.div``;

//? 여기부터 세번째 섹션
//* 세번째 섹션
export const ThirdSection = styled.div`
  width: 100%;
  height: 2160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7ecfa;
  position: relative;
  z-index: 1;
`;

export const ThirdTopSection = styled.div`
  width: 100%;
`;

//* 세번째 섹션 상단
export const ThirdSectionContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ThirdTopTitleWrap = styled.div`
  margin-left: 60px;
  margin-top: 50px;
`;

//* 세번째 섹션 하단
export const ThirdBottomSection = styled.div`
  width: 100%;
  display: flex;
  margin-top: 300px;
`;

//? 여기부터 네번째 섹션
//* 네번째 섹션
export const FourthSection = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding-top: 300px;
  position: relative;
`;

export const FourthSectionImgAnimationWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const FourthSectonTitle = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

export const FourthSectionSubTitle = styled.div`
  font-size: 32px;
  margin-top: 30px;
`;

export const FourthSectionButtonWrap = styled.div`
  margin-bottom: 150px;
`;

export const FourthSectionButton = styled.button`
  background-color: #6a24ff;
  width: 310px;
  height: 77px;
  color: #fff;
  font-size: 22px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 80px;
`;

export const FourthSectionDecription = styled.div`
  color: #fff;
  font-size: 14px;
  background-color: #6a24ff;
  width: 100%;
  padding-top: 200px;
  padding-bottom: 25px;
`;
