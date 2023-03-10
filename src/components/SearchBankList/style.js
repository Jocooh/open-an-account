import styled from "styled-components";

//여기 추가
export const StyledListDiv = styled.div`
  width: 990px;
  height: 150px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #f7f7f8;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 737px;
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
  gap: 50px;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;

export const StyledSearchSaveTrmDiv = styled.div`
  height: 30px;
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
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
`;
