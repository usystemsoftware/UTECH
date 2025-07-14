import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Home } from "./components/layout/main/Home";
import { Footer } from "./components/layout/footer/Footer";

import Chat from "./components/chatbot/Chat";
import WebDevelopment from "./components/pages/Industries/Solutions/WebDevelopment";
import BankingPage from "./components/pages/Industries/banking/BankingPage";
import Finance from "./components/pages/Industries/banking/Finance";
import CRM from "./components/pages/Industries/Solutions/CRM";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <Chat />
      <Footer /> */}
      {/* <WebDevelopment /> */}
      {/* <BankingPage/> */}
      {/* <Finance /> */}
      <CRM/>
      {/* <Router>
      <Routes>
        <Route/>
      </Routes>
      </Router> */}
    </>
  );
}

export default App;
