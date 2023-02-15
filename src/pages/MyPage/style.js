import styled from "styled-components";

export const StyledMyContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 1930px) {
    width: 1700px;
  }
  @media screen and (max-width: 1600px) {
    width: 1400px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 580px) {
    width: 95%;
  }
`;

export const StyledMyUpperDiv = styled.div`
  width: 1600px;
  height: 220px;
  background-color: #d9d9d9;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 1700px) {
    width: 1500px;
  }
  @media screen and (max-width: 1400px) {
    width: 1200px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 580px) {
    width: 95%;
  } ;
`;

export const StyledImage = styled.img`
  width: 164px;
  height: 164px;
  margin-right: 30px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserInfor = styled.p`
  font-size: 27px;
  font-weight: bold;
`;

export const UserInfoEdit = styled.p`
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
  color: #666;
  :hover {
    color: #fff;
  }
`;

export const StyledMypageLowerDiv = styled.div`
  width: 1600px;
  margin: 0 auto;
  @media screen and (max-width: 1700px) {
    width: 1500px;
  }
  @media screen and (max-width: 1400px) {
    width: 1200px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 580px) {
    width: 95%;
  } ;
`;

export const StyledLowerCategory = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CategoryList = styled.p`
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #6a24ff;
  }
`;

export const CardContainer = styled.div`
  width: 1500px;
  background-color: #dedede;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  box-sizing: border-box;
  margin-left: 40px;
  @media screen and (max-width: 1700px) {
    width: 1500px;
  }
  @media screen and (max-width: 1400px) {
    width: 95%;
  }
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  @media screen and (max-width: 580px) {
    width: 95%;
  } ;
`;

export const StyledCard = styled.div`
  width: 288px;
  height: 380px;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  margin: 10px 15px;
  border: 1px solid #6a24ff;
`;
