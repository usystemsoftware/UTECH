import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/header/Navbar";
import { Footer } from "@/components/layout/Footer";
import Chat from "@/components/chatbot/Chat";
import MainLayout from "@/components/layout/MainLayout";
import { SolutionRoutes } from "@/routes/SolutionRoutes";
import { IndustryRoutes } from "@/routes/IndustryRoutes";
import { ServiceRoutes } from "@/routes/ServiceRoutes";
import { DefaultRoutes } from "@/routes/DefaultRoutes";
import DynamicHelmet from "@/custom/DynamicHelmet";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function App() {

  useAnalytics();

  return (
    <>
      <DynamicHelmet />
      <CookieConsentBanner />
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
