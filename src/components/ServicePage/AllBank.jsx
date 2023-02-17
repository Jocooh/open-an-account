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
}) {
  return (
    <>
      {productTypes === 1 ? (
        <AllBankList
          depositOptionalList={depositOptionalList}
          depositbaseList={depositbaseList}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ) : (
        <SavingAllBankList
          savingbaseList={savingbaseList}
          savingOptionalList={savingoptionalList}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
    </>
  );
}
export default AllBank;
