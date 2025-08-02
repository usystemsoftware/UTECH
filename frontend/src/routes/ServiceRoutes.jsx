import ApiDevelopment from "@/pages/services/api-developement/ApiDevelopment";
import DigitalTransformation from "@/pages/services/digital-transformation/DigitalTransformation";
import ApplicationDevelopment from "@/pages/services/application-development/AplicationDevelopment";
import QualityAssurance from "@/pages/services/quality-assurance/QualityAssurance";
import BPO from "@/pages/services/bpo/BPO";
import ApplicationMaintenance from "@/pages/services/application-maintenance/ApplicationMaintenance";
import BackupRecovery from "@/pages/services/backup-recovery/BackupRecovery";
import DataIntegration from "@/pages/services/data-integration/DataIntegration";
import DataManagement from "@/pages/services/data-management/DataManagement";
import DevOps from "@/pages/services/devops/DevOps";

export const ServiceRoutes = [
  { path: "/services/api-development", element: <ApiDevelopment /> },
  { path: "/services/digital-transformation", element: <DigitalTransformation /> },
  { path: "/services/application-development", element: <ApplicationDevelopment /> },
  { path: "/services/qa-testing", element: <QualityAssurance /> },
  { path: "/services/bpo", element: <BPO /> },
  { path: "/services/application-maintenance", element: <ApplicationMaintenance /> },
  { path: "/services/backup-disaster-recovery", element: <BackupRecovery /> },
  { path: "/services/data-integration", element: <DataIntegration /> },
  { path: "/services/data-management", element: <DataManagement /> },
  { path: "/services/devops", element: <DevOps /> },
]
