import React, { useState } from "react";
import RealEstatee from "/assets/industries/real-estate/real-banner.jpg";
import Laptop from "/assets/industries/real-estate/laptop.png";
import Solution from "/assets/industries/real-estate/solutions.png";
import Freshbooks from "/assets/industries/real-estate/Real-EstateLogo/freshbooks.png";
import OracleNetsuite from "/assets/industries/real-estate/Real-EstateLogo/oracle-netsuite.png";
import QuickBook from "/assets/industries/real-estate/Real-EstateLogo/quickbooks.png";
import Saga from "/assets/industries/real-estate/Real-EstateLogo/sage.png";
import Books from "/assets/industries/real-estate/Real-EstateLogo/books.png";
import Oddo from "/assets/industries/real-estate/Real-EstateLogo/oddo.png";
import logo1 from "/assets/industries/real-estate/moxtra.png";
import logo2 from "/assets/industries/real-estate/brokermint.png";
import logo3 from "/assets/industries/real-estate/propertybase.png";
import logo4 from "/assets/industries/real-estate/contactually.png";
import logo5 from "/assets/industries/real-estate/logo.png";
import logo6 from "/assets/industries/real-estate/lionlogo.png";
import Tour from "/assets/industries/real-estate/tour.png";
import Mobile from "/assets/industries/real-estate/mobile.png";
import { motion } from "framer-motion";

import {
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaChartLine,
  FaFileInvoiceDollar,
  FaBell,
  FaWallet,
  FaChevronDown,
  FaChevronUp,
  FaUserFriends,
  FaFileAlt,
  FaLaptop,
  FaSearchDollar,
  FaHome,
  FaChartBar,
  FaIdCard,
  FaLaptopCode,
  FaDollarSign,
  FaHandshake,
  FaNetworkWired,
  FaListAlt,
  FaServer,
  FaExchangeAlt,
  FaRobot,
  FaVrCardboard,
  FaWifi,
  FaComments,
  FaHeadset
} from "react-icons/fa";

import { TypographyH1 } from "@/custom/Typography";

const features = [
  {
    title: "Predictive Analytics Solutions",
    icon: <FaChartLine className="text-4xl text-cyan-600" />,
    description:
      "Unlock smarter investment decisions with predictive analytics, offering real-time projections and insights using historical data.",
  },
  {
    title: "Intelligent Process Automation",
    icon: <FaRobot className="text-4xl text-cyan-600" />,
    description:
      "Automate and optimize real estate workflows using AI, NLP, and robotic process automation for faster and smarter decisions.",
  },
  {
    title: "AR/VR Immersiveness",
    icon: <FaVrCardboard className="text-4xl text-cyan-600" />,
    description:
      "Create immersive property experiences with AR/VR technology, including 3D tours, interactive floor plans, and more.",
  },
  {
    title: "IoT Implementation",
    icon: <FaWifi className="text-4xl text-cyan-600" />,
    description:
      "Leverage IoT for real-time monitoring, smart sensors, and building management to ensure safety and efficiency.",
  },
  {
    title: "AI Chatbots",
    icon: <FaComments className="text-4xl text-cyan-600" />,
    description:
      "We leverage powerful AI and NLP technology to develop interactive chatbots using programming languages such as Python, Ruby, or Java and the proper building framework to design a bot that can engage with website visitors, answer their queries, and guide them through the sales funnel. Custom Software Chatbots can provide personalized recommendations based on visitor needs and preferences, capturing lead information in real-time..",
  },
  {
    title: "Virtual Assistants",
    icon: <FaHeadset className="text-4xl text-cyan-600" />,
    description:
      "Our developers design virtual assistants that align with the client’s needs and expectations through integration with essential platforms, such as MLS, CRM, and social media to access property statistics and other integral market and company data. The virtual assistant is a powerful real estate tool that can help industry professionals manage their workload by handling administrative tasks, scheduling appointments, and more, freeing up time for prospecting.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-4">
    <div>{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-cyan-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const RealEstateFeatures = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        AI-Powered Real Estate Solutions
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Discover how advanced technologies like AI, IoT, AR/VR, and automation
        are transforming the real estate industry with intelligent, data-driven
        tools.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

const RealEstate = () => {
  const faqs = [
    {
      question: "What is banking software?",
      answer:
        "Banking software refers to a set of computer programs and applications used by banks and financial institutions to manage financial transactions, customer accounts, and other banking operations.",
    },
    {
      question:
        "How does AI improve risk management in Loan Origination Systems?",
      answer:
        "AI improves risk management in Loan Origination Systems by analyzing borrower behavior and financial history to identify potential risks and mitigate them in real-time, and by providing automated fraud detection and prevention tools to reduce the risk of loan default and financial loss.",
    },
    {
      question: "How can AI improve customer experience in banking software?",
      answer:
        "AI can improve customer experience in banking software by providing personalized recommendations, offering real-time assistance through chatbots and virtual assistants, and streamlining processes such as account opening and loan applications",
    },
    {
      question:
        "What are some emerging technologies used in Mobile Banking Software?",
      answer:
        "Some emerging technologies used in Mobile Banking Software include artificial intelligence for personalized recommendations and chatbots for customer support, blockchain for secure and efficient transactions, and augmented reality for enhanced customer experiences",
    },
    {
      question: "What is a Loan Origination System?",
      answer:
        "A Loan Origination System (LOS) is a software application that enables financial institutions to automate and streamline the loan application process, from initial application submission to loan approval and disbursement..",
    },
    {
      question:
        "How can Mobile Banking Software be integrated with other banking systems?",
      answer:
        "Mobile Banking Software can be integrated with other banking systems through application programming interfaces (APIs) that enable data exchange and integration with core banking systems, payment processing systems, and other financial systems..",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicking same
    } else {
      setOpenIndex(index); // Open new one
    }
  };
  const featuress = [
    {
      title: "Currency Exchange Support",
      description:
        "Currency Exchange Support enables real-time currency conversion.  U Technology engineers can enable your software or app to integrate and maintain data exchanges with international banking systems while monitoring and updating exchange rates. This means users will have seamless and transparent foreign exchange transactions available on their devices across multiple platforms.",
      icon: <FaExchangeAlt className="text-5xl text-cyan-600" />,
    },
    {
      title: "Check Processing Assistance",
      description:
        " U Technology software developers can include check processing assistance in your software to help users automate the verification, capture, and clearance of checks with check processing. This includes scanning checks with mobile devices, validating checks, using OCR (Optical Character Recognition), and digital imaging to verify identity and reduce the risk of fraud or errors.",
      icon: <FaMoneyCheckAlt className="text-5xl text-cyan-600" />,
    },
    {
      title: "Automated Alerts Configuration",
      description:
        "Our engineers can program automated alert configurations for your banking software to aid users in receiving fully automated alerts for potential fraud, fiscal updates, or regular account activities. Email, in-app notifications, or SMS can deliver these alerts. Automatically informing consumers about their accounts empowers users to act quickly when an error or potential fraud occurs.",
      icon: <FaBell className="text-5xl text-cyan-600" />,
    },
    {
      title: "Virtual Wallet Support",
      description:
        "With our virtual wallet support, our coders enable virtual wallets to function seamlessly in your banking software. Virtual wallets offer customers ease of use and a way to store credit and debit cards without needing physical cards. Chetu enables secure, easy-to-use payment systems compatible with mobile and desktop devices.",
      icon: <FaWallet className="text-5xl text-cyan-600" />,
    },
    {
      title: "Electronic Statement Issues",
      description:
        "Our software experts write code that enables your software users to avoid electronic statement issues. Software solutions are continually updated so users can access their electronic statements on desktop and mobile devices. They can be assured of secure access to track balances, transactions, deposits, withdrawals, and account health with online banking.",
      icon: <FaFileInvoiceDollar className="text-5xl text-cyan-600" />,
    },
    {
      title: "Investment Portfolio Troubleshooting",
      description:
        "Our team designs software algorithms that help with investment portfolio troubleshooting so that users can use tools that help both customers and financial advisors track and monitor their investment accounts and portfolios. Users can receive real-time notifications, assessments, and recommendations to maximize investment opportunities. All applicable financial regulations are adhered to.",
      icon: <FaChartLine className="text-5xl text-cyan-600" />,
    },
    {
      title: "Tax Reporting Guidance",
      description:
        "Our engineers help with tax reporting guidance for your banking software. This includes generating reports for interest, income, category, or other tax-related information. Automation means that your software remains in compliance with complex financial reporting and tax compliance requirements, as well as industry standards, and for political jurisdictions and entities..",
      icon: <FaFileInvoiceDollar className="text-5xl text-cyan-600" />,
    },
    {
      title: "SWIFT Code Configuration",
      description:
        "Our software engineers can help support and configure SWIFT code, also known as BIC (Bank Identifier Code), inside your software. SWIFT and BIC are essential for international wire transfers, cross-border payments, and communications inside our global financial network. Integration of the codes allows for payments to be processed securely in strict compliance with global financial standards.",
      icon: <FaChartLine className="text-5xl text-cyan-600" />,
    },
  ];
  const serviceItems = [
    {
      title: "MLS Software Development Services",
      icon: <FaLaptopCode size={30} className="text-cyan-600" />,
      description:
        "We create bespoke multiple listing service (MLS) platforms for agents & brokers to manage up-to-date information on property sales, investments, price fluctuations, and more.",
    },
    {
      title: "Real Estate Accounting Software",
      icon: <FaDollarSign size={30} className="text-cyan-600" />,
      description:
        "We engineer real estate accounting software for real estate professionals to manage transactions, evaluate business performance, automate commission calculations, and more.",
    },
    {
      title: "Real Estate Transaction Software",
      icon: <FaHandshake size={30} className="text-cyan-600" />,
      description:
        "We develop real estate transaction software (RETS) that serves as a centralized hub for secure document storage, transaction management, and client collaborations.",
    },
    {
      title: "RESO Web API Integration",
      icon: <FaNetworkWired size={30} className="text-cyan-600" />,
      description:
        "Our RESO Web API Integration service offers seamless connectivity between your website and MLS provider. Instantly pull listings for the most accurate and up-to-date IDX solution.",
    },
  ];

  const features = [
    {
      icon: <FaMobileAlt className="text-3xl text-cyan-600" />,
      title: "Real Estate Apps",
      description:
        "We build sophisticated native or cross-platform real estate applications for property managers, real estate agents, and tenants.",
    },
    {
      icon: <FaListAlt className="text-3xl text-cyan-600" />,
      title: "MLS Mobile Apps",
      description:
        "We design MLS mobile apps that enable agents and buyers to receive instant alerts about price reductions, new listings, open house times, and driving directions.",
    },
    {
      icon: <FaServer className="text-3xl text-cyan-600" />,
      title: "Legacy System Migration",
      description:
        "We migrate your cloud-based real estate mobile app to consolidate disparate data sources, improve performance, enhance scalability, and increase accessibility for all users.",
    },
  ];

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
      label: "Real Estate Management Software",
      icon: <FaUserFriends size={24} />,
    },
    { label: "Multiple Listing Service (MLS)", icon: <FaFileAlt size={24} /> },
    { label: "RETS", icon: <FaNetworkWired size={24} /> },
    { label: "Property Management", icon: <FaLaptop size={24} /> },
  ];

  const rightFeatures = [
    {
      label: "Real Estate Valuation Engines",
      icon: <FaSearchDollar size={24} />,
    },
    { label: "IDX", icon: <FaChartBar size={24} /> },
    { label: "HOA Management", icon: <FaIdCard size={24} /> },
    { label: "Real Estate Mortgages", icon: <FaHome size={24} /> },
  ];

  return (
    <div>
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${RealEstatee})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto text-center px-4">
          <motion.div className="mb-6" variants={fadeUp}>
            <TypographyH1>REAL ESTATE SOFTWARE DEVELOPMENT</TypographyH1>
          </motion.div>

          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
          >
            GET REAL ESTATE SOFTWARE DEVELOPERS
          </motion.a>
        </div>
      </motion.section>

      {/*  Breadcrumb now animated */}
      <motion.div
        className="bg-white px-4 py-4 text-sm text-gray-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Real Estate</span>
          <span className="mx-2">›</span>{" "}
        </div>
      </motion.div>

      <motion.section
        className="w-full py-16 bg-white text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-700"
            variants={fadeUp}
          >
            Explore U Technology Real Estate Software Solutions
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left Feature List */}
            <motion.div
              className="flex flex-col gap-10 w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {leftFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between"
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-sm font-medium">{item.label}</p>
                  <span className="text-cyan-600">{item.icon}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Center Image */}
            <motion.div
              className="w-full lg:w-2/4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={Solution}
                alt="Real Estate Banner"
                className="w-full mx-auto max-w-lg"
              />
            </motion.div>

            {/* Right Feature List */}
            <motion.div
              className="flex flex-col gap-10 w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {rightFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between"
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-cyan-600">{item.icon}</span>
                  <p className="text-sm font-medium text-right">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="w-full bg-gray-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp}>
            <TypographyH1 className="text-center">
              We Have Experienced Real Estate Software Developers
            </TypographyH1>
          </motion.div>

          <motion.p
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
            variants={fadeUp}
          >
            We augment your current IT teams to revamp your real estate software
            solutions using our specialized, multi-purpose technologies and
            industry-specific experience.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Image */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={Laptop}
                alt="Real Estate Software"
                className="w-full max-w-lg mx-auto"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full lg:w-1/2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {serviceItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start"
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Software Logos */}
          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-gray-700 mb-4">
              We integrate with leading accounting software solution, including:
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {[QuickBook, Freshbooks, Saga, OracleNetsuite, Oddo, Books].map(
                (logo, idx) => (
                  <motion.img
                    key={idx}
                    src={logo}
                    alt="Logo"
                    className="h-8"
                    variants={fadeUp}
                    transition={{ delay: idx * 0.1 }}
                  />
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <RealEstateFeatures />
      {/* CTA button above section */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="px-6 py-2 border border-orange-500 text-black font-medium rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
          Get Real Estate Solutions integrated with AI
        </button>
      </motion.div>

      {/* Main section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Mobile}
            alt="Phone Mockup"
            className="w-full max-w-sm h-180 mx-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="text-3xl font-bold mb-2" variants={fadeUp}>
            End-to-End Real Estate Software Development
          </motion.h2>

          <motion.p className="text-gray-700 mb-8" variants={fadeUp}>
            We develop advanced real estate web and mobile applications,
            delivering custom-tailored solutions for real estate enterprises.
          </motion.p>

          <motion.h3 className="text-2xl font-bold mb-6" variants={fadeUp}>
            Real Estate App Development
          </motion.h3>

          <motion.p className="text-gray-700 mb-8" variants={fadeUp}>
            We develop responsive web and{" "}
            <span className="text-cyan-600 underline">mobile applications</span>{" "}
            to help streamline real estate business operations, automate routine
            tasks, and ensure easy access to market information.
          </motion.p>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 mb-8"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              {feature.icon}
              <div>
                <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Integration Logos */}
          <motion.div
            className="flex items-center gap-6 mt-8"
            variants={fadeUp}
          >
            {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, idx) => (
              <motion.img
                key={idx}
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="h-10"
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
              />
            ))}
          </motion.div>

          {/* CTA Button below logos */}
          <motion.div className="mt-8" variants={fadeUp}>
            <button className="px-14 py-3 border border-orange-500 text-black font-medium rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              Get Your Custom App
            </button>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* === Real Estate Property Management Section === */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Right Text & Features */}
        <motion.div className="flex-1">
          <motion.h2 className="text-3xl font-bold mb-2" variants={fadeUp}>
            End-to-End Real Estate Software Development
          </motion.h2>
          <motion.p className="text-gray-700 mb-8" variants={fadeUp}>
            We develop advanced real estate web and mobile applications,
            delivering custom-tailored solutions for real estate enterprises.
          </motion.p>

          <motion.h3 className="text-2xl font-bold mb-6" variants={fadeUp}>
            Real Estate App Development
          </motion.h3>
          <motion.p className="text-gray-700 mb-8" variants={fadeUp}>
            We develop responsive web and{" "}
            <span className="text-cyan-600 underline">mobile applications</span>{" "}
            to help streamline real estate business operations, automate routine
            tasks, and ensure easy access to market information.
          </motion.p>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 mb-8"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              {feature.icon}
              <div>
                <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Logos */}
          <motion.div
            className="flex items-center gap-6 mt-8"
            variants={fadeUp}
          >
            {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, idx) => (
              <motion.img
                key={idx}
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="h-10"
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
              />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div className="mt-8" variants={fadeUp}>
            <button className="px-14 py-3 border border-orange-500 text-black font-medium rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              Streamline Property Management
            </button>
          </motion.div>
        </motion.div>

        {/* Left Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Tour}
            alt="Phone Mockup"
            className="w-full max-w-sm h-130 mx-auto rounded-xl"
          />
        </motion.div>
      </motion.section>

      {/* === Banking Software Support Section === */}
      <motion.section
        className="py-16 px-6 md:px-12 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          variants={fadeUp}
        >
          Banking Software Support
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          variants={fadeUp}
        >
          Banking and fiscal services have seen a significant transformation
          because of the use of new software solutions and apps. U Technology
          banking software support enhances efficiency, reliability, and
          regulatory compliance while improving the customer experience.
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuress.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-6"
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-16 h-16 flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-8 flex justify-center" variants={fadeUp}>
          <button className="px-14 py-3 border border-orange-500 text-black font-medium rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
            GET FINANCE SOFTWARE SUPPORT
          </button>
        </motion.div>
      </motion.section>
      <motion.section
        className="px-6 py-16 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          variants={fadeUp}
        >
          Frequently Asked Questions about{" "}
          <span className="text-cyan-700">Construction Software</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeUp}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b-2 border-cyan-700 pb-4"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
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
                <motion.p
                  className="mt-2 text-gray-700 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default RealEstate;
