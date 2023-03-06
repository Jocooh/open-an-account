import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  FieldValue,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
// import { likeState } from "../../store/modules/Atom";

function Like({ currentUser, post, id }) {
  //커뮤니티 페이지에서 id는 필드명
  // console.log(id);
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [likenum, setLikenum] = useState(0);
  const [recoilLike, setRecoilLike] = useState(0);
  //로그인 없이 좋아요 클릭하면 로그인 유도
  // console.log(newLike);
  const LikeHandler = async (id) => {
    if (!currentUser) {
      if (window.confirm("You are not logged in")) {
        return navigate("/login");
      } else {
        return;
      }
    }
    const likeNumRef = doc(db, "posts", id);
    const newLike = `${id}${currentUser.uid}`;
    if (!like) {
      await setDoc(doc(db, "likes", newLike), {
        userId: currentUser.uid,
        name: post.name,
        postId: post.id,
        createdAt: new Date().toISOString(),
        imgUrl: post.imgUrl,
        title: post.title,
        content: post.content,
        category: post.category,
        docId: id,
      }).then(updateDoc(likeNumRef, { like: recoilLike + 1 }));
      setLike(true);
    } else {
      const haveLike = doc(db, "likes", newLike);
      deleteDoc(haveLike);
      setLike(false);
      updateDoc(likeNumRef, { like: recoilLike - 1 });
    }
  };

  const getLikes = async () => {
    const newLike = `${id}${currentUser.uid}`;
    const docRef = doc(db, "likes", newLike);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLike(true);
    }
  };
  //갯수가져오기
  const LikeLength = async () => {
    const q = query(collection(db, "likes"), where("docId", "==", id));
    const array = [];
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      setLikenum(array.length);
      setRecoilLike(array.length);
    });
  };

  //좋아요를 누를때만 함수 실행
  useEffect(() => {
    getLikes();
    LikeLength();
  }, [like]);

  return (
    <div style={{ display: "flex", gap: "3px" }}>
      <p>{likenum}</p>
      {like === true ? (
        <BsFillHeartFill
          fontSize="20px"
          color="#6A24FF"
          onClick={() => {
            LikeHandler(id);
          }}
          cursor="pointer"
        />
      ) : (
        <BsFillHeartFill
          fontSize="20px"
          color="#dedede"
          onClick={() => {
            LikeHandler(id);
          }}
          cursor="pointer"
        />
      )}
    </div>
  );
}

export default Like;
