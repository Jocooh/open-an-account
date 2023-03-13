import styled from "styled-components";
export const StyledDetailContainer = styled.div`
  width: 870px;
  border-top: 1px solid #efefef;
  display: flex;
  padding: 30px;
  @media screen and (max-width: 1200px) {
    width: 700px;
  }
  @media screen and (max-width: 1100px) {
    width: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
  @media screen and (max-width: 400px) {
    width: 375px;
  }
`;

export const StyledDetailContent = styled.div`
  display: flex;
  width: 780px;
  box-sizing: border-box;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 700px;
  }
  @media screen and (max-width: 1100px) {
    width: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
`;
export const StyledDetailList = styled.ul`
  list-style: inside;
  color: #888;
`;
export const StyledDetaiListText = styled.li`
  margin-bottom: 3px;
  line-height: 23px;
`;

export const DetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 70px;
  @media screen and (max-width: 1200px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 10px;
  }
`;

export const CloseDetail = styled.div`
  width: 50px;
  //찜목록에서 닫기버튼 위치 수정
  margin-left: 120px;
`;

export const BookMarkWrapper = styled.div`
  width: 100%;
`;
