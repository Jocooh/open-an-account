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
} from "../../pages/MainPage/style";
import Tipper from "./Tipper";

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
              <Tipper />
              <Tipper />
              <Tipper />
            </TipperBanner>
            <TipperBanner>
              <Tipper />
              <Tipper />
              <Tipper />
            </TipperBanner>
            <TipperBanner>
              <Tipper />
              <Tipper />
              <Tipper />
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
