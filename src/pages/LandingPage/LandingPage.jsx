import React from "react";

import {
  Wraper,
  MainTitle,
  SubTitle,
  StartButton,
  FirstImgWrap,
  BackgroundWraper,
  Firstsection,
  SecondSection,
  ThirdSection,
  FourthSection,
  SecondSectionTitle,
  SecondSectionSubTitle,
  SecondImgWrap,
  Contents,
} from "./LandingCss";
const LandingPage = () => {
  return (
    <BackgroundWraper>
      <Wraper>
        <article style={{ width: "100%" }}>
          <Firstsection>
            <div>
              <MainTitle>
                비교는 빠르게
                <br /> 선택은 안전하게
              </MainTitle>
              <SubTitle>사회 초년생을 위한 예적금 비교, 팁퍼</SubTitle>
              <StartButton>시작하기</StartButton>
            </div>
            <FirstImgWrap>
              <img
                src={require("../../assets/Landinglist.png")}
                alt="Landinglist"
              />
            </FirstImgWrap>
          </Firstsection>

          {/* //* 2번째 섹션 */}
          <SecondSection>
            <SecondSectionTitle>비교는 한번에</SecondSectionTitle>
            <SecondSectionSubTitle>
              제 1금융권의 정기예금, 정기적금을 모두 모았어요.
            </SecondSectionSubTitle>
            <SecondSectionSubTitle>
              조건에 최적화된 상품을 찾아드릴게요.
            </SecondSectionSubTitle>
            <SecondImgWrap>
              <Contents>
                <img
                  src={require("../../assets/SecondImg(1).png")}
                  alt="secondImg1"
                />
              </Contents>
              <Contents>
                <img
                  src={require("../../assets/SecondImg(2).png")}
                  alt="secondImg2"
                />
              </Contents>
              <Contents>
                <img
                  src={require("../../assets/SecondImg(3).png")}
                  alt="secondImg3"
                />
              </Contents>
            </SecondImgWrap>
          </SecondSection>
          <ThirdSection></ThirdSection>
          <FourthSection></FourthSection>
        </article>
      </Wraper>
    </BackgroundWraper>
  );
};
export default LandingPage;
