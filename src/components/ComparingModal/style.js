import styled from "styled-components";
import { NumericFormat } from "react-number-format";
import { CgClose } from "react-icons/cg";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(67, 79, 101, 0.7);
`;

export const ModalContainer = styled.div`
  /* 최상단 위치 */
  z-index: 999;

  /* 모달 배치 */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;
  /* left: calc(50% - 1331px/2 + 0.5px);
top: 146px; */
`;

export const CloseButton = styled(CgClose)`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-bottom: 20px;
  margin-right: auto;
  cursor: pointer;
`;

//* 하얀색 배경 내용물
export const ModalContents = styled.div`
  /* 모달창 크기 */
  width: 1194px;
  height: 828px;

  /* 모달창 디자인 */
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 20px 35px 10px 35px;
  box-sizing: border-box;
`;

//* 제목부분 Title, SubTitle
export const TitleWrapper = styled.div`
  padding: 30px 0px;
`;

//* "상품 비교 결과"
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
`;

//* 사용자 인풋창 부분
export const MessageWrapper = styled.div`
  padding: 15px 0px;
`;
//* "금액은 최대 10억원까지 입력할 수 있습니다. "
export const FirstGuide = styled.div`
  color: #969696;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  margin-left: 150px;
`;

//* "12개월동안 ~씩 저축한다면,"
export const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  /* or 155% */
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
  margin: 10px;
  padding: 8px 24px;
  /* padding-left: 10px; */
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 35px;
  color: #a3a3a3;
`;
//* 보라색 글씨 강조
export const Highlight = styled.div`
  color: #6a24ff;
`;

//* 세 상품 전부 (만기시 금액도 포함)
export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SecondGuide = styled.li`
  color: #969696;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  margin: 20px;
`;
