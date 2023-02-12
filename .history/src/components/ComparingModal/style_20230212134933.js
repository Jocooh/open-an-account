import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 10;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(67, 79, 101, 0.7);
`;

export const ModalContainer = styled.div`
  /* 모달창 크기 */
  width: 1331px;
  height: 781px;
  /* 최상단 위치 */
  z-index: 999999;

  /* 모달 배치 */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 15px 35px 10px 35px;
  box-sizing: border-box;

  /* left: calc(50% - 1331px/2 + 0.5px);
top: 146px; */
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.div`
  box-sizing: border-box;
  width: 399px;
  height: 640px;
  left: 909px;
  top: 113px;

  border: 1px solid #e7e7e7;
  border-radius: 17px;
`;

export const Title = styled.div`
  text-align: center;
`;
export const Scrap = styled.button`
  position: absolute;
  width: 47px;
  height: 58px;
  left: 1244px;
  top: 139px;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
export const Prdt_nm = styled.div`
  text-align: center;
`;
export const BaseList = styled.div`
  align-items: center;
`;
export const Message = styled.div`
  color: #3075ff;
`;
export const Button = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 342px;
  height: 62px;
  left: 949px;
  top: 664px;

  background: #d9d9d9;
  border: 1px solid #dedede;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
