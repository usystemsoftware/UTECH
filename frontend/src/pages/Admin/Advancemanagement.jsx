import React, { useState } from "react";
import Onpagedashbord from "../SEOmanagement/SEODashbord/Onpagedashbord";
import Key_Word_dashboard from "../SEOmanagement/SEODashbord/Key_Word_dashboard";
import LocalSEO from "../SEOmanagement/LocalSEO";
import TechnicalSEO from "../SEOmanagement/TechnicalSEO";
import OffPageSEOManagement from "../SEOmanagement/OffPageSEOManagement";

import {
  Key,
  FileText,
  Link2,
  Cpu,
  MapPin,
  BarChart3,
  Users,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react";

const SEOManagementDashboard = () => {
  const [activeModule, setActiveModule] = useState("overview");

  const seoStats = [
    { name: "Key Management", count: 120, growth: 5.2, icon: Key, id: "keys" },
    { name: "On-Page SEO", count: 45, growth: 3.8, icon: FileText, id: "onpage" },
    { name: "Backlink & Off-Page", count: 310, growth: 7.1, icon: Link2, id: "backlink" },
    { name: "Technical SEO", count: 92, growth: 2.5, icon: Cpu, id: "technical" },
    { name: "Local SEO", count: 28, growth: 1.1, icon: MapPin, id: "local" },
    { name: "Analytics & Reports", count: 12, growth: 6.3, icon: BarChart3, id: "analytics" },
    { name: "Team & Automation", count: 6, growth: 4.4, icon: Users, id: "team" },
  ];

  // handle card click
  const handleCardClick = (id) => setActiveModule(id);

  // render details for selected module
  const renderModule = () => {
    switch (activeModule) {
      case "keys":
        return <Key_Word_dashboard />; // ✅ Correct placement for Key Management
      case "onpage":
        return <Onpagedashbord />;
      case "backlink":
          return <OffPageSEOManagement/>;
        case "technical":
          return <TechnicalSEO />;
        case "local":
          return <LocalSEO />;
      case "analytics":
        return <div className="p-4">📊 Analytics and report generation tools...</div>;
      case "team":
        return <div className="p-4">👥 Team roles and automation settings...</div>;
      default:
        return (
          <div className="p-6 text-center text-gray-600">
            <p>Select a module above to manage SEO details.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">SEO Management Dashboard</h1>
        <button
          onClick={() => setActiveModule("overview")}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
        >
          <RefreshCcw className="w-4 h-4" /> Reset
        </button>
      </div>

      {/* SEO Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {seoStats.map(({ name, count, growth, icon: Icon, id }) => (
          <div
            key={id}
            onClick={() => handleCardClick(id)}
            className={`cursor-pointer p-5 rounded-2xl shadow-lg border transition-all ${
              activeModule === id
                ? "bg-blue-600 text-white scale-105"
                : "bg-white hover:bg-blue-50 hover:scale-105"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-2xl font-bold mt-1">{count}</p>
                <div className="flex items-center text-sm mt-2">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>{growth}% this month</span>
                </div>
              </div>
              <Icon className="w-10 h-10 opacity-70" />
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 transition-all">
        {renderModule()}
      </div>
    </div>
  );
};

export default SEOManagementDashboard;
