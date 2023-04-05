import React, { useState, useEffect } from "react";
import { authService } from "../../config/firebase";
import CommunityMain from "../../components/Community/CommunityMain";
import LoggedIn from "../../components/Community/LoggedIn";
import { onAuthStateChanged } from "firebase/auth";
import { Wrapper } from "./style";
import { isLoggedIn } from "../../utils/utils";

function CommunityPage() {
  const [user, setUser] = useState({});
  const [categorytab, setCategoryTab] = useState("금융상품 후기");
  useEffect(() => {
    onAuthStateChanged(authService, (user) => setUser(user));
  }, []);
  return (
    <Wrapper>
      {isLoggedIn() ? (
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
