import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { memo, useEffect, useMemo, useState } from "react";
import { authService, db } from "../../config/firebase";
import BookmarkPrdtItem from "./BookmarkPrdtItem";

const BookmarkPrdtList = ({ currentUser, sortMonths, productTypes }) => {
  const [items, setItems] = useState([]);
  const [depositOptionalList, setdepositOptionalList] = useState([]);
  const [savingoptionalList, setSavingoptionalList] = useState([]);
  const handleButtonClick = async () => {
    const optionListPromises = [
      getDocs(collection(db, "DEPOSIT_OPTION_LIST")),
      getDocs(collection(db, "SAVING_OPTION_LIST")),
    ];

    const [optionListSnapshots] = await Promise.all([
      Promise.all(optionListPromises),
    ]);
    const depositOptionalList = [];
    const savingoptionalList = [];
    optionListSnapshots.forEach((snapshot, index) => {
      snapshot.forEach((doc) => {
        const newProduct = {
          id: doc.id,
          ...doc.data(),
        };
        if (index === 0) {
          depositOptionalList.push(newProduct);
        } else {
          savingoptionalList.push(newProduct);
        }
      });
    });
    setdepositOptionalList(depositOptionalList);
    setSavingoptionalList(savingoptionalList);
    // setAllOptionList(allOptionList);
  };

  // 유저가 북마크한 item 가져오기
  const getData = async () => {
    const q = query(
      collection(db, "bookmarks"),
      where("userId", "==", currentUser?.uid)
    );
    const querySnapshot = await getDocs(q);
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    setItems(dataArray);
  };

  useEffect(() => {
    getData();
    handleButtonClick();
  }, []);

  const filterDeposit = items?.filter((item) => item.productTypes === 1);
  const filterSaving = items?.filter((item) => item.productTypes === 2);

  return productTypes === 1 ? (
    <BookmarkPrdtItem
      items={filterDeposit}
      allOptionList={depositOptionalList}
      sortMonths={sortMonths}
      productTypes={productTypes}
    />
  ) : (
    <BookmarkPrdtItem
      items={filterSaving}
      allOptionList={savingoptionalList}
      sortMonths={sortMonths}
      productTypes={productTypes}
    />
  );
};

export default BookmarkPrdtList;
