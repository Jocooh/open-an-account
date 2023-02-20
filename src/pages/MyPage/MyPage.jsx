import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import {
  MyPageWrapper,
  LeftBox,
  StyledImage,
  RightBox,
  UserNicknameDiv,
  UserContentDiv,
  ContentDiv,
  UserAccountDiv,
  UserHistoryDiv,
  RightWrapper,
  ChangePasswordDiv,
  UserInput,
  EnrollNumberDiv,
  ChangeNickNameDiv,
  LogOutBtn,
  StyledIcons,
} from "./style";
import { useState } from "react";

// import BookmarkPrdtList from "../../components/Mypage/BookmarkPrdtList";

function MyPage() {
  const userSession = sessionStorage
    .getItem
    // `firebase:authUser:AIzaSyAga8qxy0nopRNMv3-edKamyhgq9PJ-Qvs:[DEFAULT]`
    ();
  const currentUser = JSON.parse(userSession ?? "");

  return (
    <MyPageWrapper className="제일 큰 박스 width:1440px">
      {/* ###########  Left    ################# */}
      <LeftBox className="왼쪽 박스 width:437px">
        {/* 유저 닉네임 확인 */}
        <UserNicknameDiv>
          <StyledImage
            src={require("../../assets/apple.png")}
            alt="유저사진"
          ></StyledImage>
          <h3 style={{ fontSize: "25px" }}>유저 닉네임</h3>
        </UserNicknameDiv>
        {/* 유저 이름,id,연락처 부분 */}
        <UserContentDiv>
          <h3 style={{ fontSize: "20px" }}>조성아</h3>
          {/* 로그인 ID */}
          <ContentDiv>
            <div>
              <p>로그인 ID</p>
              <p style={{ color: "#aaa" }}>test1@test.com</p>
            </div>
            {/* 로그아웃 버튼 */}
            <LogOutBtn>
              <RiLogoutBoxLine />
              로그아웃
            </LogOutBtn>
          </ContentDiv>
          <div>
            <p>연락처</p>
            <p style={{ color: "#aaa" }}> 등록된 전화번호가 없습니다.</p>
          </div>
        </UserContentDiv>
        {/* 유저 계정 변경 부분 (디폴트부분) */}
        <UserAccountDiv>
          <StyledIcons src={require("../../assets/lock.png")} alt="자물쇠" />
          <p>계정 관리</p>
          <p>〉</p>
        </UserAccountDiv>
        {/* 히스토리 */}
        <UserHistoryDiv>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button>찜한 상품</button>
            <p>〉</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button>내가 쓴 글</button>
            <p>〉</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button>스크랩한 글</button>
            <p>〉</p>
          </div>
        </UserHistoryDiv>
      </LeftBox>
      {/* ######################  Right  ########## */}
      <RightBox className="오른쪽 박스 width:582px">
        <RightWrapper className="오른쪽 박스 안에 작은 박스 width:508px">
          <ChangePasswordDiv className="비밀번호변경">
            <h3 style={{ fontSize: "25px" }}>비밀번호 변경</h3>
            <p>기존 비밀번호 </p>
            <UserInput type="password"></UserInput>
            <p>새 비밀번호</p>
            <p style={{ color: "#aaa" }}>
              8~16자 이내의 영문, 숫자, 기호를 포함한 문자열
            </p>
            <UserInput type="password"></UserInput>
            <p>새 비밀번호 확인</p>
            <UserInput type="password"></UserInput>
          </ChangePasswordDiv>
          <EnrollNumberDiv className="연락처등록">
            <h3 style={{ fontSize: "25px" }}>연락처 등록</h3>
            <UserInput type="number" placeholder="010-1234-5678"></UserInput>
          </EnrollNumberDiv>
          <ChangeNickNameDiv className="닉네임변경">
            <h3 style={{ fontSize: "25px" }}>닉네임 변경</h3>
            <UserInput type="text" placeholder="유저 닉네임"></UserInput>
          </ChangeNickNameDiv>
        </RightWrapper>
      </RightBox>
    </MyPageWrapper>
  );
}

export default MyPage;

//잊지마라 조성아 여기 넣어야댄다.
/* <BookmarkPrdtList currentUser={currentUser} /> */
