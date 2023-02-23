return (
  //* map 필터링해서 가져오는 부분입니다.

  <div>
    <StyledBankList>
      <div style={{ display: "flex" }}>
        <StyledListDiv>
          {/* 여기서 ()안에 id값 넘겨주세요 */}
          <StyledDiv
            onClick={() => {
              handleClickProduct();
            }}
          >
            {/* 여기밑에 div는 로고 들어가는 자리입니다. */}
            {/* <div key={base.fin_prdt_nm}>
                    {logoLists.logos.map((logo) =>
                      Object.keys(logo)[0] === base.fin_co_no ? (
                        <StyledImg src={Object.values(logo)[0]} alt="로고" />
                      ) : null
                    )}
                  </div> */}
            <div>
              <StyledContentDiv>
                <StyledProductTitleDiv>
                  <h2
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    여기는 상품명
                  </h2>
                  <StyledBankNameP>여기는 은행명</StyledBankNameP>
                </StyledProductTitleDiv>
                <StyledSearchSaveTrmDiv>
                  <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                    최고금리
                  </h4>
                  <StyledSavingRateP>
                    <p style={{ color: "#aaa" }}>~몇 개월</p>
                    <h4
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      최고 금리%
                    </h4>
                  </StyledSavingRateP>
                </StyledSearchSaveTrmDiv>
              </StyledContentDiv>
            </div>
          </StyledDiv>
          <StyledMoreListDiv className="여기가 자세히 눌렀을때 상세정보 나오는 공간이예여">
            {/* 북마크에 필요한 props입니다. base -> 얘는 baseList에서 가져가고 있어요 */}
            <Bookmarks
            // productId={base.fin_prdt_cd}
            // productName={base.fin_prdt_nm}
            // productCoName={base.kor_co_nm}
            // productDocId={base.id}
            />
            <button
              title="자세히 버튼"
              style={{
                width: "60px",
                height: "30px",
              }}
              onClick={() => {
                // setActiveItem(base.id);
              }}
            >
              {/* {activeItem === base.id ? <></> : "자세히∨"} */}
            </button>
          </StyledMoreListDiv>
        </StyledListDiv>
      </div>
      {/* 여기밑에 주석부터는 자세히보기 컴포넌트 입니다. 자세히보기 눌렀을때 필요한 애들을 props로 내려줘야해여 ,,setActiveItem얘는 필수입니다. */}
      {/* {activeItem === base.id ? (
          <PracticeDetail
            base={base}
            setActiveItem={setActiveItem}
            depositOptionalList={depositOptionalList}
          />
        ) : null} */}
    </StyledBankList>
  </div>
);
