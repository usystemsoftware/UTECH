import Banking from "@/pages/industries/banking/Banking";
import Finance from "@/pages/industries/finance/Finance";
import RealEstate from "@/pages/industries/real-estate/RealEstate";
import Construction from "@/pages/industries/construction/Construction";
import Healthcare from "@/pages/industries/healthcare/Healthcare";
import HospitalandTravelling from "@/pages/industries/hostipal-travel/HospitalandTravelling";
import Aviation from "../pages/industries/Aviation/Aviation";

export const IndustryRoutes = [
    { path: "/industries/banking", element: <Banking /> },
    { path: "/industries/aviation", element: <Aviation /> },
    { path: "/industries/construction", element: <Construction /> },
    { path: "/industries/finance", element: <Finance /> },
    { path: "/industries/real-estate", element: <RealEstate /> },
    { path: "/industries/healthcare", element: <Healthcare /> },
    { path: "/industries/hospitality-travel", element: <HospitalandTravelling /> },
];
