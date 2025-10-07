import React, { useState } from "react";

export default function TeamRole() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const roleOptions = ["Admin", "Editor", "SEO Specialist", "Developer", "Viewer"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) return;

    setTeamMembers((prev) => [...prev, formData]);
    setSuccessMessage("Team member added successfully!");
    setFormData({ name: "", email: "", role: "" });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDelete = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Team & Role Management
      </h2>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-5 right-5 z-50 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}

      {/* Add Team Member Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none bg-white"
        >
          <option value="" disabled>
            Select Role
          </option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <div className="sm:col-span-3 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            Add Team Member
          </button>
        </div>
      </form>

      {/* Team Members Table */}
      {teamMembers.length > 0 && (
        <table className="w-full border border-gray-300 rounded-lg table-auto">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {teamMembers.map((member, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="p-3">{member.name}</td>
                <td className="p-3">{member.email}</td>
                <td className="p-3">{member.role}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
