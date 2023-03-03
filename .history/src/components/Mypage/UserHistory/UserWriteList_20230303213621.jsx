import { uuidv4 } from "@firebase/util";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { UserWriteWrapper } from "../../../pages/MyPage/style";

import UserWrite from "./UserWrite";

function UserWriteList({ currentUser }) {
  const [boards, setBoards] = useState([]);

  const getPostlist = () => {
    const q = query(
      collection(db, "posts"),
      where("id", "==", currentUser.uid),
      orderBy("createdAt", "desc")
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
    <UserWriteWrapper>
      {boards.map((board) => (
        <UserWrite board={board} key={board.createdAt} />
      ))}
    </UserWriteWrapper>
  );
}

export default UserWriteList;
