import styled from "styled-components";

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
  width: 1194px;
  height: 828px;
  left: 363px;
  top: 146px;
  /* 최상단 위치 */
  z-index: 999;

  /* 모달 배치 */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;
  /* left: calc(50% - 1331px/2 + 0.5px);
top: 146px; */
`;

export const CloseButton = styled.button`
  background-color: rgba(233, 236, 242, 0.8);
  border: none;
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 10px;
  width: 119px;
  height: 73px;
  left: 363px;
  top: 49px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
export const ModalContents = styled.div`
  /* 모달창 디자인 */
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 15px 35px 10px 35px;
  box-sizing: border-box;
  /* 모달창 디자인 */
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 15px 35px 10px 35px;
  box-sizing: border-box;
`;
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px 10px;
  gap: 10px;
  height: 185px;
  left: 750px;
  right: 750px;
  top: 120px;
`;
export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 17px;
`;

export const Title = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px 10px;
  gap: 10px;

  /* position: absolute; */
  /* height: 185px; */
  /* left: 750px; */
  /* right: 750px; */
  /* top: 120px; */
`;
