import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./style";

function PostingModal({ setPostingModalOpen }) {
  const navigate = useNavigate();

  const ClosePostingModal = () => {
    setPostingModalOpen(false);
  };

  const [currentInput, setCurrentInput] = useState("");
  const checkInput = (e) => {
    const input = e.target.value;
    setCurrentInput(input);
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
    if (e.target.value === options[0].value) {
      alert("카테고리를 선택해주세요.");
    } else {
      setSelected(e.target.value);
    }
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <CloseButton onClick={ClosePostingModal}>닫기</CloseButton>
          <div>글 작성하기</div>
          <SaveButton
            alert="등록되었습니다."
            onClick={() => navigate("/detail")}
          >
            등록
          </SaveButton>
        </Header>

        <Body>
          <TitleInput
            onChange={checkInput}
            value={currentInput}
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
            <ContentInput
              onChange={checkInput}
              value={currentInput}
              placeholder="사진은 최대 5장 올릴 수 있습니다."
            />
          </Content>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default PostingModal;
