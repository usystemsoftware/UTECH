import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/header/Navbar";
import { Footer } from "@/components/layout/Footer";
import Chat from "@/components/chatbot/Chat";
import MainLayout from "@/components/layout/MainLayout";

// Route groups
import { SolutionRoutes } from "@/routes/SolutionRoutes";
import { IndustryRoutes } from "@/routes/IndustryRoutes";
import { ServiceRoutes } from "@/routes/ServiceRoutes";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLayout />} />

        {/* solution routes */}
        {SolutionRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* industry routes */}
        {IndustryRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* service routes */}
        {ServiceRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>

      <Chat />
      <Footer />
    </>
  );
}
