import React from "react";

import SearchDepositLists from "./SearchComponent/SearchDepositLists";

import { StyledBankListWrapper } from "../../pages/ServicePage/style";

import SearchSavingLists from "./SearchComponent/SearchSavingLists";

function SearchBankList({
  searchBank,
  depositbaseList,
  depositOptionalList,
  productType,
  savingbaseList,
  savingOptionalList,
  bookmarkProducts,
}) {
  //productType:예금,적금
  //searchBank: 사용자가 입력하는 값
  //depositbaseList: 예금상품 baseList
  //savingbaseList: 적금상품 baseList

  return (
    <StyledBankListWrapper>
      {productType === 1 ? (
        <SearchDepositLists
          depositbaseList={depositbaseList}
          searchBank={searchBank}
          depositOptionalList={depositOptionalList}
          bookmarkProducts={bookmarkProducts}
        />
      ) : (
        <SearchSavingLists
          savingbaseList={savingbaseList}
          savingOptionalList={savingOptionalList}
          searchBank={searchBank}
          bookmarkProducts={bookmarkProducts}
        />
      )}
    </StyledBankListWrapper>
  );
}

export default SearchBankList;
