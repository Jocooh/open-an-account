import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const SecondSectionImgAnimation3 = () => {
  const SecondSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.intersectionRatio >= 1) {
          setTimeout(() => setIsAnimated(true), 1700);
        }
      },
      { threshold: 1 }
    );

    observer.observe(SecondSectionRef.current);

    return () => observer.disconnect();
  }, [isAnimated]);

  return (
    <SecondImgContainer ref={SecondSectionRef}>
      <SecondImgThree isAnimated={isAnimated}>
        <img
          className={isAnimated ? "animated" : ""}
          style={{ marginTop: "180px", width: "100px", position: "relative" }}
          src={require("../../assets/landing/SecondImg3-1.png")}
          alt="secondImg3"
        />
        <img
          className={isAnimated ? "animated" : ""}
          style={{ marginTop: "180px", width: "120px", position: "relative" }}
          src={require("../../assets/landing/SecondImg3-2.png")}
          alt="secondImg3"
        />
        <img
          className={isAnimated ? "animated" : ""}
          style={{ marginTop: "180px", width: "100px", position: "relative" }}
          src={require("../../assets/landing/SecondImg3-3.png")}
          alt="secondImg3"
        />
      </SecondImgThree>
    </SecondImgContainer>
  );
};

const SecondImgContainer = styled.section`
  //* 반응형 레이아웃
  width: 100%;
  height: 100%;
  max-width: 1400px;
`;
const SecondImgThree = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  img {
    opacity: 1;
    /* transition: opacity 0.3s ease-in; */
  }

  img.animated {
    animation: slideUpDown 0.5s ease forwards;
    /* animation-iteration-count: 2; */
  }
  img.animated:nth-child(1) {
    animation: slideUpDown 0.5s ease-in-out;
  }
  img.animated:nth-child(2) {
    animation: slideUpDown 0.7s ease-in-out;
  }
  img.animated:nth-child(3) {
    animation: slideUpDown 0.9s ease-in-out;
  }

  @keyframes slideUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default SecondSectionImgAnimation3;
