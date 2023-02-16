import { updateCurrentUser } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { CardContainer, StyledCard } from "../../pages/MyPage/style";

const BookmarkPrdtList = () => {
  const [items, setItems] = useState([]);

  // 유저가 좋아요한 영상 가져오기
  const getData = async () => {
    const q = query(
      collection(db, "bookmarks"),
      where("userId", "==", updateCurrentUser?.uid)
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
  }, []);

  return (
    <CardContainer>
      {items.map((item) => (
        <StyledCard item={item} key={item.id} />
      ))}
    </CardContainer>
  );
};

export default BookmarkPrdtList;
