import React, { useState, useMemo, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FourthSectionImgAnimation from "../../components/FourthSectionAnimation/FourthSection";
import SecondSectionImgAnimation from "../../components/SecondSectionAnimation/AnimationFirst";
import {
  Wraper,
  FirstSectionMainTitleWrap,
  FirstSectionMainTitle,
  FirestSectionSubTitle,
  StartButton,
  BackgroundWraper,
  Firstsection,
  SecondSection,
  ThirdTopSection,
  FourthSection,
  SecondSectionTitle,
  SecondSectionSubTitle,
  FirestSectionButtonWrap,
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
  FourthSectionSubTitle,
  FourthSectionButtonWrap,
  FourthSectionButton,
  FourthSectionDecription,
  MainTilte,
  TocompareButton,
  FourthSectionImgAnimationWrap,
  SecondImgOne,
  SecondImgTwo,
  SecondImgThree,
} from "./LandingCss";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundWraper>
      <Wraper>
        <article style={{ width: "100%" }}>
          <Firstsection>
            <div
              style={{
                position: "fixed",
              }}
            >
              <FirstSectionMainTitleWrap>
                <FirstSectionMainTitle>
                  <MainTilte>
                    비교는 빠르게 <br />
                    선택은 안전하게
                  </MainTilte>
                </FirstSectionMainTitle>

                <FirestSectionSubTitle>
                  사회 초년생을 위한 예적금 비교, 팁퍼
                </FirestSectionSubTitle>
                <FirestSectionButtonWrap>
                  <TocompareButton onClick={() => navigate("/service")}>
                    상품 비교하기
                  </TocompareButton>
                  <StartButton onClick={() => navigate("/signup")}>
                    시작하기
                  </StartButton>
                </FirestSectionButtonWrap>
              </FirstSectionMainTitleWrap>
            </div>
          </Firstsection>

          {/* //* 2번째 섹션 */}
          <SecondSection>
            <SecondSectioncontainer>
              <SecondSectionTitle>비교는 한번에</SecondSectionTitle>
              <SecondSectionSubTitle>
                제 1금융권의 정기예금, 정기적금을 모두 모았어요. 조건에 최적화된
                상품을 찾아드릴게요.
              </SecondSectionSubTitle>

              <SecondImgWrap>
                <Contents>
                  <SecondImgContainer>
                    <SecondImgOne>
                      <img
                        style={{ marginTop: "100px", width: "150px" }}
                        src={require("../../assets/landing/SecondImg(1).png")}
                        alt="secondImg1"
                      />
                    </SecondImgOne>
                  </SecondImgContainer>
                  <ContentsTitle>여유 자금이 있다면</ContentsTitle>
                  <ContentsSubTitle>
                    <span style={{ fontWeight: "bold" }}>예치 기간</span>
                    <span>에 따른 </span>
                    <span style={{ fontWeight: "bold" }}>높은 이율의 </span>
                  </ContentsSubTitle>
                  <ContentsSubTitle>
                    <span style={{ fontWeight: "bold" }}>정기예금 상품</span>
                    <span>을 보여드려요.</span>
                  </ContentsSubTitle>
                </Contents>
                <Contents>
                  <SecondImgContainer>
                    <SecondSectionImgAnimation />
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
                    <SecondImgThree>
                      <img
                        style={{ marginTop: "150px" }}
                        src={require("../../assets/landing/SecondImg(3).png")}
                        alt="secondImg3"
                      />
                    </SecondImgThree>
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
                        style={{ width: "500px", height: "30%" }}
                      />
                      <ThirdTopTitleWrap>
                        <ThirdSectionTitle
                          style={{
                            color: "#6a24ff",
                            fontSize: "18px",
                            marginBottom: "20px",
                          }}
                        >
                          예적금 계산기
                        </ThirdSectionTitle>
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
                    <ThirdSectionBottomTitle
                      style={{
                        color: "#6a24ff",
                        fontSize: "18px",
                        marginBottom: "20px",
                      }}
                    >
                      미리보는 만기 수령액
                    </ThirdSectionBottomTitle>
                    <ThirdSectionBottomTitle>
                      한 곳에서 입력하고
                    </ThirdSectionBottomTitle>
                    <ThirdSectionBottomTitle>확인해요.</ThirdSectionBottomTitle>
                    <div>
                      <ThirdSectionBottomSubTitle>
                        금액만 입력하면 최대 세가지 상품의 만기 수령액과
                      </ThirdSectionBottomSubTitle>
                      <ThirdSectionBottomSubTitle>
                        납입 조건을 한 눈에 확인할 수 있어요.
                      </ThirdSectionBottomSubTitle>
                    </div>
                  </ThirdSectionBottomTitleWrap>
                  <img
                    style={{ paddingLeft: "120px", width: "600px" }}
                    src={require("../../assets/ThirdImg(2).png")}
                    alt="ThirdImg"
                  />
                </ThirdSectionBottomContainer>
              </ThirdSectionBottom>
            </div>
          </ThirdSection>
          {/* //* 4번째 섹션 */}
          <FourthSection>
            <FourthSectonTitle
              style={{
                color: "#6a24ff",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              금융관리 커뮤니티
            </FourthSectonTitle>
            <FourthSectonTitle>
              <div>매일 새로운 소식 업데이트</div>
            </FourthSectonTitle>
            <FourthSectionSubTitle>
              <div>
                사회생활을 시작하는 또래들과 금융관리 정보를 공유하고, 유용한
                팁을 저장해요.
              </div>
            </FourthSectionSubTitle>
            <FourthSectionImgAnimationWrap>
              <FourthSectionImgAnimation />
            </FourthSectionImgAnimationWrap>
            <FourthSectionButtonWrap>
              <FourthSectonTitle>
                <div style={{ marginTop: "400px" }}>원하는 금융 상품</div>
                <div>모두 팁퍼에서 찜해요.</div>
              </FourthSectonTitle>
              <div style={{ fontSize: "28px", marginTop: "50px" }}>
                사회초년생의 금융에 팁을 더해드려요. 팁퍼.
              </div>
              <FourthSectionButton onClick={() => navigate("/main")}>
                시작하기
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
