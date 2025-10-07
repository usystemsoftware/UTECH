import React, { useState } from "react";
import axios from "axios";

export default function OnPageOptimizationTableForm() {
  const commonNotesOptions = [
    "N/A",
    "Needs Research",
    "Competitive Target",
    "Low Hanging Fruit",
    "Must Fix",
    "Check GSC Performance",
    "Align with Content Brief",
  ];

  const initialData = [
    {
      field: "Page URL / Slug",
      goal: "",
      statusLabel: "Completed",
      checked: true,
      notes: "",
      defaultNote: "Must be short, descriptive, and include Primary Keyword.",
    },
    {
      field: "Primary Target Keyword",
      goal: "",
      statusLabel: "Confirmed",
      checked: true,
      notes: "",
      defaultNote: "One main focus keyword.",
    },
    {
      field: "Searcher Intent",
      goal: "",
      statusLabel: "",
      checked: false,
      notes: "",
      intent: "",
      defaultNote: "Match the content type.",
    },
    {
      field: "Secondary / LSI Keywords",
      goal: "",
      statusLabel: "Confirmed",
      checked: true,
      notes: "",
      defaultNote: "List 3–5 high-relevance terms here.",
    },
    {
      field: "Content Word Count",
      goal: "",
      statusLabel: "",
      checked: false,
      notes: "",
      defaultNote: "Should be competitive with top-ranking pages.",
    },
  ];

  const [rows, setRows] = useState(initialData);
  const [genericNotes, setGenericNotes] = useState(
    initialData.map((row) => row.defaultNote || "")
  );
  const [loading, setLoading] = useState(false);

  const searcherOptions = [
    "Informational",
    "Navigational",
    "Transactional",
    "Commercial Investigation",
  ];

  // Handle field changes
  const handleChange = (index, name, value) => {
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  // Handle dropdown note changes
  const handleGenericNoteChange = (index, value) => {
    const updatedGenericNotes = [...genericNotes];
    updatedGenericNotes[index] = value;
    setGenericNotes(updatedGenericNotes);

    const updatedRows = [...rows];
    updatedRows[index].notes = value;
    setRows(updatedRows);
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].checked = !updatedRows[index].checked;
    setRows(updatedRows);
  };

  // ✅ Submit handler (POST API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = rows.map((row, index) => ({
      ...row,
      notes: genericNotes[index],
    }));

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/optimizations",
        finalData
      );
      alert("✅ Optimizations saved successfully!");
      console.log("Server Response:", res.data);
    } catch (error) {
      console.error("❌ Error posting data:", error);
      alert("❌ Failed to save optimizations. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="w-full bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">
          On-Page SEO Optimization Form
        </h2>

        <form onSubmit={handleSubmit} className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 rounded-lg">
            <thead className="bg-teal-600 text-white text-sm">
              <tr>
                <th className="p-3 text-left w-1/5">Field</th>
                <th className="p-3 text-left w-2/5">Optimization Goal</th>
                <th className="p-3 text-left w-1/5">Status</th>
                <th className="p-3 text-left w-1/5">Notes / Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-sm">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-teal-50 transition-colors duration-150"
                >
                  <td className="p-3 font-semibold text-gray-900">
                    {row.field}
                  </td>

                  <td className="p-3">
                    <input
                      type="text"
                      placeholder={
                        row.field === "Content Word Count"
                          ? "Target: XXXX | Actual: YYYY"
                          : "Enter optimization goal..."
                      }
                      value={row.goal}
                      onChange={(e) =>
                        handleChange(index, "goal", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                    />
                  </td>

                  <td className="p-3">
                    {row.statusLabel && (
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={row.checked}
                          onChange={() => handleCheckboxChange(index)}
                          className="accent-teal-500"
                        />
                        <span>{row.statusLabel}</span>
                      </label>
                    )}

                    {row.field === "Searcher Intent" && (
                      <select
                        value={row.intent}
                        onChange={(e) =>
                          handleChange(index, "intent", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm mt-1"
                      >
                        <option value="">Select Intent</option>
                        {searcherOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {row.field === "Content Word Count" && (
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${
                          row.goal.includes("Actual:")
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {row.goal ? "Goal Set" : "Awaiting Data"}
                      </span>
                    )}
                  </td>

                  <td className="p-3">
                    <select
                      value={genericNotes[index]}
                      onChange={(e) =>
                        handleGenericNoteChange(index, e.target.value)
                      }
                      className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                    >
                      <option value={row.defaultNote}>
                        {row.defaultNote || "Select a quick note..."}
                      </option>
                      {commonNotesOptions
                        .filter(
                          (option) =>
                            option !==
                            (row.defaultNote || "Select a quick note...")
                        )
                        .map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      <option value="">--- Custom Note Below ---</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Enter custom note..."
                      value={row.notes}
                      onChange={(e) =>
                        handleChange(index, "notes", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm mt-1"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
              } text-white px-8 py-3 rounded-lg shadow-lg transition font-medium text-base`}
            >
              {loading ? "Saving..." : "Save Core Page Optimizations"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
