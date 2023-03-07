import styled from "styled-components";

//여기 추가
export const StyledListDiv = styled.div`
  width: 970px;
  height: 141px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  cursor: pointer;
  /* box-shadow: 0 4px 4px -3px #a1a1a1; */
  /* :hover {
    background-color: #dedede;
  } */
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 500px;
  gap: 30px;
`;

export const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin: 7px 0;
`;

export const StyledMoreListDiv = styled.div`
  display: flex;
  gap: 75px;
  flex-direction: column;
  /* margin-top: 10px; */
  align-items: center;
`;

export const StyledSearchSaveTrmDiv = styled.div`
  height: 30px;
  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
export const StyledSavingRateP = styled.div`
  padding: 10px;
  box-sizing: border-box;
  color: #6a24ff;
  font-size: 14px;
`;
