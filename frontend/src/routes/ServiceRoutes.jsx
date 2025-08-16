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
import CustomServices from "@/pages/services/customservices/CustomServices";
import FinopsServices from "@/pages/services/finops-services/FinopsServices";
import ImplementationDeployment from "@/pages/services/implementation-deployment/ImplementationDeployment";
import InfrastructureSupport from "@/pages/services/infrastructure-support/InfrastructureSupport";
import MigrationsUpgrades from "@/pages/services/migrations-upgrades/MigrationsUpgrades";
import NocServices from "@/pages/services/noc-services/NocServices";
import PartnerProductSupport from "@/pages/services/partner-product-support/PartnerProductSupport";
import StartupMvp from "@/pages/services/startup-mvp/StartupMvp";
import SystemsIntegration from "@/pages/services/systems-integration/SystemsIntegration";
import ProductLifecycleManagement from "@/pages/services/product-lifecycle-management/ProductLifecycleManagement";

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
  { path: "/services/custom-software", element: <CustomServices /> },
  { path: "/services/finops", element: <FinopsServices /> },
  { path: "/services/implementation-deployment", element: <ImplementationDeployment /> },
  { path: "/services/infrastructure-support", element: <InfrastructureSupport /> },
  { path: "/services/migrations-upgrades", element: <MigrationsUpgrades /> },
  { path: "/services/noc", element: <NocServices /> },
  { path: "/services/partner-support", element: <PartnerProductSupport /> },
  { path: "/services/startup-mvp", element: <StartupMvp /> },
  { path: "/services/systems-integration", element: <SystemsIntegration /> },
  { path: "/services/plm", element: <ProductLifecycleManagement /> },
]
