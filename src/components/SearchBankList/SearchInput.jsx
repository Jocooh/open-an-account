import React from "react";
import styled from "styled-components";
import { debounce } from "lodash";

function SearchInput({ setSearchBank }) {
  const SearchBankhandle = (e) => {
    setSearchBank(e.target.value);
  };
  const debounceFunc = debounce(SearchBankhandle, 200);
  return (
    <StyledInputContainer>
      <form
        onSubmit={(e) => {
          debounceFunc(e);
        }}
      >
        <StyledLabelText>
          <span>은행명 또는 상품명을 입력해주세요.</span>
        </StyledLabelText>

        <StyledSearchInput
          type="text"
          placeholder="최소 2글자 이상 작성해주세요"
          onChange={(e) => {
            debounceFunc(e);
          }}
        />
      </form>
    </StyledInputContainer>
  );
}

export default SearchInput;

const StyledInputContainer = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
`;

const StyledLabelText = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 46px;
  margin-top: 10px;
  border: 1px solid #dedede;
  border-radius: 10px;
  box-sizing: border-box;
  padding-left: 24px;
  font-size: 16px;
  font-weight: bold;
  ::placeholder {
    font-weight: normal;
  }
`;
//* 검색 버튼
// const SearchBtn = styled.button`
//   height: 170px;
//   border-radius: 10px;
//   position: absolute;
//   right: 280px;
// `;
