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
  myBookmarkProducts,
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
          myBookmarkProducts={myBookmarkProducts} // my bookmark products
        />
      ) : (
        <SearchSavingLists
          savingbaseList={savingbaseList}
          savingOptionalList={savingOptionalList}
          myBookmarkProducts={myBookmarkProducts} // my bookmark products
          searchBank={searchBank}
        />
      )}
    </StyledBankListWrapper>
  );
}

export default SearchBankList;
