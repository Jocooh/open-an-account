import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import {
  Wraper,
  GreetingBox,
  GreetingTitle,
  Username,
  Greetingment,
  Greetingcontent,
  ProductFdButton,
  BoardBestCommentWrap,
  BoardBestComment,
  BankList,
  BankListTilte,
  BottomWrap,
  Sidebar,
  BankAndQna,
  QuestionWrap,
  QuestionTitle,
  FinanceHoneyTip,
  MainPageWraper,
} from "./style";

const MainPage = () => {
  return (
    <MainPageWraper>
      <Wraper>
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
          <SilderBanner>
            {/* <Link to="https://www.wooribank.com/">
              <img src="banner_01.PNG" />
            </Link> */}
            예금 맛집
          </SilderBanner>
          <SilderBanner>
            {/* <Link to="https://www.wooribank.com/">
              <img src="banner_01.PNG" />
            </Link> */}
            적금 맛집
          </SilderBanner>
          <SilderBanner>
            {/* <Link to="https://www.wooribank.com/">
              <img src="banner_01.PNG" />
            </Link> */}
            여기로 와~
          </SilderBanner>
          <SilderBanner>
            {/* <Link to="https://www.wooribank.com/">
              <img src="banner_01.PNG" />
            </Link> */}
            컴온!
          </SilderBanner>
        </Swiper>

        <GreetingBox>
          <img
            src={require("../../assets/star.png")}
            // src={process.env.PUBLIC_URL + "/public/img/Star 1.png"}
            alt="로고"
          />
          <GreetingTitle>
            <Username>상우님</Username>
            <Greetingment>의 첫 금융 ~~을 환영합니다~</Greetingment>
          </GreetingTitle>
          <Greetingcontent>
            <div />
            모금과 함께하는 저축의 시작!
            <p /> 주거래 은행, 선호 이율, 기간, 원하는 조건에 맞춰 상품을
            찾아드릴게요.
            <p /> 선택은 여러분의 자유예요.
          </Greetingcontent>
          <ProductFdButton>상품 찾아보기</ProductFdButton>
        </GreetingBox>
        <BottomWrap>
          <BoardBestCommentWrap>
            {/* <ProducksCalculatorTitle>
              목표금액으로 상품 찾기
            </ProducksCalculatorTitle> */}

            <BoardBestComment>
              <div>게시판 인기글</div>
              <div
                style={{
                  border: "1px, black, solid",
                }}
              ></div>
            </BoardBestComment>
            {/* <h1>결과 리스트에요~~</h1>
            <div
              style={{
                backgroundColor: "#e3e3e3",
                width: "300px",
                height: "50px",
              }}
            >
              <span style={{ color: "blue", fontWeight: "bold" }}>100원</span>
              <span style={{ fontWeight: "bold" }}> 씩</span>
              <span style={{ color: "red", fontWeight: "bold" }}> 12개월</span>
              <span style={{ fontWeight: "bold" }}> 동안 저축하면 돼요</span>
            </div>
            <div
              style={{
                backgroundColor: "#e3e3e3",
                width: "300px",
                height: "50px",
              }}
            >
              <span style={{ color: "blue", fontWeight: "bold" }}>100원</span>
              <span style={{ fontWeight: "bold" }}> 씩</span>
              <span style={{ color: "red", fontWeight: "bold" }}> 12개월</span>
              <span style={{ fontWeight: "bold" }}> 동안 저축하면 돼요</span>
            </div>
            <div
              style={{
                backgroundColor: "#e3e3e3",
                width: "300px",
                height: "50px",
              }}
            >
              <span style={{ color: "blue", fontWeight: "bold" }}>100원</span>
              <span style={{ fontWeight: "bold" }}> 씩</span>
              <span style={{ color: "red", fontWeight: "bold" }}> 12개월</span>
              <span style={{ fontWeight: "bold" }}> 동안 저축하면 돼요</span>
            </div> */}
          </BoardBestCommentWrap>
          <BankAndQna>
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
                  <BankBanner>우리은행</BankBanner>
                  <BankBanner>하나은행</BankBanner>
                  <BankBanner>IBK기업은행</BankBanner>
                  <BankBanner>신한은행</BankBanner>
                  <BankBanner>국민은행</BankBanner>
                  <BankBanner>신협</BankBanner>
                  <BankBanner>수협은행</BankBanner>
                  <BankBanner>농협은행</BankBanner>
                </Swiper>
              </BankBannerWrap>
            </BankList>
            <QuestionWrap>
              <QuestionTitle>QnA 자주묻는 질문</QuestionTitle>
            </QuestionWrap>
          </BankAndQna>
        </BottomWrap>
        <FinanceHoneyTip>
          <div>금융 꿀팁</div>
        </FinanceHoneyTip>

        <Sidebar>
          <button>1:1 전문상담</button>
        </Sidebar>
      </Wraper>
    </MainPageWraper>
  );
};

export default MainPage;

//* 탑슬라이드 배너
const SilderBanner = styled(SwiperSlide)`
  width: 100%;
  height: 180px;
  padding-top: 80px;
  text-align: center;

  background-color: aliceblue;
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
  padding-top: 50px;
  text-align: center;
`;
