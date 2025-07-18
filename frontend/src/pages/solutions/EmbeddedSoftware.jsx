"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TypographyH1,
  TypographyP,
  TypographySmall,
  TypographyH2,
  TypographyH3,
} from "@/custom/Typography";
import { cn } from "@/lib/utils";
import Banner from "/assets/solutions/embedded-software/banner.jpg";
import Solution from "/assets/solutions/embedded-software/solution.png";
import Development from "/assets/solutions/embedded-software/development.png";
import Package from "/assets/solutions/embedded-software/package.png";
import Services from "/assets/solutions/embedded-software/services.png";
import {
  FaMobileAlt,
  FaChartLine,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaBell,
  FaCheckDouble,
  FaWallet,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
// Motion variant for fade-up effect
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

const EmbeddedSoftware = () => {
  const faqs = [
    {
      question: "What does an embedded software developer do?",
      answer:
        "A software engineer who focuses on creating and implementing software for certain hardware devices is known as an embedded software developer. They create computer code that manages various machines' operations, including automobiles, home appliances, medical technology, and consumer electronics. They can optimize system performance and guarantee that the equipment functions properly thanks to their expertise in hardware and programming.",
    },
    {
      question: "How is AI used in embedded systems?",
      answer:
        "AI is used more frequently in embedded systems to add sophisticated capabilities and boost efficiency. Embedded AI uses machine learning and deep learning techniques to create software that can give proactive and reactive intelligence depending on the data gathered by the device. The gathered data allows devices to adapt to shifting environments, improve performance, and even pick up on user behavior. Examples of embedded AI applications are voice recognition, object identification, and autonomous navigation in robots and drones.",
    },
    {
      question: "In simple terms, what is “Embedded Software”?",
      answer:
        "Embedded software is a set of code that’s created for a limited amount of functions within a specific device. Some of the devices that use embedded software are medical equipment and digital cameras, to name a few.",
    },
    {
      question:
        "How does AI improve or innovate within the field of embedded systems?",
      answer:
        "Some of the specific improvements or ways that AI can bring innovation to the field includes enhancements within decision-making, reduced power consumption, and a better user experience, among others..",
    },
    {
      question:
        "Out of all the latest cutting-edge technologies, can Artificial Intelligence be integrated into Embedded Systems?",
      answer:
        "Yes! As AI becomes more commonly used it plays an enhancement role within embedded systems. Using AI can improve embedded systems to handle more complex tasks and enable smart functionality.",
    },
    {
      question: "What makes up Embedded Software Development?",
      answer:
        "The aspects that make up embedded software development stem from hardware understanding, coding, testing and debugging, and optimization.",
    },
    {
      question: "What are the four types of embedded systems?",
      answer:
        "Embedded systems can be divided into groups according to their use and capabilities. These categories include networked embedded systems, which are connected to other devices or systems and exchange data through a network, stand-alone embedded systems, which are self-contained devices with little to no connectivity; real-time embedded systems, which must respond to external events within strict time constraints, and mobile embedded systems, which are created to be portable and run on batteries. All of these sorts of embedded systems can benefit from the experience that a software developer can offer in creating a system that is suited to the particular needs of each gadget or application..",
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
  const frontendTech = [
    {
      name: "PyCharm",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/pycharm.png", // ✅ Add correct image paths
      desc: "We harness the power of PyCharm IDE when working with Python programming language to create embedded software systems.",
      highlight: "PyCharm",
    },
    {
      name: "WebStorm",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/webstorm.png",
      desc: "We utilize WebStorm IDE when creating advanced-level JavaScript, CSS, and HTML embedded software solutions.",
      highlight: "WebStorm",
    },
    {
      name: "qtcreator",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/qtcreator.png",
      desc: "We leverage Qt Creator’s integrated library sets, APIs, and tools to create C++, QML, and JavaScript embedded devices.",
      highlight: "qtcreator",
    },
    {
      name: "ARM Keil",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/armkeil.png",
      desc: "We use the ARM Keil development tool to create embedded applications for a wide range of ARM-based embedded devices..",
      highlight: "ARM Keil",
    },
    {
      name: "Visual Studio",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/visualstudio.png",
      desc: "Our developers harness the power of Visual Studio to build embedded solutions, high-performance mobile applications, and more.",
      highlight: "Visual Studio",
    },
    {
      name: "Eclipse",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/eclipse.png",
      desc: "We use Eclipse IDE when working with Ada, C, C#, C++, Python, or PHP languages to create embedded automotive software.",
      highlight: "Eclipse",
    },
    {
      name: "NetBeans",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/netbeans.png",
      highlight: "NetBeans",
      desc: "We create JavaScript, CSS, and HTML embedded applications using NetBeans, which encompasses C, C++, and PHP tools.",
    },
    {
      name: "MATLAB",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/matlab.png",
      highlight: "web application development",
      desc: "We harness the power of MATLAB to create user interfaces, functions, graphs, algorithms, and more for embedded systems.",
    },
    {
      name: "Arduino",
      img: "/assets/Solutions/Embedded-Software/Logo-Embedded-software/arduino.png",
      highlight: "Arduino",
      desc: "We leverage the open-source IDE Arduino to write and upload compatible programs and create interactive electronic objects.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
      },
    }),
  };
  return (
    <div>
      {/* ✅ HERO SECTION */}
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${Banner})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto text-left px-4">
          {/* Title */}
          <motion.div variants={fadeUp}>
            <TypographyH1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              CUSTOM EMBEDDED SOFTWARE DEVELOPMENT
            </TypographyH1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeUp}>
            <TypographyP className="text-lg md:text-xl mb-8 text-white"></TypographyP>
          </motion.div>

          {/* Button */}
          <motion.a
            href="#"
            className={cn(
              "inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            )}
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
          >
            GET EMBEDDED SOFTWARE DEVELOPERS
          </motion.a>
        </div>
      </motion.section>
      <div className="bg-white px-4 py-4">
        <div className="container mx-auto">
          <TypographySmall className="text-gray-500 flex flex-wrap items-center gap-x-2">
            Home
            <span className="text-gray-400">›</span>
            <span className="text-cyan-600 font-medium">Solutions</span>
            <span className="text-gray-400">›</span>
            <span className="text-cyan-600 font-medium">Embedded Software</span>
          </TypographySmall>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypographyH2 className="text-black mb-4">
              U Technology Provides Top Embedded Software Solutions
            </TypographyH2>
          </motion.div>

          <TypographyP className="text-sm text-foreground mb-12 max-w-3xl mx-auto">
            Our embedded software engineers offer turn-key embedded system
            solutions, creating, testing, debugging, and validating solutions
            for various platforms and architectures, utilizing their expertise
            in computer science.
            <a href="#" className="text-primary underline">
              innovative digital user experiences
            </a>{" "}
            that solve complex business problems.
          </TypographyP>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={Solution}
              alt="Mockup Dashboard"
              className="w-full max-w-md mx-auto rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <div className="flex flex-col gap-8">
              <TypographyH2 className="m-0 p-0">
                Robust Software & Hardware Solutions
              </TypographyH2>
              {/* <TypographySmall className="m-0 p-0">
                We design robust embedded software, firmware, middleware, and
                hardware systems using our deep domain experience and
                process-oriented approaches.
              </TypographySmall> */}
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Web & Mobile Applications",
                  desc: "We develop user-centric embedded web, mobile, and software applications with innovative user interfaces that enable seamless data migration..",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Middleware & API Solutions",
                  desc: "We develop middleware and custom APIs to enable end application development and functional integrations between separate programs.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Device Driver Development",
                  desc: "Our software engineering offers expert-level device-driver development services, adhering to strict embedded operating system interface and quality standards",
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
                    <TypographyH3 className="mb-1">{item.title}</TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <a
              href="#"
              className="inline-block border-2 border-orange-400 text-black px-9 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Get Embedded Software Developers
            </a>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypographyH2 className="text-black mb-4">
              Human-Machine Interface (HMI) Development
            </TypographyH2>
          </motion.div>

          <TypographyP className="text-sm text-foreground mb-12 max-w-3xl mx-auto">
            We design and integrate cutting-edge custom HMI solutions that
            enable full visibility and control over your embedded systems in
            real-time.
          </TypographyP>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <div className="flex flex-col gap-8">
              <TypographyH2 className="m-0 p-0">
                Human-Machine Interfaces (HMI)
              </TypographyH2>
              {/* <TypographySmall className="m-0 p-0">
                We design robust embedded software, firmware, middleware, and
                hardware systems using our deep domain experience and
                process-oriented approaches.
              </TypographySmall> */}
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Hardware Design",
                  desc: "We carefully select the most fitting hardware components to design a turn-key hardware system that allows for seamless graphical software integration.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Software Design",
                  desc: "We design HMI applications and system-level HMI software for industrial equipment management and wearables/device monitoring.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Infrastructure & Ecosystem",
                  desc: "We design and upgrade web or cloud-based HMI systems to create secure data storage environments while ensuring fast data collection.",
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
                    <TypographyH3 className="mb-1">{item.title}</TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.img
              src={Development}
              alt="Mockup Dashboard"
              className="w-full max-w-md mx-auto rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <a
              href="#"
              className="inline-block border-2 border-orange-400 text-black px-9 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Get Embedded Hmi Solutions
            </a>
          </motion.div>
        </div>
      </section>
      <section className="px-8 py-16 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <TypographyH2 className="mb-4">
              AI-Powered Embedded Software Solutions
            </TypographyH2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <TypographyP className="text-gray-700 mb-12 max-w-4xl mx-auto">
              We design our AI-powered Embedded solutions to empower your
              business by enhancing efficiency, reliability, and functionality
              through advanced AI integration. We leverage AI algorithms and
              tools to deliver cutting-edge solutions tailored to meet
              expectations.
            </TypographyP>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* 1 */}
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
                <TypographyH3 className="text-cyan-700 mb-1">
                  AI for Predictive Maintenance and Process Optimization
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We enable predictive maintenance and process optimization
                  through AI algorithm development in embedded systems. Our
                  developers use real-time data analysis and anomaly detection
                  techniques to avoid unexpected equipment failures. We refine
                  our optimization strategies to leverage AI and enhance
                  efficiency and productivity in industrial processes.
                </TypographyP>
              </div>
            </motion.div>

            {/* 2 */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={3}
            >
              <div>
                <TypographyH3 className="text-cyan-700 mb-1">
                  AI-Powered Wearable Health Devices
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We integrate AI algorithms into wearable health devices for
                  real-time health monitoring and analysis. Edge AI capabilities
                  enable on-device processing and interpretation of health data.
                  This AI-accrued data provides early detection and personalized
                  intervention, strengthening healthcare for all patients.
                </TypographyP>
              </div>
              <FaCheckDouble className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>

            {/* 3 */}
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
                <TypographyH3 className="text-cyan-700 mb-1">
                  AI-Optimized Hardware and Edge Computing
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  Our team develops AI-optimized hardware platforms tailored for
                  embedded systems. We harness the power of edge computing to
                  perform AI interference locally on embedded devices, ensuring
                  robust efficiency. We guarantee latency, privacy, and
                  bandwidth optimization with AI integration in hardware and
                  edge computing.
                </TypographyP>
              </div>
            </motion.div>

            {/* 4 */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={5}
            >
              <div>
                <TypographyH3 className="text-cyan-700 mb-1">
                  Frameworks and Tools for Embedded AI Development
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We recommend frameworks and tools like TensorFlow Lite, ONNX
                  Runtime, and Intel’s AI solutions for their performance,
                  compatibility, and optimization capabilities. We consider
                  interference speed, hardware compatibility, optimization
                  techniques, and community support to ensure our AI solutions
                  are efficient, scalable, and tailored to each client’s needs.
                </TypographyP>
              </div>
              <FaWallet className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypographyH2 className="text-black mb-4">
              Board Support Package (BSP) Development
            </TypographyH2>
          </motion.div>

          <TypographyP className="text-sm text-foreground mb-12 max-w-3xl mx-auto">
            We help you customize and optimize your current Linux-based system
            by completing a custom Linux development board support package
            (BSP).
          </TypographyP>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={Package}
              alt="Mockup Dashboard"
              className="w-full max-w-md mx-auto rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <div className="flex flex-col gap-8">
              <TypographyH2 className="m-0 p-0">
                Board Support Packages (BSPs)
              </TypographyH2>
              {/* <TypographySmall className="m-0 p-0">
                We design robust embedded software, firmware, middleware, and
                hardware systems using our deep domain experience and
                process-oriented approaches.
              </TypographySmall> */}
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Bootloader & Linux Kernel Porting",
                  desc: "We offer bootloader development and adapt the Linux kernel to work on an embedded platform through architecture and board porting..",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Custom Device Driver Development",
                  desc: "We build custom device drivers to bring up a board, provide updates to support new hardware specifications, and customize drivers with new features..",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Root File Systems",
                  desc: "We generate root file system contents to build programs that run on embedded systems, enabling them to boot, restore, recover, and repair them.",
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
                    <TypographyH3 className="mb-1">{item.title}</TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <a
              href="#"
              className="inline-block border-2 border-orange-400 text-black px-9 py-4 rounded-full text-md hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Get Embedded Bsp Solutions
            </a>
          </motion.div>
        </div>
      </section>
      <section className="px-8 py-16 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <TypographyH2 className="mb-4">
              Embedded Development Solutions
            </TypographyH2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <TypographyP className="text-gray-700 mb-12 max-w-4xl mx-auto">
              We engineer custom embedded solutions that breathe life into your
              hardware, transforming it into intelligent systems for the
              Internet of Things, industrial automation, and beyond.
            </TypographyP>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* 1 */}
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
                <TypographyH3 className="text-cyan-700 mb-1">
                  Embedded System Programming
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We provide world-class, end-to-end embedded programming
                  services for microprocessors & microcontrollers, device
                  drivers, IoT devices, HIDs, M2Ms, and so much more.
                </TypographyP>
              </div>
            </motion.div>

            {/* 2 */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={3}
            >
              <div>
                <TypographyH3 className="text-cyan-700 mb-1">
                  Embedded Operating Systems
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  Our experienced embedded software engineers customize popular
                  real time operating systems (RTOS), including Linux, FreeRTOS,
                  VxWorks, QNX, Android Open Source Project (AOSP), and more.
                </TypographyP>
              </div>
              <FaCheckDouble className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>

            {/* 3 */}
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
                <TypographyH3 className="text-cyan-700 mb-1">
                  Embedded Technology Expertise
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  Our developers possess a strong working knowledge of
                  programming languages, Embedded-C and Embedded C++, along with
                  Java, Python, Rust, Ada, and more.
                </TypographyP>
              </div>
            </motion.div>

            {/* 4 */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={5}
            >
              <div>
                <TypographyH3 className="text-cyan-700 mb-1">
                  Linux Enterprise Expertise
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We develop IoT and M2M solutions, including smart home
                  appliances, industrial automation equipment, robotics,
                  consumer electronics, and other advanced systems.
                </TypographyP>
              </div>
              <FaWallet className="text-cyan-600 w-14 h-14 flex-shrink-0" />
            </motion.div>
            {/* 3 */}
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
                <TypographyH3 className="text-cyan-700 mb-1">
                  Internet of Things (IoT) Development
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We develop IoT and machine-to-machine (M2M) solutions,
                  including smart home equipment, industrial automation
                  mechanisms (IIoT), consumer electronics, wearables, and more.
                </TypographyP>
              </div>
            </motion.div>

            {/* 4 */}
            <motion.div
              className="flex items-start gap-4 lg:justify-end lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={5}
            >
              <div>
                <TypographyH3 className="text-cyan-700 mb-1">
                  Complex DSC & DSP Development
                </TypographyH3>
                <TypographyP className="text-gray-600 text-sm">
                  We provide digital signal controller and processor (DSC/DSP)
                  programming solutions for industrial automation, AI drone
                  technology, surveillance systems, and more.
                </TypographyP>
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
            Get Embedded Solutions
          </button>
        </motion.div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypographyH2 className="text-black mb-4">
              Hire Experienced and Dedicated Embedded Software Developers
            </TypographyH2>
          </motion.div>

          <TypographyP className="text-sm text-foreground mb-12 max-w-3xl mx-auto">
            We revamp your existing custom embedded hardware or off-the-shelf
            solution, providing end-to-end design from concept to production.
          </TypographyP>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <div className="flex flex-col gap-8">
              <TypographyH2 className="m-0 p-0">
                Embedded Software For All Industries
              </TypographyH2>
              {/* <TypographySmall className="m-0 p-0">
                We design robust embedded software, firmware, middleware, and
                hardware systems using our deep domain experience and
                process-oriented approaches.
              </TypographySmall> */}
              {[
                {
                  icon: <FaChartLine size={36} className="text-cyan-600" />,
                  title: "Media Streaming & WebRTC Solutions",
                  desc: "We successfully combine mobile, web, cloud, middleware, and system levels to build media streaming solutions for large communication hubs.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Embedded Security Solutions",
                  desc: "We build embedded security solutions, including cloud gateways, hardware/firmware validation & verification systems, security tokens, and more.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Network Solutions",
                  desc: "We engineer scalable network solutions that maintain high availability and connectivity with user devices, business units, and industrial systems.",
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
                    <TypographyH3 className="mb-1">{item.title}</TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.img
              src={Services}
              alt="Mockup Dashboard"
              className="w-full max-w-md mx-auto rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl font-bold mb-2">
            Embedded Software Developer Tools
          </h2>
          <p className="text-gray-600 mb-10">
            Our expert embedded software engineers have many years of combined
            experience with popular embedded software developer tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {frontendTech.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="h-16 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-center">
                  {tech.highlight}
                </h4>
                <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
                  {tech.desc.split(tech.highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <React.Fragment key={i}>
                        {part}
                        <span className="text-cyan-600 font-medium">
                          {tech.highlight}
                        </span>
                      </React.Fragment>
                    ) : (
                      part
                    )
                  )}
                </p>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </section>
      <section className="px-6 py-16 max-w-7xl mx-auto bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Embedded Software Development: Frequently Asked Questions
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

export default EmbeddedSoftware;
