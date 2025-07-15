import React, { useState } from "react";

import { motion } from "framer-motion";
import BankingHeader from "/assets/Industries/Banking/BankingHeader.webp"
import FeatureImage from "/assets/Industries/Banking/contentBanking.png";
import MobileAnalytics from "/assets/Industries/Banking/BankingPhone.png";
import softwareSolutions from "/assets/Industries/Banking/softwareSolutions.png";
import Phone from "/assets/Industries/Banking/Phone.png";
import ATMImage from "/assets/Industries/Banking/customatm.png";
import customcore from "/assets/Industries/Banking/customcore.png";
import EMVImage from "/assets/Industries/Banking/mobilebrowser.png";
import payment from "/assets/Industries/Banking/payment.png";

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

  //   FaNetworkWired,
  // FaUniversity,
  FaLaptopCode,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaBell,
  FaCheckDouble,
  FaWallet,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { MdOutlineLocalAtm } from "react-icons/md";

const BankingPage = () => {
  const leftFeatures = [
    {
      label: "ACH & Check 21",
      icon: <FaMoneyCheckAlt size={36} className="text-cyan-600" />,
    },
    {
      label: "ATM",
      icon: <MdOutlineLocalAtm size={36} className="text-cyan-600" />,
    },
    {
      label: "Core Banking Systems",
      icon: <FaUniversity size={36} className="text-cyan-600" />,
    },
  ];

  const rightFeatures = [
    {
      label: "EMV",
      icon: <FaCreditCard size={36} className="text-cyan-600" />,
    },
    {
      label: "Mobile Banking App",
      icon: <FaMobileAlt size={36} className="text-cyan-600" />,
    },
    {
      label: "Loan Servicing & Origination",
      icon: <FaHandHoldingUsd size={36} className="text-cyan-600" />,
    },
  ];

  const AIFeatures = [
    {
      title: "Banking Fraud Detection",
      description:
        "We provide advanced fraud analytics in banking, which can help detect fraud and safeguard data from unusual conduct in real time.",
      icon: <FaSearchDollar size={36} className="text-cyan-600" />,
    },
    {
      title: "Predictive Analytics in the Banking Industry",
      description:
        "We deliver cutting-edge predictive analytics for banking and financial services, empowering smarter decisions.",
      icon: <FaChartLine size={36} className="text-cyan-600" />,
    },
    {
      title: "Banking and Risk Management",
      description:
        "We provide customized banking risk management software solutions, supporting financial organizations in improving performance.",
      icon: <FaBalanceScale size={36} className="text-cyan-600" />,
    },
    {
      title: "Wealth Management Banking Services",
      description:
        "We deliver cutting-edge banking and wealth management solutions, streamlining operations across retail and wealth management sectors.",
      icon: <FaUniversity size={36} className="text-cyan-600" />,
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

  const faqs = [
    {
      question: "What is construction software development?",
      answer:
        "Construction software development provides tools that would elevate construction company management by optimizing processes such as project management, budgeting, and the efficiency of the company’s daily tasks.",
    },
    {
      question:
        "What are the benefits of construction software development services for a company?",
      answer:
        "Better output, reduced human error, enhanced collaboration, and a better comprehension of real-time projects are all advantages of construction software development services. These help your business grow smartly by saving money, time, and expenses.",
    },
    {
      question:
        "Can you migrate our existing construction software to a cloud-based solution?",
      answer:
        "Definitely! Chetu provides cloud migration services for your current construction software to a safe and scalable cloud environment with minimal disruption and optimal performance.",
    },
    {
      question:
        "Do you offer support and maintenance after construction software development?",
      answer:
        "Yes! Your software will run smoothly, remain up to date, and secure, as experts at Chetu provide ongoing support and maintenance so you can build with confidence.",
    },
    {
      question: "Can AI automate repetitive tasks in construction software?",
      answer:
        "Of course! AI lets your team focus on more crucial work and strategic decision-making by automating repetitive tasks taken over like reporting, scheduling, and data entry.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // ✅ Only ONE index

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicking same
    } else {
      setOpenIndex(index); // Open new one
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center text-white py-36"
        style={{ backgroundImage: `url(${BankingHeader})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto text-center px-4">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
            BANKING SOFTWARE DEVELOPMENT
          </motion.h1>
          <motion.p className="text-lg md:text-xl mb-8">
            Transforming banking with AI, powering fraud detection, wealth
            management, KYC automation, and predictive analytics.
          </motion.p>
          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            HIRE BANKING SOFTWARE DEVELOPERS
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
            Custom Banking Software Development Company
          </motion.h2>
          <p className="text-sm text-primary mb-10 max-w-2xl mx-auto">
            Chetu’s team of expert developers cater to the technical needs of
            the ever-evolving banking sector by offering high quality software
            solutions that transform your core environment to streamline banking
            & financial workflows.
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
                src={FeatureImage}
                alt="Banking dashboard UI"
                className="rounded-xl shadow-lg mx-auto w-[90%] md:w-[100%]"
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

      {/* AI Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-8">
            Transforming the Banking Industry with AI-Powered Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Following best practices, we harness the power of
            <span className="text-cyan-600 font-medium">
              {" "}
              Artificial Intelligence (AI)
            </span>
            in our financial software development process to build
            transformative solutions for the Banking industry. Our AI-driven
            software solution experts develop cutting-edge capabilities such as
            advanced fraud detection, AI-enhanced credit assessment, and
            AI-enhanced financial forecasting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-12">
              {AIFeatures.slice(0, 2).map((item, index) => (
                <motion.div
                  key={index}
                  className="text-left"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="text-lg font-bold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <img
                src={MobileAnalytics}
                alt="AI-powered banking analytics"
                className="mx-auto w-[45%]"
              />
            </motion.div>

            <div className="flex flex-col gap-12">
              {AIFeatures.slice(2).map((item, index) => (
                <motion.div
                  key={index}
                  className="text-left"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index + 2}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="text-lg font-bold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.a
            href="#"
            className="mt-16 inline-block border-2 border-orange-500 text-black font-semibold text-lg px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET AI-POWERED BANKING SOFTWARE SOLUTIONS
          </motion.a>
        </div>
      </section>

      {/* Loan Servicing Section */}
      <section>
        <div className="px-8 py-16 bg-white text-center">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Custom Loan Servicing & Origination Solutions
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu’s custom loan servicing and origination personalized solutions
            handle underwriting, origination, disbursement, servicing,
            amortization, processing, and so much more for financial services
            and institutions.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <motion.div
              className="flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={2}
            >
              <img
                src={softwareSolutions}
                alt="Loan Software"
                className="w-[500px] rounded-lg shadow-lg"
              />
            </motion.div>

            <div className="text-left max-w-lg space-y-10">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <div
                    className={`text-cyan-500 text-4xl ${i === 0
                      ? "animate-bounce"
                      : i === 1
                        ? "animate-pulse"
                        : "animate-spin"
                      }`}
                  >
                    {i === 0 ? (
                      <FaLaptop />
                    ) : i === 1 ? (
                      <FaFileAlt />
                    ) : (
                      <FaCheckCircle />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {i === 0
                        ? "Loan Servicing & Management Systems"
                        : i === 1
                          ? "Loan Origination Systems"
                          : "Loan Settlement Software Platforms"}
                    </h2>
                    <p className="text-gray-600">
                      {i === 0
                        ? "Our product development teams create custom loan servicing systems and Loan Management Systems (LMS) for banks, credit unions, and financial institutions."
                        : i === 1
                          ? "We program Loan Origination Systems (LOS), with modules for underwriting, credit pull, decision support, and more."
                          : "Chetu's programmers create payment and settlement platforms supporting ACH and EFT for all payment types."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            className="mt-12 px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={6}
            whileHover={{ scale: 1.05 }}
          >
            GET LOAN MANAGEMENT SOFTWARE SOLUTIONS
          </motion.button>
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
            Custom Mobile Banking Software Solutions
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600">
            Chetu makes it possible for mobile banking software providers to
            customize features, such as electronic bill payments, remote check
            deposits, P2P payments, fund transfers between accounts, text
            messaging, and statement downloading & printing.
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
                      ? "Custom Mobile Banking App Development"
                      : i === 1
                        ? "Core Banking System Integrations"
                        : "Check Remote Deposit Capture"}
                  </h2>
                  <p className="text-gray-600">
                    {i === 0
                      ? "We develop native mobile apps for banking services on iOS & Android, utilizing cross-platform development tools such as Xamarin & Apache Cordova to feature easily navigable and speedy UI/UX that’s responsive on smartphones, tablets, and wearable devices."
                      : i === 1
                        ? "We integrate mobile banking apps with a financial institution’s existing back-end CORE banking system, using RESTful APIs, which allow seamless cross-channel interactions and the ability to transfer funds between various accounts in real-time."
                        : "Our developers implement Remote Deposit Capture (RDC) modules integrated with your device’s camera function to allow for check truncation and conversion of checks into ACH transactions in compliance with Check 21 mandates."}
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
              src={Phone}
              alt="Mobile Banking App"
              className="w-[300px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
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
            GET MOBILE BANKING SOFTWARE SOLUTIONS
          </button>
        </motion.div>
      </section>
      <section>
        <div className="px-8 py-16 bg-white text-center">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Custom Online Banking Software Systems
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu’s financial software development services create robust,
            straightforward customizations to online banking systems for
            brick-and-mortar and FinTech companies of any size, built with
            incorporated branding for enhanced consistency & visibility.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <motion.div
              className="flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={2}
            >
              <img
                src={softwareSolutions}
                alt="Loan Software"
                className="w-[500px] rounded-lg shadow-lg"
              />
            </motion.div>

            <div className="text-left max-w-lg space-y-10">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <div
                    className={`text-cyan-500 text-4xl ${i === 0
                      ? "animate-bounce"
                      : i === 1
                        ? "animate-pulse"
                        : "animate-spin"
                      }`}
                  >
                    {i === 0 ? (
                      <FaLaptop />
                    ) : i === 1 ? (
                      <FaFileAlt />
                    ) : (
                      <FaCheckCircle />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {i === 0
                        ? "Custom Online Banking Platforms"
                        : i === 1
                          ? "Custom Online Banking Apps"
                          : "Custom Online Banking Security"}
                    </h2>
                    <p className="text-gray-600">
                      {i === 0
                        ? "Our advanced platforms are highly secure, allowing encrypted bi-lateral transactions and providing innovative solutions for crowdfunding, multi-currency e-wallets, cryptocurrency trading, and direct money transfers via social platforms."
                        : i === 1
                          ? "Our custom mobile app development services make it easy for your customers to bank on the go with hybrid mobile banking apps that utilize tools like Apache Cordova (formerly PhoneGap) to create uniform user experiences across all digital channels, including web, iOS, and Android."
                          : "Chetu’s banking solutions experts implement risk management tools & network security features, such as TCI/IP, SSL/TLS, Multi-Factor Authentication (MFA), One-Time Passwords (OTP), Single Sign-On (SSO), and SSH File Transfer Protocol (SFTP)."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            className="mt-12 px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={6}
            whileHover={{ scale: 1.05 }}
          >
            GET Online Banking SOFTWARE SOLUTIONS
          </motion.button>
        </div>
      </section>
      <section className="px-8 py-12 bg-cyan-50  m-24 mb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row  items-center  justify-between gap-12">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 border-l-2 border-black pl-3">
              CHETU ENSURES 100% PCI-DSS COMPLIANCE
            </h2>
            <p className="text-gray-700">
              Chetu’s banking software developers ensure your software complies
              with the strict regulatory standards on anti-money laundering and
              consumer protection standards. This includes the Payment Card
              Industry Security Standards Council (PCI SSC), Payment Card
              Industry Data Security Standard (PCI-DSS), and Payment Application
              Data Security Standard (PA-DSS). Also, Payment
              Application-Qualified Security Accessors (PA-QSA), SOX,
              Dodd-Frank, Check 21, and the Securities Act of 1933.
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
                PCI-DSS
              </div>
            </div>

            <div className="absolute -left-20 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                PA-DSS
              </div>
            </div>

            <div className="absolute -right-20 top-5 hidden md:block">
              <div className="mb-6 px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                PCI SSC
              </div>
            </div>

            <div className="absolute -right-20 top-24 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                SOX
              </div>
            </div>

            <div className="absolute -right-20 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                PA-QSA
              </div>
            </div>
          </div>
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
            Custom ATM Software Development
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu's banking software developers are at the forefront of the
            industry, configuring and customizing existing ATM software, as well
            as providing end-to-end ATM software development services for
            national and international financial institutions.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left Column */}
            <div className="flex flex-col gap-12 max-w-md text-left">
              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={2}
              >
                <FaDesktop className="text-cyan-600 text-9xl " />
                <div>
                  <h3 className="text-lg font-bold">
                    ATM Hardware Integrations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our developers program multi-vendor software with
                    integrations to various hardware platforms, including credit
                    and debit card readers (MagTek, ID TECH, VeriFone, and
                    Ingenico), card dispensers, and bill dispensers (LG,
                    Fujitsu).
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={3}
              >
                <FaCog className="text-cyan-600 text-9xl" />
                <div>
                  <h3 className="text-lg font-bold">
                    ATM Management Solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We revamp CORE banking systems with modern interface
                    solutions across an extensive network of ATMs, self-service
                    kiosks, and mobile devices, designed to enhance the user
                    experience by providing personalized options.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Image */}
            <motion.div
              className="flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={4}
            >
              <img
                src={ATMImage}
                alt="ATM"
                className="w-[300px] md:w-[400px] rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 max-w-md text-left">
              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={5}
              >
                <FaEye className="text-cyan-600 text-9xl" />
                <div>
                  <h3 className="text-lg font-bold">ATM Monitoring Systems</h3>
                  <p className="text-gray-600 text-sm">
                    Our developers implement enterprise-wide ATM management
                    software for remote diagnostics and monitoring, including
                    back-end and admin portal programming, as well as automatic
                    system updates within a self-service network.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={6}
              >
                {/* <FaNetworkWired className="text-cyan-600 text-5xl" /> */}
                <FaNetworkWired className="text-cyan-600 inline-block text-9xl" />

                <div>
                  <h3 className="text-lg font-bold">ATM Migration Solutions</h3>
                  <p className="text-gray-600 text-sm">
                    Our skilled data migration experts custom-code software for
                    EMV migrations, as well as integrations for banking CRMs
                    with Business Intelligence (BI) software, multi-fraud
                    protection features, and improved overall transaction
                    capabilities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Button */}
          <motion.button
            className="mt-12 px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={7}
            whileHover={{ scale: 1.05 }}
          >
            GET ATM SOFTWARE SOLUTIONS
          </motion.button>
        </div>
      </section>
      <section>
        <div className="px-8 py-16 bg-gray-100 text-center">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Custom CORE Banking Solutions
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu’s developers provide Centralized Online Real-Time Exchange
            (CORE) banking software services that effortlessly support all of a
            bank’s most common transactions, including making and servicing
            loans, opening new accounts, and processing cash deposits &
            withdrawals.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <div className="text-left max-w-lg space-y-10">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <div
                    className={`text-cyan-500 text-4xl ${i === 0
                      ? "animate-bounce"
                      : i === 1
                        ? "animate-pulse"
                        : "animate-spin"
                      }`}
                  >
                    {i === 0 ? (
                      <FaLaptop />
                    ) : i === 1 ? (
                      <FaFileAlt />
                    ) : (
                      <FaCheckCircle />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {i === 0
                        ? "CORE Banking Software Solutions"
                        : i === 1
                          ? "CORE Security & Compliance"
                          : "CORE API Integrations"}
                    </h2>
                    <p className="text-gray-600">
                      {i === 0
                        ? "Our programmers fully automate all banking system operations with customizable CORE system platforms that utilize Java-based architectures and Service-Oriented Architectures (SOA) compatible with existing software and external networks."
                        : i === 1
                          ? "We develop secure, modular CORE banking systems to protect customers, meet government & industry standards, aid in security auditing, and avoid data breaches with recovery capabilities compliant with Anti-Money Laundering (AML) regulations."
                          : "We develop secure API components that integrate with online, mobile, SMS, ATM, and other banking distribution channels, as well as integrating user-friendly interfaces with third-party APIs to adopt real-time processing and remote capture capabilities."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={2}
            >
              <img
                src={customcore}
                alt="Loan Software"
                className="w-[500px] rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <motion.button
            className="mt-12 px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={6}
            whileHover={{ scale: 1.05 }}
          >
            GET Online Banking SOFTWARE SOLUTIONS
          </motion.button>
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
            Custom EMV Software Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu provides a comprehensive, broad range of EMV software
            solutions from custom-coded programming to advanced feature
            implementation, enabling institutions to deliver secure data in
            sensitive environments.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left Column */}
            <div className="flex flex-col gap-12 max-w-md text-left">
              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={2}
              >
                <FaNetworkWired className="text-cyan-600 inline-block text-9xl" />
                <div>
                  <h3 className="text-lg font-bold">
                    EMV Software Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Chetu offers professional end-to-end EMV migration services
                    including EMV compliant software programming, testing, and
                    validation for full and semi-integrated solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={3}
              >
                <FaLaptopCode className="text-cyan-600 inline-block text-9xl" />
                <div>
                  <h3 className="text-lg font-bold">
                    EMV Programming Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We build EMV Levels 1, 2, and 3, EMV Level 2 Kernels, and
                    PCI PTS 3.x/4.x certified card reader solutions including
                    Verifone VX/MX/UX series, Ingenico iPP/iCT/ISC/iWL series,
                    and more.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Image */}
            <motion.div
              className="flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={4}
            >
              <img
                src={EMVImage}
                alt="EMV Devices"
                className="w-[300px] md:w-[500px] rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 max-w-md text-left">
              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={5}
              >
                <FaUniversity className="text-cyan-600 inline-block text-9xl" />
                <div>
                  <h3 className="text-lg font-bold">EMV Security Solutions</h3>
                  <p className="text-gray-600 text-sm">
                    We develop custom embedded software with tokenization data
                    security protocols, including End-to-End (E2E) &
                    Point-to-Point (P2P) encryption, and 3-D Secure (3DS)
                    authentication.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={6}
              >
                <FaLaptopCode className="text-cyan-600 inline-block text-9xl" />
                <div>
                  <h3 className="text-lg font-bold">
                    EMV Testing & Certification
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We test and certify with MasterCard Terminal Integration
                    Process (M-TIP), Terminal Quality Management (TQM), Visa
                    Acquirer Device Validation Toolkit (ADVT), and much more.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Button */}
          <motion.button
            className="mt-12 px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={7}
            whileHover={{ scale: 1.05 }}
          >
            GET EMV SOFTWARE SOLUTIONS
          </motion.button>
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
            Check 21 Software & ACH Processing Solutions
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600">
            At Chetu, we customize your ACH payment processing and Check 21
            capabilities to seamlessly integrate e-check processing
            functionality and credit card processing with secure verification
            systems and enhanced UX designs.
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
              src={payment}
              alt="Mobile Banking App"
              className="w-[240px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
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
                      ? "ACH eCheck Solutions"
                      : i === 1
                        ? "Check 21 & Electronic Check Processing Services"
                        : "ACH Payment System Integration"}
                  </h2>
                  <p className="text-gray-600">
                    {i === 0
                      ? "We build custom programming platforms for processing ACH payments with modules to automate ACH file creation, check verification and transmissions to various financial institutions, and create Remotely Created Check (RCC) images for deposits."
                      : i === 1
                        ? "Our developers customize Check 21 truncation solutions to integrate with MICR check scanner hardware, such as RDM, Panini, Canon, Epson, and Burroughs, and develop custom check imaging platforms for e-payment processing integrations."
                        : "We offer secure ACH database development integrated with CRM platforms to store accounts, routing numbers, check imaging remittance, automated clearing, and all other essential customer information via the cloud and/or mobile devices."}
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
            GET CHECK 21 & ACH PROCESSING SOLUTIONS
          </button>
        </motion.div>
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
            Banking Software Support
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Banking and fiscal services have seen a significant transformation
            because of the use of new software solutions and apps. Chetu’s
            banking software support enhances efficiency, reliability, and
            regulatory compliance while improving the customer experience.
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
                  Currency Exchange Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Currency Exchange Support enables real-time currency
                  conversion. Chetu’s engineers can enable your software or app
                  to integrate and maintain data exchanges with international
                  banking systems while monitoring and updating exchange rates.
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
                  Check Processing Assistance
                </h3>
                <p className="text-gray-600 text-sm">
                  Chetu’s software developers can include check processing
                  assistance in your software to help users automate the
                  verification, capture, and clearance of checks with check
                  processing, OCR, and digital imaging.
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
                  Automated Alerts Configuration
                </h3>
                <p className="text-gray-600 text-sm">
                  Our engineers can program automated alert configurations for
                  your banking software to aid users in receiving fully
                  automated alerts for potential fraud, fiscal updates, or
                  regular account activities.
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
                  Virtual Wallet Support
                </h3>
                <p className="text-gray-600 text-sm">
                  With our virtual wallet support, our coders enable virtual
                  wallets to function seamlessly in your banking software.
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
                  Electronic Statement Issues
                </h3>
                <p className="text-gray-600 text-sm">
                  Our software experts write code that enables your software
                  users to avoid electronic statement issues. They can be
                  assured of secure access to track balances, transactions,
                  deposits, withdrawals, and account health with online banking.
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
                  Investment Portfolio Troubleshooting
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team designs software algorithms that help with investment
                  portfolio troubleshooting so that users can use tools that
                  help both customers and financial advisors track and monitor
                  their investment accounts and portfolios.
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
                  Tax Reporting Guidance
                </h3>
                <p className="text-gray-600 text-sm">
                  Our engineers help with tax reporting guidance for your
                  banking software. This includes generating reports for
                  interest, income, category, or other tax-related information.
                  Automation keeps your software in compliance with complex
                  financial reporting and tax requirements.
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
                  SWIFT Code Configuration
                </h3>
                <p className="text-gray-600 text-sm">
                  Our software engineers help support and configure SWIFT codes
                  (BIC) inside your software for secure international wire
                  transfers and cross-border payments, ensuring strict
                  compliance with global financial standards.
                </p>
              </div>
              <FaUniversity className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>

            {/* Online Account Opening Support */}
            <motion.div
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={10}
            >
              <FaMobileAlt className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Online Account Opening Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Chetu’s online account opening support guides your software
                  users through a streamlined, secure process to open new
                  accounts, including compliance checks, ID verification, and
                  document submission.
                </p>
              </div>
            </motion.div>

            {/* Automatic Bill Pay Assistance */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={11}
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Automatic Bill Pay Assistance
                </h3>
                <p className="text-gray-600 text-sm">
                  Our software team supports automatic bill pay assistance for
                  recurring payments, including scheduling, processing, and
                  confirming payments for utilities, subscriptions, and verified
                  vendors.
                </p>
              </div>
              <FaHandHoldingUsd className="text-cyan-600 w-14 h-14 flex-shrink-0" />
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
      </section>
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions about{" "}
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

export default BankingPage;
