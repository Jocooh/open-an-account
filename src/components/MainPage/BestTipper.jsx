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
import { useNavigate } from "react-router-dom";

//좋아요가 많은 순으로 들고옵니다.
const BestTipper = ({ currentUser }) => {
  const navigate = useNavigate();
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <BestTipperTitle>금주의 팁퍼</BestTipperTitle>
          <p
            style={{ display: "flex", justifyContent: "center", color: "#888" }}
          >
            이번주 가장 인기있는 팁을 확인해보세요. 하트를 누른 팁은
            마이페이지에서 다시 볼 수 있어요.
          </p>
        </div>
        <Tippers>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            // navigation
            spaceBetween={50}
            slidesPerView={1}
            // autoplay={{ delay: 3000 }}
            loop={true}
            observer={true}
            observeParents={true}
            style={{ borderRadius: "20px" }}
          >
            <div>
              <TipperBanner>
                <BestTipperList
                  best={bestBoards[0]}
                  currentUser={currentUser}
                />
                <BestTipperList
                  best={bestBoards[1]}
                  currentUser={currentUser}
                />
                <BestTipperList
                  best={bestBoards[2]}
                  currentUser={currentUser}
                />
              </TipperBanner>
              <TipperBanner>
                <BestTipperList
                  best={bestBoards[4]}
                  currentUser={currentUser}
                />
                <BestTipperList
                  best={bestBoards[5]}
                  currentUser={currentUser}
                />
                <BestTipperList
                  best={bestBoards[6]}
                  currentUser={currentUser}
                />
              </TipperBanner>
              <TipperBanner>
                <BestTipperList
                  best={bestBoards[7]}
                  currentUser={currentUser}
                />
                <BestTipperList
                  best={bestBoards[8]}
                  currentUser={currentUser}
                />
                <BestTipperList
                  best={bestBoards[9]}
                  currentUser={currentUser}
                />
              </TipperBanner>
            </div>
            <div>
              <p
                style={{
                  color: "#888",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "10px 25px 20px 0",
                }}
                onClick={() => {
                  navigate("/community");
                }}
              >
                팁 전체 보기 ＞
              </p>
            </div>
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
  height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* padding: 20px; */
  gap: 5px;
`;
