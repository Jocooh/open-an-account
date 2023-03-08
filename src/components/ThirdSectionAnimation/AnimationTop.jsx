import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const TopAnimation = () => {
  const SecondSectionRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.intersectionRatio >= 1) {
          // 1초 뒤에 setIsAnimated(true) 호출
          setTimeout(() => setIsAnimated(true), 0);
        }
      },
      { threshold: 1 }
    );

    observer.observe(SecondSectionRef.current);

    return () => observer.disconnect();
  }, [isAnimated]);

  console.log(isAnimated);

  return (
    <ThirdTopSectionContainer ref={SecondSectionRef}>
      <ThirdSectionContents>
        <TopImgWrap>
          <img
            className={isAnimated ? "animated" : ""}
            src={require("../../assets/ThirdImg(2).png")}
            alt="ThirdImg"
            style={{ width: "500px", height: "600px" }}
          />
        </TopImgWrap>
        <ThirdTopTitleWrap>
          <div
            className={isAnimated ? "animated" : ""}
            style={{
              color: "#6a24ff",
              fontSize: "18px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            예적금 계산기
          </div>
          <ThirdSectionTitle>
            <div className={isAnimated ? "animated" : ""}>
              목표금액, 목표기간만
            </div>
            <div className={isAnimated ? "animated" : ""}>정해오세요.</div>
          </ThirdSectionTitle>

          <div
            className={isAnimated ? "animated" : ""}
            style={{ marginBottom: "10px", fontSize: "18px" }}
          >
            금액과 기간에 따라 이자율이 높은 상품부터 모아서 보여줄게요.
          </div>
          <div
            className={isAnimated ? "animated" : ""}
            style={{ fontSize: "18px" }}
          >
            제 1금융권의 상품을 모두 찾아볼 수 있어요.
          </div>
        </ThirdTopTitleWrap>
      </ThirdSectionContents>
    </ThirdTopSectionContainer>
  );
};

const ThirdTopSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ThirdTopTitleWrap = styled.div`
  margin-left: 60px;
  margin-top: 50px;

  div {
    opacity: 0;
  }

  div.animated {
    transform: translateX(50px);
    animation: slideInLeft 0.8s ease forwards;
    animation-delay: 2s;

    @keyframes slideInLeft {
      0% {
        opacity: 0;
        transform: translateX(15%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

const TopImgWrap = styled.div`
  img {
    opacity: 0;
  }
  img.animated {
    transform: translateY(70px);
    animation: fadeIndown 1s ease forwards;
    animation-delay: 1s;
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

const ThirdSectionTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ThirdSectionContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default TopAnimation;
