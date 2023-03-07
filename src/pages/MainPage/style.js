import styled from "styled-components";

//* 페이지 전체 랩
export const MainPageWrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  /* padding-left: 220px; */
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`;
// export const MainPageContainer = styled.div`
//   background-color: lavender;
//   width: 80%;
// `;

// 인기 상품 랩
export const BestProductWrap = styled.div`
  width: 1200px;
  height: 500px;
  /* border: 1px solid black; */
  padding: 30px;

  margin: 60px 0;
`;

// 인기 상품 현황
export const CurrentState = styled.div`
  margin: 0 0 20px 30px;
  display: flex;
  justify-content: space-between;
`;
// 인기 상품 제목 랩
export const BtProductTitleWrap = styled.div`
  display: flex;
  img {
    width: 33px;
    height: 33px;
    margin: 8px 20px 0 0;
  }
`;
// 인기 금융 상품 제목
export const BestProductTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
// 현재 시각
export const KrDate = styled.div`
  opacity: 0.6;
  display: flex;
  align-items: end;
  margin: 0 0 6px 10px;
`;
// 한국은행 기준 금리 수치 랩
export const KrBankRateWrap = styled.div`
  display: flex;
`;
// 한국은행
export const KrBank = styled.div`
  font-size: 16px;
  font-weight: bold;
  opacity: 0.4;
  display: flex;
  align-items: end;
  padding-bottom: 5px;
`;
// 한국은행 기준 금리 수치
export const KrBankRate = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 0 20px 0 20px;
`;
// 한국은행 기준 금리 변화
export const KrBankRateVar = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 5px;
  color: red;
  img {
    height: 16px;
    width: 16px;
    margin: 2px 8px 0 0;
  }
`;

// 인기 상품들 랩
export const BtProducts = styled.div`
  display: flex;
  justify-content: center;
`;

// 인기 상품 랩
export const BtProduct = styled.div`
  width: 582px;
  height: 327px;
  border-radius: 20px;
  background-color: white;
  margin: 0 15px 0 15px;
  padding: 40px;
`;

// 인기 상품 제목
export const BtProductTitle = styled.div`
  font-size: 22px;
`;

// 인기 상품 리스트
export const BtProductList = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  img {
    width: 49px;
    height: 49px;
    margin: 0 10px 0 10px;
  }
`;

// 인기 상품 순위
export const BtProductRank = styled.div`
  width: 50px;
  text-align: center;
`;

// 인기 상품 내용
export const BtProductContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 인기 상품명
export const BtProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// 금리 랩
export const RateWrapper = styled.div`
  text-align: end;
`;

// 최고 금리
export const MaxRate = styled.div`
  font-size: 18px;
  font-weight: bold;
  /* color: #6a24ff; */
  margin-bottom: 5px;
`;

// 금주의 팁퍼 랩
export const WeekBestTipper = styled.div`
  width: 990px;
  height: 900px;
  border-radius: 20px;
  margin: 20px 0 10px 0;
  padding: 58px 46px 33px 71px;
  border: solid 1px #dedede;
  border-radius: 20px;
  background-color: white;
`;

// 팁퍼 전체 랩
export const BestTipperWraper = styled.div``;

// 하단 제목
export const BestTipperTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

// 옆으로 넘기는 버튼
export const NextButton = styled.button`
  float: right;
`;

// 팁퍼들
export const Tippers = styled.div`
  /* display: flex;
  width: 850px; */
  margin-top: 40px;
`;

// 팁퍼 틀
export const TipperWrap = styled.div`
  height: 670px;
  width: 288px;

  border: 1px #dedede solid;
  border-radius: 10px;

  margin: 10px 5px;

  background-color: white;
`;

// 팁퍼제목 랩
export const TipTitleWrap = styled.div`
  height: 80px;
  padding: 30px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 팁퍼 이미지 랩
export const TipperImgWrap = styled.div`
  border: 1px solid #dedede;
  height: 200px;
  border-radius: 10px;
  background-color: whitesmoke;
  img {
    width: 288px;
    height: 211px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

// 팁퍼제목
export const TipperTitle = styled.span`
  font-weight: bold;
  border: 2px solid #e3dcff;
  border-radius: 20px;
  color: #6a24ff;
  padding: 10px;
`;

// 후기부분 랩
export const BoardWrap = styled.div`
  height: 350px;
  padding: 0 20px 30px 20px;
`;

// 후기 제목
export const BoardTitle = styled.div`
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  padding-top: 20px;
`;

// 후기 내용
export const BoardContent = styled.div`
  font-size: 14px;
`;

// 수정 삭제 버튼 랩
export const ButtonWrap = styled.div`
  float: right;
`;

// 하단 전체 랩
export const DownWraper = styled.div`
  width: 990px;
  height: 1250px;
  border-radius: 20px;
  margin: 20px 0 10px 0;
  padding: 58px 46px 33px 71px;
  /* background-color: whitesmoke; */
  border: solid 1px #dedede;
  border-radius: 20px;
  background-color: white;
`;
// 오늘의 금융 팁 제목
export const TodayTipTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
// 오늘의 금융 팁 설명
export const TodayTipComment = styled.div`
  font-size: 18px;
  margin: 25px 0 30px 0;
`;
// 금융 팁들
export const Tips = styled.div`
  display: flex;
`;
// 금융 팁
export const Tip = styled.div`
  width: 508px;
  height: 508px;
  background-color: #b3c6fb;
  margin: 0 25px 25px 0;
  padding: 60px 40px 25px 35px;
  border-radius: 20px;
  img {
    float: right;
    margin-top: 120px;
  }
  :hover {
    filter: brightness(70%);
    color: white;
    div {
      opacity: 1;
    }
  }
`;
// 금융 팁 제목
export const TipTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;
// 금융 팁 설명
export const TipComments = styled.div`
  font-weight: bold;
  font-size: 15px;
  opacity: 0;
  position: absolute;
`;
export const TipComment = styled.div`
  margin-top: 15px;
`;

// 상단 전체 랩
export const UpWraper = styled.div`
  width: 990px;
  height: 740px;
  background-color: #f5f5f5;
  margin-top: 10px;
`;

//? 인삿말 박스
export const GreetingBox = styled.div`
  border-radius: 20px;
  border: solid 1px #dedede;
  width: 100%;
  height: 395px;
  background-color: white;
  padding: 50px 0px 0px 71px;

  img {
    display: flex;
    float: right;
    right: 0;
    margin: 40px 60px 0 0;
  }
`;

//* 제목 랩
export const GreetingTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 25px;
`;

//* 멘트
export const GreetingMent = styled.div`
  margin-bottom: 5px;
`;

//* 사용자 이름
export const Username = styled.span`
  color: #6a24ff;
`;

// 멘트2
export const Greetingment = styled.span``;

//* 인삿말 내용
export const Greetingcontent = styled.div`
  /* width: 50%; */
  font-size: 18px;
  margin-top: 40px;
  p {
    margin-top: 10px;
  }
`;

// 상품 찾기 버튼
export const ProductFdButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  border: 1px purple solid;
  border-radius: 10px;
  width: 310px;
  height: 60px;
  margin-top: 35px;
  padding: 15px;
  background-color: #6a24ff;
  color: white;
  cursor: pointer;
`;

// 은행 리스트 배너
export const BankListBanner = styled.div`
  width: 100%;
  height: 325px;
  margin-top: 20px;
  padding-top: 60px;
  border: solid 1px #dedede;
  border-radius: 20px;
  background-color: white;
`;
// 은행 리스트 제목
export const BankListBannerTitle = styled.span`
  font-size: 35px;
  font-weight: bold;
  padding-left: 71px;
`;
// 은행 랩
export const BankWrap = styled.div`
  border: 1px black solid;
  border-radius: 10px;
  width: 161px;
  height: 124px;
  display: inline-block;
  margin: 0 5px 0 5px;
  padding: 20px 20px 10px 20px;
  img {
    width: 48px;
    height: 48px;
  }
  a {
    display: flex;
    font-size: 20px;
    color: black;
    justify-content: center;
    margin-top: 5px;
    text-decoration: none;
  }
`;
