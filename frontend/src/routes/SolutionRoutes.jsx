import WebDevelopment from "@/pages/solutions/web-development/WebDevelopment";
import CRM from "@/pages/solutions/crm/CRM";
import UiUx from "@/pages/solutions/ui-ux/UiUx";
import EmbeddedSoftware from "@/pages/solutions/embedded-software/EmbeddedSoftware";
import DigitalMarketing from "@/pages/solutions/digital-marketing/DigitalMarketing";
import AnimationGraphicDesign from "@/pages/solutions/animation-graphic-design/AnimationGraphicDesign";
import Ai from "@/pages/solutions/ai/Ai";
import CMS from "@/pages/solutions/cms/CMS";
import Cloud from "@/pages/solutions/cloud/Cloud";
import Database from "@/pages/solutions/database/Database";
import DigitalAssetManagement from "@/pages/solutions/digital-asset-mngt/DigitalAssetManagement";
import DocumentManagement from "@/pages/solutions/document-management/DocumentManagement";
import ERP from "@/pages/solutions/erp/ERP";
import FacilitiesManagement from "@/pages/solutions/facilities-management/FacilitiesManagement";
import FraudProtection from "@/pages/solutions/fraud-protection/FraudProtection";
import GIS from "@/pages/solutions/gis/GIS";
import IOT from "@/pages/solutions/iot/IOT";
import Kiosks from "@/pages/solutions/kiosks/Kiosks";
import Assettracking from "@/pages/solutions/asset-tracking/Assettracking";
import Arvr from "@/pages/solutions/ar-vr/Arvr";

export const SolutionRoutes = [
  { path: "/solutions/web-development", element: <WebDevelopment /> },
  { path: "/solutions/crm", element: <CRM /> },
  { path: "/solutions/ui-ux", element: <UiUx /> },
  { path: "/solutions/embedded-software", element: <EmbeddedSoftware /> },
  { path: "/solutions/digital-marketing", element: <DigitalMarketing /> },
  { path: "/solutions/animation-graphic-design", element: <AnimationGraphicDesign /> },
  { path: "/solutions/ai", element: <Ai /> },
  { path: "/solutions/cms", element: <CMS /> },
  { path: "/solutions/cloud", element: <Cloud /> },
  { path: "/solutions/database", element: <Database /> },
  { path: "/solutions/digital-asset-management", element: <DigitalAssetManagement /> },
  { path: "/solutions/document-management", element: <DocumentManagement /> },
  { path: "/solutions/erp", element: <ERP /> },
  { path: "/solutions/facilities-management", element: <FacilitiesManagement /> },
  { path: "/solutions/fraud-protection", element: <FraudProtection /> },
  { path: "/solutions/gis", element: <GIS /> },
  { path: "/solutions/iot", element: <IOT /> },
  { path: "/solutions/kiosk", element: <Kiosks /> },
  { path: "/solutions/asset-tracking", element: <Assettracking /> },
  { path: "/solutions/ar-vr", element: <Arvr /> },
];
