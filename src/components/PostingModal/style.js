import styled from "styled-components";

export const ModalBackground = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  /* background: rgba(67, 79, 101, 0.7); */
`;

export const ModalContainer = styled.div`
  /* 모달창 크기 */
  width: 900px;
  /* height: 700px; */
  padding: 20px;
  /* 모달 배치 */
  /* translate는 본인의 크기 기준으로 작동한다. */
  /* position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); */

  /* 모달창 디자인 */
  background-color: #fff;
  border-radius: 10px;
  /* padding: 15px 35px 10px 35px; */
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
export const ContentInput = styled.textarea`
  display: block;
  border: none;
  min-height: 486px;
  margin: 10px 0;
  padding-left: 10px;
  outline: none;
  background: transparent;
`;
export const ImgUpload = styled.div`
  margin: 30px 0 10px 0;
  /* border: none; */
  /* border-bottom: 0.6px solid #c6c6c6; */
  .button {
    background: #e1e1e4;

    border: 1px solid #e1e1e4;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #505050;

    cursor: pointer;
  }
  /* input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  } */
`;

export const ErrorMessage = styled.div`
  color: red;
`;
