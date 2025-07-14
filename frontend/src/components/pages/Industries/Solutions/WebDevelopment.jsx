import React, { useState } from "react";
import HeroBanner from "../../../../../public/assets/Solutions/hero-banner.jpg";
import { motion } from "framer-motion";
import { MdOutlineLocalAtm } from "react-icons/md";
import Javascript from "../../../../../public/assets/Solutions/Web-Development/Javascript.png";
import HTMl from "../../../../../public/assets/Solutions/Web-Development/html.png";
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

const frontendTech = [
  {
    name: "JavaScript",
    img: "../../../../public/assets/Solutions/Web-Development/Javascript.png", // ✅ Add correct image paths
    desc: "Our software engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and interactive user experiences.",
    highlight: "JavaScript",
  },
  {
    name: "HTML",
    img: "../../../../public/assets/Solutions/Web-Development/html.png",
    desc: "Our Software Development Team has many years of collective experience working with HTML programming language for developing best-in-class custom websites and applications.",
    highlight: "HTML",
  },
  {
    name: "JSON",
    img: "../../../../public/assets/Solutions/Web-Development/json.png",
    desc: "We use JSON for transmitting web application data in a much quicker and more efficient fashion to optimize the process of building your web application.",
    highlight: "JSON",
  },
  {
    name: "ELM",
    img: "../../../../public/assets/Solutions/Web-Development/elm.png",
    desc: "Our Software Development Team utilizes ELM’s functionality, user-friendliness, fast compilation, and safe refactoring benefits to build, integrate, and customize your website or application.",
    highlight: "",
  },
  {
    name: "AngularJS",
    img: "../../../../public/assets/Solutions/Web-Development/angularjs.png",
    desc: "We use AngularJS when creating dynamic web applications, appropriating its data binding, and dependency injection to eliminate the need to write an extensive amount of code.",
    highlight: "AngularJS",
  },
  {
    name: "jQuery",
    img: "../../../../public/assets/Solutions/Web-Development/jquery.png",
    desc: "We utilize jQuery to easily navigate a document, create animations, develop AJAX applications, select DOM elements, handle events, and create plug-ins on top of the JavaScript library.",
    highlight: "jQuery",
  },
];

const backendTechDetails = [
  {
    name: "PHP",
    img: "../../../../public/assets/Solutions/Web-Development/php.png",
    highlight: "PHP frameworks",
    desc: "Our Software Development Team uses PHP frameworks to provide a basic structure for streamlining and speeding up the development process of building personalized web websites and apps.",
  },
  {
    name: "Express.js",
    img: "../../../../public/assets/Solutions/Web-Development/expressjs.png",
    highlight: "web application development",
    desc: "Our experts utilize Express.js to simplify the web application development process, making it easier to write fast, secure, and modular applications.",
  },
  {
    name: "Node.js",
    img: "../../../../public/assets/Solutions/Web-Development/node-js.png",
    highlight: "Node.js",
    desc: "We use Node.js to create traditional websites, back-end API services, and data-intensive real-time applications that run across distributed devices.",
  },
  {
    name: "Java",
    img: "../../../../public/assets/Solutions/Web-Development/java.png",
    highlight: "Java",
    desc: "We use Java as a general-purpose programming language to develop custom mobile and web applications, embedded systems, and big data processing.",
  },
  {
    name: "Python",
    img: "../../../../public/assets/Solutions/Web-Development/python.png",
    highlight: "Python",
    desc: "We use Python as one of our primary programming languages for mobile and custom web development, video games, operating systems, machine learning, AI, and more.",
  },
  {
    name: "MongoDB",
    img: "../../../../public/assets/Solutions/Web-Development/mongo-db.png",
    highlight: "MongoDB",
    desc: "Our Website Developers use MongoDB for optimizing the performance of transactional stores and for high volume data storage purposes.",
  },
];
const faqs = [
  {
    question: "What are web development services?",
    answer:
      "Web development services” are a series of processes and offerings that developers provide to cover the needs of a business looking to create a web-based application or website. These offerings tend to encompass the building and maintenance of websites for an engaging online experience.",
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
    question: "What is a progressive web app?",
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

const WebDevelopment = () => {
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
      {/* ✅ HERO SECTION */}
      <motion.section
        className="relative bg-cover bg-center text-white h-[600px] md:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${HeroBanner})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container mx-auto text-left px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeUp}
          >
            CUSTOM WEB DEVELOPMENT SERVICES
          </motion.h1>
          <motion.p className="text-lg md:text-xl mb-8" variants={fadeUp}>
            We’ve Got Experienced Website Developers
          </motion.p>
          <motion.a
            href="#"
            className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
          >
            GET CUSTOM WEB DEVELOPMENT SOLUTIONS
          </motion.a>
        </div>
      </motion.section>

      {/* ✅ BREADCRUMB */}
      <div className="bg-white px-4 py-4 text-sm text-gray-500">
        <div className="container mx-auto">
          Home <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">Solutions</span>
          <span className="mx-2">›</span>{" "}
          <span className="text-cyan-600 font-medium">
            Custom Web Development Services
          </span>
        </div>
      </div>

      {/* ✅ FEATURE SECTION */}
      <section className="px-8 py-16  text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Our Website Development Company Can Build Your Dream Web Application
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Our professional web development services can build a web
            application suited to your business needs. We design engaging and
            user-friendly web applications and websites that optimize the user
            experience. We deliver high-quality solutions for optimal business
            outcomes.
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-cyan-700 mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Professional Web Design and Development Company
          </motion.h2>
          <p className="text-sm text-gray-600 mb-12 max-w-3xl mx-auto">
            Our <a> Full-Stack Web Developers</a>have the programming expertise
            and industry-specific experience to build, integrate, and customize
            your website or application to align perfectly with your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <FaCog size={36} className="text-cyan-600 mb-4" />,
                title: "Web App Integration Services",
                desc: "We always stay on top of the latest developments in deployment, customization, and integration to design the perfect, seamless approach to how you utilize your software.",
              },
              {
                icon: <FaComments size={36} className="text-cyan-600 mb-4" />,
                title: "Mobile App Development Services",

                desc: "With years of expertise under our belt, our team specializing in custom mobile app development can assist you in creating seamless and fluid experiences across various mobile devices.",
              },
              {
                icon: (
                  <FaBalanceScale size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Enterprise Web Design and Development",

                desc: "We use custom APIs and our vast knowledge of web services to build Enterprise Web Applications for digital marketing, CRM, inventory control, expedited workflows, and so much more.",
              },
              {
                icon: <FaChartLine size={36} className="text-cyan-600 mb-4" />,
                title: "Full-Stack Web Development Solutions",

                desc: "Our expert Full-Stack website developers are highly skilled in Java and SQL programming languages with experience in leading 12-factor applications and cloud platform implementation.",
              },
              {
                icon: (
                  <FaSearchDollar size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Web Portal Development",

                desc: "Our Web Portal Developers have both engineering expertise and a keen understanding of the business sector to create reliable and robust web solutions that help companies manage their workflows.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Animation & Graphics Web Design",

                desc: "Our award-winning animators and graphic designers create beautiful logos, branding materials, illustrations, infographics, motion graphics, and more to fulfill your branding vision.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Ecommerce Development Solutions",

                desc: "Our Ecommerce development services can help you build an online store that drives sales and revenue. We have experience with various e-commerce platforms, including Magento, Shopify, and BigCommerce and we can help you choose the best for your business.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Web Integration Services",

                desc: "Our team of experienced web developers provides comprehensive web integration services, ensuring your software operates seamlessly across all platforms and devices for optimal performance and user experience.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "CMS Integration",

                desc: "We integrate CMS capabilities into your existing website or application, enabling you to add and edit web content without needing to rewrite or update any code.",
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
            HIRE FULL-STACK WEB DEVELOPERS
          </button>
        </motion.div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl font-bold mb-2">Full-Stack Technology</h2>
          <p className="text-gray-600 mb-10">
            Our Website Developers utilize multiple software platforms,
            providing greater computing power, enhanced graphics, robust
            security standards, and improved performance levels.
          </p>

          {/* ✅ Front-End */}
          <h3 className="text-left text-xl font-semibold text-gray-700 mb-4">
            Client Software (Front-End)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {frontendTech.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="h-16 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-center">{tech.name}</h4>
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
              </div>
            ))}
          </div>

          {/* ✅ Back-End */}
          <h3 className="text-left text-xl font-semibold text-gray-700 mt-16 mb-4">
            Server Software (Back-End)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {backendTechDetails.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="h-14 mx-auto mb-4"
                />
                <h4 className="font-bold text-lg text-center">{tech.name}</h4>
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
              </div>
            ))}
          </div>

          {/* ✅ CTA */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-500 hover:text-white transition duration-300"
            >
              REQUEST WEB DEVELOPMENT SERVICES
            </a>
          </div>
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
            AI-Powered Web Development Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            Catalyze your website development journey with our cutting-edge AI
            solutions. From enhancing user experiences and automating
            development processes to optimizing content and deploying
            intelligent applications, our expert team harnesses the power of AI
            to drive innovation and success.
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
                  Conversational Interfaces to Enhance UX
                </h3>
                <p className="text-gray-600 text-sm">
                  We can implement AI algorithms to analyze user behavior and
                  preferences to provide personalized content and
                  recommendations. We drive conversational interfaces with
                  chatbots and virtual assistants that leverage natural language
                  processing to offer real-time assistance and enhance user
                  interaction.
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
                  AI-Generated Content Creation and Optimization
                </h3>
                <p className="text-gray-600 text-sm">
                  We develop AI algorithms to streamline content creation by
                  automatically generating articles, product descriptions, and
                  image captions. AI optimizes content, product recommendations,
                  and website interfaces by analyzing user behavior and
                  demographics.
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
                  Development Process AI Automation
                </h3>
                <p className="text-gray-600 text-sm">
                  Our AI-powered testing tools automate testing web
                  applications, efficiently identifying bugs and security
                  vulnerabilities. Our AI developers use TensorFlow/PyTorch
                  development frameworks to build and deploy Machine Learning
                  models for various web applications. We can integrate RPA bots
                  into web workflows to streamline repetitive tasks and automate
                  processes, improving efficiency.
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
                  AI-Driven Insights and Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  We implement AI algorithms that analyze data to identify
                  patterns and trends, enabling informed decision-making and
                  personalized marketing. AI operations streamline the
                  deployment and management of Machine Learning and Artificial
                  Intelligence Operations (MLOps/ALOps), ensuring reliability
                  and scalability.
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
            HIRE WEB APP DEVELOPER
          </button>
        </motion.div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-cyan-700 mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Web Development Support Services
          </motion.h2>
          <p className="text-sm text-gray-600 mb-12 max-w-3xl mx-auto">
            Web development has become increasingly more complex and, as a
            result, more error-prone. Understanding this, our developers and
            support providers are ready to use their skills and knowledge for
            your benefit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <FaCog size={36} className="text-cyan-600 mb-4" />,
                title: "Front-end Development Support",
                subtitle: "with AI-Powered Financial Services",
                desc: "A crucial part of modern web and app development, our front-end development focuses on the user-facing aspects of a website or application. Our front-end programming facilitates all front-of-house operations, such as UI/UX support and client software support.",
              },
              {
                icon: <FaComments size={36} className="text-cyan-600 mb-4" />,
                title: "Backend Development Suppor",
                subtitle: "Engagement with Chatbots",
                desc: "On the flipside of front-end support, our development support services include server software support, backend programming, and framework implementation to ensure robust and scalable server-side software. We specialize in backend support, including backend API services, to optimize your applications and enhance performance and functionality.",
              },
              {
                icon: (
                  <FaBalanceScale size={36} className="text-cyan-600 mb-4" />
                ),
                title: "APIs Integration and Support",
                subtitle: "Responsibility and Innovation",
                desc: "Our API development is meticulously programmed to facilitate seamless application communication and data transfer. Our API integration and API for front-end development ensure synergized connections through customized tools, protocols, and rules, demonstrating our deep technical understanding.",
              },
              {
                icon: <FaChartLine size={36} className="text-cyan-600 mb-4" />,
                title: "Version Control with Git Repositories",
                subtitle: "with AI-Driven Investment",
                desc: "At Chetu, our front-end design & development support services thrive from understanding the significance of fostering clear and organized workflows. Our team of developers will leverage their expertise within version control, specifically with the task of managing Git repositories.",
              },
              {
                icon: (
                  <FaSearchDollar size={36} className="text-cyan-600 mb-4" />
                ),
                title: "QA and Testing",
                subtitle: "Complexity of Financial Decision",
                desc: "Our teams are dedicated to the in-depth development and QA of your needed solution, carrying an attentive eye to the evaluations of every feature and functionality to ensure that if issues are present, they can be resolved promptly.",
              },
              {
                icon: (
                  <FaCheckCircle size={36} className="text-cyan-600 mb-4" />
                ),
                title: "Debugging Javascript Code Errors",
                subtitle: "Efficiency and Compliance",
                desc: "Our skills in debugging are the key to navigating the continuously evolving field of web development, especially when dealing with Javascript code errors. Our teams use browser-specific tools, Integrated Development Environments, and other error monitoring and logging tools such as Sentry and Rollbar.",
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
            GET WEB SUPPORT ON-DEMAND
          </button>
        </motion.div>
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

export default WebDevelopment;
