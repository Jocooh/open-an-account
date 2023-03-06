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
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { authService } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import EditPostingModal from "../EditPostingModal/EditPostingModal";
import Like from "../Community/Like";


const Tipper = ({ posts, result }) => {
  //* 로그인 한 사람 확인
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);
  const currentUid = user.uid;

  
  //* userId === currentUid 일때 게시글의 id값 넣어줌
  const [editPostingModalOpen, setEditPostingModalOpen] = useState("");
  const currentUser = authService.currentUser; //이거 좋아요에서 사용하는 변수입니다.
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

  // 게시글 삭제
  const board = posts?.map((i) => i);
  const onClickDelete = async (id) => {
    console.log(id);
    const ok = window.confirm(" 정말 삭제하시겠습니까?");
    if (ok) {
      try {
        await deleteDoc(doc(db, "posts", id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      {result?.map((i) => {
        return (

          <>
            {editPostingModalOpen === i.id ? (
              <EditPostingModal
                setEditPostingModalOpen={setEditPostingModalOpen}
                postId={i.id}
                post={i}
              />
            ) : (
              <TipperWrap key={i?.id}>
                <TipperImgWrap>
                  <img src={i?.imgUrl} alt="희망사진" />
                </TipperImgWrap>
                <TipTitleWrap>
              <Like currentUser={currentUser} id={i.id} post={i} />
                  <TipperTitle>{i?.category}</TipperTitle>
                </TipTitleWrap>
                <BoardWrap>
                  <BoardTitle>{i?.title}</BoardTitle>
                  <div
                    style={{
                      fontSize: "14px",
                      opacity: "0.4",
                      height: "40px",
                    }}
                  >
                    {i?.name}
                  </div>
                  <BoardContent>
                    {i?.content.substr(0, 400) + "..."}{" "}
                  </BoardContent>
                </BoardWrap>
                {i.userId === currentUid && (
                  <ButtonWrap>
                    <button
                      onClick={() => {
                        setEditPostingModalOpen(i?.id);
                      }}
                    >
                      수정
                    </button>
                    <button
                  onClick={() => {
                    onClickDelete(i.id);
                  }}
                >
                  삭제
                </button>
                  </ButtonWrap>
                )}
              </TipperWrap>

            )}
          </>
        );
      })}
    </>
  );
};

export default Tipper;
