import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initGA, trackPageView } from "@/lib/analytics";
import MetaSetter from "@/custom/MetaSetter.jsx";

import Navbar from "@/components/layout/header/Navbar";
import { Footer } from "@/components/layout/Footer";
import Chat from "@/components/chatbot/Chat";
import MainLayout from "@/components/layout/MainLayout";

// Route groups
import { SolutionRoutes } from "@/routes/SolutionRoutes";
import { IndustryRoutes } from "@/routes/IndustryRoutes";
import { ServiceRoutes } from "@/routes/ServiceRoutes";
import { DefaultRoutes } from "@/routes/DefaultRoutes";

export default function App() {
  const location = useLocation();

  // Load Google Analytics on first render
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <>
      <MetaSetter />
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLayout />} />

        {/* default routes */}
        {DefaultRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

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
