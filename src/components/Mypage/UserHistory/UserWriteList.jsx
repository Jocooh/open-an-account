import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { UseListeWrapper } from "../../../pages/MyPage/style";

import UserWrite from "./UserWrite";

function UserWriteList({ currentUser }) {
  const [boards, setBoards] = useState([]);
  // console.log(currentUser);
  const getPostlist = () => {
    const q = query(
      collection(db, "posts"),
      where("userId", "==", currentUser.uid)
      // orderBy("createdAt", "desc")
    );
    const array = [];
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) =>
        array.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setBoards(array);
    });
  };

  useEffect(() => {
    getPostlist();
  }, []);

  return (
    <UseListeWrapper>
      {boards.map((board) => (
        <UserWrite board={board} key={board.id} currentUser={currentUser} />
      ))}
    </UseListeWrapper>
  );
}

export default UserWriteList;
