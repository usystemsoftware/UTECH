import ApiDevelopment from "@/pages/services/api-developement/ApiDevelopment";
import DigitalTransformation from "@/pages/services/digital-transformation/DigitalTransformation";
import ApplicationDevelopment from "@/pages/services/application-development/AplicationDevelopment";
import QualityAssurance from "@/pages/services/quality-assurance/QualityAssurance";
import BPO from "@/pages/services/bpo/BPO";

export const ServiceRoutes = [
  { path: "/services/api-development", element: <ApiDevelopment /> },
  { path: "/services/digital-transformation", element: <DigitalTransformation /> },
  { path: "/services/application-development", element: <ApplicationDevelopment /> },
  { path: "/services/qa-testing", element: <QualityAssurance /> },
  { path: "/services/bpo", element: <BPO /> },
  { path: "/services/application-maintenance", element: <ApplicationMaintenance />, },
]
