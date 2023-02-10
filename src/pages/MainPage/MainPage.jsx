import React from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Wraper,
  SilderBanner,
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
  const bankListFetch2 = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    return console.log(data?.result.baseList);
  };

  return (
    <MainPageWraper>
      <Wraper>
        <SilderBanner />
        <GreetingBox>
          <img
            src={process.env.PUBLIC_URL + "/public/img/Star 1.png"}
            alt="ProfileImg"
          />
          <GreetingTitle>
            <button onClick={bankListFetch2}>여기다 여기</button>
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
