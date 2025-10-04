// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAdmin } from "../../../../Api/adminApi"; // ✅ fixed import (no space)

const spaceswalalogo = "/small-logo.png";
const img2 = "/banner/Login.jpg";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    role: "admin",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerAdmin(form);

      if (data?.token) {
        sessionStorage.setItem("token", data.token);
        alert("✅ Admin registration successful!");
        navigate("/Login/Admin"); // ✅ make sure route matches your Router setup
      } else {
        alert("⚠️ Registration failed. No token returned.");
      }
    } catch (err) {
      console.error(err);
      alert(err.message || "❌ Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full border border-gray-200 p-2.5 text-sm rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm placeholder-gray-400 text-gray-700 hover:border-blue-300";

  return (
    <div className="min-h-screen flex items-center justify-center relative p-3 md:p-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-pan"
        style={{
          backgroundImage: `url(${img2})`,
          filter: "brightness(30%)",
          zIndex: -1,
        }}
      ></div>

      <style>{`
        @keyframes bg-pan {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-bg-pan { animation: bg-pan 30s linear infinite; }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
      `}</style>

      <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8 w-full max-w-md relative z-10 transform opacity-0 animate-fade-in-up">
        <div className="text-center mb-4">
          <img
            src={spaceswalalogo}
            alt="Spaceswala Logo"
            className="h-10 md:h-12 mx-auto mb-1"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Admin Registration
          </h2>
          <p className="text-sm text-gray-500">
            Create your admin account for UTECH dashboard.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Full Name"
            className={inputClass}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className={inputClass}
            onChange={handleChange}
            required
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            className={inputClass}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={inputClass}
            onChange={handleChange}
            required
            minLength="8"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-2.5 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition-all duration-300 mt-3"
          >
            Register Admin
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-3">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/Login/Admin")}
            className="text-blue-600 font-bold cursor-pointer hover:text-blue-700 hover:underline"
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
}
