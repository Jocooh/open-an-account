import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import CommunityPage from "../pages/Community/CommunityPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import Footer from "../../src/components/GlobalComponents/Footer/Footer.jsx";
import Header from "../../src/components/GlobalComponents/Header/Header.jsx";
import ScrollToTop from "../components/GlobalComponents/ScrollToTop";
import NotFoundPage from "../pages/Error/NotFoundPage";
import Admin from "../pages/Admin/Admin";
const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* admin */}
        <Route path="/4jojoa" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
