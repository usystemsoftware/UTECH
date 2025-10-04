import React, { useState } from "react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    domains: [],
    features: [],
  });

  const seoDomains = [
    "Instagram Marketing",
    "Facebook Ads",
    "Google Ads",
    "YouTube SEO",
    "LinkedIn Marketing",
    "Website SEO",
    "Content Marketing",
  ];

  const seoFeatures = [
    "Keyword Research",
    "Backlink Building",
    "Analytics & Reports",
    "On-Page SEO",
    "Off-Page SEO",
    "Competitor Analysis",
    "Ad Campaign Optimization",
  ];

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type]: checked
        ? [...prev[type], value]
        : prev[type].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      alert("User added successfully!");
      console.log("User added:", data);
    } else {
      alert(data.message || "Failed to add user");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong!");
  }
};

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              placeholder="Enter email address"
              required
            />
          </div>
        </div>
        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Role
          </label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="">Select Role</option>
            <option value="SEO Specialist">SEO Specialist</option>
            <option value="Content Creator">Content Creator</option>
            <option value="Ad Manager">Ad Manager</option>
            <option value="Marketing Analyst">Marketing Analyst</option>
          </select>
        </div>
        {/* Domains */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Working Domains
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {seoDomains.map((domain) => (
              <label key={domain} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={domain}
                  onChange={(e) => handleCheckboxChange(e, "domains")}
                  className="accent-teal-500"
                />
                <span className="text-gray-700 text-sm">{domain}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            SEO Features Covered
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {seoFeatures.map((feature) => (
              <label key={feature} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={feature}
                  onChange={(e) => handleCheckboxChange(e, "features")}
                  className="accent-teal-500"
                />
                <span className="text-gray-700 text-sm">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
