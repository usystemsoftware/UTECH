import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import Chat from "./components/chatbot/Chat";
import WebDevelopment from "./components/pages/Industries/Solutions/WebDevelopment";
import CRM from "./components/pages/Industries/Solutions/CRM";
import BankingPage from "./components/pages/Industries/banking/BankingPage";
import Finance from "./components/pages/Industries/banking/Finance";
import ApiDevelopment from "./components/pages/Industries/services/ApiDevelopment";
import DigitalTransformation from "./components/pages/services/DigitalTransformation";
import { HeroSection } from "./components/layout/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/solutions/web-development" element={<WebDevelopment />} />
          <Route path="/solutions/crm" element={<CRM />} />
          <Route path="/solutions/api-development" element={<ApiDevelopment />} />
          <Route path="/Industries/BankingPage" element={<BankingPage />} />
          <Route path="/Industries/Finance" element={<Finance />} />
          <Route path="/Services/DigitalTransformation" element={<DigitalTransformation />} />
        </Routes>
      </div>
      <Chat />
      <Footer />
    </>
  );
}

export default App;