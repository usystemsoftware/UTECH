import { useState } from "react";
import Uipathbpo from "./Uipathbpo";
import Uipathbanking from "./Uipathbanking";
import UiPathInsurance from "./UiPathInsurance";
import UiPathhealthcare from "./UiPathhealthacare";
import Uipathtelecom from "./Uipathtelecom";
import Uipathmanufacturing from "./Uipathmanufacturing";
import UiPathPublicServices from "./UiPathPublicServices";
import UiPathRetail from "./UiPathRetail";

const industries = [
  { id: "bpo", label: "BPO", component: <Uipathbpo /> },
  { id: "banking", label: "Banking", component: <Uipathbanking /> },
  { id: "insurance", label: "Insurance", component: <UiPathInsurance /> },
  { id: "healthcare", label: "Healthcare", component: <UiPathhealthcare /> },
  { id: "telecom", label: "Telecom", component: <Uipathtelecom /> },
  {
    id: "manufacturing",
    label: "Manufacturing",
    component: <Uipathmanufacturing />,
  },
  {
    id: "public",
    label: "Public Services",
    component: <UiPathPublicServices />,
  },
  { id: "retail", label: "Retail & CPG", component: <UiPathRetail /> },
];

export default function UiPathIndustries() {
  const [active, setActive] = useState("bpo");

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex overflow-x-auto space-x-4 border-b border-gray-200 dark:border-gray-700 pb-2 mb-8">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActive(industry.id)}
              className={`px-4 py-2 whitespace-nowrap rounded-t-lg font-medium transition-colors duration-300 ${
                active === industry.id
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {industry.label}
            </button>
          ))}
        </div>

        {/* Active Component */}
        <div className="mt-6">
          {industries.find((item) => item.id === active)?.component}
        </div>
      </div>
    </section>
  );
}

