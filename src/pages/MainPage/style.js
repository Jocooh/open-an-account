import styled from "styled-components";

//* 전체 랩

export const MainPageWraper = styled.div`
  width: 100%;
  height: 1900px;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  background-color: #f0e7fb;
`;
export const Wraper = styled.div`
  width: 80%;
  height: 1500px;
`;

//? 인삿말 박스
export const GreetingBox = styled.div`
  border-radius: 20px;
  border: solid 1px #dedede;
  width: 100%;
  height: 500px;
  margin-top: 20px;
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
`;

//* 멘트
export const Greetingment = styled.span``;

//* 인삿말 내용
export const Greetingcontent = styled.div`
  /* width: 50%; */
  font-size: 22px;
  margin-top: 30px;
  p {
    margin-top: 20px;
  }
`;

// 상품 찾기 버튼
export const ProductFdButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  border: 1px purple solid;
  border-radius: 20px;
  width: 200px;
  margin-top: 120px;
  padding: 25px;
  cursor: pointer;

  :hover {
    background-color: #6a24ff;
  }
`;

//? 하단영역
export const BottomWrap = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

//* 게시판 인기글랩
export const BoardBestCommentWrap = styled.div``;

//* 게시판 인기글창
export const BoardBestComment = styled.div`
  width: 685px;
  height: 100%;
  border: solid 1px #dedede;
  border-radius: 20px;
  padding: 30px;
  background-color: aliceblue;

  div {
    font-size: 30px;
    margin: 40px 0 0 40px;
    font-size: 30px;
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
