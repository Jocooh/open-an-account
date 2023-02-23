import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Wraper,
  FirstSectionMainTitleWrap,
  FirstSectionMainTitle,
  FirestSectionSubTitle,
  StartButton,
  BackgroundWraper,
  FirstSectionSubTitle,
  FirestSectionButtonWrap,
  Firstsection,
  SecondSection,
  ThirdTopSection,
  FourthSection,
  SecondSectionTitle,
  SecondSectionSubTitle,
  SecondImgWrap,
  Contents,
  ContentsTitle,
  SecondImgContainer,
  ContentsSubTitle,
  SecondSectioncontainer,
  ThirdSectionContents,
  ThirdSectionBottom,
  ThirdTopSectionContainer,
  ThirdSectionTitle,
  ThirdSectionSubTitle,
  ThirdTopTitleWrap,
  ThirdSectionBottomTitle,
  ThirdSectionBottomSubTitle,
  ThirdSectionBottomContainer,
  ThirdSectionBottomTitleWrap,
  ThirdSection,
  FourthSectonTitle,
  FourthSectionButtonWrap,
  FourthSectionButton,
  FourthSectionDecription,
} from "./LandingCss";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <BackgroundWraper>
      <Wraper>
        <article style={{ width: "100%" }}>
          <Firstsection>
            <div>
              <FirstSectionMainTitleWrap>
                <FirstSectionMainTitle>
                  <img
                    style={{ width: "20%", paddingTop: "20px" }}
                    src={require("../../assets/FirstImg(1).png")}
                    alt=""
                  />
                  <span style={{ paddingTop: "70px", marginRight: "20px" }}>
                    상품은
                  </span>
                  <img
                    style={{ width: "20%" }}
                    src={require("../../assets/FirstImg(2).png")}
                    alt=""
                  />
                  <span style={{ paddingTop: "70px" }}>모아서</span>
                </FirstSectionMainTitle>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "0px",
                  }}
                >
                  <br /> 비교는 빠르게
                  <img
                    style={{ width: "20%" }}
                    src={require("../../assets/Landinglist.png")}
                    alt="Landinglist"
                  />
                </div>
              </FirstSectionMainTitleWrap>
            </div>
          </Firstsection>
          <FirstSectionSubTitle>
            <div>
              <FirestSectionSubTitle>
                사회 초년생을 위한 예적금 비교, 팁퍼
              </FirestSectionSubTitle>
              <FirestSectionButtonWrap>
                <StartButton onClick={() => navigate("/ServicePage")}>
                  상품 비교하기 >>
                </StartButton>
              </FirestSectionButtonWrap>
            </div>
          </FirstSectionSubTitle>
          {/* //* 2번째 섹션 */}
          <SecondSection>
            <SecondSectioncontainer>
              <SecondSectionTitle>비교는 한번에</SecondSectionTitle>
              <SecondSectionSubTitle>
                제 1금융권의 정기예금, 정기적금을 모두 모았어요.
              </SecondSectionSubTitle>
              <SecondSectionSubTitle>
                조건에 최적화된 상품을 찾아드릴게요.
              </SecondSectionSubTitle>
              <SecondImgWrap>
                <Contents>
                  <SecondImgContainer>
                    <img
                      style={{ marginTop: "100px" }}
                      src={require("../../assets/SecondImg(1).png")}
                      alt="secondImg1"
                    />
                  </SecondImgContainer>
                  <ContentsTitle>여유 자금이 있다면</ContentsTitle>
                  <ContentsSubTitle>
                    <span style={{ fontWeight: "bold" }}>예치 기간</span>
                    <span>에 따른</span>
                  </ContentsSubTitle>
                  <ContentsSubTitle>
                    <span style={{ fontWeight: "bold" }}>높은 이율의 상품</span>
                    <span>을 보여드려요.</span>
                  </ContentsSubTitle>
                </Contents>
                <Contents>
                  <SecondImgContainer>
                    <img
                      src={require("../../assets/SecondImg(2).png")}
                      alt="secondImg2"
                    />
                  </SecondImgContainer>
                  <ContentsTitle>자금을 모은다면</ContentsTitle>
                  <ContentsSubTitle>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>적금 계산기</span>
                    <span>로 목표금액과</span>
                  </ContentsSubTitle>
                  <ContentsSubTitle>
                    <span>기간에 맞는 상품을 찾아드려요.</span>
                  </ContentsSubTitle>
                </Contents>
                <Contents>
                  <SecondImgContainer>
                    <img
                      style={{ marginTop: "150px" }}
                      src={require("../../assets/SecondImg(3).png")}
                      alt="secondImg3"
                    />
                  </SecondImgContainer>
                  <ContentsTitle>한 은행만 보기 아쉽다면</ContentsTitle>
                  <ContentsSubTitle>
                    <span>여러 은행 상품의 </span>
                    <span style={{ fontWeight: "bold" }}>만기 수령액을</span>
                  </ContentsSubTitle>
                  <ContentsSubTitle>
                    <span style={{ fontWeight: "bold" }}>한번에 비교</span>
                    <span>할 수 있어요.</span>
                  </ContentsSubTitle>
                </Contents>
              </SecondImgWrap>
            </SecondSectioncontainer>
          </SecondSection>
          {/* //* 3번째 섹션 */}
          <ThirdSection>
            <div>
              <ThirdTopSection>
                <ThirdTopSectionContainer>
                  <div>
                    <ThirdSectionContents>
                      <img
                        src={require("../../assets/ThirdImg(1).png")}
                        alt="ThirdImg"
                        style={{ width: "30%", height: "30%" }}
                      />
                      <ThirdTopTitleWrap>
                        <ThirdSectionTitle>
                          <div>목표금액, 목표기간만</div>
                          <div>정해오세요.</div>
                        </ThirdSectionTitle>

                        <ThirdSectionSubTitle>
                          이자율이 높은 상품부터 모아줄게요.
                        </ThirdSectionSubTitle>
                      </ThirdTopTitleWrap>
                    </ThirdSectionContents>
                  </div>
                </ThirdTopSectionContainer>
              </ThirdTopSection>

              <ThirdSectionBottom>
                <ThirdSectionBottomContainer>
                  <ThirdSectionBottomTitleWrap>
                    <ThirdSectionBottomTitle>
                      한 곳에서 입력하고
                    </ThirdSectionBottomTitle>
                    <ThirdSectionBottomTitle>확인해요.</ThirdSectionBottomTitle>
                    <div>
                      <ThirdSectionBottomSubTitle>
                        최대 세가지 상품의 만기 수령액과 납입조건을
                      </ThirdSectionBottomSubTitle>
                      <ThirdSectionBottomSubTitle>
                        한번에 확인할 수 있어요.
                      </ThirdSectionBottomSubTitle>
                    </div>
                  </ThirdSectionBottomTitleWrap>
                  <img
                    style={{ paddingLeft: "100px" }}
                    src={require("../../assets/ThirdImg(2).png")}
                    alt="ThirdImg"
                  />
                </ThirdSectionBottomContainer>
              </ThirdSectionBottom>
            </div>
          </ThirdSection>
          {/* //* 4번째 섹션 */}
          <FourthSection>
            <FourthSectonTitle>
              <div>원하는 은행 상품</div>
              <div>팁퍼에서 찜해둬요.</div>
            </FourthSectonTitle>
            <FourthSectionButtonWrap>
              <FourthSectionButton onClick={() => navigate("/")}>
                팀퍼 시작하기
              </FourthSectionButton>
            </FourthSectionButtonWrap>
            <FourthSectionDecription>
              *팁퍼는 상품 정보만 제공합니다. 상품 가입은 해당 은행 사이트를
              이용해주세요.
            </FourthSectionDecription>
          </FourthSection>
        </article>
      </Wraper>
    </BackgroundWraper>
  );
};
export default LandingPage;
