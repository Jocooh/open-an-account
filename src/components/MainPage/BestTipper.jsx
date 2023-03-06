import React, { useEffect, useState } from "react";
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

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";
import BestTipperList from "./BestTipperList";

//좋아요가 많은 순으로 들고옵니다.
const BestTipper = ({ currentUser }) => {
  const [bestBoards, setBestBoards] = useState([]);
  const getBestlist = () => {
    const q = query(collection(db, "posts"), orderBy("like", "desc"));
    const array = [];
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) =>
        array.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setBestBoards(array);
    });
  };

  useEffect(() => {
    getBestlist();
  }, []);

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
              <BestTipperList best={bestBoards[0]} currentUser={currentUser} />
              <BestTipperList best={bestBoards[1]} currentUser={currentUser} />
              <BestTipperList best={bestBoards[2]} currentUser={currentUser} />
            </TipperBanner>
            <TipperBanner>
              <BestTipperList best={bestBoards[4]} currentUser={currentUser} />
              <BestTipperList best={bestBoards[5]} currentUser={currentUser} />
              <BestTipperList best={bestBoards[6]} currentUser={currentUser} />
            </TipperBanner>
            <TipperBanner>
              <BestTipperList best={bestBoards[7]} currentUser={currentUser} />
              <BestTipperList best={bestBoards[8]} currentUser={currentUser} />
              <BestTipperList best={bestBoards[9]} currentUser={currentUser} />
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
  /* justify-content: center;
  align-items: center; */
  box-sizing: border-box;
  padding: 10px;
`;
