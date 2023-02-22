import styled from "styled-components";

//* 바디
export const Wraper = styled.body`
  width: 100%;
  //성아-수정 1500px => 1600px
  /* height: 1600px; */
  display: flex;
  justify-content: center;
`;

//* 바디의 하위 컨테이너
export const Cantinar = styled.div``;

//? ----여기서 부터 상단부분입니다.----
//* 상단 SectionContainer
export const TopSectionWraper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

//* 상단 Section
export const TopSection = styled.div`
  width: 100%;
  margin-top: 50px;
`;

//* 상단 SectionTitle
export const TopSectionTitle = styled.div`
  height: 50px;
  font-size: 48px;
  text-align: center;
`;

//* 상단 SectionSubTitle
export const TopSectionSubTitle = styled.div`
  font-size: 22px;
  text-align: center;
  margin-bottom: 50px;
`;

//* 새로고침 버튼
// export const RefreshBtn = styled.button`
//   width: 100px;
//   height: 30px;
//   float: right;
//   margin: 10px 20px;
// `;

//* 선택된 상품 Wraper
export const ProductsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

//* 선택된 상품 Container
export const SelectedProductsContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #dedede;
  text-align: center;
  width: 320px;
  height: 167px;
  background-color: #fff;
  color: #a3a3a3;
  padding-top: 20px;
`;

//* 선택된 상품 (상품이 선택되면 보여지는 부분)
export const SelectedProducts = styled.span``;

//* 비교하기 버튼
export const ToCompare = styled.button`
  width: 990px;
  height: 45px;
  float: right;
  bottom: 0;
  margin: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  background-color: #6a24ff;
  font-weight: bold;
`;

//? ----여기서 부터 하단부분입니다.----
//* 하단 SectionContainer
export const BottomSectionWraper = styled.div`
  width: 100%;
  display: flex;
`;

//* 하단 Section
export const BottomSection = styled.div`
  width: 100%;
  height: 600px;
`;

//* 탭 버튼 Wraper
export const TapButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  text-align: center;
`;

//* 탭 버튼
export const TapButton = styled.button`
  border-bottom: 3px solid #fff;
  margin-bottom: 20px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 22px;
`;

//? ----여기서 부터 계산기 부분----
//* 하단 탭 공통 부분 최상위 컨테이너
export const TapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  /* 성아-수정 */
  padding-bottom: 30px;
  /* padding-left: 100px; */
  border: 1px solid #dedede;
  border-radius: 10px;
`;

//* 하단 탭 공통 부분 중간 컨테이너
export const TapContainerBox = styled.div`
  width: 812px;
  //성아-수정
  /* height: 680px; */
`;

//* 하단 탭 공통 부분.
export const TapTitleName = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  /* position: relative; */
`;

//* 예금,적금(Btn) ProductWraper
export const ProductWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

//* 금융상품계산기 박스 내부 버튼
export const ProductType = styled.button`
  width: 151px;
  height: 64px;
  font-size: 20px;
  border: 1px solid #dedede;
  border-radius: 10px;
  color: #dedede;
`;

//* 금융상품계산기 박스제목
export const ProducksCalculatorBoxTitle = styled.div`
  font-size: 22px;
`;

//* 금융상품계산기 박스 내용
export const ProducksCalculatorBoxContent = styled.div`
  margin-top: 50px;
  input {
    padding: 0 0 0 24px;
    margin: 20px 0 10px 0;
    width: 786px;
    height: 64px;
    border-radius: 10px;
    font-size: large;
    border: 1px solid #dedede;
  }
`;

//* 최종목표금액 inputTitle
export const ProducksCalculatorBoxContentTilte = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
`;

//* 최종목표금액 inputTitle
export const formattedAmount = styled.div`
  .div {
    font-size: 12px;
  }
`;

//* 최종목표금액 input
export const FormattingAmount = styled.input`
  height: 30px;
  width: 100%;
`;

//* 상품기간 슬라이더 Wraper
export const MonthRangeSliderWraper = styled.div`
  input {
    width: 810px;
    height: 50px;
  }
`;

//* 금융상품 기간 슬라이더 제목
export const MonthRangeSliderTitle = styled.div`
  font-size: 24px;
  width: 100%;
`;

//* 금융상품 기간 슬라이더
export const MonthRangeSlider = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 144px;
  margin-bottom: 100px;
`;

//* 찾기 Btn Warper
export const FilterSubmitWarper = styled.div`
  display: flex;
  justify-content: center;
`;

//* 찾기 버튼
export const FilterSubmit = styled.button`
  width: 178px;
  height: 64px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 5px;
  //성아-수정
  margin-bottom: 50px;
  cursor: pointer;
  color: #fff;
  background-color: #6a24ff;
  :disabled {
    background-color: #dadada;
    color: #fff;
  }
`;

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

//성아-banklist style
export const StyledBankListContainer = styled.div`
  width: 100%;
  /* height: 1128px; */
  background-color: #f0f0f0;
  margin-top: 30px;
  padding: 15px 0;
  box-sizing: border-box;
  border-radius: 15px;
`;
export const StyledBankList = styled.div`
  margin: auto;
  width: 950px;
  //height:1007px;
  height: 850px;
  overflow: auto;
`;

export const Tapwraper = styled.div``;

export const StyledBankListWrapper = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;

  padding: 10px;
`;
export const StyledBankLists = styled.div`
  /* height: 351px; */
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 15px;
  flex-direction: column;
  background-color: white;
`;

export const StyledListDiv = styled.div`
  width: 1200px;
  height: 141px;
`;

export const StyledBookMark = {
  fontSize: "20px",
};

export const StyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledBtn = styled.button`
  width: 200px;
  height: 50px;
`;
