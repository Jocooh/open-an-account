import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(67, 79, 101, 0.7);
  z-index: 999;

  /* display: block;
  justify-content: center; */
`;

export const ModalContainer = styled.div`
  /* 모달창 크기 */
  z-index: 999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 모달 배치 */

  /* 모달창 디자인 */
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
`;
export const ModalContents = styled.div`
  width: 900px;
  height: 670px;
  padding: 20px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const TitleInput = styled.input`
  border: none;
  border-bottom: 0.6px solid #c6c6c6;
  /* min-width: 200px; */
  /* width: 350px; */
  margin: 20px 10px 20px 0;
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
  min-height: 25em;
  margin: 10px 0;
  padding-left: 10px;
  outline: none;
  background: transparent;

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

// 팁퍼 이미지 랩
export const TipperImgWrap = styled.div`
  border: 1px solid #dedede;
  height: 250px;
  border-radius: 10px;
  background-color: whitesmoke;

  img {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 250px;
  }
`;

// 팁퍼제목 랩
export const TipTitleWrap = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// 팁퍼제목
export const TipperTitle = styled.span`
  font-weight: bold;
  border: 2px solid #e3dcff;
  border-radius: 20px;
  color: #6a24ff;
  padding: 10px;
`;

// 후기부분 랩
export const BoardWrap = styled.div``;

// 후기 제목
export const BoardTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

// 후기 내용
export const BoardContent = styled.div`
  margin-top: 15px;
  font-size: 14px;
  height: 13em;
  overflow: auto;
  white-space: pre-wrap;

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

// 수정 삭제 버튼 랩
export const ButtonWrap = styled.div`
  float: right;
`;
