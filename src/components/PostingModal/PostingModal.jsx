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
  setDoc,
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
  ModalContents,
} from "./style";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";

function PostingModal({
  setPostingModalOpen,
  categorytab,
  posts,
  getPostList,
}) {
  const navigate = useNavigate();

  // const openScroll = useCallback(() => {
  //   document.body.style.removeProperty("overflow");
  // }, []);

  const confirm = () => {
    if (
      window.confirm(
        "입력하신 내용은 저장되지 않습니다. 이대로 나가시겠습니까?"
      )
    ) {
      // openScroll();
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
    // openScroll();
    setPostingModalOpen(false);
  };

  //* 드롭다운 메뉴
  const options = [
    { value: "", text: "카테고리 선택" },
    { value: "금융상품 후기", text: "금융상품 후기" },
    { value: "팁과 노하우", text: "팁과 노하우" },
    // { value: "공지사항", text: "공지사항" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  const selectCategory = (e) => {
    setSelected(e.target.value);
  };

  //* 시간 변수 지정
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  const dateNow = year + "." + month + "." + date;
  // console.log(year + "." + month + "." + date);

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
    const newId = uuidv4();
    await setDoc(doc(db, "posts", newId), {
      id: newId,
      userId: user?.uid,
      title: inputTitle,
      category: selected,
      categorytab,
      content: inputContent,
      imgUrl: image,
      name: user?.displayName ?? "익명",
      createdAt: Date.now(),
      like: 0,
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
    getPostList();
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
    const imageRef = ref(storage, uuidv4());
    if (!imageUpload) return;
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
      });
    });
  }, [imageUpload]);

  // 사진 불러오기
  const imageRef = ref(storage, uuidv4());

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
        <ModalContents>
          <Header>
            <CloseButton onClick={ClosePostingModal}>취소</CloseButton>
            <div>팁 작성하기</div>
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
              maxLength={30}
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
                onChange={(e) => setInputContent(e.target.value)}
                value={inputContent}
                ref={contentRef}
                placeholder="판매, 광고 행위의 게시글은 숨김처리될 수 있습니다. "
                maxLength={1000}
              />
            </Content>
          </Body>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
}

export default PostingModal;
