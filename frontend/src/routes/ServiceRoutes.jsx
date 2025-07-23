import ApiDevelopment from "@/pages/services/api-developement/ApiDevelopment";
import DigitalTransformation from "@/pages/services/digital-transformation/DigitalTransformation";
import ApplicationDevelopment from "../pages/services/application-development/AplicationDevelopment";

export const ServiceRoutes = [
    { path: "/services/api-development", element: <ApiDevelopment /> },
    { path: "/services/digital-transformation", element: <DigitalTransformation /> },
    { path: "/services/application-development", element: <ApplicationDevelopment /> },
];
