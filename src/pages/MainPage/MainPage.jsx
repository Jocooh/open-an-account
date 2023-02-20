import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import {
  UpWraper,
  BannerImage,
  GreetingBox,
  GreetingTitle,
  Username,
  Greetingment,
  Greetingcontent,
  ProductFdButton,
  BottomWrap,
  FourTab,
  Dictionary,
  BestProduct,
  Question,
  Counsel,
  BankList,
  BankListTilte,
  Sidebar,
  BankAndQna,
  QuestionWrap,
  QuestionTitle,
  FinanceHoneyTip,
  MainPageWraper,
  Bannerimage,
  DownWraper,
  AllTipWraper,
  DownTitle,
  NextButton,
  Tips,
  Tip,
  TipTitleWrap,
  TipTitle,
  BoardWrap,
} from "./style";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <MainPageWraper>
      <UpWraper>
        <GreetingBox>
          {/* <img
            src={require("../../assets/star.png")}
            // src={process.env.PUBLIC_URL + "/public/img/Star 1.png"}
            alt="로고"
          /> */}
          <GreetingTitle>
            <Greetingment>목돈에서 시작하는</Greetingment>
            <Username>상우님</Username>
            <Greetingment>의 금융관리</Greetingment>
          </GreetingTitle>
          <Greetingcontent>
            <div />
            1금융권의 상품만 다루는 안전한 목돈 만들기.
            <p /> 원하는 조건에 맞춰 상품을 찾아드릴게요.
          </Greetingcontent>
          <ProductFdButton onClick={() => navigate("/ServicePage")}>
            상품 찾기
          </ProductFdButton>
        </GreetingBox>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          loop={true}
          observer={true}
          observeParents={true}
          style={{ borderRadius: "10px" }}
        >
          <SilderBanner>
            <a href="https://spib.wooribank.com/pib/Dream?withyou=PSTRS0147">
              <BannerImage>
                <img src={require("../../assets/banner/image/banner_01.PNG")} />
              </BannerImage>
            </a>
          </SilderBanner>
          <SilderBanner>
            <a href="https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp?lncd=01&grcd=21&tmcd=121&pdcd=0123&wvcd=***********&banner=ibk_main_mddl_01211210123">
              <BannerImage>
                <img src={require("../../assets/banner/image/banner_02.PNG")} />
              </BannerImage>
            </a>
          </SilderBanner>
          <SilderBanner>
            <a href="https://spib.wooribank.com/pib/Dream?withyou=PSTRS0147">
              <BannerImage>
                <img src={require("../../assets/banner/image/banner_01.PNG")} />
              </BannerImage>
            </a>
          </SilderBanner>
          <SilderBanner>
            <a href="https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp?lncd=01&grcd=21&tmcd=121&pdcd=0123&wvcd=***********&banner=ibk_main_mddl_01211210123">
              <BannerImage>
                <img src={require("../../assets/banner/image/banner_02.PNG")} />
              </BannerImage>
            </a>
          </SilderBanner>
        </Swiper>

        <BottomWrap>
          <FourTab>
            <Dictionary>
              <img src={require("../../assets/mainpage/dictionary.png")} />
              <div>금융 용어사전</div>
            </Dictionary>
            <BestProduct>
              <img src={require("../../assets/mainpage/bestproduct.png")} />
              <div>인기 금융상품</div>
            </BestProduct>
            <Question>
              <img src={require("../../assets/mainpage/qna.png")} />
              <div>자주 묻는 질문</div>
            </Question>
            <Counsel>
              <img src={require("../../assets/mainpage/counsel.png")} />
              <div>전문상담</div>
            </Counsel>
          </FourTab>

          {/* <BankAndQna>
            <BankList>
              <BankListTilte>은행사이트 바로가기</BankListTilte>
              <BankBannerWrap>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  navigation
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 2000 }}
                  loop={true}
                  observer={true}
                  observeParents={true}
                >
                  <BankBanner>
                    <a href="https://www.wooribank.com/">우리은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://www.kebhana.com/">하나은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://www.ibk.co.kr/">IBK기업은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://www.shinhan.com/index.jsp">신한은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://www.kbstar.com/">국민은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://www.kdb.co.kr/index.jsp">산업은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://www.suhyup-bank.com/">수협은행</a>
                  </BankBanner>
                  <BankBanner>
                    <a href="https://banking.nonghyup.com/nhbank.html">
                      농협은행
                    </a>
                  </BankBanner>
                </Swiper>
              </BankBannerWrap>
            </BankList>
            <QuestionWrap>
              <QuestionTitle>QnA 자주묻는 질문</QuestionTitle>
            </QuestionWrap>
          </BankAndQna> */}
        </BottomWrap>
        {/* <FinanceHoneyTip>
          <div>금융 꿀팁</div>
        </FinanceHoneyTip> */}

        {/* <Sidebar>
          <button>1:1 전문상담</button>
        </Sidebar> */}
      </UpWraper>
      <DownWraper>
        <AllTipWraper>
          <DownTitle>금주의 팁퍼</DownTitle>
          <NextButton>
            <img src={require("../../assets/arrow_right.png")} />
          </NextButton>
          <div>
            <Tips>
              <Tip onClick={() => navigate("/detail")}>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipTitle>내집마련</TipTitle>
                </TipTitleWrap>
                <div
                  style={{
                    border: "1px solid #dedede",
                    height: "200px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  이미지 들어갈 부분
                </div>
                <BoardWrap>
                  <div
                    style={{
                      height: "70px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "30px 0 10px 0",
                    }}
                  >
                    주택청약 당첨 후기
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <div>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </div>
                </BoardWrap>
              </Tip>
              <Tip onClick={() => navigate("/detail")}>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipTitle>내집마련</TipTitle>
                </TipTitleWrap>
                <div
                  style={{
                    border: "1px solid #dedede",
                    height: "200px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  이미지 들어갈 부분
                </div>
                <BoardWrap>
                  <div
                    style={{
                      height: "70px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "30px 0 10px 0",
                    }}
                  >
                    주택청약 당첨 후기
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <div>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </div>
                </BoardWrap>
              </Tip>
              <Tip onClick={() => navigate("/detail")}>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipTitle>내집마련</TipTitle>
                </TipTitleWrap>
                <div
                  style={{
                    border: "1px solid #dedede",
                    height: "200px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  이미지 들어갈 부분
                </div>
                <BoardWrap>
                  <div
                    style={{
                      height: "70px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "30px 0 10px 0",
                    }}
                  >
                    주택청약 당첨 후기
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <div>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </div>
                </BoardWrap>
              </Tip>
              <Tip onClick={() => navigate("/detail")}>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipTitle>내집마련</TipTitle>
                </TipTitleWrap>
                <div
                  style={{
                    border: "1px solid #dedede",
                    height: "200px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  이미지 들어갈 부분
                </div>
                <BoardWrap>
                  <div
                    style={{
                      height: "70px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "30px 0 10px 0",
                    }}
                  >
                    주택청약 당첨 후기
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <div>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </div>
                </BoardWrap>
              </Tip>
              <Tip onClick={() => navigate("/detail")}>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipTitle>내집마련</TipTitle>
                </TipTitleWrap>
                <div
                  style={{
                    border: "1px solid #dedede",
                    height: "200px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  이미지 들어갈 부분
                </div>
                <BoardWrap>
                  <div
                    style={{
                      height: "70px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "30px 0 10px 0",
                    }}
                  >
                    주택청약 당첨 후기
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <div>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </div>
                </BoardWrap>
              </Tip>
            </Tips>
          </div>
        </AllTipWraper>
      </DownWraper>
    </MainPageWraper>
  );
};

export default MainPage;

//* 탑슬라이드 배너
const SilderBanner = styled(SwiperSlide)`
  width: 100%;
  height: 220px;
  //text-align: center;
  img {
    background-size: cover;
  }

  //background-color: aliceblue;
  .swiper-slide {
    border-radius: 20px;
  }
  /* img {
    width: 100%;
  } */
`;

// 은행 배너랩
const BankBannerWrap = styled.div`
  width: 400px;
  height: 250px;
  border: solid 1px #dedede;
  margin: 40px 0 0 25px;
  padding-top: 40px;
`;

// 은행 배너
const BankBanner = styled(SwiperSlide)`
  width: 100%;
  height: 170px;
  font-size: 40px;
  color: #6a24ff;
  padding-top: 50px;
  text-align: center;
`;
