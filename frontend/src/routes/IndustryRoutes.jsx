import Banking from "@/pages/industries/banking/Banking";
import Aviation from "@/pages/industries/aviation/Aviation";
import Finance from "@/pages/industries/finance/Finance";
import RealEstate from "@/pages/industries/real-estate/RealEstate";
import Construction from "@/pages/industries/construction/Construction";
import Healthcare from "@/pages/industries/healthcare/Healthcare";
import HospitalandTravelling from "@/pages/industries/hostipal-travel/HospitalandTravelling";
import HCM from "@/pages/industries/hcm/HCM";
import Correction from "@/pages/industries/correction/Correction";
import ELearningEducation from "@/pages/industries/e-learning-education/ELearningEducation";
import EnergyUtilities from "@/pages/industries/energy-utilities/EnergyUtilities";
import EnvManagement from "@/pages/industries/env-mangt/EnvManagement";
import MediaEntertainment from "@/pages/industries/media-entertainment/MediaEntertainment";
import Gaming from "@/pages/industries/gaming/Gaming";
import Legal from "@/pages/industries/legal/Legal";
import FoodBeverage from "@/pages/industries/food-beverage/FoodBeverage";
import MeetingEvents from "@/pages/industries/meeting-events/MeetingEvents";
import Retail from "@/pages/industries/retail/Retail";
import Sports from "@/pages/industries/sports/Sports";
import Payments from "@/pages/industries/payments/Payments";
import PoliticalCompaign from "@/pages/industries/politicalcampaign/PoliticalCompaign";
import SupplyChain from "@/pages/industries/supplychain/SupplyChain";
import Telecommunications from "@/pages/industries/telecommunications/Telecommunications";
import Agriculture from "@/pages/industries/agriculture/Agriculture";

export const IndustryRoutes = [
    { path: "/industries/banking", element: <Banking /> },
    { path: "/industries/agriculture", element: <Agriculture /> },
    { path: "/industries/aviation", element: <Aviation /> },
    { path: "/industries/construction", element: <Construction /> },
    { path: "/industries/finance", element: <Finance /> },
    { path: "/industries/real-estate", element: <RealEstate /> },
    { path: "/industries/healthcare", element: <Healthcare /> },
    { path: "/industries/hospitality-travel", element: <HospitalandTravelling /> },
    { path: "/industries/hcm", element: <HCM /> },
    { path: "/industries/corrections", element: <Correction /> },
    { path: "/industries/e-learning-education", element: <ELearningEducation /> },
    { path: "/industries/energy-utilities", element: <EnergyUtilities /> },
    { path: "/industries/environmental-management", element: <EnvManagement /> },
    { path: "/industries/media-entertainment", element: <MediaEntertainment /> },
    { path: "/industries/gaming", element: <Gaming /> },
    { path: "/industries/legal", element: <Legal /> },
    { path: "/industries/food-beverage", element: <FoodBeverage /> },
    { path: "/industries/meetings-events", element: <MeetingEvents /> },
    { path: "/industries/retail", element: <Retail /> },
    { path: "/industries/sports", element: <Sports /> },
    { path: "/industries/payments", element: <Payments /> },
    { path: "/industries/political-campaigns", element: <PoliticalCompaign /> },
    { path: "/industries/supply-chain", element: <SupplyChain /> },
    { path: "/industries/telecommunications", element: <Telecommunications /> },
];
