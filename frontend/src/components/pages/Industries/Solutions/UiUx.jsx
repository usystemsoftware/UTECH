import React, { useState } from "react";
import { motion } from "framer-motion";
import Bnner from "/assets/Solutions/UiUx/banner.jpg";
import Mockup from "/assets/Solutions/UiUx/mockup.png";
import MobileMockup from "/assets/Solutions/UiUx/mobile-mockup.png";
import Process from "/assets/Solutions/UiUx/processes.png";
import {
  TypographyH2,
  TypographyP,
  TypographyH3,
  TypographyH4,
} from "../../../../custom/Typography";
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const UiUx = () => {
  const faqs = [
    {
      question: "What are UI/UX Design Services?",
      answer:
        "UI/UX design services focus on creating an enriching end-user experience that promotes engagement within a seamlessly functioning, easy-to-navigate interface. Efficient UI/UX designs offer consistent performance across multiple platforms and feature robust options exceeding project goals and end-user demands.",
    },
    {
      question: "What are the UI/UX design deliverables?",
      answer:
        "Deliverables vary and are based on a project-by-project basis.  U Technology dedicated UI/UX developers focus on designing and delivering high-quality collateral focusing on Research reports, UX audit reports, red route analysis, user persona, Customer journey maps, Sitemap, Wireframes, UI sketches, interactive prototypes, and design systems.",
    },
    {
      question:
        "Why are UI/UX Design Services Important for Mobile App Development?",
      answer:
        "Enriching mobile app experiences is critical for creating positive customer experiences and individualized interactions. Customized mobile app development and enhanced UI/UX designs promote intuitive interfaces, creating instant brand recognition and propelling marketing strategies to a broader audience.",
    },
    {
      question: "How Much Does UI/UX Design Cost?",
      answer:
        "Several factors must be considered when budgeting for a UI/UX design project. With some completed designs ranging from $5,000 to $10,000, it’s important to carefully plan goals, estimate time spent designing the user journey, and then calculate time dedicated multiplied by the development team’s hourly rate.",
    },
    {
      question: "What is the Timeline for a UI/UX Design Project?",
      answer:
        "Several factors contribute to the completion of a UI/UX design project. Each client receives our design and development team’s full attention, ensuring no detail is overlooked. Scope, complexity, budget, and platform are just some variables that impact a project’s timeline. Still, project completion can range from 2-6 months for a small to medium-sized UI/UX design project.",
    },
    {
      question: "Can UI/UX Design be Automated?",
      answer:
        "Some UI/UX design tasks can be automated by leveraging Artificial Intelligence to automate repetitive tasks, such as resizing and adjusting images. AI enables end-users to generate multiple quality images to suit individual tasks and create comprehensive collateral for targeted audiences. AI excels at data analysis, providing critical actionable insights.",
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

  const programmingLogos = [
    "/assets/Solutions/UiUx/Logos-Uiux/bootstrap.png",
    "/assets/Solutions/UiUx/Logos-Uiux/css3.png",
    "/assets/Solutions/UiUx/Logos-Uiux/design.png",
    "/assets/Solutions/UiUx/Logos-Uiux/figma.png",
  ];

  const wireframeLogos = [
    "/assets/Solutions/UiUx/Logos-Uiux/html5.png",
    "/assets/Solutions/UiUx/Logos-Uiux/illustrator.png",
    "/assets/Solutions/UiUx/Logos-Uiux/indesign.png",
    "/assets/Solutions/UiUx/Logos-Uiux/jquery.png",
  ];

  const visualLogos = [
    "/assets/Solutions/UiUx/Logos-Uiux/photoshop.png",
    "/assets/Solutions/UiUx/Logos-Uiux/invision.png",
    "/assets/Solutions/UiUx/Logos-Uiux/xd.png",
    "/assets/Solutions/UiUx/Logos-Uiux/sketch.png",
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
  const testimonials = [
    {
      quote: `I just wanted to let you know that the development that U Technology has been performing has exceeded my expectations. There are some really amazing innovations that we’ve incorporated in Adobe Illustrator. The HTML window in window functions are also great and I think is ground breaking and I’m really impressed how U Technology has been able to materialize my ideas into actual code and prototypes..`,
      author: "CEO, Leading Design Industry",
    },
    {
      quote: `Our application is now so much more user-friendly and intuitive. Not only has the overall experience improved for our users, but the integrated e-commerce platform has created a smoother transition for sales. From an investment standpoint,  U Technology experienced team members and affordable rates have allowed us to not only improve our return on investment but complete this project in a highly expeditious manner..`,
      author: "Director of IT Development, Travel Industry",
    },
  ];
  const LogoRow = ({ logos }) => (
    <div className="flex flex-wrap gap-4 items-center mt-4">
      {logos.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Tech logo"
          className="h-10 w-10 object-contain"
        />
      ))}
    </div>
  );
  return (
    <div>
      {/* ✅ HERO SECTION */}
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${Bnner})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto text-left px-4">
          <motion.TypographyH1
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeUp}
          >
            UI & UX DESIGN AND DEVELOPMENT SERVICES
          </motion.TypographyH1>
          <motion.h2 className="text-lg md:text-xl mb-8" variants={fadeUp}>
            Empowering Businesses with Tailored UI/UX Solutions By Our Design
            Experts
          </motion.h2>
          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
          >
            HIRE UI/UX DEVELOPMENT
          </motion.a>
        </div>
      </motion.section>
      {/* ✅ BREADCRUMB */}
      <div className="bg-white px-4 py-4 text-sm text-gray-500">
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Solutions</span>
          <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">UI/UX</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.TypographyH2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Dynamic User Design Services for Smarter User Navigation
          </motion.TypographyH2>
          <TypographyP className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            The key to developing a successful app is marrying the functionality
            your users demand with an intuitive design and experience that make
            it as simple as possible to use. U Technology UI/UX experts will
            design the perfect web, desktop, or mobile app to meet your specific
            business requirements, industry needs, and product development
            goals. We design and develop
            <a href="#" className="text-cyan-600 underline">
              innovative digital user experiences
            </a>{" "}
            that solve complex business problems.
          </TypographyP>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={Mockup} // Replace with your accounting image if needed
              alt="Mockup Dashboard"
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
                  title: "Information Architecture Design",
                  desc: "Our developers use industry-leading tools to construct new content management lifecycles, content models, and robust Document Information Typing Architecture (DITA) all while streamlining organic processes for conversion rate optimization (CRO).",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "User Experience (UX) Development",
                  desc: "We construct highly responsive Graphical User Interfaces (GUI) that include elements like 2D/3D animations and embedded media, providing an organic, unified user experience throughout our custom solutions.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "User Interface (UI) Development",
                  desc: "Our UI/UX designers are experts in graphic libraries, including OpenGL and WebGL. We collaborate with your stakeholders and IT team to develop a style (including color palettes, logo designs and layouts) that harmonizes with your company culture.",
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
                    <TypographyH3 className="text-md font-bold mb-1">
                      {item.title}
                    </TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
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
                  title: "Web & Mobile App UI/UX Development",
                  desc: "We utilize frameworks like Xamarin, DevExpress, Ionic, Apache Cordova, and Appcelerator to deliver highly responsive UI/UX designs that fully leverage touchscreen functionality and provide mobile-first user experiences for progressive web apps..",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "Front-End Programming",
                  desc: "We construct highly responsive Graphical User Interfaces (GUI) that include elements like 2D/3D animations and embedded media, providing an organic, unified user experience throughout our custom solutions.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Intuitive & Interactive Solutions",
                  desc: "We use well-known UI guidelines like Human Interface Guidelines (HIG) and Material Design to develop intuitive solutions with goal-driven, usable designs that influence positive user responses and facilitate simple communication between a user and the interface.",
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
                    <TypographyH3 className="text-md font-bold mb-1">
                      {item.title}
                    </TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.img
              src={MobileMockup} // Replace with your accounting image if needed
              alt="Mockup Dashboard"
              loading="lazy"
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
            Hire Experienced UI/UX Developers
          </motion.a>
        </div>
      </section>
      {/* ✅ NEW AI Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.TypographyH2
            className="text-2xl md:text-3xl font-bold text-cyan-700 mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            AI-Powered UI UX Development Services
          </motion.TypographyH2>
          <TypographyP className="text-sm text-gray-600 mb-12 max-w-3xl mx-auto">
            U Technology commitment to staying ahead of the technological curve
            is ushering in a new era of AI-powered innovation. Our commitment to
            seamless, intuitive design takes center stage as we harness the
            transformative capabilities of Artificial Intelligence.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <FaCog size={36} className="text-cyan-600 mb-4" />,
                title: "AI-Powered Data-Driven User Insights",
                desc: "Our team harnesses the power of AI to derive actionable insights from user data. Our solutions analyze vast datasets with advanced Machine Learning algorithms to uncover patterns, preferences, and trends. This data-driven approach provides invaluable insights into user behavior, enabling UI/UX designers to make informed decisions for creating interfaces that resonate with users on a deeper level.",
              },
              {
                icon: <FaComments size={36} className="text-cyan-600 mb-4" />,
                title: "User Experiences Personalized with AI",
                // subtitle: "Engagement with Chatbots",
                desc: "Our developers can create an interface that evolves with each user interaction, creating a unique and personalized journey. AI studies user behavior, preferences, and previous interactions. From recommending tailored content to adapting the layout based on individual habits, integrating AI in UX design ensures that each user feels personalized, enhancing engagement and satisfaction.",
              },
              {
                icon: (
                  <FaBalanceScale size={36} className="text-cyan-600 mb-4" />
                ),
                title: "AI-Powered Predictive User Behavior Analysis",
                // subtitle: "Responsibility and Innovation",
                desc: "Our experts develop AI-powered predictive analytics that forecast user behavior. By analyzing past actions and trends, machine learning models predict what a user might do. It enables designers to proactively design interfaces anticipating user needs, streamlining navigation, and creating a more intuitive and seamless user experience.",
              },
              {
                icon: <FaChartLine size={36} className="text-cyan-600 mb-4" />,
                title: "AI-Automated User Research and Testing",
                // subtitle: "with AI-Driven Investment",
                desc: "Our developers enhance user research and testing and evolve the traditional practices that have been resource-intensive and time-consuming. AI streamlines the process by automating aspects of research, from gathering user feedback to conducting usability tests. Through automated tools, UI/UX professionals efficiently collect and analyze data, accelerating the design iteration process and ensuring the final product is optimal for user satisfaction.",
              },
              {
                icon: (
                  <FaSearchDollar size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Generative AI Design Assistance",
                // subtitle: "Complexity of Financial Decision",
                desc: "Our team can implement AI that acts as a creative partner for collaborative design. Generative AI assists designers by proposing design elements, layouts, and entire concepts based on specified criteria. The collaboration between human intuition and machine-generated suggestions sparks innovation and accelerates the design process, resulting in interfaces that seamlessly blend human creativity with the efficiency of AI.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Accessibility Optimization with AI",
                // subtitle: "Efficiency and Compliance",
                desc: "Our developers can provide a more inclusive user experience by implementing AI that optimizes accessibility features. Our developers leverage technologies like natural language processing to provide voice commands or image descriptions for visual content descriptions. UI/UX designers can ensure that their interfaces are accessible to users of all abilities with these features. The commitment to accessibility aligns with ethical design principles but also broadens a user base.",
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
                <TypographyH3 className="text-lg font-semibold mb-1">
                  {item.title}
                </TypographyH3>
                <TypographyH4 className="text-md font-medium mb-2">
                  {item.subtitle}
                </TypographyH4>
                <TypographyP className="text-sm text-gray-600">
                  {item.desc}
                </TypographyP>
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
          {/* <button variant="outline">GET AI-POWERED UI/UX SOLUTIONS</button> */}
          <Button
            variant="outline"
            className={cn(
              "border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-100 transition"
            )}
          >
            GET AI-POWERED UI/UX SOLUTIONS
          </Button>
        </motion.div>
      </section>
      <section className="bg-white py-16 px-6 md:px-20">
        <TypographyH2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Hear What Our Clients Have to Say
        </TypographyH2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 border-l-4 border-primary rounded-lg bg-card shadow-md"
            >
              <div className="absolute -top-6 left-6 text-cyan-700 text-3xl">
                <FaQuoteLeft />
              </div>
              <TypographyP className="text-gray-800 text-sm leading-relaxed">
                {item.quote}
              </TypographyP>
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.TypographyH2
            className="text-2xl md:text-3xl font-bold text-black mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Custom UX/UI Design & Development Processes
          </motion.TypographyH2>
          <TypographyP className="text-sm text-cyan-700 mb-12 max-w-3xl mx-auto">
            Our developers follow a detailed process to gain insight into your
            business goals and how to best serve your target audience with a
            seamless, intuitive, and pleasurable user experience.
          </TypographyP>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.img
              src={Process} // Replace with your accounting image if needed
              alt="Process Dashboard"
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
                  title: "Discovery Process",
                  desc: "During the discovery process, we thoroughly research user information, technical restraints, and business goals and requirements through user and stakeholder interviews, content and site audits, task analysis, and ecosystem mapping.",
                },
                {
                  icon: <FaMobileAlt size={36} className="text-cyan-600" />,
                  title: "In-Depth User Research",
                  desc: "Our in-depth user research processes provide valuable insights into what features users will be expecting from a product. We create user profiles and user journeys to understand behavioral aspects and improve workflows.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "UX Audit Process",
                  desc: "We use empirical methods to boost conversions and ensure that key user-specific activities such as actions, menu items, and main navigation are easily located and identifiable, making it easy for users to achieve their goals within the site.",
                },
                {
                  icon: (
                    <FaFileInvoiceDollar size={36} className="text-cyan-600" />
                  ),
                  title: "Gathering Requirements",
                  desc: "We perform in-depth research to gain a complete understanding of the project and create a requirements definition document that describes each project requirement in great detail and assists in keeping the project on track.",
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
                    <TypographyH3 className="text-md font-bold mb-1">
                      {item.title}
                    </TypographyH3>
                    <TypographyP className="text-sm text-gray-600">
                      {item.desc}
                    </TypographyP>
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
            CUSTOMIZE YOUR UX/UI DESIGN
          </motion.a>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center">
        <TypographyH2 className="text-3xl md:text-4xl font-bold mb-4">
          U Technology's UX/UI Technology Stack
        </TypographyH2>
        <TypographyP className="max-w-4xl mx-auto text-gray-600 mb-12">
          We use multiple platforms and programming languages to ensure our
          desktop and mobile UI/UX design services are versatile and leverage
          the full strength of these systems to provide computing power,
          enhanced graphics, robust security standards, and greater performance.
        </TypographyP>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Programming Languages */}
          <div>
            <TypographyH3 className="text-lg font-semibold mb-2">
              Programming Languages & Technologies
            </TypographyH3>
            <TypographyP className="text-gray-600">
              We use HTML, Bootstrap, CSS3, JQuery, and various other
              programming languages to program, develop, and design beautiful,
              smooth, and responsive websites and software solutions.
            </TypographyP>
            <LogoRow logos={programmingLogos} />
          </div>

          {/* Wireframe & Prototype */}
          <div>
            <TypographyH3 className="text-lg font-semibold mb-2">
              Wireframe & Prototype
            </TypographyH3>
            <TypographyP className="text-gray-600">
              We utilize InVision, Adobe XD, Google Web Designer, and Figma to
              create interactive mockups for designs, making it quick and easy
              to receive real-time feedback during the prototyping process.
            </TypographyP>
            <LogoRow logos={wireframeLogos} />
          </div>

          {/* Visual Designs */}
          <div>
            <TypographyH3 className="text-lg font-semibold mb-2">
              Visual Designs
            </TypographyH3>
            <TypographyP className="text-gray-600">
              Using Photoshop, InDesign, Illustrator, and Sketch, just to name a
              few, we create complex, flexible, and intuitive designs and
              wireframes that can be developed into clickable prototypes.
            </TypographyP>
            <LogoRow logos={visualLogos} />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Button
            variant="outline"
            className={cn(
              "border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-100 transition"
            )}
          >
            Hire Developers with UX/UI Design Experience
          </Button>
        </div>
      </section>
      <section className="px-6 py-16 max-w-7xl mx-auto bg-white">
        <TypographyH2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          UI & UX Development Services: Frequently Asked Questions
          {/* <span className="text-cyan-700">Construction Software</span> */}
        </TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-cyan-700 pb-4">
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <TypographyH3 className="text-base md:text-lg font-semibold text-black">
                  {faq.question}
                </TypographyH3>
                {openIndex === index ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </div>
              {openIndex === index && faq.answer && (
                <TypographyP className="mt-2 text-gray-700 text-sm">
                  {faq.answer}
                </TypographyP>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UiUx;
