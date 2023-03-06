import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  listAll,
} from "firebase/storage";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  where,
  updateDoc,
} from "firebase/firestore";
import { authService, db, storage } from "../../config/firebase";
import {
  Body,
  CategoryButton,
  CategoryInput,
  CloseButton,
  ContentInput,
  ErrorMessage,
  Header,
  ModalBackground,
  ModalContainer,
  SaveButton,
  TitleInput,
  Category,
  Content,
  ImgUpload,
  TipperImgWrap,
  TipTitleWrap,
  TipperTitle,
  BoardWrap,
  BoardTitle,
  BoardContent,
  ButtonWrap,
} from "./style";
import { v4 as uuidv4 } from "uuid";
import Like from "../Community/Like";

function EditPostingModal({
  setEditPostingModalOpen,
  currentUid,
  currentUser,
  post,
  postId,
}) {
  const navigate = useNavigate();

  const confirm = () => {
    if (
      window.confirm(
        "입력하신 내용은 저장되지 않습니다. 이대로 나가시겠습니까?"
      )
    ) {
      setEditPostingModalOpen(false);
    } else {
      content.current.focus();
      return;
    }
  };

  const CloseEditPostingModal = () => {
    if (title || content) {
      confirm();
    }
    setEditPostingModalOpen(false);
  };

  //* 게시글 불러오기
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const contentRef = useRef(null);

  console.log("postId :>> ", postId);
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  let [keep, setKeep] = useState(false); // 수정버튼을 눌렀지만 수정을 안할 때를 대비

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
    setSelected(post.category);
    setImgUrl(post.imgUrl);
  }, []);

  const user = authService?.currentUser;
  const editPost = async () => {
    if (!title) {
      alert("제목을 입력해주세요.");
      titleRef.current.focus();
      return;
    }
    if (!selected) {
      alert("카테고리를 선택해주세요.");
      categoryRef.current.focus();
      return;
    }
    if (!content) {
      alert("본문을 입력해주세요.");
      contentRef.current.focus();
      return;
    }
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, {
      title: title,
      category: selected,
      imgUrl: imgUrl,
      content: content,
      createdAt: Date.now(),
    })
      .then(() => {
        alert("작성하신 글이 정상적으로 업로드 되었습니다.");
        setEditPostingModalOpen(false);
      })
      .catch((err) => {
        if (err.message.includes("already-in-use")) {
          alert("작성하신 글을 업로드 하지 못했습니다.");
        }
      });
  };

  //* 드롭다운 메뉴
  const options = [
    { value: "", text: "카테고리 선택" },
    { value: "금융상품 후기", text: "금융상품 후기" },
    { value: "팁과 노하우", text: "팁과 노하우" },
    { value: "공지사항", text: "공지사항" },
  ];
  // const [selected, setSelected] = useState(options[0].value);
  const selectCategory = (e) => {
    setSelected(e.target.value);
  };
  //* 사진 업로드 하기
  const [imageUpload, setImageUpload] = useState("");
  const fileRef = useRef(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };
  const onChangeUpload = (e) => {
    setImageUpload(e.target.files?.[0]);
  };
  useEffect(() => {
    const imageRef = ref(storage, uuidv4());
    if (!imageUpload) return;
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl(url);
      });
    });
  }, [imageUpload]);

  // 사진 불러오기
  const imageRef = ref(storage, uuidv4());

  useEffect(() => {
    listAll(imageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if (url === imgUrl) {
            setImgUrl(url);
          }
        });
      });
    });
  }, []);

  return (
    <>
      {post.userId === currentUid ? (
        <>
          <ModalBackground>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <TipperImgWrap>
                <img src={post?.imgUrl} alt="희망사진" />
              </TipperImgWrap>
              <TipTitleWrap>
                <Like currentUser={currentUser} id={post.id} post={post} />
                <TipperTitle>{post?.category}</TipperTitle>
              </TipTitleWrap>
              <BoardWrap>
                <BoardTitle>{post?.title}</BoardTitle>
                <div
                  style={{
                    fontSize: "14px",
                    opacity: "0.4",
                    height: "40px",
                  }}
                >
                  {post?.name}
                </div>
                <BoardContent>{post?.content} </BoardContent>
              </BoardWrap>
              <ButtonWrap>
                <button
                  onClick={() => {
                    setEditPostingModalOpen(post?.id);
                  }}
                >
                  수정
                </button>
                <button>삭제</button>
              </ButtonWrap>
            </ModalContainer>
          </ModalBackground>
        </>
      ) : (
        <>
          <ModalBackground>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <Header>
                <CloseButton onClick={CloseEditPostingModal}>취소</CloseButton>
                <div>팁 수정하기</div>
                <SaveButton alert="저장되었습니다." onClick={editPost}>
                  저장
                </SaveButton>
              </Header>

              <Body>
                <TitleInput
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  ref={titleRef}
                />
                <Category
                  value={selected}
                  onChange={selectCategory}
                  ref={categoryRef}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </Category>
                <ImgUpload type="file" onChange={onChangeUpload} />
                <Content>
                  <ContentInput
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    ref={contentRef}
                  />
                </Content>
              </Body>
            </ModalContainer>
          </ModalBackground>
        </>
      )}
    </>
  );
}

export default EditPostingModal;
