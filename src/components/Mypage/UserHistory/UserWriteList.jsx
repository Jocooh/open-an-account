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
  const postsRef = collection(db, "posts");
  const getPostlist = () => {
    const q = query(postsRef, where("userId", "==", currentUser?.uid));
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

  const sortWriteList = boards?.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  return (
    <UseListeWrapper>
      {sortWriteList.map((board) => (
        <UserWrite board={board} key={board.id} currentUser={currentUser} />
      ))}
    </UseListeWrapper>
  );
}

export default UserWriteList;
