import React, { useState, useEffect, useRef } from "react";
import {
  TipperWrap,
  TipTitleWrap,
  TipperTitle,
  TipperImgWrap,
  BoardWrap,
  BoardTitle,
  BoardContent,
  ButtonWrap,
} from "../../pages/MainPage/style";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { authService } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Tipper = ({ posts, result }) => {
  // const user = authService.currentUser;
  // console.log("user :>> ", user);
  // console.log("currentUid :>> ", user.uid);
  // console.log("posts :>> ", posts);
  // console.log("result :>> ", result);
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);
  const currentUid = user.uid;

  const [toggleBtn, setToggleBtn] = useState(false);

  //* 본인이 쓴 글인지 검사
  const post = posts?.map((post) => post.userId);
  const toggleButton = () => {
    if (post === currentUid) {
      setToggleBtn(true);
    } else {
      setToggleBtn(false);
    }
  };

  //* 수정 함수
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [editBox, setEditBox] = useState(false);
  // const [editValue, setEditValue] = useState([
  //   posts.title,
  //   posts.category,
  //   posts.imgUrl,
  //   posts.content,
  // ]);

  // const updatePost = async ({ title, category, imgUrl, content }) => {
  // if (
  //   editValue[0] == "" &&
  //   editValue[1] == "" &&
  //   editValue[2] == "" &&
  //   editValue[3] == ""
  // )
  //   return;
  //* 이 함수가 실행되면 textArea가 될 수 있나요!!
  //   const docRef = doc(db, "posts", posts.id);
  //   await updateDoc(docRef, {
  //     title: editValue[0],
  //     category: editValue[1],
  //     imgUrl: editValue[2],
  //     content: editValue[3],
  //   });
  //   setToggleBtn(false);
  // };

  useEffect(() => {
    toggleButton();
  }, []);

  return (
    <>
      {result?.map((i) => {
        return (
          <TipperWrap key={i?.id}>
            <TipperImgWrap>
              <img src={i?.imgUrl} alt="희망사진" ref={imageRef} />
            </TipperImgWrap>
            <TipTitleWrap>
              <img src={require("../../assets/mainpage/like.png")} />
              <TipperTitle ref={categoryRef}>{i?.category}</TipperTitle>
            </TipTitleWrap>
            <BoardWrap>
              <BoardTitle ref={titleRef}>{i?.title}</BoardTitle>
              <div
                style={{
                  fontSize: "14px",
                  opacity: "0.4",
                  height: "40px",
                }}
              >
                {i?.name}
              </div>
              <BoardContent ref={contentRef}>{i?.content}</BoardContent>
            </BoardWrap>
            {toggleButton && (
              <ButtonWrap>
                <button>수정</button>
                <button>삭제</button>
              </ButtonWrap>
            )}
          </TipperWrap>
        );
      })}
    </>
  );
};

export default Tipper;
