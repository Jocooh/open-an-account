import React, { useState } from "react";
import AllBankList from "../AllBankList/AllBankList";
import SavingAllBankList from "../AllBankList/SavingAllBankList";

function AllBank({
  activeItem,
  productTypes,
  setActiveItem,
  savingbaseList,
  depositbaseList,
  setSelectedColor,
  handleClickProduct,
  savingoptionalList,
  depositOptionalList,
  selectedProductIds,
}) {
  const [color, setColor] = useState([]);
  return (
    <>
      {productTypes === 1 ? (
        <AllBankList
          productTypes={productTypes}
          setColor={setColor}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          depositbaseList={depositbaseList}
          setSelectedColor={setSelectedColor}
          handleClickProduct={handleClickProduct}
          depositOptionalList={depositOptionalList}
          selectedProductIds={selectedProductIds}
        />
      ) : (
        <SavingAllBankList
          productTypes={productTypes}
          setColor={setColor}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          savingbaseList={savingbaseList}
          handleClickProduct={handleClickProduct}
          savingOptionalList={savingoptionalList}
          selectedProductIds={selectedProductIds}
        />
      )}
    </>
  );
}
export default AllBank;
