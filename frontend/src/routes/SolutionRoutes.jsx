import WebDevelopment from "@/pages/solutions/web-development/WebDevelopment";
import CRM from "@/pages/solutions/crm/CRM";
import UiUx from "@/pages/solutions/ui-ux/UiUx";
import EmbeddedSoftware from "@/pages/solutions/embedded-software/EmbeddedSoftware";
import DigitalMarketing from "@/pages/solutions/digital-marketing/DigitalMarketing";
import AnimationGraphicDesign from "@/pages/solutions/animation-graphic-design/AnimationGraphicDesign";
import CMS from "@/pages/solutions/cms/CMS";
import Cloud from "@/pages/solutions/cloud/Cloud";
import Database from "@/pages/solutions/database/Database";
import DigitalAssetManagement from "@/pages/solutions/digital-asset-mngt/DigitalAssetManagement";
import DocumentManagement from "@/pages/solutions/document-management/DocumentManagement";

export const SolutionRoutes = [
  { path: "/solutions/web-development", element: <WebDevelopment /> },
  { path: "/solutions/crm", element: <CRM /> },
  { path: "/solutions/ui-ux", element: <UiUx /> },
  { path: "/solutions/embedded-software", element: <EmbeddedSoftware /> },
  { path: "/solutions/digital-marketing", element: <DigitalMarketing /> },
  { path: "/solutions/animation-graphic-design", element: <AnimationGraphicDesign /> },
  { path: "/solutions/cms", element: <CMS /> },
  { path: "/solutions/cloud", element: <Cloud /> },
  { path: "/solutions/database", element: <Database /> },
  { path: "/solutions/digital-asset-management", element: <DigitalAssetManagement /> },
  { path: "/solutions/document-management", element: <DocumentManagement /> },

];
