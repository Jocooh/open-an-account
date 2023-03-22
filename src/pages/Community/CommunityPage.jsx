import React, { useState, useEffect } from "react";
import { authService } from "../../config/firebase";
import PostingModal from "../../components/PostingModal/PostingModal";
import CommunityMain from "../../components/Community/CommunityMain";
import LoggedIn from "../../components/Community/LoggedIn";
import { onAuthStateChanged } from "firebase/auth";
import { Wrapper } from "./style";

function CommunityPage() {
  //*현재 로그인되어있는지 확인
  // const isLoggedIn = sessionStorage.key(0);
  const isLoggedIn = sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  const [user, setUser] = useState({});
  const [categorytab, setCategoryTab] = useState("금융상품 후기");
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);
  return (
    <Wrapper>
      {isLoggedIn ? (
        <LoggedIn
          username={user?.displayName}
          categorytab={categorytab}
          setCategoryTab={setCategoryTab}
        />
      ) : (
        <CommunityMain
          categorytab={categorytab}
          setCategoryTab={setCategoryTab}
        />
      )}
    </Wrapper>
  );
}

export default CommunityPage;
