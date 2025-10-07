
import React, { useState } from 'react';

// Reusable Toggle Switch Component
const ToggleSwitch = ({ label, enabled, setEnabled }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
    <span className="text-gray-300">{label}</span>
    <button
      onClick={() => setEnabled(!enabled)}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-600'
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
      role="switch"
      aria-checked={enabled}
    >
      <span
        aria-hidden="true"
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  </div>
);

function GlobalSeoSettings() {
  // State for form fields
  const [robotsEnabled, setRobotsEnabled] = useState(true);
  const [globalNoindex, setGlobalNoindex] = useState(false);
  const [sitemapURL, setSitemapURL] = useState('https://www.example.com/sitemap.xml');
  const [canonicalPreference, setCanonicalPreference] = useState('https://www.');
  const [titleSuffix, setTitleSuffix] = useState(' | My Brand');
  const [metaDescription, setMetaDescription] = useState('A default description for my website.');

  const handleSave = () => {
    alert('Settings Saved! (Check console for state values)');
    console.log({
      robotsEnabled,
      globalNoindex,
      sitemapURL,
      canonicalPreference,
      titleSuffix,
      metaDescription,
    });
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto"> {/* Centered and max-width for better readability */}
      {/* 1. Indexing Control Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">1. Indexing Control</h2>
        <ToggleSwitch 
          label="Robots.txt Editor" 
          enabled={robotsEnabled} 
          setEnabled={setRobotsEnabled} 
        />
        <ToggleSwitch 
          label="Global Noindex/Nofollow" 
          enabled={globalNoindex} 
          setEnabled={setGlobalNoindex} 
        />
      </div>

      {/* 2. Sitemaps Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">2. Sitemaps</h2>
        <div className="mb-4">
          <label htmlFor="sitemapUrl" className="block text-gray-400 text-sm font-bold mb-2">
            XML Sitemap Generator/Link
          </label>
          <input
            type="text"
            id="sitemapUrl"
            value={sitemapURL}
            onChange={(e) => setSitemapURL(e.target.value)}
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="e.g., https://yourdomain.com/sitemap.xml"
          />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={canonicalPreference}
            onChange={(e) => setCanonicalPreference(e.target.value)}
            className="block appearance-none w-auto bg-gray-700 border border-gray-700 text-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          >
            <option value="https://www.">https://www.</option>
            <option value="https://">https://</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
            Submit to Google Search Console
          </button>
        </div>
      </div>

      {/* 3. Global Meta Tags Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">3. Global Meta Tags</h2>
        <div className="mb-4">
          <label htmlFor="titleSuffix" className="block text-gray-400 text-sm font-bold mb-2">
            Default Title Suffix
          </label>  
          <input
            type="text"
            id="titleSuffix"
            value={titleSuffix}
            onChange={(e) => setTitleSuffix(e.target.value)}
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="e.g., | My Brand"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="metaDescription" className="block text-gray-400 text-sm font-bold mb-2">
            Default Meta Description
          </label>
          <textarea
            id="metaDescription"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows="3"
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="A default meta description for pages without a specific one."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlobalSeoSettings;