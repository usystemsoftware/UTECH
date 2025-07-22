import ApiDevelopment from "@/pages/services/api-developement/ApiDevelopment";
import DigitalTransformation from "@/pages/services/digital-transformation/DigitalTransformation";

export const ServiceRoutes = [
    { path: "/services/api-development", element: <ApiDevelopment /> },
    { path: "/services/digital-transformation", element: <DigitalTransformation /> },
];
