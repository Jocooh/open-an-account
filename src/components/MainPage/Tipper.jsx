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
  MoreButton,
} from "../../pages/MainPage/style";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { authService } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import EditPostingModal from "../EditPostingModal/EditPostingModal";
import Like from "../Community/Like";

const Tipper = ({ posts, result, getPostList }) => {
  //* 로그인 한 사람 확인
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);

  const currentUid = user?.uid;

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

  useEffect(() => {
    toggleButton();
  }, []);

  return (
    <>
      {result?.map((i, idx) => {
        return (
          <div key={i?.id}>
            {editPostingModalOpen === i.id ? (
              <EditPostingModal
                setEditPostingModalOpen={setEditPostingModalOpen}
                postId={i.id}
                post={i}
                currentUid={currentUid}
                currentUser={currentUser}
                getPostList={getPostList}
              />
            ) : (
              <div>
                <TipperWrap key={i?.id}>
                  {i.imgUrl ? (
                    <TipperImgWrap>
                      <img src={i?.imgUrl} alt="희망사진" />
                    </TipperImgWrap>
                  ) : null}

                  <TipTitleWrap>
                    <TipperTitle>{i?.category}</TipperTitle>
                    <Like currentUser={currentUser} id={i.id} post={i} />
                  </TipTitleWrap>
                  <BoardWrap onClick={() => setEditPostingModalOpen(i.id)}>
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
                      {i?.content.length > 400
                        ? i?.content.substr(0, 400) + " ..."
                        : i?.content}{" "}
                    </BoardContent>
                  </BoardWrap>
                </TipperWrap>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Tipper;
