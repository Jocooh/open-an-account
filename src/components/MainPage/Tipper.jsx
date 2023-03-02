import React from "react";
import {
  TipperWrap,
  TipTitleWrap,
  TipperTitle,
  TipperImgWrap,
  BoardWrap,
  BoardTitle,
  BoardContent,
} from "../../pages/MainPage/style";

const Tipper = ({ boards, result }) => {
  return (
    <>
      {result?.map((i) => {
        return (
          <TipperWrap key={i?.id}>
            <TipTitleWrap>
              <img src={require("../../assets/mainpage/script.png")} />
              <TipperTitle>{i?.category}</TipperTitle>
            </TipTitleWrap>
            <TipperImgWrap>
              <img src={i?.imgUrl} alt="희망사진" />
            </TipperImgWrap>
            <BoardWrap>
              <div
                style={{
                  fontSize: "12px",
                  opacity: "0.4",
                  marginTop: "20px",
                }}
              >
                {i?.createdAt}
              </div>
              <BoardTitle>{i?.title}</BoardTitle>
              <div
                style={{
                  fontSize: "12px",
                  opacity: "0.4",
                  height: "50px",
                }}
              >
                {i?.name}
              </div>
              <BoardContent>{i?.content}</BoardContent>
            </BoardWrap>
          </TipperWrap>
        );
      })}
    </>
  );
};

export default Tipper;
