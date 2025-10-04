import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Headline } from "@/custom/Typography";
import img from "../../../../public/banner/Seo_img2.jpg";

export default function SeoEditorWithHero() {
  const [seo, setSeo] = useState({
    title: "",
    description: "",
    image: "",
    heroBackground: "",
    buttonText: "Click Me",
    buttonLink: "#",
    overlayOpacity: 0.3,
    schema: "",
  });

  // Load saved data from localStorage
  useEffect(() => {
    const savedSeo = localStorage.getItem("seoSettings");
    if (savedSeo) {
      setSeo(JSON.parse(savedSeo));
    }
  }, []);

  const handleChange = (e) => {
    setSeo({ ...seo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("seoSettings", JSON.stringify(seo));
    alert("SEO + Hero settings saved locally!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 space-y-8">
      {/* ===== Hero Preview ===== */}
      <div className="flex flex-col gap-6">
        <HeroSection
          backgroundImage={seo.heroBackground || img}
          title={seo.title}
          description={seo.description}
          buttonText={seo.buttonText}
          buttonLink={seo.buttonLink}
          overlayOpacity={parseFloat(seo.overlayOpacity)}
        />

        {/* OG Image Preview */}
        {seo.image && (
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Headline
              title="OG Image Preview"
              description="This is how the shared image / hero will appear on social platforms"
            />
            <img
              src={seo.image}
              alt="OG Preview"
              className="w-full h-48 object-cover mt-4 rounded"
            />
          </div>
        )}
      </div>

      {/* ===== SEO + Hero Form ===== */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-white w-full p-6 shadow-lg rounded-lg space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">
            SEO Settings
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={seo.title}
                onChange={handleChange}
                placeholder="Enter page title"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={seo.description}
                onChange={handleChange}
                rows={4}
                placeholder="Enter meta description"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">Hero Background Image URL</label>
              <input
                type="text"
                name="heroBackground"
                value={seo.heroBackground}
                onChange={handleChange}
                placeholder="https://example.com/hero.jpg"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">Hero Button Text</label>
              <input
                type="text"
                name="buttonText"
                value={seo.buttonText}
                onChange={handleChange}
                placeholder="Click Me"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">Hero Button Link</label>
              <input
                type="text"
                name="buttonLink"
                value={seo.buttonLink}
                onChange={handleChange}
                placeholder="/example-link"
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <label className="block text-sm font-medium text-gray-700">Overlay Opacity (0-1)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                name="overlayOpacity"
                value={seo.overlayOpacity}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">JSON-LD Schema</label>
              <textarea
                name="schema"
                value={seo.schema}
                onChange={handleChange}
                placeholder='{"@context": "https://schema.org"}'
                rows={8}
                className="w-full p-3 border rounded font-mono"
              />

            </div>

          </div>
            <div className="w-full">
              
              <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700 transition mt-4"
              >
                Save SEO + Hero
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
