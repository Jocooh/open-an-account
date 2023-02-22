import styled from "styled-components";

//* 페이지 전체 랩
export const MainPageWraper = styled.div`
  width: 100%;

  height: 100%;
  /* padding-left: 220px; */
  justify-content: center;
  background-color: white;
`;

// 상단 전체 랩
export const UpWraper = styled.div`
  width: 80%;
  height: 740px;
  background-color: white;
`;

// 배너 이미지
export const BannerImage = styled.div`
  max-width: 100%;
`;

export const Bannerimage = styled.img`
  max-width: 100%;
`;

//? 인삿말 박스
export const GreetingBox = styled.div`
  border-radius: 20px;
  border: solid 1px #dedede;
  width: 100%;
  height: 395px;
  background-color: aliceblue;
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
  background-color: aliceblue;
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

//? 하단영역
export const BottomWrap = styled.div`
  margin-top: 20px;
  width: 100%;
`;

//* 금융 용어사전
export const Dictionary = styled.button`
  width: 100%;
  height: 220px;
  border: solid 1px #dedede;
  border-radius: 20px;
  text-align: center;
  background-color: aliceblue;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.2);
  }
  /* :active {
    color: #f0f0f0;
  } */
  div {
    font-size: 20px;
    font-weight: bold;
  }
`;

// 은행과 QnA
export const BankAndQna = styled.div`
  flex-direction: row;
  width: auto;
`;

//* 은행리스트
export const BankList = styled.div`
  width: 100%;
  height: 400px;
  border: solid 1px #dedede;
  border-radius: 20px;
  margin-left: 20px;
  background-color: aliceblue;
`;

//* 은행 리스트 한눈에 보기
export const BankListTilte = styled.div`
  padding-top: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

// QnA창
export const QuestionWrap = styled.div`
  width: 100%;
  height: 300px;
  border: solid 1px #dedede;
  border-radius: 20px;
  margin: 20px 0 0 20px;
  background-color: aliceblue;
`;

// QnA 제목
export const QuestionTitle = styled.div`
  padding-top: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

// 금융 꿀팁창
export const FinanceHoneyTip = styled.div`
  width: 685px;
  height: 400px;
  border: solid 1px #dedede;
  border-radius: 20px;
  padding: 30px;
  margin-top: 20px;
  background-color: aliceblue;

  div {
    font-size: 30px;
    margin: 40px 0 0 40px;
    font-size: 30px;
    font-weight: bold;
  }
`;

// 하단 전체 랩
export const DownWraper = styled.div`
  width: 80%;
  height: 1050px;
  border-radius: 20px;
  margin-top: 20px;
  padding: 58px 46px 33px 71px;
  background-color: whitesmoke;
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
  width: 408px;
  height: 408px;
  background-color: #b3c6fb;
  margin: 0 25px 25px 0;
  padding: 50px 40px 25px 25px;
  border-radius: 20px;
  img {
    float: right;
    margin-top: 50px;
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
  opacity: 0;
  position: absolute;
`;

export const TipComment = styled.div`
  margin-top: 10px;
`;
