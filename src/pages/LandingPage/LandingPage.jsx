import { useNavigate } from "react-router-dom";
import FourthSectionImgAnimation from "../../components/FourthSectionAnimation/FourthSection";
import SecondSectionImgAnimation1 from "../../components/SecondSectionAnimation/AnimationFirst";
import SecondSectionImgAnimation2 from "../../components/SecondSectionAnimation/AnimationSecond";
import SecondSectionImgAnimation3 from "../../components/SecondSectionAnimation/AnimationThird";
import TopAnimation from "../../components/ThirdSectionAnimation/AnimationTop";
import BottomAnimation from "../../components/ThirdSectionAnimation/AnimationBottom";
import TopButton from "../../components/TopScrollBtn/TopScrollBtn";
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
  ThirdBottomSection,
  ThirdSection,
  FourthSectonTitle,
  FourthSectionSubTitle,
  FourthSectionButtonWrap,
  FourthSectionButton,
  FourthSectionDecription,
  MainTilte,
  TocompareButton,
  FourthSectionImgAnimationWrap,
} from "./LandingCss";
import { isLoggedIn } from "../../utils/utils";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundWraper>
      <Wraper>
        <TopButton />
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
                  <StartButton
                    onClick={() =>
                      isLoggedIn ? navigate("main") : navigate("/signup")
                    }
                  >
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
                    {/* //* 애니메이션 컴포넌트 */}
                    <SecondSectionImgAnimation1 />
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
                    {/* //* 애니메이션 컴포넌트 */}
                    <SecondSectionImgAnimation2 />
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
                    {/* //* 애니메이션 컴포넌트 */}
                    <SecondSectionImgAnimation3 />
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
                {/* //* 애니메이션 컴포넌트 */}
                <TopAnimation />
              </ThirdTopSection>

              <ThirdBottomSection>
                {/* //* 애니메이션 컴포넌트 */}
                <BottomAnimation />
              </ThirdBottomSection>
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
