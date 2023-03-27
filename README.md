# [팁퍼(Tipper)] 금융상품

금융관리 초보자를 위한 팁을 드려요!
자금 마련의 기본인 **예금, 적금 상품들을 비교**해주고 **꿀팁들을 공유**하는 사이트입니다.

[Tipper_사이트바로가기](https://tipper-seven.vercel.app/)

![Frame 2297](https://user-images.githubusercontent.com/111356420/223928448-04717d9f-8d55-4009-bdbd-e7dc01c9d557.jpg)


- 기능 소개
  1. 예적금 상품 비교 기능 설명
  - 상품검색
    상품 명, 은행 명을 입력하여 해당 상품을 찾아볼 수 있음
  - 2-3개의 상품 비교
    상품들 중 2-3개를 골라서 상품들의 조건과 만기 수령액을 미리 예상해 볼 수 있음
    예금, 적금 상품들 끼리만 비교가 가능
    각 상품이 단리, 복리인지 판단하여 적용
    최고금리를 적용한 최대 만기 수령액을 제시
  - 상품 찜하기 기능 \*\*\*\*(로그인 필요)
    아 본 상품들이 마음에 든다면 찜하기 버튼을 눌러서 저장 가능함
    찜한 상품은 언제든 상품 비교할 때 다시 선택하여 다른 상품과 비교 가능
    마이페이지에서도 모아볼 수 있음

2.  커뮤니티 기능 설명
    - 금융상품 후기, 금융관리 노하우 총 2개의 탭으로 구성
    - 게시글 CRUD 기능 구현 - 이미지 업로드 가능
    - 게시글에 좋아요 기능 구현
    - 마이페이지에서 내가 쓴 글과 좋아요를 누른 게시글 확인 가능

---

## 🏗 아키텍쳐
<img src="https://user-images.githubusercontent.com/111356420/223927727-3745ff34-b60b-42b4-8280-f981555ac15a.png" width="500"/>

---

## 🍀 주요 기술

- firebase
- axios
- vercel
- lodash

---

<!-- ## 🛠 트러블슈팅

- **CORS 에러**
    - Cross-Origin Resource Sharing(교차 출처 리소스 공유 정책)

    ![corsError.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec34af08-6bb2-4c85-9e6d-ae72e88851bd/corsError.png)

       cors에러로 openAPI의 data를 가져오지 못함



    **✅ 해결**

    → CORS 를 해결하기 위해서는 (서버 측)**Origin Allow** **속성**에 클라이언트에서 보내는 출처를 추가해주어야 하고 또한 배포하는 **AWS** 같은 곳에서도 따로 설정을 해주어야 한다고한다.

    →  서버를 수정할 수도 없어 heroku-anywhere이라는 프록시서버 설정을 사용

    ```jsx
    	https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=`${개인인증키}`&topFinGrpNo=020000&pageNo=1
    ```

    ### **아쉬웠던 점**

    1. 리액트쿼리와 같이 실시간으로 데이터를 받아오는 경우 한번씩 연결 끊기거나 데이터를 받아오지 못하는 에러 발생
    2. 서버 연결 해주기
    heroku에서 남용으로 인해서 버튼을 눌렀을때만 서버를 연결할 수 있도록 변경해두어서 서버가 끊기게 되면 데이터를 가져오지 못하는 상황 발생

        ![스크린샷 2023-02-23 22.33.22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb1547b8-9db6-43df-bcc3-3a27f5939fab/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-23_22.33.22.png)

        →위와 같은 사이트에 들어가서 서버 연결을 해줘야함

- **API 데이터 구조로 인한 문제**

    ![baselist05705.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c767e208-8d04-416e-aa11-6db8b2ca6990/baselist05705.jpg)

    ![05705.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/67839a1a-3849-4e26-8944-e02bdb5d6aee/05705.jpg)

    - 한 상품에 대한 기본정보(BASE_LIST)와 금리에 대한 정보가 담긴 옵션 정보(OPTION_LIST)가 같이 저장되어 있지 않고 분리되어있음

    **✅ 해결**

    기본 정보를 기준으로 중복되는 속성값인 fin_prdt_cd가 같은 데이터를 옵션정보에서 찾아서 읽어옴

    ![code4.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3966a335-bb14-4958-88c6-9da7cc852efb/code4.png)

    ![code5.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f54effa7-b7a6-4ad1-84d9-ac1b7137ccaa/code5.png)

- **코드 최적화 ( 상품 3개 선택후 비교 )**
    - 예금, 적금의 정보를 가져오는 함수를 각 2개씩 총 4개 생성(적금base, option / 예금base, option)

        **✅ 해결**

        → Promiss.all() 메서드로 함수를 병렬실행

        → 전체 실행이 완료되면 한번에 모든 결과를 처리하도록 하여 최적화

    - 2.  종류가 다른 3개의 배열로 선택된 금융상품의 상태 값을 각각 관리

        **✅ 해결**

        선택된 상품들의 정보를 하나의 배열에 순서대로 push함


    ```jsx
    //* 금융상품 리스트 가져오기
      const handleButtonClick = async () => {
        const baseListPromises = [
          getDocs(collection(db, "DEPOSIT_BASE_LIST")),
          getDocs(collection(db, "SAVING_BASE_LIST")),
        ];
        const optionListPromises = [
          getDocs(collection(db, "DEPOSIT_OPTION_LIST")),
          getDocs(collection(db, "SAVING_OPTION_LIST")),
        ];

        const [baseListSnapshots, optionListSnapshots] = await Promise.all([
          Promise.all(baseListPromises),
          Promise.all(optionListPromises),
        ]);

        const products = [];
        const depositOptionalList = [];
        const savingbaseList = [];
        const savingoptionalList = [];

        baseListSnapshots.forEach((snapshot, index) => {
          snapshot.forEach((doc) => {
            const newProduct = {
              id: doc.id,
              ...doc.data(),
            };
            if (index === 0) {
              products.push(newProduct);
            } else {
              savingbaseList.push(newProduct);
            }
          });
        });

        optionListSnapshots.forEach((snapshot, index) => {
          snapshot.forEach((doc) => {
            const newProduct = {
              id: doc.id,
              ...doc.data(),
            };
            if (index === 0) {
              depositOptionalList.push(newProduct);
            } else {
              savingoptionalList.push(newProduct);
            }
          });
        });

        setProducts(products);
        setdepositOptionalList(depositOptionalList);
        setSavingbaseList(savingbaseList);
        setSavingoptionalList(savingoptionalList);
      };

      useEffect(() => {
        handleButtonClick();
      }, []);
    ```

- **debounce 처리 (Lodash)**
    - 새 비밀번호 변경을 위해선 사용하고 있는 비밀번호를 입력하고 실시간으로 맞는지 유효성검사가 실행됨
    (signInWithEmailAndPassword 메소드를 사용)
    - **사용 이유**
    password input에서 onchange로 계속 값을 받고 있어서 signInWithEmailAndPassword메소드를 사용하는 것은 비효율적

    **✅ 해결**
    lodash에 debounce처리를 통해서 비밀번호 입력이 끝난 후 0.3초 후에 그때까지 입력된 값을 한번에 들고 한번만 함수가 실행

    3번씩 호출하던 것에서 한번씩만 호출하는 것으로 효율성 높임

    ![carbon.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57dbfc5d-07ef-449d-bf2b-8e3e944b8c67/carbon.png)

    ![왼쪽(debounce처리), 오른쪽 일반 onchange함수 실행](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6580fc8c-02e2-4de0-8795-1a29a8ae6b78/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-08_11.45.21.png)

    왼쪽(debounce처리), 오른쪽 일반 onchange함수 실행

    **렌더링 되는 모습

    ![최적화_전_AdobeExpress.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a862c39e-1a70-47c5-986c-48fbd7866a1e/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA_%E1%84%8C%E1%85%A5%E1%86%AB_AdobeExpress.gif)

    debounce처리 전 ⇒ 입력할 때 마다 렌더링

    ![최적화_AdobeExpress.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2dc91989-aa3a-444e-b16b-7a3bdc4ad972/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA_AdobeExpress.gif)

    debounce 처리 후 ⇒ 한번만 렌더링


--- -->

## 🧑🏻‍💻\***\*👩🏻‍💻\*\*** 팀원

| 이름(역할)                                           | 맡은 업무와 기능수행                 |
| ---------------------------------------------------- | ------------------------------------ |
| 남마리나(팀장)                                       | 프로젝트 진행, 문서 제작, 기능 구현  |
| 박상우(부팀장)                                       | 프로젝트 진행, 기능 구현             |
| 김원준(팀원)                                         | 기능 구현                            |
| 남동현(팀원)                                         | 발표, 기능 구현                      |
| 조성아(팀원)                                         | 프로젝트 기능 구현 서포트, 기능 구현 |
| 안시은(팀원) | UX/UI 디자인 |

## 4조 팀원들의 깃허브

남마리나: [https://github.com/nyangmal123](https://github.com/nyangmal123)

박상우: [https://github.com/Sangwoo950](https://github.com/Sangwoo950)

김원준: [https://github.com/kimwonjuun](https://github.com/kimwonjuun)

남동현: [https://github.com/NDH24](https://github.com/NDH24)

조성아: [https://github.com/Jocooh](https://github.com/Jocooh)
