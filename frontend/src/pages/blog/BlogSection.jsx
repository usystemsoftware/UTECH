// import React, { useState } from "react";
// import HeroSection from "@/components/HeroSection";
// import PageLayout from "@/custom/PageLayout";
// import { Card, CardContent, CardDescription } from "@/components/ui/card";
// import { TypographyH3, TypographyH4, TypographyMuted, Headline } from "@/custom/Typography";
// import ContactUsButton from "@/custom/ContactUsButton";
// import { motion } from "framer-motion";
// import SeoHead from "../../components/SeoHead"
// import organizationSchema from "../../components/seo/breadcrumbs/organizationSchema"
// import breadcrumbSchema from "../../components/seo/breadcrumbs/breadcrumbSchema"
// // import img from "../../assets/blog"
// // Dummy blog data
// const whatsNew = [
//   "The Future of Property Valuation: How Agentic AI is Revolutionizing AVMs",
//   "How SAP SuccessFactors Helps HR Solve Turnover & Payroll Issues",
//   "SAP Build: One Platform for No-Code to Pro-Code App Development",
//   "Your Next Construction Project Could Run on AI—Here’s What That Looks Like",
// ];

// const techInsights = [
//   {
//     title: "FinOps for AI: 8 Cost Optimization Strategies for Scalable AI Workloads",
//     img: "/assets/blog/10009.jpg",
//     category: "Technical Perspectives",
//     desc: "FinOps, short for “Cloud Financial Operations,” refers to an increasingly important operational model for managing costs in AI-driven infrastructures…",
//     link: "https://example.com/finops-ai"
//   },
// ];

// const topTech = [
//   {
//     title: "Exploring Next-Gen AI Models and Their Impact",
//     img: "/assets/blog/Toptech.jpg",
//     category: "Technical Perspectives",
//     link: "https://example.com/next-gen-ai"
//   },
// ];

// const leftColumnPosts = [
//   { title: "Oracle Micros POS: Powering Smart Restaurants with Seamless Service", img: "/assets/blog/10006.jpg", link: "https://example.com/oracle-micros" },
//   { title: "Social Gaming Market Insights Through Mobile Gaming Segmentation", img: "/assets/blog/10007.jpg", link: "https://example.com/social-gaming" },
//   { title: "Choosing the Right Oracle Tool: EBS vs Cloud", img: "/assets/blog/10008.jpg", link: "https://example.com/oracle-ebs" },
//   { title: "FinOps for AI: 8 Cost Optimization Strategies for Scalable AI Workloads", img: "/assets/blog/10009.jpg", link: "https://example.com/finops-ai" },
//   { title: "How Sabre’s NDC Capabilities are Transforming Airline Distribution?", img: "/assets/blog/img3.jpg", link: "https://example.com/sabre-ndc" },
// ];

// const rightColumnPosts = [
//   { category: "Technical Perspectives", title: "Deciding Between Oracle Cloud VS AWS", link: "https://example.com/oracle-vs-aws" },
//   { category: "Technical Perspectives", title: "Oracle Databases: Main Differences Between 12c, 18c and 19c", link: "https://example.com/oracle-db" },
//   { category: "Blockchain", title: "5 Key Blockchain Protocols You Need to Know", link: "https://example.com/blockchain-protocols" },
//   { category: "Technical Perspectives", title: "SAP ECC vs. SAP ERP S/4 HANA: What is the Difference?", link: "https://example.com/sap-ecc-vs-s4" },
//   { category: "Technical Perspectives", title: "Top 3 Essential Oracle ERP Modules You Need", link: "https://example.com/oracle-erp-modules" },
// ];

// export default function BlogSection() {
//   const [selectedPost, setSelectedPost] = useState(null);

//   return (
//     <>
//     <SeoHead
//         title="U Tech | Company Blog - Insights & Updates"
//         description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
//         url="https://usystem.software/blog"
//         image="https://usystem.software/small-logo.png"
//         organizationSchema={organizationSchema}
//         breadcrumbSchema={breadcrumbSchema}
//       />
//       {/* HERO SECTION (clickable) */}
//       <a href="https://example.com/hero-link" target="_blank" rel="noopener noreferrer">
//         <HeroSection
//           backgroundImage="/assets/blog/10009.jpg"
//           title="Welcome to Our Blog"
//           description="Discover the latest insights, trends, and updates from the tech and business world."
//           buttonText="Explore Blogs"
//         />
//       </a>

//       {/* BLOG CONTENT */}
//       <PageLayout section className="py-16 space-y-16">
//         <Headline title="Company Blog" description="Latest articles and insights from our team" />

//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* What's New */}
//           <div>
//             <h3 className="text-xl font-semibold text-teal-600 mb-6">WHAT'S NEW</h3>
//             <ul className="space-y-6">
//               {whatsNew.map((title, i) => (
//                 <motion.li
//                   key={i}
//                   className="flex items-start space-x-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                 >
//                   <img src="/assets/blog/10001.jpg" alt="blog" className="w-20 h-16 object-cover rounded" />
//                   <p className="text-gray-700 dark:text-gray-300 font-medium text-justify">{title}</p>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Tech Insights */}
//           <div>
//             <h3 className="text-xl font-semibold text-teal-600 mb-6">TECH INSIGHTS</h3>
//             {techInsights.map((post, i) => (
//               <motion.div
//                 key={i}
//                 className="mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <a href={post.link} target="_blank" rel="noopener noreferrer">
//                   <Card className="overflow-hidden hover:shadow-2xl transition">
//                     <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
//                     <CardContent>
//                       <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">{post.category}</span>
//                       <TypographyH4 className="mt-2">{post.title}</TypographyH4>
//                       <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">{post.desc}</CardDescription>
//                     </CardContent>
//                   </Card>
//                 </a>
//               </motion.div>
//             ))}
//           </div>

//           {/* Top Tech */}
//           <div>
//             <h3 className="text-xl font-semibold text-teal-600 mb-6">TOP TECH TOPICS</h3>
//             {topTech.map((post, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <a href={post.link} target="_blank" rel="noopener noreferrer">
//                   <Card className="overflow-hidden hover:shadow-2xl transition mb-6">
//                     <img src={post.img} alt={post.title} className="w-full h-64 object-cover" />
//                     <CardContent>
//                       <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">{post.category}</span>
//                       <TypographyH4 className="mt-2">{post.title}</TypographyH4>
//                     </CardContent>
//                   </Card>
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="space-y-6">
//             {leftColumnPosts.map((post, i) => (
//               <motion.div
//                 key={i}
//                 className="flex items-start space-x-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition cursor-pointer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 onClick={() => window.open(post.link, "_blank")}
//               >
//                 <img src={post.img} alt={post.title} className="w-24 h-16 object-cover rounded" />
//                 <p className="text-gray-700 dark:text-gray-300 font-medium text-justify">{post.title}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Center Column Featured */}
//           <div>
//             <span className="text-sm text-teal-600 font-semibold uppercase">Featured</span>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               <a href="https://example.com/featured-blog" target="_blank" rel="noopener noreferrer">
//                 <Card className="mt-2 overflow-hidden hover:shadow-2xl transition">
//                   <img src="/assets/blog/10008.jpg" alt="featured blog" className="w-full h-56 object-cover" />
//                   <CardContent>
//                     <span className="text-sm uppercase text-gray-500 dark:text-gray-400">Technical Perspectives</span>
//                     <TypographyH4 className="mt-2">
//                       The Future of Property Valuation: How Agentic AI is Revolutionizing AVMs
//                     </TypographyH4>
//                     <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">
//                       Real estate and property valuation underwent a radical transformation during the global…
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
//               </a>
//             </motion.div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-4">
//             {rightColumnPosts.map((post, i) => (
//               <motion.div
//                 key={i}
//                 className="border-b pb-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition cursor-pointer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 onClick={() => window.open(post.link, "_blank")}
//               >
//                 <span className="text-sm text-teal-600 font-semibold block">{post.category}</span>
//                 <p className="text-gray-700 dark:text-gray-300 font-medium hover:text-teal-600 text-justify">{post.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section with Hero Image (clickable) */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <a href="https://example.com/cta-link" target="_blank" rel="noopener noreferrer">
//             <Card className="rounded-sm border-4 border-dashed border-white bg-[#009698] text-white shadow-2xl hover:shadow-2xl transition">
//               <CardContent className="grid gap-8 p-10 sm:grid-cols-2 sm:items-center">

//                 {/* Left Side: Text */}
//                 <div className="space-y-4">
//                   <TypographyH3>Have a project in mind?</TypographyH3>
//                   <TypographyMuted className="leading-relaxed">
//                     Let’s scope it together and get your first release out in weeks—not months.
//                   </TypographyMuted>

//                   <ContactUsButton 
//                     variant="hover" 
//                     className="border-2 uppercase hover:bg-orange-500 border-orange-500 rounded-full mt-2"
//                   >
//                     Get AI Powered Construction Solutions
//                   </ContactUsButton>
//                 </div>

//                 {/* Right Side: Hero Image */}
//                 <div className="flex justify-center items-center">
//                   <img 
//                     src="/assets/blog/cta-image.jpg" 
//                     alt="CTA Hero" 
//                     className="w-full max-w-md rounded-lg shadow-xl object-cover cursor-pointer"
//                   />
//                 </div>

//               </CardContent>
//             </Card>
//           </a>
//         </motion.div>
//       </PageLayout>
//     </>
//   );
// }






import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { TypographyH3, TypographyH4, TypographyMuted, Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";
import { motion } from "framer-motion";
import SeoHead from "../../components/SeoHead";
import organizationSchema from "../../components/seo/breadcrumbs/organizationSchema";
import breadcrumbSchema from "../../components/seo/breadcrumbs/breadcrumbSchema";
import axios from "axios";

// Dummy static data (your existing layout)
const whatsNew = [
  "The Future of Property Valuation: How Agentic AI is Revolutionizing AVMs",
  "How SAP SuccessFactors Helps HR Solve Turnover & Payroll Issues",
  "SAP Build: One Platform for No-Code to Pro-Code App Development",
  "Your Next Construction Project Could Run on AI—Here’s What That Looks Like",
];

const techInsights = [
  {
    title: "FinOps for AI: 8 Cost Optimization Strategies for Scalable AI Workloads",
    img: "/assets/blog/10009.jpg",
    category: "Technical Perspectives",
    desc: "FinOps, short for “Cloud Financial Operations,” refers to an increasingly important operational model for managing costs in AI-driven infrastructures…",
    link: "https://example.com/finops-ai",
  },
];

const topTech = [
  {
    title: "Exploring Next-Gen AI Models and Their Impact",
    img: "/assets/blog/Toptech.jpg",
    category: "Technical Perspectives",
    link: "https://example.com/next-gen-ai",
  },
];

const leftColumnPosts = [
  { title: "Oracle Micros POS: Powering Smart Restaurants with Seamless Service", img: "/assets/blog/10006.jpg", link: "https://example.com/oracle-micros" },
  { title: "Social Gaming Market Insights Through Mobile Gaming Segmentation", img: "/assets/blog/10007.jpg", link: "https://example.com/social-gaming" },
  { title: "Choosing the Right Oracle Tool: EBS vs Cloud", img: "/assets/blog/10008.jpg", link: "https://example.com/oracle-ebs" },
  { title: "FinOps for AI: 8 Cost Optimization Strategies for Scalable AI Workloads", img: "/assets/blog/10009.jpg", link: "https://example.com/finops-ai" },
  { title: "How Sabre’s NDC Capabilities are Transforming Airline Distribution?", img: "/assets/blog/img3.jpg", link: "https://example.com/sabre-ndc" },
];

const rightColumnPosts = [
  { category: "Technical Perspectives", title: "Deciding Between Oracle Cloud VS AWS", link: "https://example.com/oracle-vs-aws" },
  { category: "Technical Perspectives", title: "Oracle Databases: Main Differences Between 12c, 18c and 19c", link: "https://example.com/oracle-db" },
  { category: "Blockchain", title: "5 Key Blockchain Protocols You Need to Know", link: "https://example.com/blockchain-protocols" },
  { category: "Technical Perspectives", title: "SAP ECC vs. SAP ERP S/4 HANA: What is the Difference?", link: "https://example.com/sap-ecc-vs-s4" },
  { category: "Technical Perspectives", title: "Top 3 Essential Oracle ERP Modules You Need", link: "https://example.com/oracle-erp-modules" },
];

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  // ✅ Fetch dynamic blogs from backend (MongoDB)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <>
      <SeoHead
        title="U Tech | Company Blog - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />

      {/* HERO SECTION */}
      <HeroSection
        backgroundImage="/assets/blog/10009.jpg"
        title="Welcome to Our Blog"
        description="Discover the latest insights, trends, and updates from the tech and business world."
        buttonText="Explore Blogs"
      />

      <PageLayout section className="py-16 space-y-16">
        <Headline title="Company Blog" description="Latest articles and insights from our team" />

        {/* 🌐 NEW DYNAMIC BLOG SECTION */}
        <div>
          <h3 className="text-xl font-semibold text-teal-600 mb-6">LATEST BLOGS (from backend)</h3>
          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs found. Add some from the backend.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition">
                    <img
                      src={`http://localhost:5000/uploads/${post.image}`}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                    <CardContent>
                      <span className="text-sm text-gray-500 uppercase">{post.category}</span>
                      <TypographyH4 className="mt-2">{post.title}</TypographyH4>
                      <CardDescription className="text-gray-600 text-sm">{post.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* 📰 EXISTING STATIC BLOG LAYOUT BELOW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* What's New */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">WHAT'S NEW</h3>
            <ul className="space-y-6">
              {whatsNew.map((title, i) => (
                <motion.li
                  key={i}
                  className="flex items-start space-x-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img src="/assets/blog/10001.jpg" alt="blog" className="w-20 h-16 object-cover rounded" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-justify">{title}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Insights */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">TECH INSIGHTS</h3>
            {techInsights.map((post, i) => (
              <motion.div
                key={i}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden hover:shadow-2xl transition">
                    <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
                    <CardContent>
                      <span className="text-sm text-gray-500 uppercase">{post.category}</span>
                      <TypographyH4 className="mt-2">{post.title}</TypographyH4>
                      <CardDescription className="text-gray-600 text-sm">{post.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Top Tech */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">TOP TECH TOPICS</h3>
            {topTech.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden hover:shadow-2xl transition mb-6">
                    <img src={post.img} alt={post.title} className="w-full h-64 object-cover" />
                    <CardContent>
                      <span className="text-sm text-gray-500 uppercase">{post.category}</span>
                      <TypographyH4 className="mt-2">{post.title}</TypographyH4>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="rounded-sm border-4 border-dashed border-white bg-[#009698] text-white shadow-2xl">
            <CardContent className="grid gap-8 p-10 sm:grid-cols-2 sm:items-center">
              <div className="space-y-4">
                <TypographyH3>Have a project in mind?</TypographyH3>
                <TypographyMuted className="leading-relaxed">
                  Let’s scope it together and get your first release out in weeks—not months.
                </TypographyMuted>
                <ContactUsButton
                  variant="hover"
                  className="border-2 uppercase hover:bg-orange-500 border-orange-500 rounded-full mt-2"
                >
                  Get AI Powered Construction Solutions
                </ContactUsButton>
              </div>
              <div className="flex justify-center items-center">
                <img src="/assets/blog/cta-image.jpg" alt="CTA Hero" className="w-full max-w-md rounded-lg shadow-xl" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </PageLayout>
    </>
  );
}
