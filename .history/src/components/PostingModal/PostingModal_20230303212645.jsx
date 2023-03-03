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
import { v4 as uuidv4 } from "uuid";

function PostingModal({ setPostingModalOpen, categorytab, posts }) {
  const navigate = useNavigate();

  const confirm = () => {
    if (
      window.confirm(
        "입력하신 내용은 저장되지 않습니다. 이대로 나가시겠습니까?"
      )
    ) {
      setPostingModalOpen(false);
    } else {
      inputContent.current.focus();
      return;
    }
  };
  const ClosePostingModal = () => {
    if (inputTitle || inputContent) {
      confirm();
    }
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
      titleRef.current.focus();
      return;
    }
    if (!selected) {
      alert("카테고리를 선택해주세요.");
      categoryRef.current.focus();
      return;
    }
    if (!inputContent) {
      alert("본문을 입력해주세요.");
      contentRef.current.focus();
      return;
    }
    await addDoc(collection(db, "posts"), {
      id: uuidv4(),
      userId: user?.uid,
      title: inputTitle,
      category: selected,
      categorytab,
      content: inputContent,
      imgUrl: image,
      name: user?.displayName ?? "익명",
      createdAt: Date.now(),
    })
      .then(() => {
        alert("작성하신 글이 정상적으로 업로드 되었습니다.");
        setSelected(options[0].value);
        setInputTitle("");
        setInputContent("");
        setPostingModalOpen(false);
      })
      .catch((err) => {
        if (err.message.includes("already-in-use")) {
          alert("작성하신 글을 업로드 하지 못했습니다.");
        }
      });
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
<<<<<<< HEAD
    const imageRef = ref(storage, `${user?.uuidv4()}`);
=======
    const imageRef = ref(storage, uuidv4());
>>>>>>> 2fe4f85fa0ca4d0c2200c43c9c60eff8e5ccefea
    if (!imageUpload) return;
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
      });
    });
  }, [imageUpload]);

  // 사진 불러오기
<<<<<<< HEAD
  const imageRef = ref(storage, `${user?.uuidv4()}/`);
=======
  const imageRef = ref(storage, uuidv4());
>>>>>>> 2fe4f85fa0ca4d0c2200c43c9c60eff8e5ccefea

  useEffect(() => {
    listAll(imageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if (url === image) {
            setImage(url);
          }
        });
      });
    });
  }, []);

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
