// import React from "react";
// import FinanceBanner from "../../../../public/assets/Industries/Finance/finance-banner.jpg";
// import Combofinance from "../../../../public/assets/Industries/Finance/combo-finance.png";
// import { motion } from "framer-motion";
// import { MdOutlineLocalAtm } from "react-icons/md";
// import {
//   FaUniversity,
//   FaCreditCard,
//   FaMobileAlt,
//   FaMoneyCheckAlt,
//   FaHandHoldingUsd,
//   FaChartLine,
//   FaSearchDollar,
//   FaBalanceScale,
//   FaLaptop,
//   FaFileAlt,
//   FaCheckCircle,
//   FaDesktop,
//   FaEye,
//   FaCog,
//   FaNetworkWired,

//   //   FaNetworkWired,
//   // FaUniversity,
//   FaLaptopCode,
//   FaDollarSign,
//   FaFileInvoiceDollar,
//   FaBell,
//   FaCheckDouble,
//   FaWallet,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";

// const Finance = () => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     }),
//   };
//   const leftFeatures = [
//     {
//       label: "Accounting",
//       icon: <FaMoneyCheckAlt size={36} className="text-cyan-600" />,
//     },
//     {
//       label: "PortFolio Management",
//       icon: <MdOutlineLocalAtm size={36} className="text-cyan-600" />,
//     },
//     {
//       label: "Financial Planning",
//       icon: <FaUniversity size={36} className="text-cyan-600" />,
//     },
//   ];
//   const rightFeatures = [
//     {
//       label: "Insurance",
//       icon: <FaCreditCard size={36} className="text-cyan-600" />,
//     },
//     {
//       label: "Taxes",
//       icon: <FaMobileAlt size={36} className="text-cyan-600" />,
//     },
//     {
//       label: "Capital Markets",
//       icon: <FaHandHoldingUsd size={36} className="text-cyan-600" />,
//     },
//   ];
//   return (
//     <div>
//       <motion.section
//         className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
//         style={{ backgroundImage: `url(${FinanceBanner})` }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}
//       >
//         <div className="container mx-auto text-center px-4">
//           <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
//             FINANCIAL SOFTWARE DEVELOPMENT SERVICES
//           </motion.h1>

//           <motion.a
//             href="#"
//             className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             GET FINTECH DEVELOPERS
//           </motion.a>
//         </div>
//       </motion.section>
//       {/* Breadcrumb */}
//       <div className="bg-white px-4 py-4 text-sm text-gray-500">
//         <div className="container mx-auto">
//           Home <span className="mx-2">›</span>{" "}
//           <span className="text-cyan-600 font-medium">Banking</span>
//         </div>
//       </div>

//       {/* Features Grid */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto text-center px-4">
//           <motion.h2
//             className="text-1xl md:text-3xl font-bold text-cyan-700 mb-4"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             U Technology’s Financial Software Development Services
//           </motion.h2>
//           <p className="text-sm text-primary mb-10 max-w-2xl mx-auto">
//             U Technology’s custom financial software development services cater to the
//             finance industry, providing custom-tailored solutions for
//             accounting, portfolio management, financial planning, insurance, and
//             taxes.
//           </p>

//           <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
//             <div className="flex flex-col gap-8 items-end text-right">
//               {leftFeatures.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center gap-3"
//                   custom={index}
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                 >
//                   {item.icon}
//                   <span className="text-md font-medium text-gray-700">
//                     {item.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               className="w-full max-w-md my-10"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               custom={3}
//             >
//               <img
//                 src={Combofinance}
//                 alt="Banking dashboard UI"
//                 className="rounded-xl  mx-auto w-[90%] md:w-[100%]"
//               />
//             </motion.div>

//             <div className="flex flex-col gap-8 items-start text-left">
//               {rightFeatures.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center gap-3"
//                   custom={index}
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                 >
//                   {item.icon}
//                   <span className="text-md font-medium text-gray-700">
//                     {item.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <motion.a
//             href="#"
//             className="mt-10 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition duration-300 hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//           >
//             CUSTOMIZE YOUR BANKING SOLUTION NOW
//           </motion.a>
//         </div>
//       </section>
//       {/* AI Finance Benefits Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h2
//             className="text-2xl md:text-3xl font-bold text-cyan-700 mb-4"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             Optimizing Finance with Artificial Intelligence
//           </motion.h2>
//           <p className="text-sm text-gray-600 mb-12 max-w-3xl mx-auto">
//             With the ever-evolving landscape of financial services becoming
//             increasingly complex and digital, AI is a game-changer. U Technology’s
//             Financial Software Development Services are here to help you
//             transform your operations, improve your customer experiences, and
//             aid in strategic decision-making.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
//             {[
//               {
//                 icon: <FaCog size={36} className="text-cyan-600 mb-4" />,
//                 title: "Improving Efficiency",
//                 subtitle: "with AI-Powered Financial Services",
//                 desc: "Harness AI to streamline financial processes through automation, robo-advisors, and predictive modeling.",
//               },
//               {
//                 icon: <FaComments size={36} className="text-cyan-600 mb-4" />,
//                 title: "Leveling Up Customer",
//                 subtitle: "Engagement with Chatbots",
//                 desc: "Use AI chatbots for real-time updates, historical insights, and seamless customer interactions.",
//               },
//               {
//                 icon: (
//                   <FaBalanceScale size={36} className="text-cyan-600 mb-4" />
//                 ),
//                 title: "Balance",
//                 subtitle: "Responsibility and Innovation",
//                 desc: "Implement AI responsibly with high standards, protecting sensitive data and maintaining compliance.",
//               },
//               {
//                 icon: <FaChartLine size={36} className="text-cyan-600 mb-4" />,
//                 title: "Shifting Wealth",
//                 subtitle: "with AI-Driven Investment",
//                 desc: "Curate investment strategies using AI to align with market trends, goals, and risk profiles.",
//               },
//               {
//                 icon: (
//                   <FaSearchDollar size={36} className="text-cyan-600 mb-4" />
//                 ),
//                 title: "Navigating",
//                 subtitle: "Complexity of Financial Decision",
//                 desc: "Strengthen decision-making with AI’s predictive capabilities and proactive risk management.",
//               },
//               {
//                 icon: (
//                   <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
//                 ),
//                 title: "Unlock",
//                 subtitle: "Efficiency and Compliance",
//                 desc: "Automate financial reporting with AI for greater accuracy, speed, and regulatory compliance.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
//                 variants={fadeUp}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 {item.icon}
//                 <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
//                 <h4 className="text-md font-medium mb-2">{item.subtitle}</h4>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Finance;

import React, { useState } from "react";
import FinanceBanner from "/assets/Industries/Finance/finance-banner.jpg";
import Combofinance from "/assets/Industries/Finance/combo-finance.png";
import Sage from "/assets/Industries/Finance/Finance-Logos/sage.png";
import Freshbooks from "/assets/Industries/Finance/Finance-Logos/freshbooks.png";
import OracleNetsuite from "/assets/Industries/Finance/Finance-Logos/oracle-netsuite.png";
import QuickBooks from "/assets/Industries/Finance/Finance-Logos/quickbooks.png";
import AccountingDevelop from "/assets/Industries/Finance/accounting-development.png";
import PortfolioDevlop from "/assets/Industries/Finance/portfolio-development.png";
import PlanningDevelopment from "/assets/Industries/Finance/planning-development.png";
import InsuranceDevelopment from "/assets/Industries/Finance/insurance-development.png";
import PreparationDevelopment from "/assets/Industries/Finance/preparation-development.png";
import TradingDevelopment from "/assets/Industries/Finance/trading-development.png";
import { motion } from "framer-motion";
import { MdOutlineLocalAtm } from "react-icons/md";
import {
  FaUniversity,
  FaCreditCard,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaChartLine,
  FaSearchDollar,
  FaBalanceScale,
  FaLaptop,
  FaFileAlt,
  FaCheckCircle,
  FaDesktop,
  FaEye,
  FaCog,
  FaNetworkWired,
  FaLaptopCode,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaBell,
  FaCheckDouble,
  FaWallet,
  FaChevronDown,
  FaChevronUp,
  FaComments,
} from "react-icons/fa";

const Finance = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  const leftFeatures = [
    {
      label: "Accounting",
      icon: <FaMoneyCheckAlt size={36} className="text-cyan-600" />,
    },
    {
      label: "PortFolio Management",
      icon: <MdOutlineLocalAtm size={36} className="text-cyan-600" />,
    },
    {
      label: "Financial Planning",
      icon: <FaUniversity size={36} className="text-cyan-600" />,
    },
  ];
  const rightFeatures = [
    {
      label: "Insurance",
      icon: <FaCreditCard size={36} className="text-cyan-600" />,
    },
    {
      label: "Taxes",
      icon: <FaMobileAlt size={36} className="text-cyan-600" />,
    },
    {
      label: "Capital Markets",
      icon: <FaHandHoldingUsd size={36} className="text-cyan-600" />,
    },
  ];

  const faqs = [
    {
      question: "What is a financial system software?",
      answer:
        "Financial system software is a custom program developed to enhance a business's operational efficiency with reporting, accounting, and other financial processes.",
    },
    {
      question: "What is the main threat of AI to the financial industry?",
      answer:
        "The main threat of AI within the financial industry is algorithmic errors that could cause significant financial instability. These errors can also lead to market manipulation and security breaches.",
    },
    {
      question: "What features are available for financial software?",
      answer:
        "Features you can expect from financial software include automated bookkeeping, secure transactions, real-time analytics, budgeting tools, and even customizable reports for more streamlined financial management.",
    },
    {
      question: "How can financial applications assist any business?",
      answer:
        "Businesses can reap the rewards of optimized resource allocation, improved task accuracy, and insights for strategic decisions delivered by financial applications.",
    },
    {
      question: "What are the challenges in implementing AI in finance?",
      answer:
        "The challenges when implementing AI encompass regulatory compliance, interpretability, data privacy, and ensuring unbiased data analysis for decision-making.",
    },
    {
      question: "What is the role of financial software in a startup?",
      answer:
        "Within a startup, financial software can help with financial health tracking, expense management, and of course, garnering data-driven insights for informed growth strategies and fundraising.",
    },
    {
      question:
        "Which types of reporting and analytics are essential for a finance support system?",
      answer:
        "Essential reporting and analytics for a finance support system include budget variance analysis, cash flow projections, and performance metrics, enabling informed decision-making and strategic financial management.",
    },
    {
      question:
        "What assistance is provided before, during, and after financial software implementation?",
      answer:
        "Before implementation, assistance means assessing needs and selecting suitable software aligned with your business needs. There should be support during implementation that includes training and system integration. Ongoing help with troubleshooting, updates, and optimization is crucial for smooth operation during post-implementation.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0); // Only ONE index

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicking same
    } else {
      setOpenIndex(index); // Open new one
    }
  };
  return (
    <div>
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${FinanceBanner})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto text-center px-4">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
            FINANCIAL SOFTWARE DEVELOPMENT SERVICES
          </motion.h1>

          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET FINTECH DEVELOPERS
          </motion.a>
        </div>
      </motion.section>
      {/* Breadcrumb */}
      <div className="bg-white px-4 py-4 text-sm text-gray-500">
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Banking</span>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <motion.h2
            className="text-1xl md:text-3xl font-bold text-cyan-700 mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            U Technology’s Financial Software Development Services
          </motion.h2>
          <p className="text-sm text-primary mb-10 max-w-2xl mx-auto">
            U Technology’s custom financial software development services cater
            to the finance industry, providing custom-tailored solutions for
            accounting, portfolio management, financial planning, insurance, and
            taxes.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
            <div className="flex flex-col gap-8 items-end text-right">
              {leftFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.icon}
                  <span className="text-md font-medium text-gray-700">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="w-full max-w-md my-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              <img
                src={Combofinance}
                alt="Banking dashboard UI"
                className="rounded-xl  mx-auto w-[90%] md:w-[100%]"
              />
            </motion.div>

            <div className="flex flex-col gap-8 items-start text-left">
              {rightFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.icon}
                  <span className="text-md font-medium text-gray-700">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.a
            href="#"
            className="mt-10 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            CUSTOMIZE YOUR BANKING SOLUTION NOW
          </motion.a>
        </div>
      </section>

      {/* ✅ NEW AI Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-cyan-700 mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Optimizing Finance with Artificial Intelligence
          </motion.h2>
          <p className="text-sm text-gray-600 mb-12 max-w-3xl mx-auto">
            With the ever-evolving landscape of financial services becoming
            increasingly complex and digital, AI is a game-changer. U
            Technology’s Financial Software Development Services are here to
            help you transform your operations, improve your customer
            experiences, and aid in strategic decision-making.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <FaCog size={36} className="text-cyan-600 mb-4" />,
                title: "Improving Efficiency",
                subtitle: "with AI-Powered Financial Services",
                desc: "Artificial Intelligence represents a new era of efficiency within the finance industry, and with our expertise, you’ll be able to harness its capabilities to streamline your financial processes through automation. With robo-advisors and AI having impressive applications, thanks to their advanced algorithms, investments can have a more personal touch based on comprehensive data analysis and predictive modeling.",
              },
              {
                icon: <FaComments size={36} className="text-cyan-600 mb-4" />,
                title: "Leveling Up Customer",
                subtitle: "Engagement with Chatbots",
                desc: "With technology advancing to provide more sophisticated functions, chatbots have evolved from dependence on basic customer interactions. While our chatbots can still answer queries and provide account updates, we’ve also empowered them to engage with customers with real-time information and even assist in making financial decisions using historical and actualized data. U Technology can help you create a seamless user experience alongside receiving accurate and quick assistance.",
              },
              {
                icon: (
                  <FaBalanceScale size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Balance",
                subtitle: "Responsibility and Innovation",
                desc: "Artificial Intelligence and its implementation represent an ethical dilemma. However, U Technology is committed to delivering and maintaining the highest standards of ethical AI usage. With our AI implementation for Financial Data Analysis capable of processing large amounts of data precisely and swiftly, your business can make informed decisions, all while protecting sensitive data and maintaining regulatory compliance.",
              },
              {
                icon: <FaChartLine size={36} className="text-cyan-600 mb-4" />,
                title: "Shifting Wealth",
                subtitle: "with AI-Driven Investment",
                desc: "Investment strategies can experience a paradigm shift with the integration of AI and result in improved wealth management. With U Technology’s AI-enhanced customer personalization, financial institutions can easily create tailor-made investment portfolios. Our solutions enable this curated approach to investment strategies by analyzing market trends, financial goals, and the client’s risk profile, aligning with the individual’s objectives and preferences.",
              },
              {
                icon: (
                  <FaSearchDollar size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Navigating",
                subtitle: "Complexity of Financial Decision",
                desc: "Financial decision-making demands intricate solutions. Luckily, U Technology’s AI-driven investment tools offer impressive depth, like quantitative financial models that can improve decision support systems. By leveraging the predictive capabilities of AI, you can be given insights into potential risks and rewards through the assessment of multiple scenarios and stress-testing portfolios. With comprehensive data at the ready, our solutions strengthen proactive risk management and strategic planning.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Unlock",
                subtitle: "Efficiency and Compliance",
                desc: "We’re aiming to revolutionize financial reporting with AI-driven automation! With U Technology’s Automated Financial Reporting solutions, your organization can create complex financial reports with unrivaled accuracy and speed. Save time and resources; plus, you can ensure industrial regulations are being complied with.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                variants={fadeUp}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <h4 className="text-md font-medium mb-2">{item.subtitle}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={5}
        >
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition">
            GET AI-POWERED FINANCIAL SOLUTIONS
          </button>
        </motion.div>
      </section>
      {/* ✅ Custom Accounting Software Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Custom Accounting Software Development
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            U Technology’s{" "}
            <a href="#" className="text-cyan-600 underline">
              custom accounting software development services
            </a>{" "}
            include API programming & integrations, AIS architecture,
            bookkeeping app development, and much more.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={AccountingDevelop} // Replace with your accounting image if needed
              alt="Accounting Dashboard"
              className="w-full max-w-md mx-auto rounded-lg "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Accounting Information Systems",
                  desc: "Developers engineer online accounting software and AIS architectures integrated with ERP, CRM, asset tracking, vendor management, and other financial management programs.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Mobile Accounting Applications",
                  desc: "We offer responsive cross-platform and native development of mobile accounting apps programmed to provide full access to operational accounting workflows.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Invoicing & Accounts Receivable",
                  desc: "Accounts payable and receivable software modules automatically upload inventory spreadsheets, create downloadable purchase orders, generate reports, and more.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-md font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-12">
            U Technology integrates your current accounting management system
            with industry-leading ERP and bookkeeping solutions, including:
          </p>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center gap-8 items-center mt-8">
            <img src={QuickBooks} alt="QuickBooks" className="h-8" />
            <img src={Freshbooks} alt="FreshBooks" className="h-8" />
            <img src={Sage} alt="Sage" className="h-8" />
            <img src={OracleNetsuite} alt="Oracle NetSuite" className="h-8" />
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="mt-12 inline-block border-2 border-orange-400 text-black px-8 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET ACCOUNTING SOFTWARE SOLUTIONS
          </motion.a>
        </div>
      </section>
      <section className="px-8 py-16 bg-gray-100 text-center">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1 className="text-3xl font-bold mb-4">
            Custom Portfolio Management Software Development
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600">
            U Technology’s custom portfolio management software solutions
            encompass everything from risk analysis and investments to stock
            trading apps and fund management in a centralized platform.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left side content */}
          <div className="space-y-12 max-w-2xl text-left">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div
                  className={`text-cyan-500 text-5xl ${i === 0
                    ? "animate-bounce"
                    : i === 1
                      ? "animate-pulse"
                      : "animate-spin"
                    }`}
                >
                  {i === 0 ? (
                    <FaMobileAlt />
                  ) : i === 1 ? (
                    <FaUniversity />
                  ) : (
                    <FaMoneyCheckAlt />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {i === 0
                      ? "Portfolio Management Dashboards"
                      : i === 1
                        ? "Investment Data Integrations"
                        : "Risk Management & Analysis"}
                  </h2>
                  <p className="text-gray-600">
                    {i === 0
                      ? "Develop PM dashboards with built-in asset management modules and integrated ticker symbol databases, trade algorithms, historical data analysis tools, and more."
                      : i === 1
                        ? "Program data entry forms and tools for standard investment files QIF, OFX, QFX, and CSV, plus accounts from TD Ameritrade, E*Trade, Vanguard, and other major brokerages."
                        : "Offer third-party risk mitigation solutions that include multi-factor risk modeling and stress scenario testing to identify and assess high-risk financial investments and contingencies."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side image */}
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={4}
          >
            <img
              src={PortfolioDevlop}
              alt="Mobile Banking App"
              className="w-[550px] rounded-xl  hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={5}
        >
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition">
            GET PORTFOLIO MGMT SOFTWARE SOLUTIONS
          </button>
        </motion.div>
      </section>
      {/* ✅ Custom Financial Planning Software Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Custom Financial Planning Software Development
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            U Technology’s{" "}
            <a href="#" className="text-cyan-600 underline">
              custom financial planning software solutions
            </a>{" "}
            streamline day-to-day processes, including invoicing, payment
            processing, audit archiving, report generation, and more.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={PlanningDevelopment} // ✅ Replace with your financial planning image
              alt="Financial Planning Dashboard"
              className="w-full max-w-md mx-auto rounded-lg "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            {/* ✅ Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaNetworkWired size={80} className="text-cyan-600" />,
                  title: "Financial Planning Software",
                  desc: "Develop scalable financial planning systems that implement the ability to share data and manage operations remotely as well as provide access to mission-critical information.",
                },
                {
                  icon: <FaComments size={80} className="text-cyan-600" />,
                  title: "Financial Planning Algorithms",
                  desc: "Develop automated rule engines and dynamic manual controls for allocating funds and measuring cash flow against KPIs using programmable business logic protocols.",
                },
                {
                  icon: <FaChartLine size={80} className="text-cyan-600" />,
                  title: "Financial Dashboard Design",
                  desc: "Create functional and adaptable financial dashboards that give access to data insights in real-time, extensive budget control centers, quick-view behavior analysis, and more.",
                },
                {
                  icon: <FaSearchDollar size={80} className="text-cyan-600" />,
                  title: "Financial Analysis Software",
                  desc: "Program financial analysis software to measure data like KPIs, payment and inventory turnovers, current and quick ratios, RoE, and profit margins and create automated reports.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start text-2xl"
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-md font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="mt-12 inline-block border-2 border-orange-400 text-black px-8 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET FINANCIAL PLANNING SOFTWARE SOLUTIONS
          </motion.a>
        </div>
      </section>
      <section className="px-8 py-12 bg-cyan-50  m-24 mb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row  items-center  justify-between gap-12">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 border-l-2 border-black pl-3">
              WE ENSURE YOU A 100% COMPLIANCE WITH THE IRS & FASB!
            </h2>
            <p className="text-gray-700">
              U Technology's finance software development experts comply with
              regulatory standards including anti-money laundering and consumer
              protection standards such as Financial Accounting Standards Boards
              (FASB), SOX, Dodd-Frank, the Securities Act of 1933, and Payment
              Application Data Security Standard (PA-DSS).
            </p>
          </div>

          {/* Right video with labels */}
          <div className="flex-1 relative flex items-center justify-center ml-20">
            <video
              controls
              className="w-full max-w-md rounded-lg shadow-lg"
              poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
            >
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Labels */}
            <div className="absolute -left-20 top-5 hidden md:block">
              <div className="mb-6 px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                FASB
              </div>
            </div>

            <div className="absolute -left-20 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                SOX
              </div>
            </div>

            <div className="absolute -right-20 top-24 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                PA-Dss
              </div>
            </div>

            <div className="absolute -right-20 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                IRS
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Custom Insurance Software Development
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            U Technology’s{" "}
            <a href="#" className="text-cyan-600 underline">
              custom insurance software solutions
            </a>{" "}
            ensures success-driven insurance automation to help insurance
            companies drive momentum and drive productivity.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            {/* ✅ Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaNetworkWired size={80} className="text-cyan-600" />,
                  title: "Insurance Quoting Software",
                  desc: "Implement multi-carrier quoting, insurance premium calculation, underwriting algorithms, and qualitative risk assessment modules within a sophisticated quoting engine.",
                },
                {
                  icon: <FaComments size={80} className="text-cyan-600" />,
                  title: "Mobile Insurance Applications",
                  desc: "Develop cross-platform & hybrid mobile apps that enable policyholders to start, pause, and stop coverage, and report/submit claims, and manage insurance policies.",
                },
                {
                  icon: <FaChartLine size={80} className="text-cyan-600" />,
                  title: "Insurance Underwriting Platforms",
                  desc: "Engineer platforms digitize the underwriting process, delivering faster turnaround times, shorter prospect-to-customer lifecycles, and superior customer experiences.",
                },
                {
                  icon: <FaSearchDollar size={80} className="text-cyan-600" />,
                  title: "Document Management Systems",
                  desc: "Build cloud-based document management systems (DMS) designed with document capture modules, custom logic, and search capabilities, organized in a single repository",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start text-2xl"
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-md font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.img
              src={InsuranceDevelopment} // ✅ Replace with your financial planning image
              alt="Financial Planning Dashboard"
              className="w-full max-w-md mx-auto rounded-lg "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="mt-12 inline-block border-2 border-orange-400 text-black px-8 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET INSURANCE SOFTWARE SOLUTIONS
          </motion.a>
        </div>
      </section>
      <section className="px-8 py-16 bg-white text-center">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1 className="text-3xl font-bold mb-4">
            Custom Tax Preparation Software Development
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600">
            U Technology’s custom tax prep software solutions support the
            preparation, calculation, and reporting of personal and business
            taxes.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Right side image */}
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={4}
          >
            <img
              src={PreparationDevelopment}
              alt="Mobile Banking App"
              className="w-[550px] rounded-xl  hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          {/* Left side content */}
          <div className="space-y-12 max-w-2xl text-left">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div
                  className={`text-cyan-500 text-5xl ${i === 0
                    ? "animate-bounce"
                    : i === 1
                      ? "animate-pulse"
                      : "animate-spin"
                    }`}
                >
                  {i === 0 ? (
                    <FaMobileAlt />
                  ) : i === 1 ? (
                    <FaUniversity />
                  ) : (
                    <FaMoneyCheckAlt />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {i === 0
                      ? "Tax Calculator Applications"
                      : i === 1
                        ? "Tax Forms Software Integration"
                        : "Small Business Tax Software"}
                  </h2>
                  <p className="text-gray-600">
                    {i === 0
                      ? "Engineer tax calculator apps equipped with the ability to estimate refunds in any jurisdiction, validate tax credits and exemptions, and more."
                      : i === 1
                        ? "Build entry income tax forms for 1040, 1040A, 1040EZ, 1041, 1099, 1065, 1120, and many more, integrated to communicate data to servers, enabling real-time information validation."
                        : "Designed for freelancers, independent contractors, and small business owners, built with e-commerce software, expense log importation, state-by-state tax guidelines, and more."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={5}
        >
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition">
            GET TAX PREP SOFTWARE SOLUTIONS
          </button>
        </motion.div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Capital & Stock Trading Software Development
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            U Technology’s creates
            <a href="#" className="text-cyan-600 underline">
              custom trading software solutions
            </a>{" "}
            for capital markets, focusing on security and performance.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={TradingDevelopment} // ✅ Replace with your financial planning image
              alt="Financial Planning Dashboard"
              className="w-full max-w-md mx-auto rounded-lg "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
            {/* ✅ Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaNetworkWired size={80} className="text-cyan-600" />,
                  title: "Smart Trading Systems",
                  desc: "Our experts develop custom trading solutions tailored to your business needs, integrating advanced algorithms and real-time analytics to optimize trading performance and decision-making.",
                },
                {
                  icon: <FaComments size={80} className="text-cyan-600" />,
                  title: "Real-Time Trading Platforms",
                  desc: "We develop high-performance, real-time trading platforms that enable instant data processing, remote accessibility, and seamless integration with financial planning systems.",
                },
                {
                  icon: <FaChartLine size={80} className="text-cyan-600" />,
                  title: "Capital Market Dashboards",
                  desc: "Develop scalable capital market dashboards that enable data sharing and remote operations management while providing access to mission-critical information.",
                },
                {
                  icon: <FaSearchDollar size={80} className="text-cyan-600" />,
                  title: "Stock Forecasting Tools",
                  desc: "Leverage AI-powered analytics to predict stock trends, optimize portfolio strategies, and enhance investment decision-making with real-time market data insights.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start text-2xl"
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-md font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="mt-12 inline-block border-2 border-orange-400 text-black px-8 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET TRADING SOFTWARE SOLUTIONS
          </motion.a>
        </div>
      </section>
      <section className="px-8 py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Tailored Factoring Software Development Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Leverage U Technology's profound financial software development
            expertise to drive your business forward with advanced factoring
            solutions. Our innovative services are meticulously designed to
            streamline your financial processes and set you apart in the
            competitive landscape.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* Left Column Blocks */}
            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={2}
            >
              <FaDollarSign className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Accounts Receivable Platforms
                </h3>
                <p className="text-gray-600 text-sm">
                  Transform your financial operations with our tailored accounts
                  receivable platforms. From real-time sales receipts to
                  customizable invoices, our solutions elevate your invoicing
                  experience with engaging design templates and efficient alert
                  systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={3}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  General Ledger Precision
                </h3>
                <p className="text-gray-600 text-sm">
                  Rely on U Technology's expertise to code online accounting
                  software integrated seamlessly with CRM, ERP, and factoring
                  management programs. Our solutions encompass asset tracking,
                  auditing features, general ledgers, and comprehensive cash
                  flow and credit management.
                </p>
              </div>
              <FaCheckDouble className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={4}
            >
              <FaBell className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Custom Settlement Engines
                </h3>
                <p className="text-gray-600 text-sm">
                  Personalize factoring contract lifecycles effortlessly. U
                  Technology develops customizable business logic to monitor
                  invoice settlements and financial performance. Gain visibility
                  into delinquent accounts and integrate follow-up workflows
                  seamlessly with CRMs.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={5}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Efficient Document Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Embrace efficiency with our cloud-based Document Management
                  System (DMS). Enjoy centralized, always-accessible document
                  repositories, user-friendly indexing tools, and automation
                  using Machine Learning software for data mining, mapping, and
                  predictive coding.
                </p>
              </div>
              <FaWallet className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={6}
            >
              <FaFileInvoiceDollar className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Robotic Process Automation
                </h3>
                <p className="text-gray-600 text-sm">
                  Revolutionize your data extraction processes with our
                  rule-based extraction technology. Automate the extraction of
                  critical data, including dates, names, invoices, and account
                  numbers. Populate databases or downstream applications
                  seamlessly with our advanced algorithms.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={7}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Business Intelligence & Reporting Mastery
                </h3>
                <p className="text-gray-600 text-sm">
                  Elevate your decision-making with our custom Business
                  Intelligence (BI) solutions. Our solutions offer real-time
                  visibility on Key Performance Indicators (KPIs), whether on
                  desktops, mobile devices, or browser apps. Experience Big Data
                  processing, predictive analytics, decision support, and
                  workflow planning.
                </p>
              </div>
              <FaChartLine className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mt-16">
            {/* Tax Reporting Guidance */}
            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={8}
            >
              <FaFileInvoiceDollar className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Stringent Compliance Meets SOC2 Standards
                </h3>
                <p className="text-gray-600 text-sm">
                  Our software is meticulously crafted to meet SOC 2 and other
                  industry standards, ensuring robust security and privacy for
                  your factoring processes. Rest assured; your operations align
                  with the highest industry compliance standards.
                </p>
              </div>
            </motion.div>

            {/* SWIFT Code Configuration */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={9}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  White Label Factoring Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Enhance your brand presence by leveraging our white label
                  factoring solutions. Tailor the software to reflect your brand
                  identity, providing clients with a seamless and personalized
                  experience. Embrace the flexibility and credibility that come
                  with a white-labeled solution.
                </p>
              </div>
              <FaUniversity className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>
          </div>
        </div>
        {/* Button */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={5}
        >
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition">
            GET FACTORING SOLUTIONS
          </button>
        </motion.div>
      </section>
      <section className="px-8 py-16 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Financial Software Support Services
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Finance software support services are vital for ensuring financial
            systems' accuracy, compliance, and efficiency. U Technology is
            dedicated to delivering comprehensive support for finance software,
            ensuring organizations receive tailored solutions for their finance
            software.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* Left Column Blocks */}
            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={2}
            >
              <FaDollarSign className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Technical Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Technical support plays a critical role in maintaining finance
                  applications, and our team excels in troubleshooting and issue
                  resolution through a swift and systematic approach. We
                  prioritize rapid response, conduct thorough diagnostic
                  analysis, and collaborate closely to provide effective
                  solutions, including specialized support in accounting
                  software assistance, financial reporting software assistance,
                  investment platform support, and budgeting software help.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={3}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Help Desk For Application Maintenance
                </h3>
                <p className="text-gray-600 text-sm">
                  Regular maintenance is crucial for finance applications,
                  involving updates, security patches, and checks, ensuring
                  reliability and security. It prevents critical issues,
                  reducing downtime. Similarly, a well-maintained help desk
                  ensures smooth interactions and efficient workflows through
                  regular updates, aligning with business needs. U Technology
                  excels in system auditing and server administration,
                  fortifying IT infrastructures.
                </p>
              </div>
              <FaCheckDouble className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={4}
            >
              <FaBell className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Extended Support & Maintenance
                </h3>
                <p className="text-gray-600 text-sm">
                  Finance software application reliability requires ongoing
                  assistance, updates, and maintenance services beyond standard
                  time. It ensures that the software is reliable, secure, and
                  aligned with evolving business requirements. Extended support
                  includes continuous monitoring, proactive issue resolution,
                  software updates, and user training to maximize the longevity
                  and effectiveness of the financial software support.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={5}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Exceptional Customer Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Exceptional customer support is imperative in finance
                  application support, ensuring users receive prompt assistance,
                  fostering trust, and enhancing overall user experience. U
                  Technology stands out with a commitment to delivering
                  top-notch customer service. Our dedicated support teams
                  prioritize user satisfaction, offering timely and effective
                  solutions, personalized assistance, and ongoing communication.
                  We ensure the client receives reliable finance applications
                  and a supportive experience in their use and maintenance.
                </p>
              </div>
              <FaWallet className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>
          </div>
        </div>
        {/* Button */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={5}
        >
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition">
            GET FINANCE SOFTWARE SUPPORT
          </button>
        </motion.div>
        {/* ✅ Modern Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              Hear What Our Clients Have to Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* ✅ Testimonial 1 */}
              <motion.div
                className="bg-white shadow-lg rounded-lg p-8 relative"
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="absolute top-4 left-4 text-6xl text-cyan-600 font-serif">
                  “
                </span>

                <p className="text-gray-700 text-base leading-relaxed mt-8">
                  We want to express our appreciation for your responsiveness
                  and engagement during our meetings. We have found the weekly
                  discussions to be very productive. Your insights on product
                  improvements and keeping the project on schedule have been
                  particularly valuable. Overall, we’re very pleased with the
                  collaboration and the way the team works with us.
                </p>

                <span className="absolute bottom-4 right-4 text-6xl text-cyan-600 font-serif">
                  ”
                </span>

                <p className="mt-6 text-sm text-gray-900 font-semibold italic">
                  Juan B., Chief Operating Officer
                </p>
              </motion.div>

              {/* ✅ Testimonial 2 */}
              <motion.div
                className="bg-white shadow-lg rounded-lg p-8 relative"
                custom={2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="absolute top-4 left-4 text-6xl text-cyan-600 font-serif">
                  “
                </span>

                <p className="text-gray-700 text-base leading-relaxed mt-8">
                  We wanted to take a moment to sincerely appreciate the hard
                  work, dedication, and effort you have put into our company.
                  Your commitment to delivering high-quality work,
                  problem-solving skills, and teamwork has been truly
                  commendable. U Technology’s team has played a crucial role in
                  ensuring the success of this project, and we are grateful for
                  the attention to detail and proactive approach. Looking
                  forward to more success together!
                </p>

                <span className="absolute bottom-4 right-4 text-6xl text-cyan-600 font-serif">
                  ”
                </span>

                <p className="mt-6 text-sm text-gray-900 font-semibold italic">
                  Charles D., Senior Project Manager
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </section>
      <section className="px-6 py-16 max-w-7xl mx-auto bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
          <span className="text-cyan-700">Construction Software</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-cyan-700 pb-4">
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-semibold text-black">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Finance;
