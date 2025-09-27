import React from "react";

const BlogSection = () => {
  return (
<section className="pt-32 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Company <span className="text-teal-600">Blog</span>
        </h2>

        {/* === First Section (Earlier Layout) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* What's New */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">
              WHAT'S NEW
            </h3>
            <ul className="space-y-6">
              {[
                "The Future of Property Valuation: How Agentic AI is Revolutionizing AVMs",
                "How SAP SuccessFactors Helps HR Solve Turnover & Payroll Issues",
                "SAP Build: One Platform for No-Code to Pro-Code App Development",
                "Your Next Construction Project Could Run on AI—Here’s What That Looks Like",
              ].map((title, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
                >
                  <img
                    src="/assets/blog/10001.jpg"
                    alt="blog"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-justify">
                    {title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Insights */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">
              TECH INSIGHTS
            </h3>
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
              <img
                src="/assets/blog/10009.jpg"
                alt="tech insights"
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <span className="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Technical Perspectives
                </span>
                <h4 className="text-lg md:text-xl font-semibold mt-2 mb-2 text-gray-900 dark:text-white">
                  FinOps for AI: 8 Cost Optimization Strategies for Scalable AI
                  Workloads
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-justify">
                  FinOps, short for “Cloud Financial Operations,” refers to an
                  increasingly important operational model for managing costs in
                  AI-driven infrastructures…
                </p>
              </div>
            </div>
          </div>

          {/* Top Tech Topics */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">
              TOP TECH TOPICS
            </h3>
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
              <img
                src="/assets/blog/Toptech.jpg"
                alt="top tech"
                className="w-full h-64 md:h-72 lg:h-80 object-cover"
              />
              <div className="p-6">
                <span className="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Technical Perspectives
                </span>
                <h4 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">
                  Exploring Next-Gen AI Models and Their Impact
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* === Second Section (New Layout) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Small Cards */}
          <div className="space-y-6">
            {[
              {
                title:
                  "Oracle Micros POS: Powering Smart Restaurants with Seamless Service",
                img: "/assets/blog/10006.jpg",
              },
              {
                title:
                  "Social Gaming Market Insights Through Mobile Gaming Segmentation",
                img: "/assets/blog/10007.jpg",
              },
              {
                title: "Choosing the Right Oracle Tool: EBS vs Cloud",
                img: "/assets/blog/10008.jpg",
              },
              {
                title:
                  "FinOps for AI: 8 Cost Optimization Strategies for Scalable AI Workloads",
                img: "/assets/blog/10009.jpg",
              },
              {
                title:
                  "How Sabre’s NDC Capabilities are Transforming Airline Distribution?",
                img: "/assets/blog/img3.jpg",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-24 h-16 object-cover rounded"
                />
                <p className="text-gray-700 dark:text-gray-300 font-medium hover:text-teal-600 cursor-pointer text-justify">
                  {post.title}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Featured Blog */}
          <div>
            <span className="text-sm text-teal-600 font-semibold uppercase">
              Healthcare
            </span>
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition mt-2 bg-white dark:bg-gray-800">
              <img
                src="/assets/blog/10008.jpg"
                alt="featured blog"
                className="w-full h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="p-4 md:p-6">
                <span className="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Technical Perspectives
                </span>
                <h4 className="text-lg md:text-xl font-semibold mt-2 mb-2 text-gray-900 dark:text-white">
                  The Future of Property Valuation: How Agentic AI is
                  Revolutionizing AVMs
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-justify">
                  Real estate and property valuation underwent a radical
                  transformation during the global…
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Blog Titles */}
          <div className="space-y-4">
            {[
              {
                category: "Technical Perspectives",
                title: "Deciding Between Oracle Cloud VS AWS",
              },
              {
                category: "Technical Perspectives",
                title:
                  "Oracle Databases: Main Differences Between 12c, 18c and 19c",
              },
              {
                category: "Blockchain",
                title: "5 Key Blockchain Protocols You Need to Know",
              },
              {
                category: "Technical Perspectives",
                title: "SAP ECC vs. SAP ERP S/4 HANA: What is the Difference?",
              },
              {
                category: "Technical Perspectives",
                title: "Top 3 Essential Oracle ERP Modules You Need",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="border-b pb-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <span className="text-sm text-teal-600 font-semibold block">
                  {post.category}
                </span>
                <p className="text-gray-700 dark:text-gray-300 font-medium hover:text-teal-600 cursor-pointer text-justify">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === Third Section (Dropdown + 3 Blogs) === */}
        {/* <div> */}
          {/* Filters */}
          {/* <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <select className="border rounded px-4 py-2 w-full md:w-auto dark:bg-gray-800 dark:text-gray-200">
                <option>All Industries</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Technology</option>
              </select>
              <select className="border rounded px-4 py-2 w-full md:w-auto dark:bg-gray-800 dark:text-gray-200">
                <option>All Technologies</option>
                <option>AI</option>
                <option>Blockchain</option>
                <option>Cloud</option>
              </select>
              <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 w-full md:w-40">
                Show All
              </button>
            </div>
          </div> */}

          {/* Blog Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "Increase Agility and Scalability with Headless CMS Solutions",
                desc: "Headless CMS solutions are the optimized upgrade of the traditional CMS (Content Management System)…",
                img: "/assets/blog/img1.jpg",
              },
              {
                title:
                  'Build NFT-Based "Play-to-Earn" Games Using Blockchain Technology',
                desc: "The gaming industry never remains stagnant, as cutting-edge tech developments are constantly disrupting…",
                img: "/assets/blog/img2.jpg",
              },
              {
                title:
                  "Optimizing Web Development Lifecycles with Low-Code Solutions",
                desc: "Low code business solutions have risen in popularity for a good reason; the current shortage of talent is by no means…",
                img: "/assets/blog/img3.jpg",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-justify">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default BlogSection;
