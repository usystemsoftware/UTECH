import React, { useState } from "react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    domains: [],
    features: [],
  });

  const seoDomains = [
    "Instagram Marketing", "Facebook Ads", "Google Ads",
    "YouTube SEO", "LinkedIn Marketing", "Website SEO", "Content Marketing"
  ];

  const seoFeatures = [
    "Keyword Research", "Backlink Building", "Analytics & Reports",
    "On-Page SEO", "Off-Page SEO", "Competitor Analysis", "Ad Campaign Optimization"
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
      const res = await fetch("http://localhost:5000/api/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("User added successfully!");
        setFormData({ name: "", email: "", role: "", password: "", domains: [], features: [] });
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error adding user");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" required
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 rounded-lg w-full" />

          <input type="email" placeholder="Email" required
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border p-2 rounded-lg w-full" />
        </div>

        <input type="password" placeholder="Password" required
          value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border p-2 rounded-lg w-full" />

        <select
          required value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="border p-2 rounded-lg w-full"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="SEO Specialist">SEO Specialist</option>
          <option value="Marketing Analyst">Marketing Analyst</option>
        </select>

        <h3 className="text-lg font-medium">Working Domains</h3>
        <div className="grid grid-cols-2 gap-2">
          {seoDomains.map((domain) => (
            <label key={domain}>
              <input type="checkbox" value={domain}
                checked={formData.domains.includes(domain)}
                onChange={(e) => handleCheckboxChange(e, "domains")} /> {domain}
            </label>
          ))}
        </div>

        <h3 className="text-lg font-medium">Features Covered</h3>
        <div className="grid grid-cols-2 gap-2">
          {seoFeatures.map((feature) => (
            <label key={feature}>
              <input type="checkbox" value={feature}
                checked={formData.features.includes(feature)}
                onChange={(e) => handleCheckboxChange(e, "features")} /> {feature}
            </label>
          ))}
        </div>

        <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg">Add User</button>
      </form>
    </div>
  );
}
