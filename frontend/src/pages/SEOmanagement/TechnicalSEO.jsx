import React, { useState } from "react";

export default function TechnicalSEOForm() {
  const priorityOptions = ["High", "Medium", "Low"];

  const techniques = {
    "Crawlability & Indexability": [
      "Check & Optimize Robots.txt",
      "Review XML Sitemaps",
      "Fix Crawl Errors",
      "Manage Indexation",
      "Optimize Crawl Budget",
    ],
    "Site Speed & Performance": [
      "Minify CSS/JS",
      "Optimize Images",
      "Enable Browser Caching",
      "Reduce Server Response Time",
    ],
    "Mobile-Friendliness": [
      "Responsive Design Check",
      "Mobile Usability Errors (GSC)",
    ],
    "HTTPS & Security": [
      "Enable SSL Certificate",
      "Check for Mixed Content",
      "Implement Security Headers",
    ],
    "Structured Data & Schema Markup": [
      "Add Schema for Products/Articles/Reviews",
      "Validate with Google Structured Data Tool",
    ],
  };

  const [formData, setFormData] = useState({
    area: "",
    keyTask: "",
    priority: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.area || !formData.keyTask || !formData.priority) return;

    console.log("Technical SEO Submitted:", formData);
    setSuccessMessage("Submitted successfully!");

    setFormData({ area: "", keyTask: "", priority: "" });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 sm:p-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
           Technical SEO 
        </h2>

        {successMessage && (
          <div className="fixed top-5 right-5 z-50 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-5 sm:p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Technical SEO Area */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Technical SEO Area
            </label>
            <select
              name="area"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value, keyTask: "" })
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
            >
              <option value="" disabled>
                Select Area
              </option>
              {Object.keys(techniques).map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Key Task */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Key Task
            </label>
            <select
              name="keyTask"
              value={formData.keyTask}
              onChange={handleChange}
              disabled={!formData.area}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
            >
              <option value="" disabled>
                Select Key Task
              </option>
              {formData.area &&
                techniques[formData.area].map((task) => (
                  <option key={task} value={task}>
                    {task}
                  </option>
                ))}
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
            >
              <option value="" disabled>
                Select Priority
              </option>
              {priorityOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Add Technical SEO Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
