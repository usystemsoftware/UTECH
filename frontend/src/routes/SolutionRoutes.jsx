import WebDevelopment from "@/pages/solutions/web-development/WebDevelopment";
import CRM from "@/pages/solutions/crm/CRM";
import UiUx from "@/pages/solutions/ui-ux/UiUx";
import EmbeddedSoftware from "@/pages/solutions/embedded-software/EmbeddedSoftware";
import DigitalMarketing from "../pages/solutions/digital-marketing/DigitalMarketing";

export const SolutionRoutes = [
  { path: "/solutions/web-development", element: <WebDevelopment /> },
  { path: "/solutions/crm", element: <CRM /> },
  { path: "/solutions/ui-ux", element: <UiUx /> },
  { path: "/solutions/embedded-software", element: <EmbeddedSoftware /> },
  { path: "/solutions/digital-marketing", element: <DigitalMarketing /> },
];
