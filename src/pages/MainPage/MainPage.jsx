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
  ProducksCalculatorTitle,
  ProducksCalculator,
  ProducksCalculatorBox,
  ProducksCalculatorBoxTitle,
  ProducksCalculatorBoxContent,
  ProducksCalculatorBoxContentTilte,
  BankList,
  BankListTilte,
  MonthRangeSlider,
  InterestRateRangeSlider,
  MonthRangeSliderTitle,
  InterestRateRangeSliderTitle,
  BottomWrap,
  Sidebar,
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
            src={process.env.PUBLIC_URL + "/public/img/Star 1.png"}
            alt="ProfileImg"
          />
          <GreetingTitle>
            <Username>상우님</Username>
            <Greetingment>의 첫 금융 ~~을 환영합니다~</Greetingment>
          </GreetingTitle>
          <Greetingcontent>
            모금과 함께하는 저축의 시작!
            <br /> 주거래 은행, 선호 이율, 기간, 원하는 조건에 맞춰 상품을
            찾아드릴게요.
            <br /> 선택은 여러분의 자유예요.
          </Greetingcontent>
        </GreetingBox>
        <BottomWrap>
          <ProducksCalculator>
            <ProducksCalculatorTitle>
              목표금액으로 상품 찾기
            </ProducksCalculatorTitle>

            <ProducksCalculatorBox>
              <ProducksCalculatorBoxTitle>
                종류를 선택해주세요.
              </ProducksCalculatorBoxTitle>
              <button>예금</button>
              <button>적금</button>
              <button>모두</button>
              <ProducksCalculatorBoxContent>
                <ProducksCalculatorBoxContentTilte>
                  최종 목표 금액
                </ProducksCalculatorBoxContentTilte>
                <input placeholder="금액을 입력해주세요."></input>
              </ProducksCalculatorBoxContent>
              <MonthRangeSlider>
                <MonthRangeSliderTitle>
                  기간 설정 <span>6개월</span>
                  <span>12개월</span>
                  <span>24개월</span>
                </MonthRangeSliderTitle>
                <input type="range" min="1" max="24" className="slider" />
              </MonthRangeSlider>
              <InterestRateRangeSlider>
                <InterestRateRangeSliderTitle>
                  선호 이율 <span>3%</span>
                  <span>4%</span>
                  <span>5%</span>
                </InterestRateRangeSliderTitle>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={12}
                  className="slider"
                />
              </InterestRateRangeSlider>
              <button>결과보기</button>
            </ProducksCalculatorBox>
            <h1>결과 리스트에요~~</h1>
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
            </div>
          </ProducksCalculator>

          <BankList>
            <BankListTilte>은행사이트 바로가기</BankListTilte>
            <BankBannerWrap>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ delay: 2000 }}
                loop={true}
                observer={true}
                observeParents={true}
              >
                <BankBanner>우리은행 농협은행</BankBanner>
                <BankBanner>하나은행 IBK기업은행</BankBanner>
                <BankBanner>신한은행 국민은행</BankBanner>
                <BankBanner>신협 수협은행</BankBanner>
              </Swiper>
            </BankBannerWrap>
          </BankList>
        </BottomWrap>

        <Sidebar>
          <button>1:1 전문상담</button>
          <button>QnA 자주하는 질문</button>
          <button>금융 용어사전</button>
          <button>나의 주거래은행</button>
          {/* //? 얘 뭐지 */}
        </Sidebar>
      </Wraper>
    </MainPageWraper>
  );
};

export default MainPage;

//* 슬라이드 배너
const SilderBanner = styled(SwiperSlide)`
  width: 100%;
  height: 150px;
  padding-top: 130px;
  text-align: center;
  /* img {
    width: 100%;
  } */
`;

const BankBannerWrap = styled.div`
  width: 350px;
  height: 250px;
  border: solid 1px #dedede;
  margin: 40px 0 0 0px;
  padding: 50px 0px 0px 50px;
`;

const BankBanner = styled(SwiperSlide)`
  width: 100%;
  height: 200px;
  padding-top: 10px;
  text-align: center;
`;
