import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SEOKeywordManagement() {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/keywords", formData);
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
      navigate("/dashboard"); // navigate to dashboard after saving
    } catch (error) {
      console.error("Error saving keyword:", error);
      alert("❌ Failed to save keyword.");
    }
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
        🔑 Keyword Management
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Keyword & Topic */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keyword *</label>
            <input
              type="text"
              name="keyword"
              value={formData.keyword}
              onChange={handleChange}
              placeholder="Best Java IDEs 2024"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic / Cluster</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Software Tools"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Search Volume, Difficulty, Intent, CPC */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Search Volume</label>
            <input
              type="number"
              name="searchVolume"
              value={formData.searchVolume}
              onChange={handleChange}
              placeholder="12000"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keyword Difficulty</label>
            <input
              type="number"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              placeholder="1-100"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Intent</label>
            <select
              name="intent"
              value={formData.intent}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {searchIntents.map((intent) => <option key={intent}>{intent}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CPC ($)</label>
            <input
              type="text"
              name="cpc"
              value={formData.cpc}
              onChange={handleChange}
              placeholder="3.25"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Priority & Status */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority (1-10)</label>
            <input
              type="number"
              name="priorityScore"
              value={formData.priorityScore}
              onChange={handleChange}
              placeholder="8"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Channels */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Distribution Channels</label>
          <div className="flex flex-wrap gap-3">
            {channels.map((ch) => (
              <label key={ch} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  value={ch}
                  checked={formData.channels.includes(ch)}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 accent-blue-600"
                />
                <span>{ch}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes / Rationale</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="High intent, good volume, relevant to target audience"
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition"
          >
            Save Keyword
          </button>
        </div>
      </form>
    </div>
  );
}
