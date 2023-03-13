import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();
  const [isHover, setIsHover] = useState(false);
  // TopButton
  const handleScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 200, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const ShowTopButtonClick = () => {
      if (window.scrollY > 200) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", ShowTopButtonClick);
    return () => {
      window.removeEventListener("scroll", ShowTopButtonClick);
    };
  }, []);

  return (
    <TopScrollButton onClick={handleScrollToTop}>
      <img
        src={
          isHover
            ? require("../../assets/service/TopBtnhover.png")
            : require("../../assets/service/TopBtn.png")
        }
        alt="topScroll"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </TopScrollButton>
  );
};
export default TopButton;

const TopScrollButton = styled.div`
  cursor: pointer;
  width: 46px;
  height: 46px;
  padding-top: 15px;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  justify-content: center;
  position: fixed;
  bottom: 90px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  right: 30px;
  z-index: 999;
  img {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  :hover {
  }
`;
