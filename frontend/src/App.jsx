import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Home } from "./components/layout/main/Home";
import { Footer } from "./components/layout/footer/Footer";

import Chat from "./components/chatbot/Chat";
import WebDevelopment from "./components/pages/Industries/Solutions/WebDevelopment";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <Chat />
      <Footer /> */}
      <WebDevelopment />
      {/* <Router>
      <Routes>
        <Route/>
      </Routes>
      </Router> */}
    </>
  );
}

export default App;
