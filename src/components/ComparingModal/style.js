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
  /* 모달창 위치 */
  z-index: 999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
`;
export const ModalContents = styled.div`
  max-width: 1194px;
  max-height: 770px;
  width: 80vw;
  height: 85vh;
  /* padding: 5%; */
  @media (max-width: 480px) {
    min-width: 343px;
    /* min-height: 812px; */
    display: flex;
    justify-content: center;
  }
`;
export const CloseButton = styled.img`
  position: absolute;
  top: -5%;
  right: 0;
  cursor: pointer;
`;

//* "상품 비교"
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
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
  flex-wrap: wrap;
  margin: 1rem 2rem;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (max-width: 480px) {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;

    display: flex;
    justify-content: center;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  width: 245px;
  height: 44px;
  margin: 0 10px;
  padding: 0 20px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #505050;

  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
//* "금액은 최대 10억원까지 입력할 수 있습니다. "
export const FirstGuide = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 34px;
  color: #a3a3a3;
  margin: 0 2rem;
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
  justify-content: space-evenly;
  /* margin-top: 20px; */
`;

export const SecondGuide = styled.div`
  color: #a3a3a3;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  padding: 20px;

  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
`;
