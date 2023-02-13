import React from "react";
import styled from "styled-components";

function SearchInput({ setSearchBank }) {
  return (
    <>
      <StyledInputContainer>
        <div style={{ margin: "auto", width: "800px" }}>
          <StyledLabelText>
            친구가 추천한 그 상품, 잊기전에 찾아봐요!
          </StyledLabelText>
          <div
            style={{
              width: "786px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledSearchInput
              type="text"
              placeholder="키워드를 입력해주세요"
              onChange={(e) => {
                setSearchBank(e.target.value);
              }}
            />
            <SearchBtn>검색</SearchBtn>
          </div>
        </div>
      </StyledInputContainer>
    </>
  );
}

export default SearchInput;

const StyledInputContainer = styled.div`
  width: 990px;
  height: 200px;
  /* background-color: #aaa; */
  padding: 45px;
  border: 1px solid #dedede;
  border-radius: 10px;
  margin: 10px auto;
`;

const StyledLabelText = styled.h2`
  margin-bottom: 20px;
`;

const StyledSearchInput = styled.input`
  width: 700px;
  height: 64px;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const SearchBtn = styled.button`
  height: 64px;
  width: 80px;
  border: 1px solid #dedede;
  border-radius: 10px;
`;
