import React, { useState } from "react";
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

  // const [currentInput, setCurrentInput] = useState("");
  // const checkInput = (e) => {
  //   const input = e.target.value;
  //   setCurrentInput(input);
  // };

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

  //* 게시글 작성
  // const db = getDatabase();
  // const postListRef = ref(db, 'posts');
  // const newPostRef = push(postListRef);
  // set(newPostRef, {
  //     // ...
  // });
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const user = authService?.currentUser;
  const addPost = async () => {
    if (!inputTitle) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!selected) {
      alert("카테고리를 선택해주세요.");
    }
    if (!inputContent) {
      alert("본문을 입력해주세요.");
      return;
    }
    await addDoc(collection(db, "posts"), {
      id: user?.uid,
      category: selected,
      content: inputContent,
      imgUrl: imageList,
      name: user?.displayName ?? "익명",
      createdAt: Date.now(),
    });
    setSelected(options[0].value);
    setInputTitle("");
    setInputContent("");
    setPostingModalOpen(false);
  };

  //* 사진 업로드 하기
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const upload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // 업로드 되자마자 뜨게 만들기
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
      //
    });
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <CloseButton onClick={ClosePostingModal}>닫기</CloseButton>
          <div>글 작성하기</div>
          <SaveButton alert="등록되었습니다." onClick={addPost}>
            등록
          </SaveButton>
        </Header>

        <Body>
          <TitleInput
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
            placeholder="제목을 입력해주세요"
          />
          <Category value={selected} onChange={selectCategory}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Category>
          <Content>
            <ImgUpload type="file" onChange={upload} />
            <ContentInput
              onChange={(e) => setInputContent(e.target.value)}
              value={inputContent}
              placeholder="사진은 최대 5장 올릴 수 있습니다."
            />
          </Content>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default PostingModal;
