import React, { useState } from "react";

export default function OffPageSEOManagement() {
  const [formData, setFormData] = useState({
    technique: "",
    keyTask: "",
    priority: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Techniques and their Key Tasks
  const techniques = {
    "Crawlability & Indexability": [
      "Check & Optimize",
      "Review XML Sitemaps",
      "Fix Crawl Errors (4xx/5xx)",
      "Manage Indexation",
      "Optimize Crawl Budget (for large sites)",
    ],
    "Site Performance": [
      "Improve Core Web Vitals",
      "Optimize Image Assets",
      "Minify CSS/JavaScript/HTML",
      "Enable Browser Caching",
    ],
    "Security & Structure": ["Ensure HTTPS/SSL", "Check for Duplicate Content"],
    "User Experience (UX) & Markup": [
      "Optimize URL Structure",
      "Set a Preferred Domain",
      "Ensure Mobile-Friendliness (Responsive Design)",
      "Implement Structured Data (Schema Markup)",
      "Audit Internal Linking",
      "Use Hreflang Tags (for multi-language/multi-region)",
    ],
    "Technical Audit Tools Setup": [
      "Set up Google Search Console & Bing Webmaster Tools",
      "Set up Google Analytics",
    ],
  };

  const priorityOptions = ["High", "Medium", "Low"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only submit if all fields are selected
    if (!formData.technique || !formData.keyTask || !formData.priority) return;

    // Show simple success message
    setSuccessMessage("Submitted successfully!");

    // Reset form
    setFormData({
      technique: "",
      keyTask: "",
      priority: "",
    });

    // Hide message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 sm:p-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Add Off-Page SEO Technique
        </h2>

        {/* Success Message */}
        {successMessage && (
          <div className="fixed top-5 right-5 z-50 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-5 sm:p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Technique */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Off-Page SEO Technique
            </label>
            <select
              name="technique"
              value={formData.technique}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  technique: e.target.value,
                  keyTask: "",
                })
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
            >
              <option value="" disabled>
                Select Technique
              </option>
              {Object.keys(techniques).map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
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
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
              disabled={!formData.technique}
            >
              <option value="" disabled>
                Select Key Task
              </option>
              {formData.technique &&
                techniques[formData.technique].map((task) => (
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

          {/* Submit */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Add Technique
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
