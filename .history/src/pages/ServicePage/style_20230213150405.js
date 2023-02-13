import styled from "styled-components";

//* 바디
export const Wraper = styled.body`
  width: 100%;
  height: 1500px;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
`;

//* 바디 하위 컨테이너
export const Cantinar = styled.div`
  min-width: 80%;
`;

//* 상단 SectionContainer
export const TopSectionWraper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

//* 상단 Section
export const TopSection = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 25px;
  margin-top: 50px;
  div {
    font-weight: bold;
    font-size: 30px;
    /* padding: 20px 0 0 20px; */
  }
`;

//* 새로고침 버튼
export const RefreshBtn = styled.button`
  width: 100px;
  height: 30px;
  float: right;
  margin: 10px 20px;
`;

//* 비교하기 버튼
export const ToCompare = styled.button`
  width: 150px;
  height: 50px;
  float: right;
  bottom: 0;
  margin: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  background-color: #fff;
  color: #6a24ff;
  font-weight: bold;
  border: solid 1px #6a24ff;
  :hover {
    color: #fff;
    background-color: #6a24ff;
  }
`;

//* 선택된 상품
export const SelectedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  .producks {
    border-radius: 25px;
    text-align: center;
    font-size: larger;
    width: 100px;
    height: 120px;
    background-color: #e3e3e3;
  }
`;

//* 하단 SectionContainer
export const BottomSectionWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

//* 하단 Section
export const BottomSection = styled.div`
  width: 100%;
  height: 600px;

  //* 탭 버튼
  .tab {
    width: 150px;
    height: 50px;
    border-radius: 25px;
    border: solid 1px #dedede;
    cursor: pointer;
    margin-right: 20px;
    font-size: large;
    font-weight: bold;
  }
`;

//? 여기서 부터 계산기 부분

//* 금융상품계산기
export const ProducksCalculator = styled.div``;

//* 금융상품계산기 제목
export const ProducksCalculatorTitle = styled.h1`
  font-size: 42px;
  margin-left: 50px;
`;

//* 금융상품계산기 박스
export const ProducksCalculatorBox = styled.div`
  /* height: 483px; */
  background-color: white;
  border-radius: 25px;
  /* position: relative; */
  span {
    margin-left: 40px;
  }
`;

//* 금융상품계산기 박스 내부 버튼
export const ProductType = styled.button`
  flex-wrap: wrap;
  gap: 20px;
  width: 154px;
  height: 46px;
  font-size: 22px;
  font-weight: bold;
`;

//* 검색하기 버튼
export const FilterSubmit = styled.button`
  width: 100%;
  height: 46px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 5px;
  border: none;
  /* position: absolute; */
  bottom: 0;
  cursor: pointer;
  background-color: #fff;
  color: #6a24ff;
  border: solid 1px #6a24ff;
  :hover {
    color: #fff;
    background-color: #6a24ff;
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

//* 계산결과 Section
export const ResultsSection = styled.div`
  font-size: 20px;
  width: 100%;
  min-height: 300px;
  background-color: #fff;
  border-radius: 25px;
  margin-top: 5px;
`;

//* 금융상품 전체리스트
export const FinanciialProductsFullList = styled.div``;
export const FinanciialProductsWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const FinanciialProducts = styled.div`
  /* width: 80%;
  min-width: 800px;
  height: 120px;
  border-bottom: solid 0.5px #000;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px; */
`;

export const ProducksRank = styled.div`
  display: flex;
  /* button {
    font-size: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    right: 0;
    margin-right: 250px;
    margin-top: 30px;
    position: absolute;
  } */
`;

export const Producks = styled.div``;
export const ProducksTitle = styled.span``;
export const ProducksDiscription = styled.span``;
