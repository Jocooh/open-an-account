import React, { useEffect } from "react";
import Card from "../../components/Mypage/Card";
// import { useNavigate } from "react-router-dom";
import UserModal from "../../components/Mypage/UserModal";
import { useState } from "react";
import {
  StyledMyUpperDiv,
  StyledImage,
  StyledMyContainer,
  UserInfoContainer,
  UserInfor,
  UserInfoEdit,
  StyledMypageLowerDiv,
  StyledLowerCategory,
  CategoryList,
  CardContainer,
} from "./style";
import BookmarkPrdtList from "../../components/Mypage/BookmarkPrdtList";
import { authService } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // const currentUser = authService.currentUser;

  // 원준 작업.
  // 세션스토리지에서 로그인 했을 때 저장된 currentUser 가져오기 -> 마이페이지에서 필요. (북마크 기능으로 선작업.)
  // `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]` // <<-- 이건 환경변수 설정했을 경우 - 현재 개인 당 파이어베이스 sdk 가 다르니 차후에 설정해야함.
  const userSession = sessionStorage.getItem(
    `firebase:authUser:AIzaSyBFdGzEbZaCS8ERHkepA1adVEvF-71V9Zw:[DEFAULT]`
  );
  const currentUser = JSON.parse(userSession ?? "");
  console.log(currentUser);

  // 원준 작업.
  // 상단 currentUser 가져오면서 예외처리 되지만 alert, navigate 를 위해 추가. -- 현재 위 코드로 먼저 걸러주기 때문에 실행되지 않음. 더 알아볼 것.
  // useEffect(() => {
  //   if (!authService.currentUser) {
  //     alert("마이페이지는 로그인 후 접근이 가능합니다.");
  //     navigate("/login");
  //     return;
  //   }
  // }, []);

  return (
    <>
      <StyledMyContainer>
        <StyledMyUpperDiv>
          <StyledImage src={require("../../assets/defaultImage.png")} />
          <UserInfoContainer>
            <UserInfor>Hello, 김땡땡님</UserInfor>
            <UserInfor>금융 노하우 쌓기 1일째</UserInfor>
          </UserInfoContainer>
          <UserInfoEdit
            onClick={() => {
              setModalOpen(true);
            }}
          >
            개인정보 수정
          </UserInfoEdit>
        </StyledMyUpperDiv>
        <StyledMypageLowerDiv>
          <p
            style={{ fontSize: "30px", fontWeight: "bold", marginTop: "50px" }}
          >
            히스토리
          </p>
          <div>{modalOpen && <UserModal setModalOpen={setModalOpen} />}</div>
          <StyledLowerCategory>
            <CategoryList>찜한 상품</CategoryList>
            <CategoryList>내가 쓴 글</CategoryList>
            <CategoryList>스크랩한 글</CategoryList>
          </StyledLowerCategory>
          {/* 해야되는것 - 카드마다 찜 아이콘 넣기 */}
          <CardContainer>
            <Card></Card>
            <Card></Card>
          </CardContainer>
          <BookmarkPrdtList currentUser={currentUser} />
        </StyledMypageLowerDiv>
      </StyledMyContainer>
    </>
  );
}

export default MyPage;
