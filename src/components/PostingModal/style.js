import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(67, 79, 101, 0.7);
`;

export const ModalContainer = styled.div`
  /* 모달창 크기 */
  width: 1331px;
  height: 733px;

  /* 최상단 위치 */
  z-index: 999;

  /* 모달 배치 */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #fff;
  border-radius: 7px;
  padding: 15px 35px 10px 35px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  background-color: rgba(233, 236, 242, 0.8);
  border: none;
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 7px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;

export const SaveButton = styled(CloseButton)`
  background-color: rgba(36, 55, 99, 0.8);
  color: #fff;

  :hover {
    background-color: rgba(36, 55, 99);
  }
  :disabled {
    background-color: #dadada;
    color: #fff;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  border: none;
  border-bottom: 0.6px solid #c6c6c6;
  min-width: 200px;
  width: 100%;
  margin: 20px 10px 20px 0;
  outline: none;
  flex: 80%;
`;
export const ContentInput = styled.input`
  border: none;
  border-bottom: 0.6px solid #c6c6c6;
  min-width: 200px;
  width: 100%;
  margin: 20px 10px 20px 0;
  outline: none;
  flex: 80%;
`;

export const ErrorMessage = styled.div`
  color: red;
`;