import React, { useState } from "react";
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
  selectedProductIds,
  savingOptionalList,
  depositOptionalList,
}) {
  const [color, setColor] = useState([]);
  return (
    <>
      {productTypes === 1 ? (
        <SearchDepositLists
          color={color}
          setColor={setColor}
          activeItem={activeItem}
          searchBank={searchBank}
          productTypes={productTypes}
          setActiveItem={setActiveItem}
          depositbaseList={depositbaseList}
          handleClickProduct={handleClickProduct}
          selectedProductIds={selectedProductIds}
          depositOptionalList={depositOptionalList}
        />
      ) : (
        <SearchSavingLists
          setColor={setColor}
          activeItem={activeItem}
          searchBank={searchBank}
          productTypes={productTypes}
          setActiveItem={setActiveItem}
          savingbaseList={savingbaseList}
          handleClickProduct={handleClickProduct}
          selectedProductIds={selectedProductIds}
          savingOptionalList={savingOptionalList}
        />
      )}
    </>
  );
}

export default SearchBankList;
