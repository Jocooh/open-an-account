import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const FourthSectionImgAnimation = (direction, duration, delay) => {
  const fourthSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(fourthSectionRef.current);

    return () => observer.disconnect();
  }, [isAnimated]);

  return (
    <FourthSectionWrap ref={fourthSectionRef}>
      <FourthSectionImgWrap>
        <img
          className={isAnimated ? "animated" : ""}
          src={require("../../assets/landing/FourthSection(1).png")}
          alt="ThirdImg"
          style={{
            width: "350px",
          }}
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            width: "350px",
            marginTop: "100px",
          }}
          src={require("../../assets/landing/FourthSection(3).png")}
          alt="ThirdImg"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            width: "350px",
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
  height: 100%;
  max-width: 1400px;
`;

const FourthSectionImgWrap = styled.div`
  //* 이미지 가로정렬
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 100px;

  img {
    left: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  img.animated {
    animation: fadeInUp 1s ease forwards;
  }

  img:nth-child(1) {
    animation-delay: 0.5s;
  }

  img:nth-child(3) {
    animation-delay: 1s;
  }

  img:nth-child(2) {
    animation-delay: 1.5s;
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
