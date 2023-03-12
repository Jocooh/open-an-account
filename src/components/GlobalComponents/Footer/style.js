import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 50px;
  border-top: 1px solid #ddd;
  background-color: #f7f9fa;
  //성아-수정
  position: relative;
  width: 100%;
  /* transform: translateY(-100%); */
  bottom: 0;
  /* z-index: -1; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 16px;
  color: #777;
  text-align: center;
`;
