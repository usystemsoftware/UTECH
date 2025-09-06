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
import GoogleCloud from "@/pages/solutions/google-cloud/GoogleCloud";
import IBM from "@/pages/solutions/ibm/IBM";
import Oracle from "@/pages/solutions/oracle/Oracle";
import Salesforce from "@/pages/solutions/salesforce/Salesforce";
import SAP from "@/pages/solutions/sap/SAP";
import UKG from "@/pages/solutions/ukg/UKG";
import Aws from "@/pages/solutions/aws/Aws";
import Autodesk from "@/pages/solutions/autodesk/Autodesk";
import Biometrics from "@/pages/solutions/biometrics/Biometrics";
import Blockchain from "@/pages/solutions/blockchain/Blockchain";
import Bianalytics from "@/pages/solutions/bi-analytics/Bianalytics";
import UiPath from "@/pages/solutions/ui-path/UiPath";

import Microsoft from "@/pages/solutions/microsoft/Microsoft"; // ✅ fixed
export const SolutionRoutes = [
  { path: "/solutions/web-development", element: <WebDevelopment /> },
  { path: "/solutions/crm", element: <CRM /> },
  { path: "/solutions/ui-ux", element: <UiUx /> },
  { path: "/solutions/embedded-software", element: <EmbeddedSoftware /> },
  { path: "/solutions/digital-marketing", element: <DigitalMarketing /> },
  {
    path: "/solutions/animation-graphic-design",
    element: <AnimationGraphicDesign />,
  },
  { path: "/solutions/ai", element: <Ai /> },
  { path: "/solutions/cms", element: <CMS /> },
  { path: "/solutions/cloud", element: <Cloud /> },
  { path: "/solutions/database", element: <Database /> },
  {
    path: "/solutions/digital-asset-management",
    element: <DigitalAssetManagement />,
  },
  { path: "/solutions/document-management", element: <DocumentManagement /> },
  { path: "/solutions/erp", element: <ERP /> },
  {
    path: "/solutions/facilities-management",
    element: <FacilitiesManagement />,
  },
  { path: "/solutions/fraud-protection", element: <FraudProtection /> },
  { path: "/solutions/gis", element: <GIS /> },
  { path: "/solutions/iot", element: <IOT /> },
  { path: "/solutions/kiosk", element: <Kiosks /> },
  { path: "/solutions/asset-tracking", element: <Assettracking /> },
  { path: "/solutions/ar-vr", element: <Arvr /> },
  { path: "/solutions/google-cloud", element: <GoogleCloud /> },
  { path: "/solutions/ibm", element: <IBM /> },
  { path: "/solutions/oracle", element: <Oracle /> },
  { path: "/solutions/salesforce", element: <Salesforce /> },
  { path: "/solutions/sap", element: <SAP /> },
  { path: "/solutions/ukg", element: <UKG /> },
  { path: "/solutions/aws", element: <Aws /> },
  { path: "/solutions/autodesk", element: <Autodesk /> },
  { path: "/solutions/biometrics", element: <Biometrics /> },
  { path: "/solutions/blockchain", element: <Blockchain /> },
  { path: "/solutions/bi-analytics", element: <Bianalytics /> },

  { path: "/solutions/uipath", element: <UiPath /> },

  { path: "/solutions/microsoft", element: <Microsoft /> }, // ✅ fixed
];
