import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const BottomAnimation = () => {
  const SecondSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.intersectionRatio >= 0.5) {
          // 1초 뒤에 setIsAnimated(true) 호출
          setTimeout(() => setIsAnimated(true), 0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(SecondSectionRef.current);

    return () => observer.disconnect();
  }, [isAnimated]);

  console.log(isAnimated);

  return (
    <ThirdBottomSectionContainer ref={SecondSectionRef}>
      <ThirdBottomTitleWrap>
        <div
          className={isAnimated ? "animated" : ""}
          style={{
            color: "#6a24ff",
            fontSize: "18px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          미리보는 만기 수령액
        </div>
        <ThirdSectionTitle>
          <div className={isAnimated ? "animated" : ""}>한 곳에서 입력하고</div>
          <div className={isAnimated ? "animated" : ""}>확인해요.</div>
        </ThirdSectionTitle>

        <div
          className={isAnimated ? "animated" : ""}
          style={{ marginBottom: "10px", fontSize: "18px" }}
        >
          금액만 입력하면 최대 세가지 상품의 만기 수령액과
        </div>
        <div
          className={isAnimated ? "animated" : ""}
          style={{ fontSize: "18px" }}
        >
          납입 조건을 한 눈에 확인할 수 있어요.
        </div>
      </ThirdBottomTitleWrap>
      <BottomImgWrap>
        <img
          className={isAnimated ? "animated" : ""}
          style={{ paddingLeft: "120px", width: "600px" }}
          src={require("../../assets/ThirdImg(2).png")}
          alt="ThirdImg"
        />
      </BottomImgWrap>
    </ThirdBottomSectionContainer>
  );
};

const BottomImgWrap = styled.div`
  img {
    opacity: 0;
  }
  img.animated {
    transform: translateY(70px);
    animation: fadeIndown 0.5s ease forwards;
    animation-delay: 0.5s;
  }

  @keyframes fadeIndown {
    0% {
      opacity: 0;
      transform: translateY(70px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

//* 세번째 섹션 하단 이미지 Wraper
const ThirdBottomSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ThirdBottomTitleWrap = styled.div`
  margin-left: 60px;
  margin-top: 50px;

  div {
    opacity: 0;
  }
  div.animated {
    transform: translateX(50px);
    animation: slideInRight 0.5s ease-out forwards;
    animation-delay: 1s;
    @keyframes slideInRight {
      0% {
        opacity: 0;
        transform: translateX(-100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
`;

const ThirdSectionTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
`;
export default BottomAnimation;
