import React, { useState } from "react";
import ImageUploadPanel from "./ImageUploadPanel"; // your existing image upload component
import ImageEditor from "./ImageEditter";

const SimplePanel = () => {
  const [activePanel, setActivePanel] = useState("dashboard"); // default view

  const renderContent = () => {
    switch (activePanel) {
      case "upload":
        return <ImageUploadPanel />;
      case "dashboard":
        return (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <p className="text-gray-700 text-lg">
              Welcome to your Dashboard. Click "Upload Image" in the sidebar to start.
            </p>
          </div>
        );
      case "edit":
        return (<ImageEditor />);
      case "settings":
        return (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <p className="text-gray-700 text-lg">Settings panel coming soon.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-400 to-shadow-black">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Sidebar</h2>
        <nav className="flex flex-col space-y-3">
          <button
            onClick={() => setActivePanel("dashboard")}
            className={`text-left px-4 py-2 rounded-md font-medium ${
              activePanel === "dashboard"
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActivePanel("upload")}
            className={`text-left px-4 py-2 rounded-md font-medium  ${
              activePanel === "upload"
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            Upload Image
          </button>

          <button
            onClick={() => setActivePanel("edit")}
            className={`text-left px-4 py-2 rounded-md font-medium ${
              activePanel === "edit"
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            Edit Tools
          </button>

          <button
            onClick={() => setActivePanel("settings")}
            className={`text-left px-4 py-2 rounded-md font-medium ${
              activePanel === "settings"
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
          {activePanel === "upload"
            ? " Upload Image"
            : activePanel === "edit"
            ? "🛠️ Edit Tools"
            : activePanel === "settings"
            ? "⚙️ Settings"
            : "📊 Dashboard"}
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default SimplePanel;
