import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 4rem;
  border-top: 1px solid #ddd;
  background-color: #f7f9fa;
  position: relative;
  transform: translateY(-100%);
  bottom: 0;
  /* z-index: -1; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #777;
  text-align: center;
`;
