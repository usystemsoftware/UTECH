// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";
import spaceswalalogo from "../../../../public/small-logo.png";
import img2 from "../../../../public/banner/Login.jpg";
import { GoogleLogin } from "@react-oauth/google";
import { registerAdmin, loginAdmin } from "../../../../Api/adminApi";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    role: "admin",
    address: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRoleChange = (role) => setForm({ ...form, role });

  // Manual Registration + Auto Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerAdmin(form); // Register user

      // Auto-login after registration
      const loginData = await loginAdmin({
        email: form.email,
        password: form.password,
      });

      if (loginData?.token) sessionStorage.setItem("token", loginData.token);

      alert("Registration successful! Logged in automatically.");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.message || "Registration failed. Please check your details.");
    }
  };

  // Google Registration/Login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const data = await loginAdmin({ token: credential, google: true });

      if (data?.token) sessionStorage.setItem("token", data.token);

      alert("Google Sign-In Successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Google login failed:", err);
      alert("Google login failed. Please try again.");
    }
  };

  const handleGoogleError = () => alert("Google login failed.");

  const inputClass =
    "w-full border border-gray-200 p-2.5 text-sm rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm placeholder-gray-400 text-gray-700 hover:border-blue-300";

  const roleButtonClass = (role) =>
    `flex-1 flex flex-col items-center py-2 px-1 rounded-lg border-2 text-xs transition-all duration-300 cursor-pointer ${
      form.role === role
        ? "bg-blue-50 text-blue-700 border-blue-500 shadow-sm transform scale-[1.02]"
        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-blue-200"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center relative p-3 md:p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-pan"
        style={{
          backgroundImage: `url(${img2})`,
          filter: "brightness(30%)",
          zIndex: -1,
        }}
      ></div>

      <style jsx>{`
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

      <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8 w-full max-w-xl relative z-10 transform opacity-0 animate-fade-in-up">
        <div className="text-center mb-4">
          <img
            src={spaceswalalogo}
            alt="Spaceswala Logo"
            className="h-10 md:h-12 mx-auto mb-1 transform hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Create Your UTech Account
          </h2>
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            I am registering as:
          </label>
          <div className="flex gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => handleRoleChange("admin")}
              className={roleButtonClass("admin")}
            >
              <IoLockClosedOutline className="text-xl" />
              <span className="font-semibold mt-0.5 hidden sm:inline">Admin</span>
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="name"
              placeholder="Full Name"
              className={inputClass}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              placeholder="Email Address"
              type="email"
              className={inputClass}
              onChange={handleChange}
              required
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              type="tel"
              className={inputClass}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              className={inputClass}
              onChange={handleChange}
              required
              minLength="8"
            />
            <input
              name="address"
              placeholder="Street Address"
              className={inputClass}
              onChange={handleChange}
            />
            <input
              name="city"
              placeholder="City / Locality"
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-2.5 rounded-lg shadow-md 
                       hover:shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 text-base mt-3
                       transform hover:-translate-y-0.5 hover:scale-[1.01]"
          >
            Register Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-3">
          <hr className="flex-grow border-gray-200" />
          <span className="px-2 text-gray-500 text-sm font-medium">OR</span>
          <hr className="flex-grow border-gray-200" />
        </div>

        {/* Google Login */}
        <div className="flex justify-center mt-2">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
          />
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-3">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-bold cursor-pointer hover:text-blue-700 hover:underline"
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
}
