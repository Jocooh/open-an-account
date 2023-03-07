import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const SecondSectionImgAnimation = (threshold, direction, duration, delay) => {
  const SecondSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.intersectionRatio === 1) {
          setIsAnimated(true);
        }
      },
      { threshold: 1 }
    );

    observer.observe(SecondSectionRef.current);

    return () => observer.disconnect();
  }, [isAnimated]);
  console.log(isAnimated);

  return (
    <SecondImgContainer ref={SecondSectionRef}>
      <SecondImgTwo>
        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "230px",
            marginLeft: "-50px",
          }}
          src={require("../../assets/landing/SecondImg2-1.png")}
          alt="secondImg1"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "230px",
            marginLeft: "-110px",
          }}
          src={require("../../assets/landing/SecondImg2-2.png")}
          alt="secondImg2"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "230px",
            marginLeft: "10px",
          }}
          src={require("../../assets/landing/SecondImg2-3.png")}
          alt="secondImg3"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "190px",
            marginLeft: "-100px",
          }}
          src={require("../../assets/landing/SecondImg2-4.png")}
          alt="secondImg4"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "200px",
            marginLeft: "-9px",
          }}
          src={require("../../assets/landing/SecondImg2-5.png")}
          alt="secondImg5"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "230px",
            marginLeft: "40px",
          }}
          src={require("../../assets/landing/SecondImg2-6.png")}
          alt="secondImg6"
        />

        <img
          className={isAnimated ? "animated" : ""}
          style={{
            position: "absolute",
            marginTop: "160px",
            marginLeft: "-40px",
          }}
          src={require("../../assets/landing/SecondImg2-7.png")}
          alt="secondImg7"
        />
      </SecondImgTwo>
    </SecondImgContainer>
  );
};

const SecondImgContainer = styled.section`
  //* 반응형 레이아웃
  width: 100%;
  height: 100%;
  max-width: 1400px;
`;
const SecondImgTwo = styled.div`
  img {
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  img.animated {
    animation: fadeIndown 1s ease forwards;
  }

  img:nth-child(1) {
    animation-delay: 0.5s;
  }

  img:nth-child(2) {
    animation-delay: 0.6s;
  }

  img:nth-child(3) {
    animation-delay: 0.7s;
  }

  img:nth-child(4) {
    animation-delay: 0.8s;
  }

  img:nth-child(5) {
    animation-delay: 0.9s;
  }

  img:nth-child(6) {
    animation-delay: 1s;
  }

  img:nth-child(7) {
    animation-delay: 1.1s;
  }

  @keyframes fadeIndown {
    from {
      opacity: 0;
      transform: translateY(-200%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default SecondSectionImgAnimation;
