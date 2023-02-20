import React from "react";
import styled from "styled-components";

function SearchInput({ setSearchBank }) {
  const SearchBankhandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <StyledInputContainer>
        <form
          style={{ margin: "auto", width: "800px" }}
          onSubmit={(e) => {
            SearchBankhandle(e);
          }}
        >
          <StyledLabelText>은행명 또는 상품명을 입력해주세요.</StyledLabelText>
          <div
            style={{
              width: "786px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledSearchInput
              type="text"
              placeholder="최소 2글자 이상 작성해주세요"
              onChange={(e) => {
                setSearchBank(e.target.value);
              }}
            />
            <SearchBtn>검색</SearchBtn>
          </div>
        </form>
      </StyledInputContainer>
    </>
  );
}

export default SearchInput;

const StyledInputContainer = styled.div`
  width: 990px;
  height: 200px;
  padding: 45px;
  border: 1px solid #dedede;
  border-radius: 10px;
  margin: 10px auto 30px auto;
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
