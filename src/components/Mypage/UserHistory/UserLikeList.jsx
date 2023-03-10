import { collection, onSnapshot, query, where } from "firebase/firestore";
import { orderBy } from "lodash";

import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { UseListeWrapper } from "../../../pages/MyPage/style";
import UserLike from "./UserLike";

function UserLikeList({ currentUser }) {
  const [likes, setLikes] = useState([]);
  //내가 좋아요한 글
  const getLikelist = () => {
    const q = query(
      collection(db, "likes"),
      orderBy("createdAt"),
      where("userId", "==", currentUser.uid)
    );
    const array = [];
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) =>
        array.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setLikes(array);
    });
  };

  useEffect(() => {
    getLikelist();
  }, []);
  return (
    <UseListeWrapper>
      <UserLike likes={likes} currentUser={currentUser} />
    </UseListeWrapper>
  );
}

export default UserLikeList;
