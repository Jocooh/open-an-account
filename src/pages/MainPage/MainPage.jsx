import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { authService } from "../../config/firebase";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import BestTipper from "../../components/MainPage/BestTipper";
import BestProducts from "../../components/MainPage/BestProducts";
import {
  UpWraper,
  BannerImage,
  GreetingBox,
  GreetingTitle,
  GreetingMent,
  Username,
  Greetingment,
  Greetingcontent,
  ProductFdButton,
  BankListBanner,
  BankListBannerTitle,
  BankWrap,
  BottomWrap,
  BankList,
  BankListTilte,
  Sidebar,
  BankAndQna,
  QuestionWrap,
  QuestionTitle,
  FinanceHoneyTip,
  MainPageWrapper,
  DownWraper,
  TodayTipTitle,
  TodayTipComment,
  Tips,
  Tip,
  TipTitle,
  TipComments,
  TipComment,
  HoverBox,
} from "./style";
import { onAuthStateChanged } from "firebase/auth";
const MainPage = () => {
  const navigate = useNavigate();
  // const user = authService.currentUser;

  // 유저 정보 가져오기
  const isLoggedIn = sessionStorage.key(0);
  // 메인 페이지 새로고침 시 user 의 display name 불러오지 못하는 부분 해결
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // 해결 방법 1
  // state 만들어 useEffect 안에 setstate 로 user 값 변경해주니 새로고침해도 불러와짐.
  // useEffect 가 return 후 실행되므로 깜빡이는 현상 발생. 개선 필요함.
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);
  // console.log(user);
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // 해결 방법 2
  // 기존 const user = authService.currentUser 가 새로고침시 displayName 을 불러오지 못하니
  // 세션스토리지에서 key 를 가져와 JSON.parse 안에 넣어줘서 해결. 유즈이펙트보다 쉽고 유즈이펙트 깜빡임도 사라짐.
  // const userSession = sessionStorage.getItem(isLoggedIn);
  // const user = JSON.parse(userSession ?? "");
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <MainPageWrapper>
      <img
        src={require("../../assets/homebanner.png")}
        style={{ width: "100%", maxWidth: "1920px" }}
        alt="배너"
      />
      <BestProducts />
      <BestTipper currentUser={user} />
      <DownWraper>
        <TodayTipTitle>오늘의 금융 팁</TodayTipTitle>
        <TodayTipComment>
          금융지식 또는 금융이슈를 전달해드려요. 차곡차곡 쌓은 지식을 통해
          선택의 폭을 넓혀봐요.
        </TodayTipComment>
        <Tips>
          <Tip>
            <TipTitle>정기적금</TipTitle>
            <TipComments>
              <TipComment>정해진 기간 동안 일정액을 매월 적립하고</TipComment>
              <TipComment>만기일에 약정금액을 지급받는 상품이에요.</TipComment>
              <TipComment>매달 혹은 일정기간, 꾸준히 저축하고 싶은</TipComment>
              <TipComment>친구들은 정기적금을 찾아보아요.</TipComment>
            </TipComments>
            <img
              src={require("../../assets/mainpage/정기적금.png")}
              style={{
                width: "110px",
                right: "0",
                marginRight: "20px",
              }}
              alt="정기적금"
            />
          </Tip>
          <Tip>
            <TipTitle>정기예금</TipTitle>
            <TipComments>
              <TipComment>
                일정금액을 일정기간 동안 금융 기관에 맡기고 정한 기한 안에는
                찾지 않겠다고 약속하는 예금이에요. 한동안 사용하지 않을
                시드머니가 있는 친구들은 정기예금을 고려해봐도 좋아요
              </TipComment>
            </TipComments>
            <img
              src={require("../../assets/mainpage/정기예금.png")}
              style={{
                width: "123px",
                right: "0",
                bottom: "0",
                margin: "0 20px 30px 0",
              }}
              alt="정기예금"
            />
          </Tip>
          <Tip style={{ width: "378px" }}>
            <TipTitle
              style={{
                marginBottom: "10px",
              }}
            >
              이자를 계산하는 공식
              <br />
              단리와 복리
            </TipTitle>
            <img
              src={require("../../assets/mainpage/단리.png")}
              style={{
                position: "absolute",
                width: "80px",
                bottom: "40px",
                left: "140px",
              }}
              alt="정기 예금"
            />
            <img
              src={require("../../assets/mainpage/Group 338.png")}
              style={{
                position: "absolute",
                left: "250px",
                bottom: "40px",
                width: "90px",
              }}
              alt="단리와 복리"
            />
            <TipComments>
              <TipComment>
                단리는, 원금에 대해서만 이자가 발생하는 계산 방법이에요. 연
                5.0%의 단리 상품이 있다고 하면, 매년 동일한 금액의 이자가 붙게
                돼요.
                <br />
                복리는, 원금과 이자가 합쳐진 금액에서 다시 이자가 붙는 계산
                방법이에요. 연 5.0%의 복리 상품이 있다고 하면, 해마다 누적되는
                이자가 커지게 돼요.
              </TipComment>
            </TipComments>
          </Tip>
        </Tips>
      </DownWraper>
      <UpWraper>
        <BankListBannerTitle>은행 바로가기</BankListBannerTitle>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          loop={true}
          observer={true}
          observeParents={true}
        >
          <BankBanner>
            <BankWrap>
              <img src={require("../../assets/logo/oori_logo.png")} />
              <a href="https://www.wooribank.com/">우리은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/hana_logo.png")} />
              <a href="https://www.kebhana.com/">하나은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/ibk_logo.png")} />
              <a href="https://www.ibk.co.kr/">기업은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/tnguq_logo.png")} />
              <a href="https://www.suhyup-bank.com/">수협은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/sc_logo.png")} />
              <a href="https://www.standardchartered.co.kr/np/kr/Intro.jsp">
                SC제일은행
              </a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/sh_logo.png")} />
              <a href="https://www.shinhan.com/index.jsp">신한은행</a>
            </BankWrap>
          </BankBanner>
          <BankBanner>
            <BankWrap>
              <img src={require("../../assets/logo/kb_logo.png")} />
              <a href="https://www.kbstar.com/">국민은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/tksdjq_logo.png")} />
              <a href="https://www.kdb.co.kr/index.jsp">산업은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/rhkdwn_logo.png")} />
              <a href="https://pib.kjbank.com/ib20/mnu/BPB0000000001">
                광주은행
              </a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/busan_logo.png")} />
              <a href="https://www.busanbank.co.kr/ib20/mnu/BHP00001">
                부산은행
              </a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/dg_logo.png")} />
              <a href="https://www.dgb.co.kr/dgb_ebz_main.jsp">대구은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/nh_logo.png")} />
              <a href="https://banking.nonghyup.com/nhbank.html">농협은행</a>
            </BankWrap>
          </BankBanner>
          <BankBanner>
            <BankWrap>
              <img src={require("../../assets/logo/jeju_logo.png")} />
              <a href="https://www.e-jejubank.com/JeJuBankInfo.do">제주은행</a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/rudska_logo.png")} />
              <a href="https://www.knbank.co.kr/ib20/mnu/BHP000000000001">
                경남은행
              </a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/wjsqnr_logo.png")} />
              <a href="https://cdn.ftoday.co.kr/news/photo/2https://www.jbbank.co.kr/">
                전북은행
              </a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/kbank_logo.png")} />
              <a href="https://www.kbanknow.com/ib20/mnu/PBKMAN000000">
                케이뱅크
              </a>
            </BankWrap>
            <BankWrap>
              <img src={require("../../assets/logo/kakao_logo.png")} />
              <a href="https://www.kakaobank.com/">카카오뱅크</a>
            </BankWrap>
          </BankBanner>
        </Swiper>
      </UpWraper>
    </MainPageWrapper>
  );
};
export default MainPage;
// 은행 배너
const BankBanner = styled(SwiperSlide)`
  width: 100%;
  height: 220px;
  font-size: 30px;
  padding-top: 30px;
  text-align: center;
`;
