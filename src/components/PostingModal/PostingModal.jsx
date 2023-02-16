import { React, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authService, db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { boardTime } from "../../utils/utils";
import {
  Body,
  CloseButton,
  ContentInput,
  ErrorMessage,
  Header,
  ModalBackground,
  ModalContainer,
  SaveButton,
  TitleInput,
} from "./style";

// 카테고리 드롭박스 선택시
// https://velog.io/@niboo/React-%EB%93%9C%EB%A1%AD%EB%8B%A4%EC%9A%B4-%EB%A9%94%EB%89%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0
// const CATEGORIES = [
//     {id: null, value: '카테고리를 선택하세요'},
//     {id: 1, value: '10대 금융 노하우'},
//     {id: 2, value: '초년생 금융 노하우'},
// ]
// const CategorySelectHandler = (e) => {
// const [selectedDropValue, setSelectedDropValue] = useState('카테고리를 선택하세요')
// // onChange 이벤트가 발생한 target을 받아와 value값이 할당해준다.
// const handleDropProduct = e => e.target.value
// // 상품코드에 넣을 데이터
// setSelectedDropValue(PRODUCT_DATA.filter(el => el.value === value)[0].id);
// }

function PostingModal({ setPostingModalOpen, setBoards }) {
  //const navigate = useNavigate();
  //const [currentInput, setCurrentInput] = useState("");
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const CurrentUser = authService.currentUser;
  const { dateString } = boardTime();

  const newBoard = {
    // userId: CurrentUser?.email,
    // nickname: CurrentUser?.displayName,
    title,
    contents,
    userId: CurrentUser?.email,
    data: dateString,
  };

  // 게시판 본문 추가하기
  const AddBoard = async () => {
    await addDoc(collection(db, "boards"), newBoard);
    setTitle("");
    setContents("");
    setBoards((prev) => {
      return [...prev, newBoard];
    });
    setPostingModalOpen(false);
  };

  const CheckBoards = () => {
    if (!title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!contents) {
      alert("내용을 입력하세요.");
      return;
    }
    AddBoard();
    console.log(title, contents);
  };

  const ClosePostingModal = () => {
    setPostingModalOpen(false);
  };

  // const checkInput = (e) => {
  //   const input = e.target.value;
  //   setCurrentInput(input);
  // };

  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <CloseButton onClick={ClosePostingModal}>닫기</CloseButton>
          <div>글쓰기</div>
          <SaveButton
            alert="등록되었습니다."
            // onClick={() => navigate("/detail")}
            onClick={CheckBoards}
          >
            등록하기
          </SaveButton>
        </Header>

        <Body>
          <TitleInput
            ref={titleRef}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="제목을 입력해주세요"
          />
          <ContentInput
            ref={contentRef}
            onChange={(e) => {
              setContents(e.target.value);
            }}
            value={contents}
            placeholder="내용을 입력해주세요"
          />
          <ErrorMessage>카테고리를 선택해주세요</ErrorMessage>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default PostingModal;
