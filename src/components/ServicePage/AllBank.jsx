import React from "react";
import AllBankList from "../AllBankList/AllBankList";
import SavingAllBankList from "../AllBankList/SavingAllBankList";

function AllBank({
  activeItem,
  productTypes,
  setActiveItem,
  selectedColor,
  savingbaseList,
  depositbaseList,
  setSelectedColor,
  handleClickProduct,
  savingoptionalList,
  depositOptionalList,
  selectedProductIds,
}) {
  return (
    <>
      {productTypes === 1 ? (
        <AllBankList
          activeItem={activeItem}
          selectedColor={selectedColor}
          setActiveItem={setActiveItem}
          depositbaseList={depositbaseList}
          setSelectedColor={setSelectedColor}
          handleClickProduct={handleClickProduct}
          depositOptionalList={depositOptionalList}
          selectedProductIds={selectedProductIds}
        />
      ) : (
        <SavingAllBankList
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          savingbaseList={savingbaseList}
          setSelectedColor={setSelectedColor}
          handleClickProduct={handleClickProduct}
          savingOptionalList={savingoptionalList}
          selectedProductIds={selectedProductIds}
        />
      )}
    </>
  );
}
export default AllBank;
