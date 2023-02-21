import styled from "styled-components";

export const MyPageWrapper = styled.div`
  width: 1440px;
  height: 1110px;
  margin: auto;
  display: flex;
  gap: 200px;
  background-color: aliceblue;
`;
//여기는 왼쪽 박스 스타일구역
export const LeftBox = styled.div`
  width: 437px;
  /* height: 1170px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-sizing: content-box;
  background-color: lightcyan;
`;
export const UserNicknameDiv = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
`;

export const UserContentDiv = styled.div`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  padding: 10px;
  height: 172px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: lightcoral; */
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
`;

export const UserAccountDiv = styled.div`
  display: flex;
  height: 72px;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
`;

export const UserHistoryDiv = styled.div`
  display: flex;
  background-color: lightcoral;
  flex-direction: column;
  gap: 10px;
`;
//여기서부터는 오른쪽 박스 스타일 구역
export const RightBox = styled.div`
  width: 600px;
  height: 808px;
  background-color: lightgreen;
  padding: 20px;
  display: flex;
  box-sizing: content-box;
`;
export const RightWrapper = styled.div`
  width: 508px;
  height: 706px;
  margin: auto;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ChangePasswordDiv = styled.div`
  display: flex;
  height: 350px;
  /* background-color: lightgoldenrodyellow; */
  flex-direction: column;
  gap: 20px;
`;
export const UserInput = styled.input`
  border-radius: 15px;
  height: 50px;
`;
export const EnrollNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  /* background-color: lightseagreen; */
  gap: 10px;
`;
export const ChangeNickNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  /* background-color: lightseagreen; */
  gap: 10px;
`;

export const StyledImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 50px;
`;
export const StyledIcons = styled.img`
  width: 40px;
  height: 40px;
`;
