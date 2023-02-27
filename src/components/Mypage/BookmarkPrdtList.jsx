import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { memo, useEffect, useMemo, useState } from "react";
import { authService, db } from "../../config/firebase";
import BookmarkPrdtItem from "./BookmarkPrdtItem";

const BookmarkPrdtList = ({ currentUser, sortMonths }) => {
  const [items, setItems] = useState([]);
  const [allOptionList, setAllOptionList] = useState([]);

  const handleButtonClick = async () => {
    // console.log("또 렌더링");
    const optionListPromises = [
      getDocs(collection(db, "DEPOSIT_OPTION_LIST")),
      getDocs(collection(db, "SAVING_OPTION_LIST")),
    ];

    const [optionListSnapshots] = await Promise.all([
      Promise.all(optionListPromises),
    ]);
    const allOptionList = [];
    optionListSnapshots.forEach((snapshot, index) => {
      snapshot.forEach((doc) => {
        const newProduct = {
          id: doc.id,
          ...doc.data(),
        };
        allOptionList.push(newProduct);
      });
    });
    setAllOptionList(allOptionList);
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

  return (
    <BookmarkPrdtItem
      items={items}
      allOptionList={allOptionList}
      sortMonths={sortMonths}
    />
  );
};

export default BookmarkPrdtList;
