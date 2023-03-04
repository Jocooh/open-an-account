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
import EditPostingModal from "../EditPostingModal/EditPostingModal";

const Tipper = ({ posts, result }) => {
  //* 로그인 한 사람 확인
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

  const [editPostingModalOpen, setEditPostingModalOpen] = useState(false);
  const openEditPostingModal = () => {
    setEditPostingModalOpen(true);
  };

  useEffect(() => {
    toggleButton();
  }, []);

  return (
    <>
      {editPostingModalOpen ? (
        <EditPostingModal
          setEditPostingModalOpen={setEditPostingModalOpen}
          result={result}
        />
      ) : (
        result?.map((i) => {
          return (
            <TipperWrap key={i?.id}>
              <TipperImgWrap>
                <img src={i?.imgUrl} alt="희망사진" />
              </TipperImgWrap>
              <TipTitleWrap>
                <img src={require("../../assets/mainpage/like.png")} />
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
                <BoardContent>{i?.content}</BoardContent>
              </BoardWrap>
              {toggleButton && (
                <ButtonWrap>
                  <button onClick={openEditPostingModal}>수정</button>
                  <button>삭제</button>
                </ButtonWrap>
              )}
            </TipperWrap>
          );
        })
      )}
    </>
  );
};

export default Tipper;
