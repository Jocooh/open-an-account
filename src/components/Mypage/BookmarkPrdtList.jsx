import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import BookmarkPrdtItem from "./BookmarkPrdtItem";

const BookmarkPrdtList = ({ currentUser, sortMonths }) => {
  const [items, setItems] = useState([]);
  const [allOptionList, setAllOptionList] = useState([]);

  const handleButtonClick = async () => {
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
    // console.log(items);
  };

  useEffect(() => {
    handleButtonClick();
    getData();
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
