import Banking from "@/pages/industries/banking/Banking";
import Finance from "@/pages/industries/finance/Finance";
import RealEstate from "@/pages/industries/RealEstate";

export const IndustryRoutes = [
    { path: "/industries/banking", element: <Banking /> },
    { path: "/industries/finance", element: <Finance /> },
    { path: "/industries/real-estate", element: <RealEstate /> },
];
