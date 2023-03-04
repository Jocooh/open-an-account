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
} from "./style";
import { v4 as uuidv4 } from "uuid";

function EditPostingModal({ setEditPostingModalOpen, result }) {
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

  //* 게시글 수정
  console.log("result :>> ", result);
  const [title, setTitle] = useState(result[0].title);
  const [selected, setSelected] = useState(result[0].category);
  const [imgUrl, setImgUrl] = useState(result[0].imgUrl);
  const [content, setContent] = useState(result[0].content);

  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const contentRef = useRef(null);

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
    const docRef = doc(db, "posts", result[0].id);
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
    <ModalBackground>
      <ModalContainer>
        <Header>
          <CloseButton onClick={CloseEditPostingModal}>닫기</CloseButton>
          <div>글 작성하기</div>
          <SaveButton alert="저장되었습니다." onClick={editPost}>
            완료
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
          <Content>
            <ImgUpload type="file" onChange={onChangeUpload} />
            <ContentInput
              onChange={(e) => setContent(e.target.value)}
              value={content}
              ref={contentRef}
            />
          </Content>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default EditPostingModal;
