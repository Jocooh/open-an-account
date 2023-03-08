import styled from "styled-components";
import { NumericFormat } from "react-number-format";
import { CgClose } from "react-icons/cg";

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
  z-index: 999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(67, 79, 101, 0.7); */

  gap: 10px;
`;

export const CloseButton = styled(CgClose)`
  display: flex;
  position: relative;
  margin: auto 0 10px auto;
  cursor: pointer;
`;

//* 하얀색 배경 내용물
export const ModalContents = styled.div`
  /* 모달창 크기 */
  width: 1194px;
  min-height: 866px;
  position: relative;
  /* 모달창 디자인 */
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 20px 35px 10px 35px;
  box-sizing: border-box;
`;

//* "상품 비교"
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  display: flex;
  align-items: center;
  color: #505050;
`;

//* 사용자 인풋창 부분
export const MessageWrapper = styled.div`
  margin: 10px;
`;

//* "12개월동안 ~씩 저축한다면,"
export const Message = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 325px 20px 20px;
  /* align-items: center; */
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #000000;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;
export const Input = styled(NumericFormat).attrs((props) => ({
  inputLength: props.inputLength,
}))`
  border-radius: 10px;
  outline: none;
  /* flex: 80%; */

  border: 1px solid pink;
  border: ${(props) =>
    props.inputLength > 0
      ? props.inputLength > 5
        ? "1px solid #6A24FF"
        : "1px solid #FF0000"
      : "1px solid #dedede"};

  width: 274px;
  margin: 0 10px;
  padding-left: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 52px;

  color: #505050;
`;
//* "금액은 최대 10억원까지 입력할 수 있습니다. "
export const FirstGuide = styled.div`
  color: #969696;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;
//* 보라색 글씨 강조
export const Highlight = styled.div`
  margin: 0 10px 0 0;
  color: #6a24ff;
`;

//* 세 상품 전부 (만기시 금액도 포함)
export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SecondGuide = styled.li`
  color: #969696;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  margin: 20px;
`;
