import React, { useState } from "react";

export default function OnPageOptimizationTableForm() {
  const commonNotesOptions = [
    "N/A",
    "Needs Research",
    "Competitive Target",
    "Low Hanging Fruit",
    "Must Fix",
    "Check GSC Performance",
    "Align with Content Brief"
  ];

  const initialData = [
    // Added a defaultNote property to some fields
    { field: "Page URL / Slug", goal: "", statusLabel: "Completed", checked: true, notes: "", defaultNote: "Must be short, descriptive, and include Primary Keyword." },
    { field: "Primary Target Keyword", goal: "", statusLabel: "Confirmed", checked: true, notes: "", defaultNote: "One main focus keyword." },
    { field: "Searcher Intent", goal: "", statusLabel: "", checked: false, notes: "", intent: "", defaultNote: "Match the content type." },
    { field: "Secondary / LSI Keywords", goal: "", statusLabel: "Confirmed", checked: true, notes: "", defaultNote: "List 3-5 high-relevance terms here." },
    { field: "Content Word Count", goal: "", statusLabel: "", checked: false, notes: "", defaultNote: "Should be competitive with top-ranking pages." },
  ];

  // Initialize state with the initial data
  const [rows, setRows] = useState(initialData);
  // State for a separate generic note for the notes field
  const [genericNotes, setGenericNotes] = useState(
    initialData.map(row => row.defaultNote || "")
  );

  const searcherOptions = [
    "Informational",
    "Navigational",
    "Transactional",
    "Commercial Investigation"
  ];

  const handleChange = (index, name, value) => {
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleGenericNoteChange = (index, value) => {
    const updatedGenericNotes = [...genericNotes];
    updatedGenericNotes[index] = value;
    setGenericNotes(updatedGenericNotes);
    
    // Also update the 'notes' field in the rows state if needed,
    // though here we will primarily use the genericNotes state for the dropdown value
    const updatedRows = [...rows];
    updatedRows[index].notes = value; // Optionally save the selected option to the main notes field
    setRows(updatedRows);
  };

  const handleCheckboxChange = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].checked = !updatedRows[index].checked;
    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the combined data for submission
    const finalData = rows.map((row, index) => ({
        ...row,
        // Using the genericNotes state for the final note/default value
        notes: genericNotes[index]
    }));
    console.log("Submitted Optimizations:", finalData);
    alert("Optimizations saved to console! (Check F12 console)");
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        On-Page SEO Optimization Form (Core Page Information)
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
              <tr key={index} className="hover:bg-teal-50 transition-colors duration-150">
                {/* Field Name */}
                <td className="p-3 font-semibold text-gray-900">{row.field}</td>

                {/* Optimization Goal */}
                <td className="p-3">
                  <input
                    type="text"
                    placeholder={row.field === "Content Word Count" ? "Target: XXXX | Actual: YYYY" : "Enter optimization goal..."}
                    value={row.goal}
                    onChange={(e) => handleChange(index, "goal", e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  />
                </td>

                {/* Status (Checkbox/Dropdown) */}
                <td className="p-3">
                  {/* For general checkbox fields */}
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
                  {/* For Searcher Intent dropdown */}
                  {row.field === "Searcher Intent" && (
                    <select
                      value={row.intent}
                      onChange={(e) => handleChange(index, "intent", e.target.value)}
                      className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm mt-1"
                    >
                      <option value="">Select Intent</option>
                      {searcherOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                  {/* For Word Count, just show a status label */}
                  {row.field === "Content Word Count" && (
                     <span className={`px-2 py-1 text-xs font-semibold rounded ${row.goal.includes('Actual:') ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {row.goal ? 'Goal Set' : 'Awaiting Data'}
                     </span>
                  )}
                </td>

                {/* Notes (Dropdown) */}
                <td className="p-3">
                  <select
                    value={genericNotes[index]}
                    onChange={(e) => handleGenericNoteChange(index, e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  >
                    <option value={row.defaultNote}>{row.defaultNote || "Select a quick note..."}</option>
                    {commonNotesOptions.map((option) => (
                      // Only show common notes that are NOT the default note
                      option !== (row.defaultNote || "Select a quick note...") && (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    ))}
                    <option value="">--- Custom Note Below ---</option>
                  </select>
                  
                  {/* Custom Note Text Input */}
                  <input
                    type="text"
                    placeholder="Enter custom note..."
                    value={row.notes} // Use row.notes for custom input
                    onChange={(e) => handleChange(index, "notes", e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-teal-500 outline-none text-sm mt-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition font-medium text-base"
          >
            Save Core Page Optimizations
          </button>
        </div>
      </form>
    </div>
  );
}