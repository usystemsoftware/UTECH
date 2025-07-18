import WebDevelopment from "@/pages/solutions/WebDevelopment";
import CRM from "@/pages/solutions/CRM";
import UiUx from "@/pages/solutions/UiUx";
import EmbeddedSoftware from "@/pages/solutions/EmbeddedSoftware";

export const SolutionRoutes = [
    { path: "/solutions/web-development", element: <WebDevelopment /> },
    { path: "/solutions/crm", element: <CRM /> },
    { path: "/solutions/ui-ux", element: <UiUx /> },
    { path: "/solutions/embedded-software", element: <EmbeddedSoftware /> },
];
