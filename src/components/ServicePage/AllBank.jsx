//AllBank.jsx

import React from "react";
import AllBankList from "../AllBankList/AllBankList";
import SavingAllBankList from "../AllBankList/SavingAllBankList";

function AllBank({
  productTypes,
  depositOptionalList,
  depositbaseList,
  activeItem,
  setActiveItem,
  savingbaseList,
  savingoptionalList,
  handleClickProduct,
  myBookmarkProducts,
}) {
  return (
    <>
      {productTypes === 1 ? (
        <AllBankList
          depositOptionalList={depositOptionalList}
          depositbaseList={depositbaseList}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleClickProduct={handleClickProduct}
          myBookmarkProducts={myBookmarkProducts} // my bookmark products
        />
      ) : (
        <SavingAllBankList
          savingbaseList={savingbaseList}
          savingOptionalList={savingoptionalList}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleClickProduct={handleClickProduct}
          myBookmarkProducts={myBookmarkProducts} // my bookmark products
        />
      )}
    </>
  );
}
export default AllBank;
