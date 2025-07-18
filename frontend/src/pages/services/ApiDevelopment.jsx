
import { motion } from "framer-motion";
import BankingHeader from "/assets/industries/banking/BankingHeader.webp"
import CellphoneAnimation from "/assets/services/api-development/cellphone-animation.gif";

import {
    FaRobot,
    FaPuzzlePiece,
    FaCode,
    FaCheckSquare,
    FaCogs,
    FaPaypal,
    FaFacebookF,
    FaYoutube,
    FaMailBulk,
    FaCloud,
    FaProjectDiagram
} from "react-icons/fa";

import {
    PiBrain,
    PiMonitorPlay,
    PiGraph,
    PiMicrophone,
    PiChatTeardropDots,
    PiShieldCheck,
    PiBrowsers,
    PiGearSix,
    PiCloud,
    PiGitBranch,
} from "react-icons/pi";

import { Link } from "react-router-dom";
import FaqSection from "@/custom/FaqSection";
const ApiDevelopment = () => {
    const features = [
        {
            icon: <FaRobot className="text-cyan-600 w-10 h-10 shrink-0" />,
            title: "Custom Artificial Intelligence API Solutions",
            description: (
                <>
                    Our developers integrate <span className="text-cyan-600">artificial intelligence software</span> using machine learning algorithms, natural
                    language processing, computer vision, and other AI techniques to build web APIs that can be used for various applications, such as customer
                    service chatbots, fraud detection, recommendation engines, and predictive analytics.
                </>
            ),
        },
        {
            icon: <FaPuzzlePiece className="text-cyan-600 w-10 h-10 shrink-0" />,
            title: "Custom API Interface Integrations",
            description:
                "We specialize in building custom REST APIs to enhance your current off-the-shelf solution or integrate third-party public APIs that enables your software solution to seamlessly interface with other apps, devices, and business systems.",
        },
        {
            icon: <FaCode className="text-cyan-600 w-10 h-10 shrink-0" />,
            title: "Custom API Implementations",
            description:
                "We implement internal and external API documentation solutions that preemptively solve code issues regarding server communications, content creation & management, data sharing, business logic, and microservices.",
        },
        {
            icon: <FaCheckSquare className="text-cyan-600 w-10 h-10 shrink-0" />,
            title: "Automated API Testing",
            description: (
                <>
                    Our engineers and <span className="text-cyan-600">quality assurance (QA) specialists</span> use automated unit testing, functional testing,
                    and load testing tools and best practices to check and learn from the performance & functionality of mission-critical business apps.
                </>
            ),
        },
        {
            icon: <FaCogs className="text-cyan-600 w-10 h-10 shrink-0" />,
            title: "Custom API Application Solutions",
            description:
                "APIs are widely used in web applications, and there are four main types of APIs: public, partner, private, and composite. Our mobile, desktop, and cloud-build API application solutions incorporate developing service-oriented architectures (SOA), browsers, web sockets, operating systems, firmware/hardware, database resources, and more.",
        },
    ];
    const AiApiFeatures = [
        {
            icon: <PiBrain size={40} className="text-cyan-500 mx-auto" />,
            title: "Deep Learning API",
            description:
                "Our engineers can make your applications smarter utilizing Machine Learning APIs, allowing you to automate services, reduce errors, and improve customer experience. Neural networks support classification, regression, forecasting, and more.",
        },
        {
            icon: <PiMonitorPlay size={40} className="text-cyan-500 mx-auto" />,
            title: "Computer Vision API",
            description:
                "We build computer vision APIs to access and interpret images, videos, and other visual data. Our algorithms detect objects, faces, and differentiate shapes/colors from visual inputs.",
        },
        {
            icon: <PiGraph size={40} className="text-cyan-500 mx-auto" />,
            title: "Predictive Analytics API",
            description:
                "We create predictive analytics APIs using decision trees, neural networks, and regressions to help forecast trends and make data-driven decisions.",
        },
        {
            icon: <PiMicrophone size={40} className="text-cyan-500 mx-auto" />,
            title: "Speech Recognition",
            description:
                "We implement AI-powered speech recognition APIs using NLP to detect words, analyze audio signals, and convert them into structured text output.",
        },
        {
            icon: <PiChatTeardropDots size={40} className="text-cyan-500 mx-auto" />,
            title: "Chatbot API",
            description:
                "Using NLP and machine learning, our chatbot APIs power virtual agents that assist with booking, support, lead generation, and more.",
        },
        {
            icon: <PiShieldCheck size={40} className="text-cyan-500 mx-auto" />,
            title: "Fraud Detection",
            description:
                "We build APIs that detect anomalies and flag fraudulent behavior using AI-based predictive models and advanced machine learning techniques.",
        },
    ];

    const services = [
        {
            icon: <PiBrowsers size={40} className="text-cyan-500 mx-auto" />,
            title: "Third-Party API Integrations",
            description:
                "We harness the power of Microsoft platforms like Azure, Jitterbit, Dell Boomi, Anypoint, and Funnel to enhance web functionality and integrate systems with REST APIs and documentation.",
        },
        {
            icon: <PiGearSix size={40} className="text-cyan-500 mx-auto" />,
            title: "API Maintenance & Support",
            description:
                "We offer API maintenance solutions to ensure smooth operations with features like encryption, single sign-on, dashboard controls, and RBAC modules.",
        },
        {
            icon: <PiCloud size={40} className="text-cyan-500 mx-auto" />,
            title: "Cloud Application Programming Interface Solutions",
            description:
                "We build secure cloud APIs using SaaS, IaaS, PaaS, and APIaaS models to enable seamless platform and device access for users.",
        },
        {
            icon: <PiGitBranch size={40} className="text-cyan-500 mx-auto" />,
            title: "Microservices Consulting",
            description:
                "We break down monolithic apps into microservices that operate independently, making them more scalable and easier to maintain.",
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
    const support = [
        {
            icon: <FaCloud className="text-primary text-4xl" />,
            title: "REST API Assistance",
            description:
                "Chetu leverages this fast and versatile resource to seamlessly enable XML, JSON, and HTML formatting, creating responsive performance on all IoT platforms and custom mobile app development projects. Chetu’s REST experts provide prompt assistance and troubleshooting for all your REST-powered API projects.",
        },
        {
            icon: <FaCogs className="text-primary text-4xl" />,
            title: "SOAP API Guidance",
            description:
                "Our support services team offers expert troubleshooting and prompt resolution of all WSDL and XML-based issues. Chetu strives to provide reliable and secure communication between distributed systems, efficiently performing all SOAP-powered resources.",
        },
        {
            icon: <FaCode className="text-primary text-4xl" />,
            title: "XML API Support System",
            description:
                "Chetu creates a robust XML support system to provide expertise with accurate data validation, prompt schema error corrections, and efficient data exchange within all applications and systems. Our dedicated support services team is available to proactively monitor all XML API performance, ensuring consistency and accuracy.",
        },
        {
            icon: <FaProjectDiagram className="text-primary text-4xl" />,
            title: "RPC API Implementation",
            description:
                "Chetu’s expertise and support are readily available to businesses working in remote environments. We optimize network communication for all remote and hybrid business structures and promptly resolve issues related to serialization and deserialization of RPC payloads.",
        },
    ];

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

    const portfolioItems = [
        {
            img: "/assets/services/api-development/img1.jpg",
            overlayText: "Our Portfolio",
        },
        {
            img: "/assets/services/api-development/img2.jpg",
            overlayText: "BLOG: WHAT IS API INTEGRATION IN APP DEVELOPMENT?",
        },
        {
            img: "/assets/services/api-development/img3.jpg",
            overlayText: "Best Api Management Platformas",
        },
        {
            img: "/assets/services/api-development/img4.jpg",
            overlayText: "API's 101: How do Api's Work",
        },
        {
            img: "/assets/services/api-development/img5.jpg",
            overlayText: "How to prevent Api Attacks |Api Security Tips",
        },
        {
            img: "/assets/services/api-development/img6.jpg",
            overlayText: "what is an APi And How Can They Improve Online Banking",
        },
    ];


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
                        CUSTOM API DEVELOPMENT &
                        INTEGRATION SOLUTIONS                    </motion.h1>
                    <motion.p className="text-lg md:text-xl mb-8">
                        Expert API Development with AI-Powered Solutions for Seamless Integrations

                    </motion.p>
                    <motion.a
                        href="#"
                        className="inline-block border-2 border-cyan-400 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        GET API DEVELOPERS
                    </motion.a>
                </div>
            </motion.section>
            <div className="max-w-6xl container mx-auto">
                {/* Breadcrumb */}
                <div className="bg-white px-4 py-4 text-sm text-gray-500">
                    <div className="container mx-auto">
                        <Link to='/'>   Home <span className="mx-2">›</span>{" "}</Link>
                        Solutions <span className="text-cyan-600 font-medium mx-2">›</span>
                        <span className="text-cyan-600 font-medium">Api Development</span>

                    </div>
                </div>

                {/* Features Grid */}
                <section className=" bg-white">
                    <div className="container mx-auto text-center px-4">
                        <motion.h2
                            className="text-1xl md:text-3xl font-bold text-cyan-700 mb-4"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            Hire Experienced and Dedicated API Developers
                        </motion.h2>
                        <p className="text-sm text-primary mb-10 max-w-2xl mx-auto">
                            Chetu's custom API solutions support a range of integration protocols, including REST, SOAP, XML, and RPC API. Our developers have extensive experience creating custom application programming interfaces using these protocols to ensure seamless integration between your systems.


                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 py-20">
                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            {/* Left Column - Features */}
                            <div className="flex flex-col gap-6">
                                {features.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        custom={index}
                                    >
                                        {item.icon}
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right Column - Image */}
                            <motion.div
                                className="flex justify-center md:justify-end"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={features.length}
                            >
                                <img
                                    src={CellphoneAnimation}
                                    alt="Mobile Analytics App"
                                    className="w-[300px] md:w-[330px] object-contain"
                                />
                            </motion.div>
                        </div>

                        {/* Centered Button */}
                        <motion.div
                            className="mt-16 flex justify-center"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={features.length + 1}
                        >
                            <a
                                href="#"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition duration-300 hover:scale-105"
                            >
                                CUSTOMIZE YOUR BANKING SOLUTION NOW
                            </a>
                        </motion.div>
                    </div>

                </section>

                <section className="px-6 py-7 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Artificial Intelligence API Features & Services
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 mb-16">
                        Chetu leverages Artificial Intelligence APIs to provide a clean and clearly defined
                        interface for your analytics, giving you controlled access to your data and allowing
                        you to accurately analyze large datasets and extract valuable insights.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                        {AiApiFeatures.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center px-4"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={index}
                            >
                                {item.icon}
                                <h3 className="text-lg font-bold mt-4 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={features.length}
                    >
                        <a
                            href="#"
                            className="inline-block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium text-sm px-6 py-3 rounded-full transition duration-300"
                        >
                            HIRE AI API DEVELOPER
                        </a>
                    </motion.div>
                </section>

                <section>
                    <div className="px-8 py-16  max-w-7xl mx-auto bg-white text-center">
                        <motion.h1
                            className="text-3xl font-bold mb-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                        >
                            Chetu’s API-as-a-Service (APIaaS) Solutions
                        </motion.h1>

                        <motion.p
                            className="max-w-3xl mx-auto text-gray-600 mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={1}
                        >
                            Chetu's API-as-a-Service (APIaaS) solutions utilize a range of protocols, including cloud natural language APIs and Java, JSON, AJAX, SOAP, HTTP/HTTPS, XML, XHTML, TCP/IP, and EDI development services. Our experienced developers can create secure and efficient web APIs using these protocols to ensure seamless integration with your existing systems.


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
                                    src='/public/assets/services/third-party-software-integration.png'
                                    alt="Loan Software"
                                    className="w-[250px] rounded-lg shadow-lg"
                                />
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
                                {services.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center text-center px-4"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        custom={index}
                                    >
                                        {item.icon}
                                        <h3 className="text-lg font-bold mt-4 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
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

                <section className="px-6 py-20 bg-white text-center max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2">
                        Extend Your API Functionality with New & Existing Third-Party Systems
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm">
                        Chetu’s been delivering highly secure, scalable, and flexible application programming interface development services to our clients over the last 22 years and have become leading experts in the software development and integration of public APIs, including:
                    </p>

                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 text-left">
                        <div>
                            <h3 className="font-bold text-base mb-2 text-center">
                                Payment Gateways APIs
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                Chetu integrates leading{" "}
                                <span className="text-blue-500 underline cursor-pointer">
                                    payment gateway APIs
                                </span>
                                , such as PayPal, Authorize.Net, and PayU that work with your existing e-commerce
                                storefronts, websites, and social networks.
                            </p>
                            <div className="flex justify-center gap-6 mt-4">
                                <FaPaypal size={36} />
                                {/* <TbBrandAuthorizeNet size={36} /> */}
                                {/* <LiaCcAmazonPay size={36} /> */}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-base mb-2 text-center">
                                Shipping Carriers APIs
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                Chetu offers seamless API integrations with shipping carriers like FedEx, UPS, and USPS.
                            </p>
                            <div className="flex justify-center gap-6 mt-4">
                                {/* <SiFedex size={36} className="text-purple-600" /> */}
                                {/* <SiUps size={36} className="text-yellow-500" /> */}
                                <FaMailBulk size={36} />
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        <div>
                            <h3 className="font-bold text-base mb-2 text-center">
                                SMS & Communication APIs
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                We integrate{" "}
                                <span className="text-blue-500 underline cursor-pointer">
                                    cloud communications platform APIs
                                </span>{" "}
                                like Twilio, Plivo, and Nexmo into your business systems.
                            </p>
                            <div className="flex justify-center gap-6 mt-4">
                                {/* <SiTwilio size={36} className="text-red-500" /> */}
                                {/* <SiNexmo size={36} /> */}
                                {/* <SiPlivo size={36} /> */}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-base mb-2 text-center">
                                Social Network APIs
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                Connect social platforms like Facebook, YouTube, and Instagram with your systems.
                            </p>
                            <div className="flex justify-center gap-6 mt-4">
                                <FaFacebookF size={36} />
                                <FaYoutube size={36} className="text-red-500" />
                                {/* <FaInstagram size={36} className="text-pink-500" /> */}
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-16">
                        <button className="px-6 py-3 border-2 border-orange-500 rounded-full text-sm font-medium text-black hover:bg-orange-100 transition-all">
                            GET THIRD-PARTY API FUNCTIONALITY
                        </button>
                    </div>
                </section>

                <section className="py-16 px-6 max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                        API Development Support Services
                    </h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
                        Our specialists offer guidance and troubleshooting for REST, SOAP, XML, and RPC implementation, creating streamlined performance of all APIs and ensuring all end-users enjoy enhanced API efficiency and accurate data processing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {support.map((service, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="shrink-0">{service.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#009DB5] underline underline-offset-4 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>





                <section className="px-6 py-16 max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                        Frequently Asked Questions about{" "}
                        <span className="text-cyan-700">Construction Software</span>
                    </h2>
                    <FaqSection
                        faqs={faqs}
                    />
                </section>
                <section className="py-10 px-4 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-md"
                            >
                                <img
                                    src={item.img}
                                    alt={`Portfolio ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {item.overlayText && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-center text-lg font-semibold px-4">
                                            {item.overlayText}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ApiDevelopment;
