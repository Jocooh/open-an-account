import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        Copyright 2023. open-an-account. All rights reserved.
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 60px;
  /* border-top: 1px solid #ddd; */
  background-color: #f7f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #777;
  text-align: center;
`;
