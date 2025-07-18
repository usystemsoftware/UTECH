import ApiDevelopment from "@/pages/services/ApiDevelopment";
import DigitalTransformation from "@/pages/services/DigitalTransformation";

export const ServiceRoutes = [
    { path: "/services/api-development", element: <ApiDevelopment /> },
    { path: "/services/digital-transformation", element: <DigitalTransformation /> },
];
