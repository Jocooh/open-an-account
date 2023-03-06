import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const FourthSectionImgAnimation = () => {
  const fourthSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);
  //* 4번째 섹션의 위치를 알아내는 함수
  const handleScroll = () => {
    const fourthSectionPosition =
      fourthSectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (fourthSectionPosition < windowHeight) {
      setIsAnimated(true);
    }
  };
  console.log(isAnimated);

  return (
    <FourthSectionWrap ref={fourthSectionRef}>
      <FourthSectionImgWrap onScroll={handleScroll}>
        <img
          className={isAnimated ? "animated" : ""}
          src={require("../../assets/landing/FourthSection(1).png")}
          alt="ThirdImg"
          style={{
            width: "450px",
          }}
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            width: "450px",
            marginTop: "100px",
          }}
          src={require("../../assets/landing/FourthSection(3).png")}
          alt="ThirdImg"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            width: "450px",
          }}
          src={require("../../assets/landing/FourthSection(2).png")}
          alt="ThirdImg"
        />
      </FourthSectionImgWrap>
    </FourthSectionWrap>
  );
};

const FourthSectionWrap = styled.section`
  //* 반응형 레이아웃
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const FourthSectionImgWrap = styled.div`
  //* 이미지 가로정렬
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 100px;
  position: relative;

  img {
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }

  img:nth-child(1) {
    animation: fadeInUp 1s ease forwards;
    animation-delay: 0.5s;
  }

  img:nth-child(3) {
    animation: fadeInUp 1s ease forwards;
    animation-delay: 1s;
  }

  img:nth-child(2) {
    animation: fadeInUp 1s ease forwards;
    animation-delay: 1.5s;
  }

  img.animated {
    opacity: 1;
    animation: fadeInUp 1s ease forwards;
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default FourthSectionImgAnimation;
