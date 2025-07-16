import React from "react";
import RealEstatee from "../../../../../public/assets/Industries/RealEstate/real-banner.jpg";
import Laptop from "../../../../../public/assets/Industries/RealEstate/laptop.png";
import Solution from "../../../../../public/assets/Industries/RealEstate/solutions.png";
import Freshbooks from "../../../../../public/assets/Industries/RealEstate/Real-EstateLogo/freshbooks.png";
import OracleNetsuite from "../../../../../public/assets/Industries/RealEstate/Real-EstateLogo/oracle-netsuite.png";
import QuickBook from "../../../../../public/assets/Industries/RealEstate/Real-EstateLogo/quickbooks.png";
import Saga from "../../../../../public/assets/Industries/RealEstate/Real-EstateLogo/sage.png";
import Books from "../../../../../public/assets/Industries/RealEstate/Real-EstateLogo/books.png";
import Oddo from "../../../../../public/assets/Industries/RealEstate/Real-EstateLogo/oddo.png";
import { motion } from "framer-motion";
import { MdOutlineLocalAtm } from "react-icons/md";

import {
  FaUniversity,
  FaCreditCard,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaChartLine,
  FaBalanceScale,

  // FaFileAlt,
  FaCheckCircle,
  FaDesktop,
  FaEye,
  FaCog,
  FaFileInvoiceDollar,
  FaBell,
  FaCheckDouble,
  FaWallet,
  FaChevronDown,
  FaChevronUp,
  FaComments, // ✅ fixed error by importing
  FaCloudUploadAlt,
  FaUserPlus,
  FaUserCheck,
  FaUsers,
  FaChalkboardTeacher,
  FaClipboardList,
  FaHandsHelping,
  FaCheck,
  FaUserFriends,
  FaFileAlt,
  FaLaptop,
  FaSearchDollar,
  FaBuilding,
  FaHome,
  FaMapMarkedAlt,
  FaChartBar,
  FaIdCard,
  FaLaptopCode,
  FaDollarSign,
  FaHandshake,
  FaNetworkWired,
} from "react-icons/fa";

const RealEstate = () => {
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
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeUp}
          >
            REAL ESTATE SOFTWARE DEVELOPMENT
          </motion.h1>

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
      <div className="bg-white px-4 py-4 text-sm text-gray-500">
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Real Estate</span>
          <span className="mx-2">›</span>{" "}
          {/* <span className="text-cyan-600 font-medium">
            Digital Transformation
          </span> */}
        </div>
      </div>
      <section className="w-full py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-700">
            Explore Chetu’s Real Estate Software Solutions
          </h2>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left Feature List */}
            <div className="flex flex-col gap-10 w-full lg:w-1/4">
              {leftFeatures.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-sm font-medium">{item.label}</p>
                  <span className="text-cyan-600">{item.icon}</span>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="w-full lg:w-2/4">
              <motion.img
                src={Solution}
                alt="Real Estate Banner"
                className="w-full mx-auto max-w-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Right Feature List */}
            <div className="flex flex-col gap-10 w-full lg:w-1/4">
              {rightFeatures.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-cyan-600">{item.icon}</span>
                  <p className="text-sm font-medium text-right">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            We Have Experienced Real Estate Software Developers
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We augment your current IT teams to revamp your real estate software
            solutions using our specialized, multi-purpose technologies and
            industry-specific experience.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={Laptop}
                alt="Real Estate Software"
                className="w-full max-w-lg mx-auto"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              {serviceItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Logos */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              We integrate with leading accounting software solution, including:
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <img src={QuickBook} alt="QuickBooks" className="h-8" />
              <img src={Freshbooks} alt="FreshBooks" className="h-8" />
              <img src={Saga} alt="Sage" className="h-8" />
              <img src={OracleNetsuite} alt="Oracle" className="h-8" />
              <img src={Oddo} alt="Odoo" className="h-8" />
              <img src={Books} alt="Zoho Books" className="h-8" />
            </div>
          </div>
          
        </div>
        
      </section>
    </div>
  );
};

export default RealEstate;
