import React from "react";
import styled from "styled-components";

function SearchInput({ setSearchBank }) {
  const SearchBankhandle = (e) => {
    e.preventDefault();
  };
  return (
    <StyledInputContainer>
      <form
        onSubmit={(e) => {
          SearchBankhandle(e);
        }}
      >
        <StyledLabelText>
          <span style={{ fontWeight: "bold" }}>은행명</span>
          <span> 또는 </span>
          <span style={{ fontWeight: "bold" }}>상품명</span>
          <span>을 입력해주세요.</span>
        </StyledLabelText>

        <StyledSearchInput
          type="text"
          placeholder="최소 2글자 이상 작성해주세요"
          onChange={(e) => {
            setSearchBank(e.target.value);
          }}
        />
        {/* <SearchBtn>검색</SearchBtn> */}
      </form>
    </StyledInputContainer>
  );
}

export default SearchInput;

const StyledInputContainer = styled.div`
  /* width: 990px; */
  width: 100%;
  height: 200px;
  border-radius: 10px;

  /* background-color: violet; */
`;

const StyledLabelText = styled.div`
  font-size: 24px;
  margin-top: 50px;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 64px;
  margin-top: 20px;
  border: 1px solid #dedede;
  border-radius: 10px;
  box-sizing: border-box;
  padding-left: 24px;
`;
//* 검색 버튼
// const SearchBtn = styled.button`
//   height: 170px;
//   border-radius: 10px;
//   position: absolute;
//   right: 280px;
// `;
