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
  GreetingMent,
  Username,
  Greetingment,
  Greetingcontent,
  ProductFdButton,
  BottomWrap,
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
  TodayTipTitle,
  TodayTipComment,
  Tips,
  Tip,
  TipTitle,
  TipComment,
} from "./style";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <MainPageWraper>
      <UpWraper>
        <GreetingBox>
          <img src={require("../../assets/mainpage/상단 이미지.png")} />
          <GreetingTitle>
            <GreetingMent>팁퍼에서 시작하는</GreetingMent>
            <Username>00님</Username>
            <Greetingment>의 금융관리</Greetingment>
          </GreetingTitle>
          <Greetingcontent>
            <div />
            제 1금융권의 상품만 다루는 안전한 목돈 만들기. 원하는 조건에 맞춰
            <p />
            상품을 찾아드릴게요. 한눈에 비교하고, 만기수령액을 확인해봐요.
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
      </UpWraper>
      <DownWraper>
        <TodayTipTitle>오늘의 금융 팁</TodayTipTitle>
        <TodayTipComment>
          금융지식 또는 금융이슈를 전달해드려요. 차곡차곡 쌓은 지식을 통해
          선택의 폭을 넓혀봐요.
        </TodayTipComment>
        <Tips>
          <Tip>
            <TipTitle>정기예금</TipTitle>
            <TipComment>
              <div>정해진 기간 동안 일정액을 매월 적립하고</div>
              <div>만기일에 약정금액을 지급받는 상품이에요.</div>
              <div>매달 혹은 일정기간, 꾸준히 저축하고 싶은</div>
              <div>친구들은 정기적금을 찾아보아요.</div>
            </TipComment>

            <img src={require("../../assets/mainpage/정기예금.png")} />
          </Tip>
          <Tip>
            <TipTitle>정기적금</TipTitle>
            <img src={require("../../assets/mainpage/정기적금.png")} />
          </Tip>
        </Tips>
        <Tips>
          <Tip>
            <TipTitle
              style={{
                marginBottom: "25px",
              }}
            >
              이자를 계산하는 법1
            </TipTitle>
            <img
              src={require("../../assets/mainpage/단리.png")}
              style={{ marginTop: "140px" }}
            />
            <TipTitle>단리</TipTitle>
          </Tip>
          <Tip>
            <TipTitle
              style={{
                marginBottom: "25px",
              }}
            >
              이자를 계산하는 법2
            </TipTitle>
            <TipTitle>복리</TipTitle>
            <div>
              {/* <img src={require("../../assets/mainpage/복리화살표.png")} /> */}
              <img
                src={require("../../assets/mainpage/복리.png")}
                style={{ marginTop: "110px" }}
              />
            </div>
          </Tip>
        </Tips>
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
