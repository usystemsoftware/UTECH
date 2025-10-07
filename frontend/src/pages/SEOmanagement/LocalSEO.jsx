import React, { useState } from "react";

export default function LocalSEO() {
  const priorityOptions = ["High", "Medium", "Low"];

  const localSeoAreas = {
    "Google Business Profile": [
      "Claim & Verify Listing",
      "Complete Profile Info",
      "Add Photos & Videos",
      "Update Business Hours",
      "Collect Reviews",
    ],
    "Local Citations & Listings": [
      "Submit to Top Directories",
      "Ensure NAP Consistency",
      "Monitor Citation Accuracy",
    ],
    "Local Content Optimization": [
      "Add Location Pages",
      "Optimize Meta Titles & Descriptions",
      "Use Local Keywords",
    ],
    "On-Page Local SEO": [
      "Add Schema for Local Business",
      "Embed Google Maps",
      "Optimize H1/H2 with Location",
    ],
    "Reviews & Reputation Management": [
      "Respond to Reviews",
      "Encourage Customer Reviews",
      "Monitor Negative Feedback",
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

    console.log("Local SEO Submitted:", formData);
    setSuccessMessage("Submitted successfully!");

    setFormData({ area: "", keyTask: "", priority: "" });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 sm:p-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Local SEO Form
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
          {/* Local SEO Area */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Local SEO Area
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
              {Object.keys(localSeoAreas).map((area) => (
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
                localSeoAreas[formData.area].map((task) => (
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
              Add Local SEO Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
