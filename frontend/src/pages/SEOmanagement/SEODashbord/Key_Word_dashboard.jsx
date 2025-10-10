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




import React, { useState } from "react";

const Dashboard = () => {
  // Current user role (mock) — change this to 'seo_user' or 'editor' to test different views
  const [role, setRole] = useState("admin");
  const [activeView, setActiveView] = useState("dashboard");

  // ---------------- SEO USER PANEL ----------------
  const SEOUserPanel = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SEO User Panel</h2>
      <p className="text-gray-700 mb-4">
        Access your assigned platforms, add keywords, and publish content.
      </p>
      <div className="p-4 border rounded">
        <h3 className="font-semibold mb-2">Platform Folders</h3>
        <div className="flex flex-wrap gap-2">
          {["Facebook", "Instagram", "YouTube", "Google Ads"].map((platform) => (
            <button
              key={platform}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ---------------- CREATE USER FORM ----------------
  const CreateUserForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      role: "editor",
      assignedDomains: [],
    });

    const domains = ["Facebook", "Instagram", "YouTube", "Google Ads"];
    const roles = ["editor", "seo_user"];

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]:
          type === "checkbox"
            ? checked
              ? [...prev.assignedDomains, value]
              : prev.assignedDomains.filter((d) => d !== value)
            : value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("New User Data:", formData);
      alert("User created successfully! Check console for data.");
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded w-full p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded w-full p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border rounded w-full p-2"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role:
            </label>
            <div className="flex space-x-4">
              {roles.map((r) => (
                <label key={r} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={formData.role === r}
                    onChange={handleChange}
                  />
                  <span className="ml-2 capitalize">{r}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Assign Domains:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {domains.map((domain) => (
                <label key={domain} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={domain}
                    checked={formData.assignedDomains.includes(domain)}
                    onChange={handleChange}
                    name="assignedDomains"
                  />
                  <span className="ml-2">{domain}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Create User
            </button>
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };

  // ---------------- MAIN RENDER CONTENT ----------------
  const renderContent = () => {
    if (role === "admin") {
      if (activeView === "dev-settings") return <CreateUserForm />;
      if (activeView === "dashboard")
        return <div className="text-xl font-semibold">Admin Home Page</div>;
      if (activeView === "seo-settings")
        return <div className="text-xl font-semibold">SEO Settings Page</div>;
    }

    if (role === "seo_user") return <SEOUserPanel />;

    if (role === "editor")
      return <div className="bg-white p-6 rounded-lg shadow-md">Editor Panel</div>;

    return <div>Select a role to see content.</div>;
  };

  // ---------------- SIDEBAR LINKS ----------------
  const SidebarLinks = () => (
    <>
      {role === "admin" && (
        <>
          <button
            onClick={() => setActiveView("dashboard")}
            className={`block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700 ${
              activeView === "dashboard" ? "bg-gray-700" : ""
            }`}
          >
            Admin Home
          </button>
          <button
            onClick={() => setActiveView("dev-settings")}
            className={`block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700 ${
              activeView === "dev-settings" ? "bg-gray-700" : ""
            }`}
          >
            Dev Settings
          </button>
          <button
            onClick={() => setActiveView("seo-settings")}
            className={`block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700 ${
              activeView === "seo-settings" ? "bg-gray-700" : ""
            }`}
          >
            SEO Settings
          </button>
        </>
      )}
      {role === "editor" && (
        <button
          onClick={() => setActiveView("editor-panel")}
          className="block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Editor Panel
        </button>
      )}
      {role === "seo_user" && (
        <button
          onClick={() => setActiveView("seo-panel")}
          className="block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700"
        >
          SEO User Panel
        </button>
      )}
    </>
  );

  // ---------------- MAIN RETURN ----------------
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8">My Dashboard</div>
        <nav className="flex-grow space-y-2">
          <SidebarLinks />
        </nav>
        <div className="mt-auto">
          <button
            onClick={() => alert("Logged out")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome, {role.toUpperCase()}!
          </h1>
          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="seo_user">SEO User</option>
            </select>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
