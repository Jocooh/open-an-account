import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DetailPage from "../pages/DetailPage/DetailPage";
// import Layout from "../components/GlobalComponents/Layout/Layout";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import InsertData from "../data/InsertData";
import Footer from "../../src/components/GlobalComponents/Footer/Footer.jsx";
import Header from "../../src/components/GlobalComponents/Header/Header.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/detail" element={<DetailPage />} />
        {/* <Route path="/bankList" element={<BankLists />} /> */}
        {/* admin */}
        <Route path="/4jojoa" element={<InsertData />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
export default Router;
