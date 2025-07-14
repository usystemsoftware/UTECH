import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Home } from "./components/layout/main/Home";
import { Footer } from "./components/layout/footer/Footer";
import Chat from "./components/chatbot/Chat";
import WebDevelopment from "./components/pages/Industries/Solutions/WebDevelopment"; // Adjust the path if needed

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/web-development" element={<WebDevelopment />} />
        {/* Add more routes as needed */}
      </Routes>
      <Chat />
      <Footer />
    </>
  );
}

export default App;
