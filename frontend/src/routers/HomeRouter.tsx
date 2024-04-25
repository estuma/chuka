import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import HomePage from "@pages/home/HomePage";
import CelebrationPage from "@/pages/celebration/CelebrationPage";
import AlarmPage from "@/pages/alarm/AlarmPage";
import MyPage from "@/pages/mypage/MyPage";
import FundingRegPage from "@/pages/celebration/funding/FundingRegPage";
import FundingRegInfoPage from "@/pages/celebration/funding/FundingRegInfoPage";
import PaymentPage from "@/pages/celebration/funding/PaymentPage";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/celebrate" element={<CelebrationPage />} />
      <Route path="/celebrate/funding" element={<FundingRegPage />} />
      <Route path="/celebrate/funding-info" element={<FundingRegInfoPage />} />
      <Route path="/celebrate/payment" element={<PaymentPage />} />

      <Route path="/alarm" element={<AlarmPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default HomeRouter;
