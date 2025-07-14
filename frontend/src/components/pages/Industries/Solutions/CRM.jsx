import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalAtm } from "react-icons/md";
import Employment from "../../../../../public/assets/Solutions/CRM/Employment.webp";

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
  FaComments, // ✅ fixed error by importing
} from "react-icons/fa";

const CRM = () => {
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

  return (
    <div>
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${Employment})` }}
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
            CRM DEVELOPMENT SERVICES
          </motion.h1>
          <motion.p className="text-lg md:text-xl mb-8" variants={fadeUp}>
            Unleashing the Power of AI for Custom CRM Solutions
          </motion.p>
          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
          >
            HIRE CRM DEVELOPERS
          </motion.a>
        </div>
      </motion.section>
      {/* ✅ BREADCRUMB */}
      <div className="bg-white px-4 py-4 text-sm text-gray-500">
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Solutions</span>
          <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">CRM</span>
        </div>
      </div>
      <section className="px-8 py-16  text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Custom CRM Development Services
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Chetu develops custom-tailored CRM systems, implementing application
            development software features & functionalities that drive
            businesses forward.
          </motion.p>

          {/* ✅ SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* ✅ CARD 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}
            >
              <FaLaptopCode size={40} className="mx-auto text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Custom Web Application Development Services
              </h3>
              <p className="text-gray-700">
                Our team has experience developing a wide range of web
                applications, from simple web apps to complex enterprise
                solutions. We can customize your existing applications for ERP,
                E-Commerce, Interactive Gaming, Online Training & Courses, CRM,
                and so much more.
              </p>
            </motion.div>

            {/* ✅ CARD 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeUp}
            >
              <FaDesktop size={40} className="mx-auto text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Content Management Systems
              </h3>
              <p className="text-gray-700">
                We help you integrate CMS capabilities or develop custom CMS
                systems. Our CMS solutions are user-friendly, reliable, and
                flexible—allowing you to update content without rewriting code.
              </p>
            </motion.div>

            {/* ✅ CARD 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              variants={fadeUp}
            >
              <FaCog size={40} className="mx-auto text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                No Cookie-Cutter Solutions
              </h3>
              <p className="text-gray-700">
                Our expert development teams build, integrate, and customize
                using the right tools and frameworks to match your business
                goals—never one-size-fits-all.
              </p>
            </motion.div>

            {/* ✅ CARD 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
              variants={fadeUp}
            >
              <FaLaptopCode size={40} className="mx-auto text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Diverse Coding Experience
              </h3>
              <p className="text-gray-700">
                From database design to full-stack web development, our team has
                experience across platforms to build efficient and scalable
                applications.
              </p>
            </motion.div>
          </div>

          {/* ✅ CTA */}
          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={5}
            variants={fadeUp}
          >
            <a
              href="#"
              className="inline-block border-2 border-cyan-500 text-cyan-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              HIRE WEB DEVELOPER
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CRM;
