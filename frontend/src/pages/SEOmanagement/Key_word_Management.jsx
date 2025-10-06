import React, { useState, useEffect } from "react";

export default function SEOKeywordManagement() {
  const [formData, setFormData] = useState({
    keyword: "",
    topic: "",
    searchVolume: "",
    difficulty: "",
    intent: "Commercial",
    cpc: "",
    priorityScore: "",
    status: "Planned",
    contentType: "Blog",
    targetURL: "",
    metaTitle: "",
    metaDescription: "",
    channels: [],
    notes: "",
  });

  const searchIntents = ["Informational", "Navigational", "Commercial", "Transactional"];
  const statuses = ["Planned", "In Progress", "Published"];
  const contentTypes = ["Blog", "Landing Page", "Product Page", "Video"];
  const channels = ["Blog", "YouTube", "Instagram", "LinkedIn"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      channels: checked
        ? [...prev.channels, value]
        : prev.channels.filter((c) => c !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("✅ Keyword saved successfully!");
    setFormData({
      keyword: "",
      topic: "",
      searchVolume: "",
      difficulty: "",
      intent: "Commercial",
      cpc: "",
      priorityScore: "",
      status: "Planned",
      contentType: "Blog",
      targetURL: "",
      metaTitle: "",
      metaDescription: "",
      channels: [],
      notes: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
          SEO Keyword Management
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Keyword */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Keyword *</label>
              <input
                type="text"
                name="keyword"
                value={formData.keyword}
                onChange={handleChange}
                placeholder="Best Java IDEs 2024"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            {/* Topic */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Topic / Cluster</label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                placeholder="Software Tools"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            {/* MSV */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Monthly Search Volume (MSV)</label>
              <input
                type="number"
                name="searchVolume"
                value={formData.searchVolume}
                onChange={handleChange}
                placeholder="12000"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            {/* KD */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Keyword Difficulty (KD)</label>
              <input
                type="number"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                placeholder="1-100"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            {/* Intent */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Search Intent</label>
              <select
                name="intent"
                value={formData.intent}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                {searchIntents.map((intent) => (
                  <option key={intent}>{intent}</option>
                ))}
              </select>
            </div>

            {/* CPC */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">CPC ($)</label>
              <input
                type="text"
                name="cpc"
                value={formData.cpc}
                onChange={handleChange}
                placeholder="3.25"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Priority (1-10)</label>
              <input
                type="number"
                name="priorityScore"
                value={formData.priorityScore}
                onChange={handleChange}
                placeholder="8"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                {statuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Channels */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Distribution Channels</label>
            <div className="flex flex-wrap gap-3">
              {channels.map((ch) => (
                <label key={ch} className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    value={ch}
                    checked={formData.channels.includes(ch)}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 accent-teal-500"
                  />
                  <span>{ch}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Notes / Rationale</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="High intent, good volume, relevant to target audience"
              rows="3"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded text-sm font-semibold shadow-sm transition"
            >
              Save Keyword
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
