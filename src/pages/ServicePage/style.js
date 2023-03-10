import styled from "styled-components";

//* 바디
export const Wraper = styled.div`
  width: 100%;
  /* height: 90vh; */
  display: flex;
  justify-content: center;
  //성아-수정
  min-height: 95vh;
  position: relative; ;
`;

//* 바디의 하위 컨테이너
export const Cantinar = styled.div`
  @media screen and (max-width: 425px) {
    /* overflow-x: hidden; */
    width: 425px;
    display: flex;
    flex-direction: column;
  }
`;

//? ----여기서 부터 상단부분입니다.----
//* 상단 SectionContainer
export const TopSectionWraper = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 425px) {
  }
`;

//* 상단 Section
export const TopSection = styled.div`
  width: 100%;
  margin-top: 50px;
`;

//* 상단 SectionTitle
export const TopSectionTitle = styled.div`
  height: 50px;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;

//* 상단 SectionSubTitle
export const TopSectionSubTitle = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 5px;
  color: #a3a3a3;
`;

//* 스테이징 된 금융상품
export const StagingWrap = styled.div``;

//* 선택된 상품 Wraper
export const ProductsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

//* 스테이징 캔슬 버튼
export const StagingCancel = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  margin-right: 8px;
`;
//* 스테이징 된 금융상품 명
export const StagingProductsName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
  width: 200px;
  margin-bottom: 5px;
  p {
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

//* 스테이징 된 은행 명
export const StagingBankName = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
`;

//* 스테이징 된 금융상품 이자율 랩퍼
export const IntrRateWrap = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

//* 스테이징 된 금융상품 최대이자율
export const MaxIntrRate = styled.div`
  color: #6a24ff;
`;

//* 스테이징 된 금융상품 기본이자율
export const BasicIntrRate = styled.div`
  color: #000;
`;

//* 선택된 상품 Container
export const SelectedProductsContainer = styled.div`
  border-radius: 10px;
  position: relative;
  border: 1px solid #dedede;
  width: 320px;
  height: 126px;
  color: #a3a3a3;
  align-items: center;
  justify-content: center;
  display: flex;
`;

//* 선택된 상품 (상품이 선택되면 보여지는 부분)
export const SelectedProducts = styled.span``;

//* 선택 전 상품 박스
export const BeforeSelectedContainer = styled.div`
  text-align: center;
  img {
    margin-top: -30px;
    width: 51.08px;
    height: 49.82px;
  }
  p {
    margin-bottom: 50px;
    font-size: 14px;
  }
`;

//* 비교하기 버튼 배경화면
export const ToCompareBG = styled.div`
  @media (max-width: 480px) {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 136px;

    background: #000000;
    opacity: 0.8;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
  :disabled {
    background-color: #dadada;
    color: #fff;
    cursor: not-allowed;
  }
  @media screen and (max-width: 480px) {
    width: 319px;
    height: 54px;
  }
`;

//? ----여기서 부터 하단부분입니다.----
//* 하단 SectionContainer
export const BottomSectionWraper = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 425px) {
    div {
      input {
        width: 420px;
      }
    }
  }
`;

//* 하단 Section
export const BottomSection = styled.div`
  width: 100%;
`;

//* 탭 버튼 Wraper
export const TapButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  height: 50px;
  text-align: center;
  @media screen and (max-width: 425px) {
    gap: 10px;
    justify-content: center;
  }
`;

//* 탭 버튼
export const TapButton = styled.button`
  border-bottom: 3px solid #fff;
  margin-bottom: 20px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 18px;
`;

//? ----여기서 부터 계산기 부분----
//* 하단 탭 내용 최상위 컨테이너
export const TapContainerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

//* 하단 탭 공통 부분 최상위 컨테이너
export const TapContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 990px;
  padding-top: 50px;
  padding-bottom: 30px;
  margin: 8px 0 0 0;
  border: 1px solid #dedede;
  margin-bottom: 20px;
  border-radius: 10px;
  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;

//* 하단 탭 공통 부분 중간 컨테이너
export const TapContainerBox = styled.div`
  width: 786px;
  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;
//위의 스타일에서 찜목록에만 필요한 부분
export const TapContainerBookMarkBox = styled.div`
  width: 786px;
  height: 100px;
  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;

export const CalculatorBoxContents = styled.div`
  @media screen and (max-width: 425px) {
    width: 425px;
    div {
      text-align: center;
      input {
        width: 400px;
      }
    }
  }
`;

//* 하단 탭 공통 부분.
export const TapTitleName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

//* 예금,적금(Btn) ProductWraper
export const ProductWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

//* 금융상품계산기 박스 내부 버튼
export const ProductType = styled.button`
  width: 136px;
  height: 46px;
  font-size: 14px;
  border: 1px solid #dedede;
  border-radius: 10px;
  color: #dedede;
`;

//* 금융상품계산기 박스 내용
export const ProducksCalculatorBoxContent = styled.div`
  margin-top: 35px;
  input {
    padding: 0 0 0 24px;
    margin: 15px 0 10px 0;
    width: 786px;
    height: 46px;
    border-radius: 10px;
    font-size: 20px;
    color: #6a24ff;
    font-weight: bold;
    border: 1px solid #dedede;
  }
`;

//* 최종목표금액 inputTitle
export const ProducksCalculatorBoxContentTilte = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
  @media screen and (max-width: 425px) {
    width: 425px;
    justify-content: center;
  }
`;

//* 최종목표금액 inputTitle
export const InputTitle = styled.div`
  font-size: 16px;
`;

//* 최종목표금액 input
export const FormattingAmount = styled.input`
  height: 30px;
  width: 100%;
`;

//* 상품기간 슬라이더 Wraper
export const MonthRangeSliderWraper = styled.div`
  input {
    width: 786px;
    height: 50px;
  }
`;

//* 금융상품 기간 슬라이더 제목
export const MonthRangeSliderTitle = styled.div`
  font-size: 16px;
  width: 100%;
`;

//* 금융상품 기간 슬라이더
export const MonthRangeSlider = styled.div`
  width: 786px;
  display: flex;
  flex-wrap: wrap;
  gap: 120px;
  margin-bottom: 30px;
  @media screen and (max-width: 425px) {
    gap: 48px;
  }
`;

//* 찾기 Btn Warper
export const FilterSubmitWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//* 찾기 버튼
export const FilterSubmit = styled.button`
  width: 178px;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 5px;

  cursor: pointer;
  color: #fff;
  background-color: #6a24ff;
  :disabled {
    background-color: #dadada;
    color: #fff;
    cursor: not-allowed;
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
export const FinanciialProductsWrap = styled.div``;

//성아-banklist style
export const StyledBankListContainer = styled.div`
  //* 상우-수정
  /* width: 100%;
  margin: auto; */
  /* padding-top: 20px; */
  /* margin-top: 30px; */
  /* border-radius: 10px;
  border: 1px solid #dedede;
  display: flex;
  justify-content: center; */
  width: 992px;
  margin: auto;

  /* border-top: 1px solid #dedede; */

  /* border-radius: 15px; */
`;

export const StyledBankList = styled.div`
  width: 990px;
  display: flex;
  justify-content: center;
  margin: auto;
  height: 850px;
  background-color: #fff;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  /* 선택 시 border색상 묻힘, 피그마에서도 동일하게 확인 */
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  border: 1px solid #dedede;
  @media screen and (max-width: 1200px) {
    width: 800px;
  }
  @media screen and (max-width: 1100px) {
    width: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
`;

export const SearchInput = styled.div``;
export const Tapwraper = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f4f5f6;
  padding-bottom: 100px;
`;
export const TapwraperBookmark = styled.div`
  width: 1440px;
  background-color: #f4f5f6;
  padding-bottom: 100px;
`;

export const StyledBankLists = styled.div`
  width: 988px;
  /* margin-left: 1px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #dedede;
  border-left: none;
  border-right: none;
  border-top: none;
  :hover {
    background-color: #f7f7f8;
  }
  @media screen and (max-width: 1200px) {
    width: 700px;
  }
  @media screen and (max-width: 1100px) {
    width: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
  @media screen and (max-width: 400px) {
    width: 350px;
  }
`;

export const StyledBookMark = {
  fontSize: "20px",
};

export const StyledBtnDiv = styled.div`
  margin-left: 1px;
  width: 990px;
  display: flex;
  justify-content: center;
  border: 1px solid #dedede;
  align-items: center;
  background-color: #fff;
  height: 72px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  @media screen and (max-width: 1200px) {
    width: 800px;
    margin: auto;
  }
  @media screen and (max-width: 1100px) {
    width: 600px;
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
    margin: auto;
  }
  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
export const StyledBtn = styled.button`
  width: 122px;
  height: 39px;
  background-color: #f7f7fb;
  color: #505050;
  border-radius: 25px;
  margin: 5px 0;
  font-size: 14px;
  border: 1px solid #e1e1e4;
`;
