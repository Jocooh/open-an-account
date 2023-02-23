import styled from "styled-components";

//* 페이지 전체 랩
export const MainPageWraper = styled.div`
  width: 100%;
  height: 100%;
  /* padding-left: 220px; */
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* background-color: #f5f5f5; */
`;
export const MainPageContainer = styled.div`
  background-color: lavender;
  width: 80%;
`;
// 상단 전체 랩
export const UpWraper = styled.div`
  width: 80%;
  height: 740px;
  background-color: #f5f5f5;
`;

//? 인삿말 박스
export const GreetingBox = styled.div`
  border-radius: 20px;
  border: solid 1px #dedede;
  width: 100%;
  height: 395px;
  background-color: white;
  padding: 60px 0px 0px 71px;

  img {
    display: flex;
    float: right;
    right: 0;
    margin: 40px 60px 0 0;
  }
`;

//* 제목 랩
export const GreetingTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

//* 멘트
export const GreetingMent = styled.div`
  margin-bottom: 30px;
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
  margin-top: 50px;
  p {
    margin-top: 20px;
  }
`;

// 상품 찾기 버튼
export const ProductFdButton = styled.button`
  font-size: 20px;
  border: 1px purple solid;
  border-radius: 10px;
  width: 310px;
  margin-top: 40px;
  padding: 25px;
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
  margin: 0 10px 0 10px;
  padding: 20px 20px 10px 20px;
  a {
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin-top: 15px;
  }
`;

// 하단 전체 랩
export const DownWraper = styled.div`
  width: 80%;
  height: 1250px;
  border-radius: 20px;
  margin-top: 20px;
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
    margin-top: 130px;
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
  font-size: 20px;
  opacity: 0;
  position: absolute;
`;

export const TipComment = styled.div`
  margin-top: 15px;
`;
