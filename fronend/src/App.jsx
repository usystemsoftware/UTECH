import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Home } from "./components/layout/main/Home";
import { Footer } from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />

      {/* <Router>
      <Routes>
        <Route/>
      </Routes>
      </Router> */}
    </>
  );
}

export default App;
