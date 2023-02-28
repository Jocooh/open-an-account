import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import {
  WeekBestTipper,
  BestTipperWraper,
  BestTipperTitle,
  Tippers,
  Tipper,
  TipTitleWrap,
  TipperTitle,
  TipperImgWrap,
  BoardWrap,
  BoardTitle,
  BoardContent,
} from "../../pages/MainPage/style";

const BestTipper = () => {
  return (
    <WeekBestTipper>
      <BestTipperWraper>
        <BestTipperTitle>금주의 팁퍼</BestTipperTitle>
        {/* <NextButton></NextButton> */}
        <Tippers>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            observer={true}
            observeParents={true}
            style={{ borderRadius: "20px" }}
          >
            <TipperBanner>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>내집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>내집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>내집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
            </TipperBanner>
            <TipperBanner>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>우리집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>우리집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>우리집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
            </TipperBanner>
            <TipperBanner>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>개집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>개집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
              <Tipper>
                <TipTitleWrap>
                  <img src={require("../../assets/mainpage/script.png")} />
                  <TipperTitle>개집마련</TipperTitle>
                </TipTitleWrap>
                <TipperImgWrap>이미지 들어갈 부분</TipperImgWrap>
                <BoardWrap>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      marginTop: "20px",
                    }}
                  >
                    좋아요 n
                  </div>
                  <BoardTitle>주택청약 당첨 후기</BoardTitle>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: "0.4",
                      height: "50px",
                    }}
                  >
                    두려움에 떠는 코코0707
                  </div>
                  <BoardContent>
                    주택청약 당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다주택청약
                    당청됐습니다주택청약 당청됐습니다
                  </BoardContent>
                </BoardWrap>
              </Tipper>
            </TipperBanner>
          </Swiper>
        </Tippers>
      </BestTipperWraper>
    </WeekBestTipper>
  );
};

export default BestTipper;

// 팁퍼 배너
const TipperBanner = styled(SwiperSlide)`
  width: 100%;
  height: 650px;
  display: flex;
`;
