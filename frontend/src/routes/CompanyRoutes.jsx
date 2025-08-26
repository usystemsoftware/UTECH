import Maintenance404 from "@/components/Maintenance404";
import Careers from "@/pages/company/careers/Careers";
import JobDetails from "@/pages/company/careers/JobDetails";
import LegalPolicy from "@/pages/company/legal-policy/LegalPolicy";
import PrivacyPolicy from "@/pages/company/privacy-policy/PrivacyPolicy";
import Sitemap from "@/pages/company/sitemap/Sitemap";

export const CompanyRoutes = [
  { path: "*", element: <Maintenance404 /> },
  { path: "/company/careers", element: <Careers /> },
  { path: "/company/careers/:id", element: <JobDetails /> },
  { path: "/company/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/company/legal-policy", element: <LegalPolicy /> },
  { path: "/company/sitemap", element: <Sitemap /> },
];
