import React from "react";
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

function MyPage() {
  // const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledMyContainer>
        <StyledMyUpperDiv>
          <StyledImage src={require("../../asset/defaultImage.png")} />
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
        </StyledMypageLowerDiv>
      </StyledMyContainer>
    </>
  );
}

export default MyPage;
