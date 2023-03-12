import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(67, 79, 101, 0.7);
  z-index: 999;
`;
export const ModalContainer = styled.div`
  /* 모달창 위치 */
  z-index: 999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
`;
export const ModalContents = styled.div`
  // TipperImgWrap, img 사진크기 min-width 동일하게!!!
  max-width: 884px;
  max-height: 741px;
  /* padding: 5%; */
  min-width: 60vw;
  min-height: 77vh;
  @media (max-width: 480px) {
    width: 288px;
    height: 546px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
`;
export const EditTitle = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
export const CloseButton = styled.button`
  background-color: rgba(233, 236, 242, 0.8);
  border: none;
  padding: 4px 16px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;

export const SaveButton = styled.button`
  border: 1px solid #6a24ff;
  box-sizing: border-box;
  padding: 4px 16px;
  border-radius: 5px;
  color: #6a24ff;

  :hover {
    background-color: #6a24ff;
    color: #ffffff;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5% 5% 5%;
  @media (min-width: 480px) {
    min-width: 50rem;
  }
`;

export const TitleInput = styled.input`
  border: none;
  border-bottom: 0.6px solid #c6c6c6;
  margin-bottom: 2%;
  padding-left: 10px;
  outline: none;
  flex: 80%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
export const Category = styled.select`
  display: flex;
  justify-content: flex-start;
  width: 200px;
  /* TODO: select 버튼 스타일 변경 필요 */

  border: 1px solid #e1e1e4;
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #505050;

  cursor: pointer;
  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #e1e1e4;
  border-radius: 5px;
`;
export const ContentInput = styled.textarea`
  display: block;
  border: none;
  width: 100%;
  min-height: 18rem;
  padding-left: 10px;
  outline: none;
  background: transparent;

  /* textArea 속성 */
  resize: none;
  /* columns: 50; */

  /* 스크롤바 설정*/
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 설정*/
  ::-webkit-scrollbar-thumb {
    background: #505050;
    border-radius: 25px;
  }

  /* 스크롤바 뒷 배경 설정*/
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
`;

export const ImgUpload = styled.input`
  margin: 30px 0 10px 0;
  border: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #505050;

  cursor: pointer;

  ::file-selector-button {
    width: 88px;
    height: 28px;
    background: #e1e1e4;
    border: 1px solid #e1e1e4;
    border-radius: 5px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;

//*게시글 이미지
export const TipperImgWrap = styled.div`
  border-radius: 10px;
  max-width: 884px;
  max-height: 286px;
  min-width: 60vw;
  min-height: 30vh;
  @media (max-width: 480px) {
    max-width: 288px;
    /* height: 546px; */
  }

  img {
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    max-width: 884px;
    max-height: 286px;
    min-width: 60vw;
    min-height: 30vh;
    @media (max-width: 480px) {
      max-width: 288px;
    }
  }
`;
//* 닫기 버튼이 이미지 위로 와있어야 함
export const EditCloseBtn = styled.button`
  // 원준변경
  position: absolute;
  top: 3%;
  right: 3%;
  background-color: rgba(233, 236, 242, 0.8);

  max-width: 58px;
  max-height: 27px;

  border: none;
  padding: 4px 16px;
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  /* line-height: 19px; */
  color: #505050;

  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
//* 팁퍼 카테고리, 좋아요
export const TipTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
//* 카테고리
export const TipperTitle = styled.div`
  font-weight: bold;
  border: 1px solid #e3dcff;
  border-radius: 20px;
  color: #6a24ff;
  padding: 7px 12px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

//* 카테고리 이하 본문
export const BoardWrap = styled.div`
  padding: 0 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 26px;

  /* color: #a3a3a3; */ // 얘 뭐야
`;

//*게시글 제목
export const BoardTitle = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 38px;
  color: #000000;
`;

//*게시글 본문 내용
export const BoardContent = styled.div`
  // 원준변경
  font-size: 14px;
  /* height: 15em; */
  height: 270px;
  overflow: auto;
  white-space: pre-wrap;

  word-break: break-all;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: #505050;

  /* 스크롤바 설정*/
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 설정*/
  ::-webkit-scrollbar-thumb {
    background: #505050;
    border-radius: 25px;
  }

  /* 스크롤바 뒷 배경 설정*/
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

// 수정 삭제 버튼 랩
export const ButtonWrap = styled.div`
  float: right;
  padding: 2%;
`;
