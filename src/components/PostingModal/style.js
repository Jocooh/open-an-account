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
// export const ModalContents = styled.div`
//   max-width: 884px;
//   max-height: 741px;
//   min-width: 288px;
//   min-height: 546px;
//   padding: 5%;
// `;
export const ModalContents = styled.div`
  max-width: 884px;
  max-height: 741px;
  /* padding: 5%; */
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

export const CloseButton = styled.button`
  background-color: rgba(233, 236, 242, 0.8);
  border: none;
  box-sizing: border-box;
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

  max-width: 829px;
  min-width: 254px;
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

  /* background-color: rgba(233, 236, 242, 0.8); */
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
  /* background-color: rgba(233, 236, 242, 0.8); */
  border: 1px solid #e1e1e4;
  border-radius: 5px;
  columns: 1;
`;
export const ContentInput = styled.textarea`
  border: none;
  height: 40vh;
  margin: 10px 0;
  padding-left: 10px;
  outline: none;
  background: transparent;

  /* textArea 속성 */
  resize: none;

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
    height: 20vh;
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
