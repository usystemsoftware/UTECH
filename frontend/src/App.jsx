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
import AdminDashboard from "@/pages/Admin/Admin";

// ✅ SEO Management Pages
import Key_word_Management from "@/pages/SEOmanagement/Key_word_Management";
import OnPageOptimization from "@/pages/SEOmanagement/OnPageOptimization";
import OffPageSEOManagement from "@/pages/SEOmanagement/OffPageSEOManagement";
import TechnicalSEO from "@/pages/SEOmanagement/TechnicalSEO";
import LocalSEO from "./pages/SEOmanagement/LocalSEO";
import TeamRole from "./pages/SEOmanagement/TeamRole";

// ✅ Route Arrays
const adminRoutes = [{ path: "/admin", element: <AdminDashboard /> }];
const seoEditorRoutes = [{ path: "/SEOEditer/seoeditor", element: <SeoEditorComponent /> }];
const seoDashboardRoutes = [{ path: "/SEOEditer/SeoDashboard", element: <SeoDashboard /> }];
const loginAdminRoutes = [{ path: "/login", element: <LoginAdminPage /> }];
const registrationRoutes = [{ path: "/registration", element: <Register /> }];

// SEO Management Routes
const KeywordManagementRoutes = [{ path: "/Key_word_Management", element: <Key_word_Management /> }];
const OnPageOptimizationRoutes = [{ path: "/OnPageOptimization", element: <OnPageOptimization /> }];
const OffPageSEORoutes = [{ path: "/OffPageSEOManagement", element: <OffPageSEOManagement /> }];
const TechnicalSEORoutes = [{ path: "/TechnicalSEO", element: <TechnicalSEO /> }];
const LocalSEORoutes = [{ path: "/localSEO", element: <LocalSEO /> }];
const TeamRoleRoutes = [{ path: "/teamrole", element: <TeamRole /> }];

// ✅ Layout Wrapper Components
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

// ✅ Main App Component
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

      {/* Public Routes from multiple route arrays */}
      {[...DefaultRoutes, ...SolutionRoutes, ...IndustryRoutes, ...ServiceRoutes, ...CompanyRoutes, ...BlogRoutes, ...PortfolioRoutes].map(
        ({ path, element }) => (
          <Route key={path} path={path} element={<PublicLayout>{element}</PublicLayout>} />
        )
      )}

      {/* SEO Editor & Dashboard */}
      {[...seoEditorRoutes, ...seoDashboardRoutes].map(({ path, element }) => (
        <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
      ))}

      {/* Admin / Login / Registration (No Navbar/Footer) */}
      {[...loginAdminRoutes, ...registrationRoutes, ...adminRoutes].map(({ path, element }) => (
        <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
      ))}

      {/* ✅ SEO Management Pages */}
      {[...KeywordManagementRoutes, ...OnPageOptimizationRoutes, ...OffPageSEORoutes, ...TechnicalSEORoutes, ...LocalSEORoutes, ...TeamRoleRoutes].map(
        ({ path, element }) => (
          <Route key={path} path={path} element={<PlainLayout>{element}</PlainLayout>} />
        )
      )}
    </Routes>
  );
}
