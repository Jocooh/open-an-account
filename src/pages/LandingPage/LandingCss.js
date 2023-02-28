import styled from "styled-components";

export const BackgroundWraper = styled.div`
  background-color: lavender;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

//* 전체 랩퍼
export const Wraper = styled.div`
  /* padding-top: 300px; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
//* 첫번째 섹션
export const Firstsection = styled.div`
  align-items: center;
  width: 100%;
  height: 780px;
  /* padding-left: 300px; */
  display: flex;
  justify-content: center;
  /* background-color: lavender; */
`;
//* 첫번째 섹션 메인 타이틀
export const FirstSectionMainTitleWrap = styled.h1`
  font-weight: bold;
  font-size: 100px;
  text-align: center;
`;

export const FirstSectionMainTitle = styled.div`
  display: flex;
  justify-content: center;
`;

//* 첫번째 섹션 서브 타이틀 Wraper
export const FirstSectionSubTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #6a24ff;
`;
//* 첫번째 섹션 서브 타이틀
export const FirestSectionSubTitle = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  font-size: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  color: #fff;
`;

//* 첫번째 섹션 서브 타이틀 버튼 Wraper
export const FirestSectionButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

//* 첫번째 섹션 서브 타이틀 버튼
export const StartButton = styled.button`
  width: 244px;
  height: 73px;
  color: #6a24ff;
  border-radius: 40px;
  border: none;
  font-size: 26px;
  font-weight: bold;
  margin-top: 20px;
  background-color: #fff;
  cursor: pointer;
`;
//* 첫번째 섹션 이미지
export const FirstImgWrap = styled.div`
  margin-top: 100px;
  right: 50px;
  top: 300px;
`;

//* 두번째 섹션
export const SecondSection = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 1080px;
  background-color: #6a24ff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SecondSectioncontainer = styled.div``;

export const SecondSectionTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #fff;
`;
export const SecondSectionSubTitle = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  color: #fff;
`;
export const SecondImgWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;
export const Contents = styled.div`
  width: 420px;
  height: 488px;
  background-color: lavender;
  margin: 0 20px;
  border-radius: 8px;
`;
export const ContentsTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const ContentsSubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const SecondImgContainer = styled.div`
  height: 350px;
`;

//* 세번째 섹션
export const ThirdSection = styled.div`
  width: 100%;
  height: 2160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ThirdTopSection = styled.div`
  width: 100%;
  background-color: lavender;
`;
export const ThirdTopSectionContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

//* 세번째 섹션 상단
export const ThirdSectionContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  /* img {
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
      );
    } */
`;

export const ThirdTopTitleWrap = styled.div`
  margin-left: 60px;
  margin-top: 50px;
`;

export const ThirdSectionTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ThirdSectionSubTitle = styled.div`
  font-size: 30px;
`;

//* 세번째 섹션 하단
export const ThirdSectionBottom = styled.div`
  width: 100%;
  display: flex;
  margin-top: 300px;
`;

export const ThirdSectionBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ThirdSectionBottomTitleWrap = styled.div`
  margin-top: 200px;
`;

export const ThirdSectionBottomTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
`;

export const ThirdSectionBottomSubTitle = styled.div`
  font-size: 30px;
  margin-top: 30px;
`;

export const FourthSection = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 1080px;
  background-color: #6a24ff;
  text-align: center;
  padding-top: 300px;
`;

export const FourthSectonTitle = styled.div`
  font-size: 80px;
  font-weight: bold;
  color: #fff;
`;

export const FourthSectionButtonWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const FourthSectionButton = styled.button`
  background-color: #fff;
  width: 310px;
  height: 77px;
  color: #6a24ff;
  font-size: 22px;
  border-radius: 10px;
  font-weight: bold;
`;

export const FourthSectionDecription = styled.div`
  color: #fff;
  font-size: 14px;
`;
