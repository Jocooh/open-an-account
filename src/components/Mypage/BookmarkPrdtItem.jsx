import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import logoLists from "../../assets/logo/logo";
import { db } from "../../config/firebase";
import {
  StyledListDiv,
  StyledBankListWrapper,
  StyledBankLists,
} from "../../pages/ServicePage/style";
import {
  StyledContentDiv,
  StyledDiv,
  StyledMoreListDiv,
  StyledSavingRateP,
  StyledSearchSaveTrmDiv,
} from "../../components/SearchBankList/style";
import {
  StyledBankNameP,
  StyledProductTitleDiv,
} from "../../components/AllBankList/style";
// import BookMarkList from '../BookMarkList/BookMarkList';
// import { StyledImg } from "../../components/AllBankList/style";  -> 이 친구는 로고 이미지 맞춰주는 친구입니다.

const BookmarkPrdtItem = ({ item }) => {
  const [depositOptionalList, setdepositOptionalList] = useState([]);
  const [savingoptionalList, setSavingoptionalList] = useState([]);
  const [allOptionList, setAllOptionList] = useState([]);

  const handleButtonClick = async () => {
    const optionListPromises = [
      getDocs(collection(db, "DEPOSIT_OPTION_LIST")),
      getDocs(collection(db, "SAVING_OPTION_LIST")),
    ];

    const [optionListSnapshots] = await Promise.all([
      Promise.all(optionListPromises),
    ]);

    // const depositOptionalList = [];
    // const savingoptionalList = [];
    const allOptionList = [];

    optionListSnapshots.forEach((snapshot, index) => {
      snapshot.forEach((doc) => {
        const newProduct = {
          id: doc.id,
          ...doc.data(),
        };
        allOptionList.push(newProduct);
      });
    });
    setAllOptionList(allOptionList);
  };
  useEffect(() => {
    handleButtonClick();
  }, []);
  console.log(item);
  //스크롤 생기게 하는거랑 금리 합치는거랑만 수정하면 될껏같습니다. 디테일사항은 추후에...
  return (
    <div style={{ width: "500px" }}>
      {allOptionList.map((option) =>
        item.productId === option.fin_prdt_cd ? (
          <div key={item.userId}>
            <div className="스크롤 구역" style={{ overflow: "auto" }}>
              <StyledBankLists>
                <div style={{ display: "flex" }}>
                  <div>
                    <StyledDiv>
                      {/* 여기밑에 div는 로고 들어가는 자리입니다. 
                      지금 로고가 못들어가는 이유는 base.fin_co_no가 item안에 없기 때문이죠
                      */}
                      <div>
                        {/* {logoLists.logos.map((logo) =>
                              Object.keys(logo)[0] === base.fin_co_no ? (
                                <StyledImg
                                  src={Object.values(logo)[0]}
                                  alt="로고"
                                />
                              ) : null
                            )} */}
                      </div>
                      <div className="구 StyledListDiv">
                        <StyledContentDiv>
                          <StyledProductTitleDiv>
                            <h2
                              style={{
                                fontSize: "20px",
                              }}
                            >
                              {item.productName}
                            </h2>
                            <StyledBankNameP>
                              {item.productCoName}
                            </StyledBankNameP>
                          </StyledProductTitleDiv>
                          <StyledSearchSaveTrmDiv>
                            {/* 여기가 지금 금리에따라서 여러개 나오는 부분인데 괜찮으시다면 searchDepositLists부분 참고하셔서 만드셔도 될껏같습니다. */}
                            <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                              최고금리
                            </h4>
                            {/* 여기가 경고뜨는 부분 지금 p태그가 h4를 감싸고 있음 ,,고칠예정 ㅎ */}
                            <StyledSavingRateP>
                              <p style={{ color: "#aaa" }}>{option.save_trm}</p>
                              <h4
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                }}
                              >
                                {option.intr_rate2}%
                              </h4>
                            </StyledSavingRateP>
                          </StyledSearchSaveTrmDiv>
                        </StyledContentDiv>
                      </div>
                    </StyledDiv>
                    <StyledMoreListDiv className="여기가 자세히 눌렀을때 상세정보 나오는 공간이예여">
                      {/* 북마크에 필요한 props입니다. base -> 얘는 baseList에서 가져가고 있어요 */}

                      {/* <button
                        title="자세히 버튼"
                        style={{
                          width: "60px",
                          height: "30px",
                        }}
                        onClick={() => {
                          // setActiveItem(base.id);
                        }}
                      >
                        {activeItem === base.id ? <></> : "자세히∨"}
                      </button> */}
                    </StyledMoreListDiv>
                  </div>
                </div>
                {/* 여기밑에 주석부터는 자세히보기 컴포넌트 입니다. 자세히보기 눌렀을때 필요한 애들을 props로 내려줘야해여 ,,setActiveItem얘는 필수입니다. */}
                {/* {activeItem === base.id ? (
              <PracticeDetail
                base={base}
                setActiveItem={setActiveItem}
                depositOptionalList={depositOptionalList}
              />
            ) : null} */}
              </StyledBankLists>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default BookmarkPrdtItem;
