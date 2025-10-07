import React, { useEffect, useState } from "react";
import axios from "axios";
import OnpageOptimization from "../OnPageOptimization"

export default function OnPageOptimizationDashboard() {
  const [optimizations, setOptimizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOptimizations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/optimizations");
        setOptimizations(response.data);
      } catch (err) {
        setError("Failed to load data. Please check your server connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchOptimizations();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-teal-600 text-lg font-semibold animate-pulse">
          Loading optimizations...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 text-lg font-semibold">{error}</p>
      </div>
    );

  return (
    <>
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">
          On-Page Optimization Dashboard
        </h2>

        {optimizations.length === 0 ? (
          <p className="text-gray-600">No optimization records found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300 rounded-lg">
              <thead className="bg-teal-600 text-white text-sm uppercase">
                <tr>
                  <th className="p-3 text-left">Field</th>
                  <th className="p-3 text-left">Goal</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Checked</th>
                  <th className="p-3 text-left">Notes</th>
                  <th className="p-3 text-left">Intent</th>
                  <th className="p-3 text-left">Created</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-sm">
                {optimizations.map((opt) => (
                  <tr
                    key={opt._id}
                    className="hover:bg-teal-50 transition-colors duration-150"
                  >
                    <td className="p-3 font-semibold text-gray-900">
                      {opt.field}
                    </td>
                    <td className="p-3">{opt.goal || "-"}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          opt.statusLabel === "Completed"
                            ? "bg-green-100 text-green-800"
                            : opt.statusLabel === "Confirmed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {opt.statusLabel || "N/A"}
                      </span>
                    </td>
                    <td className="p-3">
                      {opt.checked ? (
                        <span className="text-green-600 font-medium">✔</span>
                      ) : (
                        <span className="text-red-500 font-medium">✘</span>
                      )}
                    </td>
                    <td className="p-3 text-gray-800">
                      {opt.notes || opt.defaultNote || "-"}
                    </td>
                    <td className="p-3">{opt.intent || "-"}</td>
                    <td className="p-3 text-gray-500">
                      {new Date(opt.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
        <OnpageOptimization/>
    </>
  );
}
