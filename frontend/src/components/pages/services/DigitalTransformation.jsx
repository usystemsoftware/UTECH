import React from "react";
import DigitalBanner from "../../../../public/assets/Services/transformation-banner.jpg";
import DigitalServices from "../../../../public/assets/Services/digital-services.jpg";
import Vector from "../../../../public/assets/Services/vector.jpg";
import image from "../../../../public/assets/Services/images.png";
import Newsroom from "../../../../public/assets/Services/newsroom.png";
import Work from "../../../../public/assets/Services/work.jpg";
import Benefit from "../../../../public/assets/Services/benefits.jpg";
import Services from "../../../../public/assets/Services/digital-transformation.jpg";
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
  FaComments, // ✅ fixed error by importing
  FaCloudUploadAlt,
  FaUserPlus,
  FaUserCheck,
  FaUsers,
  FaChalkboardTeacher,
  FaClipboardList,
  FaHandsHelping,
  FaChartBar,
  FaCheck,
} from "react-icons/fa";

const DigitalTransformation = () => {
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

  const services = [
    {
      icon: <FaCloudUploadAlt className="text-cyan-600 w-10 h-10 mb-3" />,
      title: "Cloud Migration Services",
      description:
        "We perform reliable cloud migration services for cloud-to-cloud and on-premise to cloud migrations to boost your scalability. We move applications, data, and infrastructure so your organization can reduce costs and have more agility.",
    },
    {
      icon: <FaMobileAlt className="text-cyan-600 w-10 h-10 mb-3" />,
      title: "Mobile App Development",
      description:
        "Mobile app development can enhance productivity and the customer experience. Our mobile app development experts can engineer the ideal mobile app for your business with customizable features and integrations to increase efficiency and enable access to critical data and tools, also driving revenue growth.",
    },
    {
      icon: <FaUserPlus className="text-cyan-600 w-10 h-10 mb-3" />,
      title: "Staff Augmentation for Digital Transformation",
      description:
        "Your digital transformation initiatives may involve adding additional resources and expertise to your existing team to help complete objectives. Our industry specific digital transformation experts will fill any skill gaps and drive your initiatives forward as we help you scale your teams and enhance your bandwidth.",
    },
  ];

  const features = [
    {
      title: "DX Specialized Teams",
      icon: <FaUserCheck className="text-cyan-600 text-4xl mb-4" />,
      description:
        "Chetu’s industry-specific support teams are comprised of dedicated experts, having decades of specialized experience. Our teams keep up with trends, regulations, and processes to stay ahead and produce optimal solutions.",
    },
    {
      title: "All-Encompassing Support",
      icon: <FaUsers className="text-cyan-600 text-4xl mb-4" />,
      description:
        "We offer a blend of technical and non-technical resources, from customer service and human resource management to IT infrastructure support with managed services. Our experts and professionals will work to provide optimal solutions that fit your specific needs.",
    },
    {
      title: "DX Expert Consulting",
      icon: <FaChalkboardTeacher className="text-cyan-600 text-4xl mb-4" />,
      description:
        "Our expert advisors will help ensure a seamless digital transformation experience with functional expertise and strategy. Through a combination of technology, data, and industry expertise, we will kick-start your DX journey and work with you on your long-term path to greater efficiency and a competitive advantage in your industry.",
    },
    {
      title: "Accountability",
      icon: <FaChalkboardTeacher className="text-cyan-600 text-4xl mb-4" />,
      description:
        "Keeping open communication is a high priority for us. We provide real-time collaborative communication via platforms like Skype, Slack, and Confluence. We work closely and maintain transparent interactions to ensure reliability and accuracy in our work. Accountability is an integral part of our company culture.",
    },
  ];

  const dxFeatures = [
    {
      title: "DX Specialized Teams",
      icon: <FaClipboardList className="text-cyan-600 text-4xl mb-4" />,
      description:
        "Chetu’s industry-specific support teams are comprised of dedicated experts, having decades of specialized experience. Our teams keep up with trends, regulations, and processes to stay ahead and produce optimal solutions.",
    },
    {
      title: "All-Encompassing Support",
      icon: <FaHandsHelping className="text-cyan-600 text-4xl mb-4" />,
      description:
        "We offer a blend of technical and non-technical resources, from customer service and human resource management to IT infrastructure support with managed services. Our experts and professionals will work to provide optimal solutions that fit your specific needs.",
    },
    {
      title: "DX Expert Consulting",
      icon: <FaChartBar className="text-cyan-600 text-4xl mb-4" />,
      description:
        "Our expert advisors will help ensure a seamless digital transformation experience with functional expertise and strategy. Through a combination of technology, data, and industry expertise, we will kick-start your DX journey and work with you on your long-term path to greater efficiency and a competitive advantage in your industry.",
    },
  ];

  const points = [
    "Management metrics",
    "Daily reports",
    "Maintaining industry regulatory compliance standards such as HIPAA, PCI, and GDPR.",
  ];
  const readingData = [
    {
      title:
        "Leveraging Digital Transformation to Boost Efficiency and Profits",
      image: "../../../../public/assets/Services/work.jpg", // Replace with your actual path
      link: "#",
    },
    {
      title: "New Tech: The Benefits of Digital Transformation",
      image: "../../../../public/assets/Services/benefits.jpg",
      link: "#",
    },
    {
      title: "Work Smarter with the Power of Virtual Office Technologies",
      image: "../../../../public/assets/Services/digital-transformation.jpg",
      link: "#",
    },
  ];
  return (
    <div>
      {/* ✅ HERO SECTION */}
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${DigitalBanner})` }}
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
            DIGITAL TRANSFORMATION SERVICES & SOLUTIONS
          </motion.h1>

          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
          >
            Hire A Reliable DX Resource
          </motion.a>
        </div>
      </motion.section>
      {/* ✅ BREADCRUMB */}
      <div className="bg-white px-4 py-4 text-sm text-gray-500">
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Services</span>
          <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">
            Digital Transformation
          </span>
        </div>
      </div>
      <section className="px-8 py-16 bg-white text-center ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Drive Growth and Innovation With Our Digital Transformation
            Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu’s digital transformation consulting experts will help your
            business reach optimal performance through innovative strategies and
            implementation of digital transformation initiatives. Our DevOps
            specialists are available to provide workflow automation, deploy,
            and support technical solutions.
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
                  Process Automation
                </h3>
                <p className="text-gray-600 text-sm">
                  We automate repetitive business processes with intelligent
                  technologies such as robotic process automation (RPA). Our
                  digital transformation services companies specialize in
                  intelligent document recognition, data extraction, excel
                  automation, and image processing.
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
                  Development & Implementation
                </h3>
                <p className="text-gray-600 text-sm">
                  Our experts can develop and implement custom technical
                  solutions to fit your business needs. We provide continuous
                  integration and delivery as well as monitoring, alerting, and
                  incident response to maintain the health of your IT system.
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
                  DevOps Success Teams
                </h3>
                <p className="text-gray-600 text-sm">
                  Our DevOps specialists provide not only tangible technical
                  solutions but consulting services that include planning and
                  assessment, QA testing, and onboarding. We have the personnel
                  and resources to ensure success in meeting your IT
                  infrastructure needs.
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
                  IT Infrastructure Support
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide outsourced infrastructure support services for
                  enhanced scalability. This includes cross-platform support for
                  both cloud-based and on-premises databases, using machine
                  learning technologies to enhance database management systems.
                  We streamline day-to-day user management, access & security
                  protocols, and much more.
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
            WORK WITH TRASFORAMTION EXPERTS
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
            Work With Top Digital Transformation Experts
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            {" "}
            We provide digital transformation services that will optimize your
            business by increasing efficiency and enabling a greater competitive
            advantage. We can integrate systems, automate processes, and provide
            staff augmentation to help you fulfill your core objectives.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Systems Integration",
                  desc: "OChetu’s digital transformation services can help you build a seamless technology environment by connecting systems, applications, and data sources. This will enable your organization to streamline operations while improving data management and enhancing key areas such as customer engagement.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Intelligent Automation",
                  desc: "Our experts implement intelligent automation through a combination of artificial intelligence, machine learning, and automation to handle complex tasks and processes for improved efficiency and decision-making. By automating manual processes, we can help your organization be more productive.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "AI & Machine Learning Implementation",
                  desc: "Reduce costs, improve efficiency, and enhance your data analysis capabilities through our AI & machine learning implementation services. We can develop and/or implement AI-powered technology to automate and streamline your processes and enable intelligent decision-making.",
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
              src={DigitalServices} // Replace with your accounting image if needed
              alt="Marketing Dashboard"
              className="w-full max-w-md mx-auto rounded-lg "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center mt-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
              >
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          {/* CTA Button */}
          <motion.a
            href="#"
            className="mt-12 inline-block border-2 border-orange-400 text-black px-8 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            GET DIGITAL TRANSFORMATION SERVICES
          </motion.a>
        </div>
      </section>
      <section className="px-8 py-16 bg-white text-center ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Industry-Specific Digital Transformation Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Chetu provides customized digital transformation solutions to meet
            the specific needs of businesses across different industries,
            including finance, healthcare, and retail.
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
                  Digital Transformation in Education
                </h3>
                <p className="text-gray-600 text-sm">
                  Improve learning outcomes and the student experience by
                  implementing digital transformation initiatives. E-learning
                  and education organizations can drive growth with predictive
                  analytics and personalized feedback to enable custom-tailored
                  instruction and flexible administration.
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
                  Digital Financial Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Our digital transformation services can help companies in the
                  finance industry optimize financial processes and enhance
                  customer service in a rapidly evolving landscape. We provide
                  staff augmentation, data migration, and other custom solutions
                  and integrations while ensuring regulatory compliance.
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
                  Food & Beverage Digital Operations
                </h3>
                <p className="text-gray-600 text-sm">
                  Our digital transformation services can help food & beverage
                  companies streamline operations and inventory management while
                  providing scalable IT infrastructure resources that can
                  support key components such as online ordering. Improve
                  quality control and provide an improved customer experience.
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
                  Digital Transformation in Transportation
                </h3>
                <p className="text-gray-600 text-sm">
                  With benefits such as seamless access to data, companies in
                  the transportation industry can capitalize on digital
                  transformation services to improve efficiency and scalability.
                  Enhance key processes such as booking and tracking while
                  improving safety and flexibility while reducing costs.
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
                  Digital Retail Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  For retail companies our AI & machine learning implementation
                  can not only automate processes but provide enhanced data
                  analysis that enable better customer insights. Companies can
                  also leverage systems integration to optimize supply chain and
                  inventory management.
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
                  Digital Transformation in Healthcare
                </h3>
                <p className="text-gray-600 text-sm">
                  Chetu’s digital transformation services can help healthcare
                  companies reduce administrative workload, enhance patient
                  care, and ensure regulatory compliance. Custom software and
                  mobile application development, systems integration, and
                  intelligent automation are among the many solutions we
                  provide, tailored for industry needs.
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
                  Streamlined Digital Insurance Processes
                </h3>
                <p className="text-gray-600 text-sm">
                  We can help insurance companies automate manual processes and
                  provide seamless solutions for data management, fraud
                  detection, and claims processing. Improve your operational
                  processes and gain new opportunities for revenue growth while
                  improving customer service.
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
                  Tech Enabled Hospitality & Travel
                </h3>
                <p className="text-gray-600 text-sm">
                  Chetu’s digital transformation experts can develop and
                  implement digital transformation strategies tailored to
                  hospitality & travel. We use innovative strategies and
                  technologies to help companies enhance online booking,
                  customer service, and inventory management. Drive growth and
                  scalability while boosting customer engagement and
                  satisfaction.
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
            Get Industry DX Solution
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
            Reliable Digital Transformation Service Providers
          </motion.h2>
          <p className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            {" "}
            We have the infrastructure and bandwidth to provide streamlined
            service and support in digital transformation and business process
            outsourcing. Our facilities and resources are secure and reliable.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={image} // Replace with your accounting image if needed
              alt="Marketing Dashboard"
              className="w-ful w-md mx-auto rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "State-Of-The-Art Infrastructure Facilities",
                  desc: "Our three Noida, India campuses total 280,000 sq. ft and include fully-equipped office space for our staff of 2,800+ professionals. These facilities include the latest technology infrastructure and provide an exceptional environment for us to continue offering world-class solutions.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Premises Security",
                  desc: "Our biometrics-based physical access authentication requires campus visitors to have an escort to enter the premises. We have 24/7 on-site security staff and 100+ CCTV cameras with recording capabilities. Our fully-occupied work area is not shared with any other entity.",
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Data Security",
                  desc: "Our data security measures include anti-virus, VPN, and firewalls. We also have dedicated client network tunnels to ensure the safe transmission of data. Our efforts to prevent data theft include blocking all USB devices and ensuring the safety and confidentiality of your data.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Reliability",
                  desc: "Chetu’s facilities have fast, reliable Internet connections with a 24/7 admin team. We also have backup generators to withstand outages and keep our operations going at full strength and efficiency. We offer real-time communication along with both proactive support and troubleshooting to resolve issues.",
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
              src={Vector} // Replace with your accounting image if needed
              alt="Marketing Dashboard"
              className="w-ful w-md mx-auto rounded-lg "
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
            Hire A Reliable DX Resource
          </motion.a>
        </div>
      </section>
      <section className="w-full py-20 px-4 sm:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Top Talent & Industry Expertise
          </h2>
          <p className="text-sm sm:text-base max-w-3xl mx-auto mb-12">
            Chetu recruits top talent that goes through a rigorous hiring
            process followed by thorough training and development to provide
            optimal service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-md sm:text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border-2 border-orange-500 text-black hover:bg-orange-500 hover:text-white font-medium transition"
            >
              WORK WITH TOP TALENT
            </motion.button>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            One-Stop Digital Transformation Solution Provider
          </h2>
          <p className="text-sm sm:text-base max-w-3xl mx-auto mb-12">
            Our specialized industry-specific teams provide skill, intelligence,
            and efficiency to drive value and growth. With our innovative
            resources, we will help you increase operational flexibility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {dxFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-md sm:text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border-2 border-orange-500 text-black hover:bg-orange-500 hover:text-white font-medium transition"
            >
              HIRE A ONE-STOP SHOP
            </motion.button>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Compliance Measures
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base max-w-3xl mx-auto mb-12">
            Our expert management team will help you make business process
            outsourcing as seamless as possible as we implement processes per
            industry standards.
          </p>

          {/* Image and checklist */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* AICPA Image */}
            <motion.img
              src="../../../../public/assets/Services/newsroom.png"
              alt="AICPA SOC"
              className="w-48 sm:w-56 md:w-60"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />

            {/* Checklist */}
            <ul className="text-left space-y-4">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base"
                >
                  <FaCheck className="text-teal-600 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
            SUGGESTED READING
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {readingData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-sm shadow-md"
                />
                <h3 className="mt-4 text-sm sm:text-base font-semibold text-black text-center px-2">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="mt-4 px-4 py-2 border-2 border-orange-500 text-black hover:bg-orange-500 hover:text-white transition rounded-sm text-sm font-medium"
                >
                  READ MORE
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
