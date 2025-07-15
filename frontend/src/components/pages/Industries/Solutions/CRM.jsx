import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalAtm } from "react-icons/md";
import Employment from "/assets/Solutions/CRM/Employment.webp";
import Marketing from "/assets/Solutions/CRM/marketing.png";
import FreshBooks from "/assets/Solutions/CRM/Finance-Logos/freshbooks.png";
import OracleNetsuite from "/assets/Solutions/CRM/Finance-Logos/oracle-netsuite.png";
import QuickBooks from "/assets/Solutions/CRM/Finance-Logos/quickbooks.png";
import Saga from "/assets/Solutions/CRM/Finance-Logos/sage.png";
import Integrations from "/assets/Solutions/CRM/integrations.png";

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
  FaQuoteLeft,
  FaQuoteRight,
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
  const testimonials = [
    {
      quote: `We wanted to take the time to say how pleased we are with the work that has been done so far on our CRM project by Pankaj and his teams at Chetu. We are incredibly impressed with the level of organization, communication, speed, skill and understanding that this company has shown in regards to our requests and needs for the CRM. We are looking forward to moving into the next phase of the project and have full confidence that Pankaj and his teams will continue to deliver.`,
      author: "Director of Engineering, Environmental Management",
    },
    {
      quote: `We have been working with Chetu for at least four years now. They have been an excellent supplement to our IT team. We have been able to give them big and small projects that we simply just do not have the time to tackle. Working with Chetu has given us the chance to focus more on our customers. They have a great team leader in Ganesh and all the different departments are very helpful. Ganesh is able to help us get our ideas across to the team with ease. We have really been able to grow our business since we started working with Chetu.`,
      author: "Vice President of IT, Banking Implementation",
    },
  ];

  const faqs = [
    {
      question: "What are web development services?",
      answer:
        "“Web development services” are a series of processes and offerings that developers provide to cover the needs of a business looking to create a web-based application or website. These offerings tend to encompass the building and maintenance of websites for an engaging online experience.",
    },
    {
      question: "What do web development services include?",
      answer:
        "Primarily, website development services include front-end and back-end development. More specifically, some of the services include database development, hosting setup, and security implementation. All of which aim to deliver an optimized, scalable, user-friendly website.",
    },
    {
      question:
        "What kind of Support do You Provide after a Website is Launched?",
      answer:
        "Chetu provides complete post-launch services and support, including maintenance, security updates, new implementations, and technical assistance. Our team operates on a 24/7 basis to minimize any downtime, keeping your website and data secure.",
    },
    {
      question: "What is a progressive web app??",
      answer:
        "Progressive web apps (PWA) provides a native app experience from your browser, circumnavigating the need for advanced hardware. PWA Developers make progressive web app solutions to deliver perks like offline capabilities, faster load times, push notifications, and of course, better user engagement.",
    },
    {
      question:
        "How long does a web development project take to complete from scratch?",
      answer:
        "The amount of time it takes to complete a web development project from its inception is dependent on the complexity of its goals. For a web development company, a simple website may take a few weeks, while a more robust project could take months to complete.",
    },
    {
      question:
        "Can you Develop or Migrate My Website to be a Progressive Web App (PWA)?",
      answer:
        "Chetu’s engineers are experienced in PWA (Progressive Web Apps), using our web development experience. Our solutions include creating web applications that are responsive, function offline, have push notifications, and background data syncing.",
    },
    {
      question:
        "How do you prepare before partnering with a web development company?",
      answer:
        "Prior to partnering with a web development company, it’s of utmost importance to know what your goals, target audience, and intended core functionalities will be. Other details like the desired UI Design and UX Design are equally important to ensure that your website or application corresponds with your brand and expectations.",
    },
    {
      question: "How can I optimize a web app for SEO?",
      answer:
        "You’re able to augment your web app for SEO purposes through various practices. Some SEO-friendly web development practices include load time optimization, proper meta tag utilization, and the incorporation of clean, crawlable code that improves discoverability.",
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
                Call Center Integrations
              </h3>
              <p className="text-gray-700">
                Expertly incorporate call center integrations like Twilio and
                RingCentral into your customized CRM to schedule inbound and
                outbound calls, automate routing and call recording, and reduce
                wait times, greatly elevating overall customer experience.
                Opportunity Management Enable users to view every critical
                detail in their client’s activity timeline, including what stage
                the deal is in, which products are part of the deal, and what
                moves need to be made to close the deal, and build customer
                relationships, tracking all activities as they happen in
                real-time.
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
                Opportunity Management
              </h3>
              <p className="text-gray-700">
                Enable users to view every critical detail in their client’s
                activity timeline, including what stage the deal is in, which
                products are part of the deal, and what moves need to be made to
                close the deal, and build customer relationships, tracking all
                activities as they happen in real-time.
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
              <h3 className="text-xl font-semibold mb-2">Sales Management</h3>
              <p className="text-gray-700">
                Seamlessly integrate trusted third-party applications,
                extensions, and plugins to help businesses get the most
                accurate, up-to-date sales data directly from the custom CRM
                development so that your sales team can make better decisions
                faster and more efficiently.
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
              <h3 className="text-xl font-semibold mb-2">Lead Capture</h3>
              <p className="text-gray-700">
                Gain full visibility and control of the most up-to-date client
                contact information, managing and tracking all marketing
                campaigns across various channels, thus allowing businesses to
                implement successful lead management from capture to close.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mt-20">
            {/* ✅ CARD 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}
            >
              <FaLaptopCode size={40} className="mx-auto text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold ">Email Integrations</h3>
              <p className="text-gray-700">
                Supercharge your custom CRM solutions platforms through seamless
                email integration, syncing current email channels, such as MS
                Outlook or Gmail, with the CRM to enable full visibility of
                emails, contacts, calendars, and more across both desktop and
                mobile.
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
                Workflow Management
              </h3>
              <p className="text-gray-700">
                Build a point-and-click interface with drag-and-drop features
                that allow users to automate complex sales processes, including
                auto-assigning tasks, approving deal discounts, create
                customized email alerts, filling out orders, generating
                proposals, and more.
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
                Reports & Dashboards
              </h3>
              <p className="text-gray-700">
                Design and implement modules that enable users to get a
                real-time overview of the entire business, built with a
                drag-and-drop feature to create customized reports designed to
                track lead volume, conversion rates, and all other pipeline
                data.
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
              <h3 className="text-xl font-semibold mb-2">Sales Forecasting</h3>
              <p className="text-gray-700">
                predict future sales based on current pipeline data with
                real-time viewing, allowing businesses to anticipate market
                changes and alter marketing campaigns accordingly to mitigate
                business risks and make better business decisions.
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
              HIRE CRM SOFTWARE DEVELOPERS
            </a>
          </motion.div>
        </div>
      </section>
      <section className="px-8 py-16 bg-gray-100 text-center ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            AI-Powered CRM Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            AI in Customer Relationship Management (CRM) development services
            can significantly enhance the customer experience and help
            businesses improve their sales and marketing efforts. CRM artificial
            intelligence can be integrated into businesses to optimize and
            improve their work operations.
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
                  Data Analysis
                </h3>
                <p className="text-gray-600 text-sm">
                  We can integrate AI to analyze large amounts of customer data
                  collected from social media, email interactions, website
                  behavior, and purchase history. Leveraging machine learning
                  algorithms, AI can identify patterns and trends in data to
                  make predictions about customer behavior, preferences, and
                  churn prediction, enabling businesses to make data-driven
                  decisions. Data entry automation can also help minimize the
                  time spent on repetitive tasks.
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
                  Personalization and Customer Segmentation
                </h3>
                <p className="text-gray-600 text-sm">
                  Our experts can develop AI that segments customers based on
                  their preferences, behaviors, and demographics. Understanding
                  individual customers’ needs enables AI-powered CRM systems to
                  deliver personalized recommendations, offers, and content,
                  leading to higher customer satisfaction and increased
                  engagement.
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
                  Chatbots and Virtual Assistants
                </h3>
                <p className="text-gray-600 text-sm">
                  We can implement AI capabilities to power chatbots and virtual
                  assistants. They can provide instant customer support by
                  handling routine inquiries, addressing frequently asked
                  questions, and resolving simple issues, improving customer
                  service and reducing the workload on human agents, allowing
                  them to focus on more complex tasks.
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
                  Sentiment Analysis
                </h3>
                <p className="text-gray-600 text-sm">
                  Our experts can leverage AI that analyzes customer
                  interactions, emails, chat transcripts, and social media posts
                  to gauge customer sentiment. It helps businesses understand
                  customers' feelings about their products and services,
                  enabling them to respond appropriately to any negative
                  feedback or issues.
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
              custom={2}
            >
              <FaDollarSign className="text-cyan-600 w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-cyan-700 mb-1">
                  Automated Lead Scoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Our experts can develop AI that assesses the likelihood of a
                  lead converting into a customer based on historical data and
                  customer behavior. Assigning lead qualification scores allows
                  sales teams to prioritize their efforts and focus on leads
                  most likely to convert, increasing sales efficiency. This
                  predictive lead scoring helps grow a customer base.
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
                  Automated Marketing Campaigns
                </h3>
                <p className="text-gray-600 text-sm">
                  We can implement AI that automates marketing solutions by
                  optimizing the process of content creation, email campaigns,
                  and social media scheduling. AI analyzes customer behavior to
                  determine the most appropriate time and channel to engage,
                  improving customer retention and churn prediction within the
                  effectiveness of targeted marketing campaigns.
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
                  Cross-Selling and Upselling
                </h3>
                <p className="text-gray-600 text-sm">
                  Our experts can develop AI that identifies opportunities for
                  cross-selling and upselling by analyzing customer purchase
                  history and behavior. It allows businesses to offer relevant
                  products and services to customers, increasing revenue and
                  customer loyalty.
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
                  Automated Lead Follow Up
                </h3>
                <p className="text-gray-600 text-sm">
                  We can equip our CRM solutions with lead tracking and contact
                  management abilities, leveraging AI tools to automate
                  follow-up emails, phone calls, and text messages, convert
                  leads into sales, and ultimately boost productivity.
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
            DEVELOP CRM WITH AI
          </button>
        </motion.div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            CRM Software Services
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            Chetu provides
            <a href="#" className="text-cyan-600 underline">
              custom CRM software services
            </a>{" "}
            focused on automating sales, marketing, and customer service
            business processes for healthcare, banking, real estate, and other
            industries.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Industry Specific CRM",
                  desc: "Overcome unique challenges with a customizable CRM that meets needs across finance, e-commerce, supply chain industries, and more, maintaining consistent alignment with industry regulations to streamline operations and drive success.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "CRM Mobile App Development",
                  desc: "Engineer custom mobile CRM applications, allowing users to view calendars, check & create emails, review account updates, join a video conference call, view dashboards & reports, and so much more to help businesses close more deals, and provide faster support.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Cloud Based CRM Software",
                  desc: "Develop custom cloud CRM solutions and provide hassle-free cloud based CRM system installation, enabling round-the-clock accessibility to all essential client information both in the office and remotely so that you’re always connected to your customers.",
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
            <motion.img
              src={Marketing} // Replace with your accounting image if needed
              alt="Marketing Dashboard"
              className="w-full max-w-md mx-auto rounded-lg "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center gap-8 items-center mt-8">
            <img src={QuickBooks} alt="QuickBooks" className="h-8" />
            <img src={FreshBooks} alt="FreshBooks" className="h-8" />
            <img src={Saga} alt="Sage" className="h-8" />
            <img src={OracleNetsuite} alt="Oracle NetSuite" className="h-8" />
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="mt-12 inline-block border-2 border-orange-400 text-black px-8 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            DEVELOP CUSTOM CRM SOLUTIONS
          </motion.a>
        </div>
      </section>

      <section className="px-8 py-16 bg-gray-100 text-center ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            CRM Support and Maintenance
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Our CRM maintenance services include fixing bugs, managing data,
            performing system updates, and ensuring the security, integration,
            and performance monitoring of your CRM database. Our expertise
            comprises a wide range of CRM platforms, making our support services
            unparalleled.
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
                  CRM System Support
                </h3>
                <p className="text-gray-600 text-sm">
                  At Chetu, we recognize the indispensable role that seamless
                  CRM operation plays in the success of your business. Our
                  expert team excels in troubleshooting and resolving issues,
                  leaving no room for uncertainties that could disrupt your
                  daily operations. Our dedicated team is committed to providing
                  unparalleled support 24/7, ensuring your CRM system operates
                  optimally to drive your success.
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
                  CRM Integration & Migration
                </h3>
                <p className="text-gray-600 text-sm">
                  Chetu specializes in CRM implementation, data migration,
                  system auditing and server administration, making sure your
                  CRM software stays up-to-date and seamlessly integrated with
                  your other business systems. We provide support for Zoho CRM,
                  Salesforce CRM Integration, Microsoft Dynamics CRM, and SAP
                  CRM, ensuring your CRM portal is always at its peak.
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
                  Customized CRM Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Our CRM maintenance services go beyond just fixing bugs. We
                  offer extended support to ensure long-term application
                  reliability. We make sure that your CRM system remains
                  resilient and secure by providing security updates and
                  technology upgrades that align with the latest industry
                  standards. Customized support solutions are designed to meet
                  your specific needs.
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
                  Reliable CRM Support Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Exceptional service is at the core of our CRM maintenance and
                  support services. With our advanced ticketing system and
                  transparent communication processes in place, our team
                  provides you with the highest level of service, ensuring your
                  queries and concerns are addressed promptly.
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
            HIRE CRM CONSULTING SERVICES
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
            Industry-Leading CRM Platforms
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            We have a keen understanding & knowledge of how to use
            industry-leading CRM solutions system programs, such as Salesforce,
            Microsoft Dynamics, SugarCRM, Zoho, GoHighLevel, and SAP, to boost
            productivity and meet client needs.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={Integrations} // ✅ Replace with your financial planning image
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
                  title: "Salesforce",
                  desc: "Chetu is a certified partner with Salesforce, providing custom Salesforce CRM solutions, integrations, installations, implementations, customizations, and Salesforce IT support.",
                },
                {
                  icon: <FaComments size={80} className="text-cyan-600" />,
                  title: "Microsoft Dynamics",
                  desc: "Chetu is a certified Gold Partner, providing custom CRM software development services for Microsoft Dynamics for businesses of all sizes and professional industries.",
                },
                {
                  icon: <FaChartLine size={80} className="text-cyan-600" />,
                  title: "SugarCRM",
                  desc: "Expert programmers seamlessly integrate SugarCRM into existing business processes to empower marketing, sales, and customer service teams.",
                },
                {
                  icon: <FaSearchDollar size={80} className="text-cyan-600" />,
                  title: "Zoho",
                  desc: "We will implement Zoho CRM to enable users to automate every aspect of their business, trigger instant actions, and streamline lead nurturing processes.",
                },
                {
                  icon: <FaChartLine size={80} className="text-cyan-600" />,
                  title: "GoHighLevel",
                  desc: "We’ll implement the GoHighLevel CRM, designed with data replication technology, superior reporting functionality, elastic database, and robust transaction routing.",
                },
                {
                  icon: <FaSearchDollar size={80} className="text-cyan-600" />,
                  title: "SAP",
                  desc: "Our certified SAP developers deliver enterprise-class CRM solutions that elevate and empower businesses, using SAP ERP and HANA database technologies.",
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
            HIRE CRM INTEGRATION DEVELOPMENT
          </motion.a>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Hear What Our Clients Have to Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 border-l-4 border-cyan-700 rounded-lg bg-white shadow-md"
            >
              <div className="absolute -top-6 left-6 text-cyan-700 text-3xl">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">
                {item.quote}
              </p>
              <div className="mt-4 text-right italic text-gray-600">
                {item.author}
              </div>
              <div className="absolute -bottom-6 right-6 text-cyan-700 text-3xl">
                <FaQuoteRight />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-16 max-w-7xl mx-auto bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Custom Web Development Services: Frequently Asked Questions
          {/* <span className="text-cyan-700">Construction Software</span> */}
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

export default CRM;
