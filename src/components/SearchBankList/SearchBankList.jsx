import React from "react";
import SearchDepositLists from "./SearchComponent/SearchDepositLists";
import SearchSavingLists from "./SearchComponent/SearchSavingLists";

function SearchBankList({
  activeItem,
  searchBank,
  productTypes,
  setActiveItem,
  savingbaseList,
  depositbaseList,
  handleClickProduct,
  savingOptionalList,
  depositOptionalList,
}) {
  return (
    <>
      {productTypes === 1 ? (
        <SearchDepositLists
          activeItem={activeItem}
          searchBank={searchBank}
          setActiveItem={setActiveItem}
          depositbaseList={depositbaseList}
          handleClickProduct={handleClickProduct}
          depositOptionalList={depositOptionalList}
        />
      ) : (
        <SearchSavingLists
          activeItem={activeItem}
          searchBank={searchBank}
          setActiveItem={setActiveItem}
          savingbaseList={savingbaseList}
          handleClickProduct={handleClickProduct}
          savingOptionalList={savingOptionalList}
        />
      )}
    </>
  );
}

export default SearchBankList;
