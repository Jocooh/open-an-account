import styled from "styled-components";

//여기 추가
export const StyledListDiv = styled.div`
  width: 990px;
  height: 150px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 650px;
  }
  @media screen and (max-width: 1100px) {
    width: 550px;
  }
  @media screen and (max-width: 1000px) {
    width: 450px;
  }
  @media screen and (max-width: 400px) {
    width: 350px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 990px;
  padding-left: 102px;
  position: relative;
  z-index: 10;
`;

export const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-top: 11px;
`;

export const StyledMoreListDiv = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: absolute;
  bottom: 0;
  right: 70px;
`;

export const StyledSearchSaveTrmDiv = styled.div`
  height: 30px;
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;
export const StyledSearchSaveTrmP = styled.div`
  font-weight: bold;
  color: #aaa;
  font-size: 12px;
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
export const IntrRateContainer = styled.div`
  display: flex;
  gap: 25px;
  align-content: center;
`;

export const SaveTrmDiv = styled.div`
  color: #a3a3a3;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const StyledSavingRateP = styled.div`
  color: #6a24ff;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
