import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Briefcase,
  Calendar,
  Layers,
} from "lucide-react"; // make sure you have lucide-react installed: npm install lucide-react

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    domains: [],
    deadline: "",
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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      domains: checked
        ? [...prev.domains, value]
        : prev.domains.filter((item) => item !== value),
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
        alert("✅ User added successfully!");
        setFormData({
          name: "",
          email: "",
          role: "",
          password: "",
          domains: [],
          deadline: "",
        });
      } else {
        alert(data.message || "Failed to add user");
      }
    } catch (err) {
      alert("❌ Error adding user. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
        <User className="text-teal-600" size={28} />
        Add New User
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-teal-500 transition">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                placeholder="Enter full name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-teal-500 transition">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full py-2 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Password & Role */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-teal-500 transition">
              <Lock className="text-gray-400 mr-2" size={18} />
              <input
                type="password"
                placeholder="Enter password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Role
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-teal-500 transition">
              <Briefcase className="text-gray-400 mr-2" size={18} />
              <select
                required
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full py-2 outline-none bg-white"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="SEO Specialist">SEO Specialist</option>
                <option value="Marketing Analyst">Marketing Analyst</option>
              </select>
            </div>
          </div>
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Deadline
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-teal-500 transition">
            <Calendar className="text-gray-400 mr-2" size={18} />
            <input
              type="date"
              required
              value={formData.deadline}
              onChange={(e) =>
                setFormData({ ...formData, deadline: e.target.value })
              }
              className="w-full py-2 outline-none"
            />
          </div>
        </div>

        {/* Domains */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Layers className="text-teal-600" size={20} />
            Working Domains
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {seoDomains.map((domain) => (
              <label
                key={domain}
                className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <input
                  type="checkbox"
                  value={domain}
                  checked={formData.domains.includes(domain)}
                  onChange={handleCheckboxChange}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">{domain}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-2.5 rounded-lg shadow transition duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            <User size={18} />
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
