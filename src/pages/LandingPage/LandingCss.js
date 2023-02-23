import styled from "styled-components";

export const BackgroundWraper = styled.body`
  background-color: lavender;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

//* 전체 랩퍼
export const Wraper = styled.div`
  padding-top: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
//* 첫번째 섹션
export const Firstsection = styled.div`
  width: 100%;
  height: 1000px;
  padding-left: 300px;
  display: flex;
  /* background-color: lavender; */
`;
//* 첫번째 섹션 메인 타이틀
export const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 80px;
`;

//* 첫번째 섹션 서브 타이틀
export const SubTitle = styled.div`
  margin-top: 30px;
  font-size: 30px;
`;

//* 첫번째 섹션 서브 타이틀 텍스트 버튼
export const StartButton = styled.button`
  width: 244px;
  height: 73px;
  color: white;
  border-radius: 12px;
  border: none;
  font-size: 26px;
  margin-top: 50px;
  background-color: #6a24ff;
  cursor: pointer;
`;
//* 첫번째 섹션 이미지
export const FirstImgWrap = styled.div`
  margin-left: 200px;
  margin-top: 100px;
  right: 50px;
  top: 300px;
`;

//* 두번째 섹션
export const SecondSection = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 1000px;
  background-color: #fff;
  text-align: center;
  padding-top: 300px;
`;
export const SecondSectionTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 50px;
`;
export const SecondSectionSubTitle = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;
export const SecondImgWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;
export const Contents = styled.div`
  width: 300px;
`;
export const ThirdSection = styled.div``;
export const FourthSection = styled.div``;
