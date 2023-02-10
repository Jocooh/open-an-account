import styled from 'styled-components';

//* 전체 랩

export const MainPageWraper = styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: center;
  background-color: blue;
`;
export const Wraper = styled.div`
  width: 100%;
  height: 1500px;
  background-color: aliceblue;
`;

//* 슬라이드 배너
export const SilderBanner = styled.div`
  width: 100%;
  height: 200px;
  background-color: skyblue;
`;

//? 인삿말 박스
export const GreetingBox = styled.div`
  border-radius: 20px;
  border: solid 1px #dedede;
  width: 1330px;
  height: 351px;
  padding: 70px 0px 0px 50px;
  img {
    display: flex;
    float: right;
    right: 0;
  }
`;

//* 제목 랩
export const GreetingTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

//* 사용자 이름
export const Username = styled.span`
  color: #6a24ff;
`;

//* 멘트
export const Greetingment = styled.span``;

//* 인삿말 내용
export const Greetingcontent = styled.div`
  width: 50%;
  font-size: 22px;
  margin-top: 30px;
`;

//? 하단영역
export const BottomWrap = styled.div`
  display: flex;
`;

//* 금융상품계산기
export const ProducksCalculator = styled.div``;

//* 금융상품계산기 제목
export const ProducksCalculatorTitle = styled.h1`
  font-size: 42px;
  width: 400px;
  margin-left: 50px;
`;

//* 금융상품계산기 박스
export const ProducksCalculatorBox = styled.div`
  width: 819px;
  height: 483px;
  border: solid 1px #dedede;
  border-radius: 20px;
  padding-left: 20px;
  .slider {
  }
  button {
    margin-left: 20px;
    width: 154px;
    height: 46px;
    font-size: 22px;
    font-weight: bold;
  }
  span {
    margin-left: 40px;
  }
`;

//* 금융상품계산기 박스제목
export const ProducksCalculatorBoxTitle = styled.div`
  font-size: 22px;
`;

//* 금융상품계산기 박스 내용
export const ProducksCalculatorBoxContent = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  input {
    width: 337px;
    height: 68px;
    margin-left: 10px;
    border-radius: 100px;
    font-size: large;
    text-align: center;
    border: none;
    background-color: #e3e3e3;
  }
`;

//* 최종목표금액 inputTitle
export const ProducksCalculatorBoxContentTilte = styled.div`
  font-size: 30px;
`;

//* 금융상품 기간 슬라이더 제목
export const MonthRangeSliderTitle = styled.div``;

//* 금융상품 기간 슬라이더
export const MonthRangeSlider = styled.div`
  input {
    width: 473px;
    height: 50px;
  }
`;

//* 이자율 슬라이더 제목
export const InterestRateRangeSliderTitle = styled.div``;

//* 이자율 슬라이더
export const InterestRateRangeSlider = styled.div`
  input {
    width: 473px;
    height: 50px;
  }
`;

//* 은행리스트
export const BankList = styled.h1`
  width: 470px;
  height: 435px;
  border: solid 1px #dedede;
  border-radius: 20px;
  margin: 110px 0 0 20px;
  padding: 50px 0px 0px 50px;
`;

//* 은행 리스트 한눈에 보기
export const BankListTilte = styled.div``;

//* 우측 사이드바
export const Sidebar = styled.div`
  position: fixed;
  right: 20px;
  top: 100px;
  button {
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: #e3e3e3;
    margin-bottom: 10px;
    border-radius: 50%;
  }
`;
