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
  //* userId === currentUid 일때 게시글의 id값 넣어줌
  const [editPostingModalOpen, setEditPostingModalOpen] = useState("");

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
                    <button>삭제</button>
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
