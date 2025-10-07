// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { loginAdmin } from "../../../../Api/adminApi";

const spaceswalalogo = "/small-logo.png";
const img1 = "/banner/Login_desktop.jpg";
const img2 = "/banner/Login.jpg";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Manual Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginAdmin(form);

      if (data?.token) sessionStorage.setItem("token", data.token);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.message || "Invalid email or password");
    }
  };

  // Google Login
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
    "w-full border border-gray-200 p-2.5 text-base rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm placeholder-gray-500 text-gray-700 hover:border-blue-300";

  const primaryButtonClass =
    "w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 text-lg transform hover:-translate-y-0.5 hover:scale-[1.01] mt-3";

  return (
    <div className="min-h-screen flex items-center justify-center relative p-3 md:p-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-pan transition-all duration-500"
        style={{
          backgroundImage: `url(${img2})`,
          filter: "brightness(30%)",
          zIndex: -1,
        }}
      ></div>

      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full z-10 transition-all duration-500 animate-fade-in-scale">
        {/* Left Side Image */}
        <div
          className="w-full md:w-1/2 h-48 md:h-auto relative flex justify-center bg-gray-900"
          style={{ minHeight: "400px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img1})`,
              filter: "grayscale(50%) brightness(80%)",
            }}
          ></div>
          <div className="relative z-10 w-full px-6 py-8">
            <h3 className="text-gray text-2xl font-extrabold mb-1 leading-tight drop-shadow-lg">
              Find Your Next Perfect Space
            </h3>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-3">
            <img
              src={spaceswalalogo}
              alt="Spaceswala Logo"
              className="h-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 text-center">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mb-5 text-base">
            Seamlessly connect to your UTECH profile.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
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
            />

            <div className="text-right pt-0.5">
              <Link
                to="#"
                className="text-xs text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className={primaryButtonClass}>
              Secure Login
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

          <p className="text-xs text-gray-600 text-center mt-3">
            New to UTECH?{" "}
            <Link
              to="/registration"
              className="text-blue-600 font-bold cursor-pointer hover:text-blue-700 hover:underline transition-colors"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
