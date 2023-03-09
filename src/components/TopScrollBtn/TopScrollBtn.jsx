import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();

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
    <>
      {showTopButton && (
        <TopScrollButton onClick={handleScrollToTop}>
          {/* <img
            src={process.env.PUBLIC_URL + "/image/TopBtn.png"}
            alt="topScroll"
          /> */}
          <img src={require("../../assets/service/TopBtn.png")} alt="이미지" />
        </TopScrollButton>
      )}
    </>
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
  right: 30px;
  z-index: 999;
  img {
    /* background-color: #6a24ff; */
  }
  :hover {
  }
`;
