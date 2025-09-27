// Webinars.jsx
import { useState } from "react";

export default function Webinars() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Connect your API here)");
    closeModal();
  };

  return (
    <div className="relative">
      {/* Button to Open Form */}
      <button
        onClick={openModal}
        className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
      >
        Register for Webinar
      </button>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Form Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Webinar Registration
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              Fill in your details to stay updated!
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
