import Maintenance404 from "@/components/Maintenance404";
import Careers from "@/pages/company/careers/Careers";
import JobDetails from "@/pages/company/careers/JobDetails";
import LegalPolicy from "@/pages/company/legal-policy/LegalPolicy";
import PrivacyPolicy from "@/pages/company/privacy-policy/PrivacyPolicy";
import Sitemap from "@/pages/company/sitemap/Sitemap";
import About from "@/pages/company/about/About";
import Events from "@/pages/company/events/Events";
import Refferal from "@/pages/company/refferal/refferal";
import Location from "@/pages/company/locations/Location";
import History from "@/pages/company/history/History";
import PeopleAndCulture from "@/pages/company/people-and-culture/PeopleAndCulture";
import Review from "@/pages/company/reviews/review";

export const CompanyRoutes = [
  { path: "*", element: <Maintenance404 /> },
  { path: "/company/careers", element: <Careers /> },
  { path: "/company/careers/:id", element: <JobDetails /> },
  { path: "/company/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/company/legal-policy", element: <LegalPolicy /> },
  { path: "/company/sitemap", element: <Sitemap /> },
  { path: "/company/about-us", element: <About /> },
  { path: "/company/events", element: <Events /> },
  { path: "/company/refferal", element: <Refferal /> },
  { path: "/company/locations", element: <Location /> },
  { path: "/company/history", element: <History /> },
  { path: "/company/people-and-culture", element: <PeopleAndCulture /> },
  { path: "/company/reviews", element: <Review /> },
];
