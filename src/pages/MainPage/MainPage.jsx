import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import {
  Wraper,
  BannerImage,
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
  Bannerimage,
} from "./style";

const MainPage = () => {
  const navigate = useNavigate();
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
              <Bannerimage
                src={require("../../assets/banner/image/banner_02.PNG")}
              />
            </a>
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
          <ProductFdButton
            onClick={() => {
              navigate("/servicepage");
            }}
          >
            상품 찾아보기
          </ProductFdButton>
        </GreetingBox>
        <BottomWrap>
          <BoardBestCommentWrap>
            <BoardBestComment>
              <div>게시판 인기글</div>
            </BoardBestComment>
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
