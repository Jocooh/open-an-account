import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const SecondSectionImgAnimation1 = () => {
  const SecondSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(SecondSectionRef.current);

    return () => observer.disconnect();
  }, [isAnimated]);

  return (
    <SecondImgContainer ref={SecondSectionRef}>
      <SecondImgOne>
        <img
          className={isAnimated ? "animated" : ""}
          style={{ marginTop: "180px", width: "150px" }}
          src={require("../../assets/landing/SecondImg(1).png")}
          alt="secondImg1"
        />
      </SecondImgOne>
    </SecondImgContainer>
  );
};

const SecondImgContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1400px;
`;

const SecondImgOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    opacity: 1;
    /* transition: opacity 0.3s ease-in; */
  }
  img.animated {
    animation: shake 1s ease forwards;
    animation-iteration-count: 2;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0) rotate(0);
    }
    10% {
      transform: translateX(-5px) rotate(-5deg);
    }
    20% {
      transform: translateX(5px) rotate(5deg);
    }
    30% {
      transform: translateX(-3px) rotate(-3deg);
    }
    40% {
      transform: translateX(3px) rotate(3deg);
    }
    50% {
      transform: translateX(-2px) rotate(-2deg);
    }
    60% {
      transform: translateX(2px) rotate(2deg);
    }
    70% {
      transform: translateX(-1px) rotate(-1deg);
    }
    80% {
      transform: translateX(1px) rotate(1deg);
    }
    90% {
      transform: translateX(-0.5px) rotate(-0.5deg);
    }
  }
`;

export default SecondSectionImgAnimation1;
