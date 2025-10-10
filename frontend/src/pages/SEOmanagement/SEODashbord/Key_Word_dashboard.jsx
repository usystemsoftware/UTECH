    // import React, { useState, useEffect } from "react";
    // import { Bar } from "react-chartjs-2";
    // import {
    // Chart as ChartJS,
    // CategoryScale,
    // LinearScale,
    // BarElement,
    // Tooltip,
    // Legend,
    // } from "chart.js";
    // import axios from "axios";

    // ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

    // export default function Dashboard() {
    // const [metrics, setMetrics] = useState({
    //     seoTitle: "",
    //     seoDescription: "",
    //     heroImage: "",
    //     buttonText: "Click Me",
    //     buttonLink: "#",
    //     overlayOpacity: 0.4,
    //     backlinksNew: [],
    //     backlinksLost: [],
    // });

    // const [keywords, setKeywords] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const savedSeo = localStorage.getItem("seoSettings");
    //     if (savedSeo) {
    //     const seoData = JSON.parse(savedSeo);
    //     setMetrics((prev) => ({
    //         ...prev,
    //         seoTitle: seoData.title || "",
    //         seoDescription: seoData.description || "",
    //         heroImage: seoData.heroBackground || seoData.image || "",
    //         buttonText: seoData.buttonText || "Click Me",
    //         buttonLink: seoData.buttonLink || "#",
    //         overlayOpacity: seoData.overlayOpacity || 0.4,
    //     }));
    //     }
    // }, []);

    // useEffect(() => {
    //     const fetchKeywords = async () => {
    //     try {
    //         setLoading(true);
    //         const res = await axios.get("http://localhost:5000/api/keywords");
    //         const data = res.data;
    //         setKeywords(data);

    //         const backlinksNew = data.map((k) => k.priorityScore || 0);
    //         const backlinksLost = data.map((k) => Math.floor((k.priorityScore || 0) / 2));

    //         setMetrics((prev) => ({
    //         ...prev,
    //         backlinksNew,
    //         backlinksLost,
    //         }));
    //     } catch (err) {
    //         console.error("Error fetching keywords:", err);
    //     } finally {
    //         setLoading(false);
    //     }
    //     };
    //     fetchKeywords();
    // }, []);

    // // 🔹 Keywords Bar Chart
    // const keywordsData = {
    //     labels: keywords.map((_, i) => `Keyword ${i + 1}`),
    //     datasets: [
    //     { label: "New Priority", data: metrics.backlinksNew, backgroundColor: "#16a34a" },
    //     { label: "Lost Priority", data: metrics.backlinksLost, backgroundColor: "#ef4444" },
    //     ],
    // };

    // return (
    //     <>
    //     <div className="p-6 space-y-6">
    //         <h1 className="text-2xl font-bold">Keywords Dashboard</h1>
    //             <button 
    //             // onClick={}
    //             className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mb-4">
    //                 Add KeyWord
    //             </button>
    //         {/* Keywords Graph */}
    //         <div className="bg-white shadow p-4 rounded mb-6 w-[50%]">
    //         <h2 className="font-semibold mb-4">Keyword Priority Chart</h2>
    //         <Bar data={keywordsData} />
    //         </div>

    //         {/* Keywords Table */}
    //         <div className="bg-white shadow rounded p-4 overflow-x-auto">
    //         <h2 className="text-xl font-semibold mb-4">Keywords Table</h2>
    //         {loading ? (
    //             <p className="text-center text-indigo-600">Loading keywords...</p>
    //         ) : (
    //             <table className="min-w-full divide-y divide-gray-200">
    //             <thead className="bg-indigo-50">
    //                 <tr>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Search Volume</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intent</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
    //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channels</th>
    //                 </tr>
    //             </thead>
    //             <tbody className="bg-white divide-y divide-gray-200">
    //                 {keywords.map((k) => (
    //                 <tr key={k._id} className="hover:bg-indigo-50 transition duration-150">
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{k.keyword}</td>
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{k.topic || "-"}</td>
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{k.searchVolume?.toLocaleString() || "-"}</td>
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{k.difficulty || "-"}</td>
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{k.intent || "-"}</td>
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
    //                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
    //                         k.status === 'Published' ? 'bg-green-100 text-green-800' :
    //                         k.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
    //                         'bg-blue-100 text-blue-800'
    //                     }`}>{k.status || "-"}</span>
    //                     </td>
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{k.priorityScore || "-"}</td>
    //                     <td className="px-6lllllllll py-4 whitespace-nowrap text-sm text-gray-500">{k.channels?.join(", ") || "-"}</td>
    //                 </tr>
    //                 ))}
    //             </tbody>
    //             </table>
    //         )}
    //         </div>
    //     </div>
    //     </>
    // );
    // }




