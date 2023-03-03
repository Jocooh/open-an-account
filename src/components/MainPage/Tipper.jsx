import React from "react";
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

const Tipper = ({ boards, result }) => {
  return (
    <>
      {result?.map((i) => {
        return (
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
              <BoardContent>{i?.content}</BoardContent>
            </BoardWrap>
            <ButtonWrap>
              <button>수정</button>
              <button>삭제</button>
            </ButtonWrap>
          </TipperWrap>
        );
      })}
    </>
  );
};

export default Tipper;
