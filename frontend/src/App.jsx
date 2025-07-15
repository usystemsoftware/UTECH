import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Home } from "./components/layout/main/Home";
import { Footer } from "./components/layout/footer/Footer";
import Chat from "./components/chatbot/Chat";
import WebDevelopment from "./components/pages/Industries/Solutions/WebDevelopment"; // Adjust the path if needed
import CRM from "./components/pages/Industries/Solutions/CRM";
import BankingPage from "./components/pages/Industries/banking/BankingPage";
import Finance from "./components/pages/Industries/banking/Finance";
import ApiDevelopment from "./components/pages/Industries/services/ApiDevelopment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/web-development" element={<WebDevelopment />} />
        <Route path="/solutions/crm" element={<CRM />} />
        <Route path="/solutions/api-development" element={<ApiDevelopment />} />

        <Route path="/Industries/BankingPage" element={<BankingPage />} />
        <Route path="/Industries/Finance" element={<Finance />} />
      </Routes>
      <Chat />
      <Footer />
    </>
  );
}

export default App;
