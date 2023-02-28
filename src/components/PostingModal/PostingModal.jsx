import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadString,
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
} from "./style";
import { updateProfile } from "firebase/auth";

function PostingModal({ setPostingModalOpen }) {
  const navigate = useNavigate();

  const ClosePostingModal = () => {
    setPostingModalOpen(false);
  };

  //* 드롭다운 메뉴
  const options = [
    { value: "", text: "카테고리 선택" },
    { value: "금융상품 후기", text: "금융상품 후기" },
    { value: "팁과 노하우", text: "팁과 노하우" },
    { value: "공지사항", text: "공지사항" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  const selectCategory = (e) => {
    setSelected(e.target.value);
  };

  //* 등록버튼 - 제목, 카테고리, 내용 모두 선택해야 able
  // const [disabled, setDisabled] = useState(true);

  //* 게시글 작성
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const contentRef = useRef(null);
  const user = authService?.currentUser;
  const addPost = async () => {
    if (!inputTitle) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!selected) {
      alert("카테고리를 선택해주세요.");
      return;
    }
    if (!inputContent) {
      alert("본문을 입력해주세요.");
      return;
    }
    await addDoc(collection(db, "posts"), {
      id: user?.uid,
      title: inputTitle,
      category: selected,
      content: inputContent,
      imgUrl: image,
      name: user?.displayName ?? "익명",
      createdAt: Date.now(),
    });
    setSelected(options[0].value);
    setInputTitle("");
    setInputContent("");
    // setDisabled(false);
    setPostingModalOpen(false);
  };

  //* 사진 업로드 하기
  const [imageUpload, setImageUpload] = useState("");
  const [image, setImage] = useState("");
  const fileRef = useRef(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };
  const onChangeUpload = (e) => {
    setImageUpload(e.target.files?.[0]);
  };
  useEffect(() => {
    const imageRef = ref(storage, `${user?.uid}`);
    if (!imageUpload) return;
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
      });
    });
  }, [imageUpload]);

  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <CloseButton onClick={ClosePostingModal}>닫기</CloseButton>
          <div>글 작성하기</div>
          <SaveButton
            alert="등록되었습니다."
            onClick={addPost}
            // disabled={disabled}
          >
            등록
          </SaveButton>
        </Header>

        <Body>
          <TitleInput
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
            ref={titleRef}
            placeholder="제목을 입력해주세요"
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
          <Content>
            <ImgUpload type="file" onChange={onChangeUpload} />
            <ContentInput
              onChange={(e) => setInputContent(e.target.value)}
              value={inputContent}
              ref={contentRef}
              placeholder="내용을 입력해주세요."
            />
          </Content>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default PostingModal;
