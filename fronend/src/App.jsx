import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { Home } from "./components/main/Home";
import Chat from "./components/chatbot/Chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Chat />
    </>
  );
}

export default App;
