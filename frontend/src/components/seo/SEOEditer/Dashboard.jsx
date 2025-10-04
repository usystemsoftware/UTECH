import React, { useState, useEffect } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import HeroSection from "@/components/HeroSection";
import { Headline } from "@/custom/Typography";
import img from "../../../../public/banner/img_admin dashboard.jpg";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    // SEO + Hero
    seoTitle: "",
    seoDescription: "",
    heroImage: "",
    buttonText: "Click Me",
    buttonLink: "#",
    overlayOpacity: 0.4,

    // Metrics
    googleRankings: 10,
    googleChange: 4,
    sessions: 2787,
    goalCompletions: 3306,
    performanceScore: 74,
    seoScore: 71,
    accessibilityScore: 86,
    bestPracticesScore: 90,
    citationFlow: 55,
    impressions: 262000,

    // Graph datasets
    rankings: [2, 4, 3, 1, 0],
    sessionsBreakdown: [602, 573, 564, 410, 212, 178, 126, 122],
    backlinksNew: [1200, 1500, 1800, 1400, 1600],
    backlinksLost: [600, 800, 500, 700, 400],
    impressionsTrend: [200000, 210000, 220000, 240000, 262000],
  });

  // Load SEO + Hero data from localStorage
  useEffect(() => {
    const savedSeo = localStorage.getItem("seoSettings");
    if (savedSeo) {
      const seoData = JSON.parse(savedSeo);
      setMetrics((prev) => ({
        ...prev,
        seoTitle: seoData.title || "",
        seoDescription: seoData.description || "",
        heroImage: seoData.heroBackground || seoData.image || "",
        buttonText: seoData.buttonText || "Click Me",
        buttonLink: seoData.buttonLink || "#",
        overlayOpacity: seoData.overlayOpacity || 0.4,
      }));
    }
  }, []);

  // 🔹 Handle single number values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetrics({ ...metrics, [name]: Number(value) });
  };

  // 🔹 Handle array values (rankings, sessionsBreakdown, etc.)
  const handleArrayChange = (e, key, index) => {
    const newArray = [...metrics[key]];
    newArray[index] = Number(e.target.value);
    setMetrics({ ...metrics, [key]: newArray });
  };

  // ================== Chart Data ==================
  const rankingsData = {
    labels: ["1-3", "4-10", "11-20", "21-50", "51+"],
    datasets: [
      {
        label: "Google Rankings",
        data: metrics.rankings,
        backgroundColor: ["#16a34a", "#facc15", "#f97316", "#f87171", "#dc2626"],
      },
    ],
  };

  const sessionsData = {
    labels: ["Referral", "Organic", "Direct", "Other", "Paid", "Social", "Display", "Email"],
    datasets: [
      {
        label: "Sessions",
        data: metrics.sessionsBreakdown,
        backgroundColor: [
          "#3b82f6",
          "#16a34a",
          "#f59e0b",
          "#9ca3af",
          "#ef4444",
          "#8b5cf6",
          "#14b8a6",
          "#f97316",
        ],
      },
    ],
  };

  const newLostLinksData = {
    labels: ["4 Feb", "11 Feb", "18 Feb", "25 Feb", "4 Mar"],
    datasets: [
      { label: "New", data: metrics.backlinksNew, backgroundColor: "#16a34a" },
      { label: "Lost", data: metrics.backlinksLost, backgroundColor: "#ef4444" },
    ],
  };

  const impressionsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Impressions",
        data: metrics.impressionsTrend,
        borderColor: "#3b82f6",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // ================== UI ==================
  return (
    <>
      <div className="flex flex-col gap-6">
        <HeroSection
          backgroundImage={metrics.heroImage || img}
          title={metrics.seoTitle}
          description={metrics.seoDescription}
          buttonText={metrics.buttonText}
          buttonLink={metrics.buttonLink}
          overlayOpacity={parseFloat(metrics.overlayOpacity)}
        />

        {/* OG Image Preview */}
        {metrics.heroImage && (
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Headline title="OG Image Preview" description="This is how the shared image / hero will appear on social platforms" />
            <img src={metrics.heroImage} alt="OG Preview" className="w-full h-48 object-cover mt-4 rounded" />
          </div>
        )}
      </div>

      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">SEO Dashboard</h1>

        {/* SEO + Hero Preview */}
        <div className="bg-white shadow p-4 rounded space-y-4">
          <h2 className="font-semibold text-lg">SEO & Hero Preview</h2>
          <div>Title: {metrics.seoTitle}</div>
          <div>Description: {metrics.seoDescription}</div>
          {metrics.heroImage && <img src={metrics.heroImage} alt="Hero Preview" className="w-full h-48 object-cover rounded mt-2" />}
        </div>

        {/* Dashboard Metrics Input */}
        <div className="bg-white shadow p-4 rounded space-y-4">
          <h2 className="font-semibold text-lg">Update Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 🔹 Single values */}
            {Object.keys(metrics)
              .filter(
                (k) =>
                  ![
                    "seoTitle",
                    "seoDescription",
                    "heroImage",
                    "buttonText",
                    "buttonLink",
                    "overlayOpacity",
                    "rankings",
                    "sessionsBreakdown",
                    "backlinksNew",
                    "backlinksLost",
                    "impressionsTrend",
                  ].includes(k)
              )
              .map((key) => (
                <div key={key} className="flex flex-col">
                  <label className="capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                  <input type="number" name={key} value={metrics[key]} onChange={handleChange} className="border rounded p-1" />
                </div>
              ))}

            {/* 🔹 Array values (editable per index) */}
            {["rankings", "sessionsBreakdown", "backlinksNew", "backlinksLost", "impressionsTrend"].map((arrKey) => (
              <div key={arrKey} className="col-span-2">
                <h3 className="font-semibold capitalize">{arrKey.replace(/([A-Z])/g, " $1")}</h3>
                <div className="grid grid-cols-5 gap-2">
                  {metrics[arrKey].map((val, idx) => (
                    <input
                      key={idx}
                      type="number"
                      value={val}
                      onChange={(e) => handleArrayChange(e, arrKey, idx)}
                      className="border rounded p-1"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow p-4 rounded space-y-4">
            <h2 className="font-semibold">Rankings</h2>
            <div className="flex justify-between">
              <div>Google Rankings: {metrics.googleRankings}</div>
              <div>Change: {metrics.googleChange} ▲</div>
            </div>
            <Bar data={rankingsData} />
          </div>

          <div className="bg-white shadow p-4 rounded space-y-4">
            <h2 className="font-semibold">Google Analytics</h2>
            <Doughnut data={sessionsData} />
            <div className="flex justify-between mt-4">
              <div>Sessions: {metrics.sessions}</div>
              <div>Goal Completions: {metrics.goalCompletions}</div>
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded space-y-4">
            <h2 className="font-semibold">Google Lighthouse</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>Performance: {metrics.performanceScore}</div>
              <div>SEO: {metrics.seoScore}</div>
              <div>Accessibility: {metrics.accessibilityScore}</div>
              <div>Best Practices: {metrics.bestPracticesScore}</div>
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded space-y-4">
            <h2 className="font-semibold">Backlinks</h2>
            <div>Citation Flow: {metrics.citationFlow}</div>
            <Bar data={newLostLinksData} />
          </div>

          <div className="bg-white shadow p-4 rounded space-y-4 md:col-span-2">
            <h2 className="font-semibold">Google Search Console</h2>
            <div className="text-3xl font-bold">{metrics.impressions.toLocaleString()}</div>
            <Line data={impressionsData} />
          </div>
        </div>
      </div>
    </>
  );
}
