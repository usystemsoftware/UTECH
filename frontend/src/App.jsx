import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/header/Navbar";
import { Footer } from "@/components/layout/Footer";
import MainLayout from "@/components/layout/MainLayout";
import DynamicHelmet from "@/custom/DynamicHelmet";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ScrollToTopButton } from "@/components/ScrollToTop";
import TawkToChat from "@/components/layout/TawkToChat";

// Routes
import { SolutionRoutes } from "@/routes/SolutionRoutes";
import { IndustryRoutes } from "@/routes/IndustryRoutes";
import { ServiceRoutes } from "@/routes/ServiceRoutes";
import { DefaultRoutes } from "@/routes/DefaultRoutes";
import { CompanyRoutes } from "@/routes/CompanyRoutes";
import { BlogRoutes } from "@/routes/BlogRoutes";
import { PortfolioRoutes } from "@/routes/PortfolioRoutes";

// SEO Components
import SeoDashboard from "@/components/seo/SEOEditer/Dashboard";
import SeoEditorComponent from "@/components/seo/SEOEditer/SeoEditer";

// Auth Components
import LoginAdminPage from "@/components/layout/Login/Login";
import Register from "@/components/layout/Login/Register";
import AdminDashboard from "./pages/Admin/Admin";

// ✅ Route Arrays
const adminRoutes = [{ path: "/admin", element: <AdminDashboard /> }];
const seoEditorRoutes = [{ path: "/SEOEditer/seoeditor", element: <SeoEditorComponent /> }];
const seoDashboardRoutes = [{ path: "/SEOEditer/SeoDashboard", element: <SeoDashboard /> }];
const loginAdminRoutes = [{ path: "/login", element: <LoginAdminPage /> }];
const registrationRoutes = [{ path: "/registration", element: <Register /> }];

// Layout Wrapper Components
const PublicLayout = ({ children }) => (
  <>
    <DynamicHelmet />
    <CookieConsentBanner />
    <Navbar />
    {children}
    <TawkToChat />
    <ScrollToTopButton />
    <Footer />
  </>
);

const PlainLayout = ({ children }) => <>{children}</>; // For admin/login/registration

export default function App() {
  useAnalytics();

  return (
    <Routes>
      {/* Public Routes with Navbar/Footer */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <MainLayout />
          </PublicLayout>
        }
      />

      {DefaultRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {SolutionRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {IndustryRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {ServiceRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {CompanyRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {BlogRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {PortfolioRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {seoEditorRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
      ))}

      {seoDashboardRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
      ))}

      {/* Admin / Login / Registration (No Navbar/Footer) */}
      {loginAdminRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
      ))}

      {registrationRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
      ))}

      {adminRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
      ))}
    </Routes>
  );
}
