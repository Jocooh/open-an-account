import styled from "styled-components";

//* 페이지 전체 랩
export const MainPageWraper = styled.div`
  width: 100%;
  height: 2000px;
  padding-left: 220px;
  justify-content: center;
  /* background-color: blue; */
  background-color: #f0e7fb;
`;

// 상단 전체 랩
export const UpWraper = styled.div`
  width: 80%;
  height: 1000px;
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
  height: 460px;
  background-color: aliceblue;
  padding: 70px 0px 0px 50px;

  img {
    display: flex;
    float: right;
    right: 0;
    margin-right: 100px;
  }
`;

//* 제목 랩
export const GreetingTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

//* 사용자 이름
export const Username = styled.span`
  color: #6a24ff;
  margin-left: 10px;
`;

//* 멘트
export const Greetingment = styled.span``;

//* 인삿말 내용
export const Greetingcontent = styled.div`
  /* width: 50%; */
  font-size: 22px;
  margin-top: 50px;
  p {
    margin-top: 20px;
  }
`;

// 상품 찾기 버튼
export const ProductFdButton = styled.button`
  font-size: 20px;
  border: 1px purple solid;
  border-radius: 20px;
  width: 200px;
  margin-top: 120px;
  padding: 25px;
  background-color: #6a24ff;
  color: white;
  cursor: pointer;
`;

//? 하단영역
export const BottomWrap = styled.div`
  margin-top: 20px;
  width: 100%;
`;

//* 하단 4가지탭
export const FourTab = styled.div`
  display: flex;
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
  div {
    font-size: 20px;
    font-weight: bold;
  }
`;

//*  나의 스크랩
export const MyScript = styled.button`
  width: 100%;
  height: 220px;
  border: solid 1px #dedede;
  border-radius: 20px;
  text-align: center;
  background-color: aliceblue;
  margin: 0 20px 0 20px;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.2);
  }
  img {
    margin-top: 10px;
  }
  div {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

//*  인기 금융상품
export const BestProduct = styled.button`
  width: 100%;
  height: 220px;
  border: solid 1px #dedede;
  border-radius: 20px;
  text-align: center;
  background-color: aliceblue;
  margin-right: 20px;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.2);
  }
  img {
    margin-top: 10px;
  }
  div {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

//*  자주 묻는 질문
export const Question = styled.button`
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
  img {
    margin-top: 10px;
  }
  div {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
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

//* 우측 사이드바
export const Sidebar = styled.div`
  position: fixed;
  right: 20px;
  top: 100px;
  z-index: 2;
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

// 하단 전체 랩
export const DownWraper = styled.div`
  width: 80%;
  height: 1000px;
  background-color: whitesmoke;
`;

// 팁퍼 전체 랩
export const AllTipWraper = styled.div`
  padding: 80px 0 0 40px;
`;

// 하단 제목
export const DownTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

// 옆으로 넘기는 버튼
export const NextButton = styled.button`
  float: right;
`;

// 팁퍼들
export const Tips = styled.div`
  display: flex;
  width: 850px;
  margin-top: 40px;
`;

// 팁퍼
export const Tip = styled.div`
  height: 650px;
  width: 100%;
  border: 1px #dedede solid;
  border-radius: 10px;
  margin-right: 10px;
  background-color: white;
`;

// 팁퍼제목 랩
export const TipTitleWrap = styled.div`
  height: 120px;
  padding-top: 50px;

  img {
    float: right;
    padding-right: 15px;
  }
`;
// 팁퍼제목
export const TipTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-left: 20px;
`;

// 후기부분 랩
export const BoardWrap = styled.div`
  padding: 0 20px 30px 20px;
`;
