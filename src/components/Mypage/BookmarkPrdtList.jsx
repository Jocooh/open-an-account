import { updateCurrentUser } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { StyledCard } from "../../pages/MyPage/style";
import BookmarkPrdtItem from "./BookmarkPrdtItem";

const BookmarkPrdtList = ({ currentUser }) => {
  const [items, setItems] = useState([]);

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
    console.log(items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {" "}
      {items.map((item) => (
        <BookmarkPrdtItem item={item} key={item.productName} />
      ))}
    </>
  );
};

export default BookmarkPrdtList;
