import styled from "styled-components";

export const MyPageWrapper = styled.div`
  background-color: #f4f5f6;
  width: 100%;
  display: flex;
  gap: 200px;
  height: 100vh;
  /* align-items: center; */
  /* justify-content: center; */
  @media screen and (max-width: 1200px) {
    gap: 100px;
    font-size: 15px;
  }
  @media screen and (max-width: 900px) {
    gap: 0px;
  }
`;
//여기는 왼쪽 박스 스타일구역
export const LeftBox = styled.div`
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
  box-sizing: content-box;
  background-color: #fff;
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
    gap: 40px;
  }
`;
export const UserNicknameDiv = styled.div`
  width: 380px;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
`;

export const UserText = styled.h3`
  font-size: 23px;
  /* @media screen and (max-width: 1200px) {
    font-size: 23px;
  } */
`;
export const UserContentDiv = styled.div`
  width: 380px;
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
  /* height: 172px; */
  display: flex;
  flex-direction: column;
  /* gap: 25px; */
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
`;
export const LogOutBtn = styled.button`
  width: 84px;
  height: 32px;
  border: 1px solid #aaa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #888;
  @media screen and (max-width: 1200px) {
    width: 70px;
    font-size: 11px;
  }
`;

export const UserAccountDiv = styled.div`
  display: flex;
  width: 380px;
  height: 72px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 65px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
    gap: 20px;
  }
`;

export const UserHistoryDiv = styled.div`
  display: flex;
  width: 380px;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 65px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
`;

export const HistoryCategory = styled.div`
  width: 380px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 65px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
`;
//여기서부터는 오른쪽 박스 스타일 구역
export const RightBox = styled.div`
  /* width: 900px; */
  height: 800px;
  /* background-color: #f4f5f6; */
  padding: 20px;
  display: flex;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RightWrapper = styled.div`
  width: 530px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 50px;
  @media screen and (max-width: 900px) {
    width: 98%;
  }
`;

export const ChangePasswordDiv = styled.div`
  display: flex;
  height: 380px;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
`;
export const UserInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 50px;
  padding: 3px;
`;
export const EnrollNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: 10px;
  margin-top: 20px;
`;
export const ChangeNickNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50px;
`;
export const StyledIcons = styled.img`
  width: 40px;
  height: 40px;
`;
export const CategoryImg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SaveBtn = styled.button`
  background-color: #6a24ff;
  width: 240px;
  height: 50px;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  @media screen and (max-width: 900px) {
    width: 210px;
  }
`;

//예금적금 버튼
export const ProductTypesBtn = styled.button`
  width: 122px;
  height: 46px;
  border-radius: 15px;
  background-color: white;
`;

//내가 쓴 글 컴포넌트 스타일
export const UseListeWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    width: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 400px;
  }
`;
export const ListCard = styled.div`
  width: 288px;
  height: 550px;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #ccc;
`;

export const CategoryLike = styled.div`
  display: flex;
  gap: 130px; //카테고리와 북마크 사이 거리
`;
export const CardCategory = styled.div`
  border: 1px solid #aaa;
  width: 100px;
  height: 26px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const SecondTitle = styled.div`
  display: flex;
  gap: 30px;
  color: #999;
`;
export const Block = styled.div`
  width: 20px;
  height: 25px;
`;
export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const CardImage = styled.img`
  width: 288px;
  height: 211px;
  object-fit: cover;
  border-radius: 15px;
`;
