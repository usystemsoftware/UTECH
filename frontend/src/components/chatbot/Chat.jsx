import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";
import { FaTimes, FaPaperPlane, FaUser, FaPhoneAlt, FaBriefcase, FaQuestionCircle, FaArrowLeft, FaGlobe, FaCalendarAlt, FaWhatsapp, FaRedo } from "react-icons/fa";

import { TypographyH5 } from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { sendOtp, verifyOtp } from "../../machine/auth";

const chatVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const chatbotData = {
  main: [
    { id: "services", label: "Services" },
    { id: "solutions", label: "Solutions" },
    { id: "industries", label: "Industries" },
    { id: "careers", label: "Careers", path: "/company/careers" },
    { id: "contact", label: "Contact Us / Book a Call", path: "/book-call" },
  ],
  services: [
    { label: "API Development", path: "/services/api-development" },
    { label: "Application Development", path: "/services/application-development" },
    { label: "QA & Testing", path: "/services/qa-testing" },
    { label: "BPO", path: "/services/bpo" },
    { label: "DevOps", path: "/services/devops" },
    { label: "Custom Software", path: "/services/custom-software" },
    { label: "ERP", path: "/services/erp" },
    { label: "Software Security", path: "/services/software-security" },
  ],
  solutions: [
    { label: "Web Development", path: "/solutions/web-development" },
    { label: "CRM", path: "/solutions/crm" },
    { label: "UI/UX", path: "/solutions/ui-ux" },
    { label: "ERP", path: "/solutions/erp" },
    { label: "IoT", path: "/solutions/iot" },
    { label: "Blockchain", path: "/solutions/blockchain" },
    { label: "AI", path: "/solutions/ai" },
    { label: "Digital Marketing", path: "/solutions/digital-marketing" },
  ],
  industries: [
    { label: "Banking", path: "/industries/banking" },
    { label: "Healthcare", path: "/industries/healthcare" },
    { label: "Retail", path: "/industries/retail" },
    { label: "Real Estate", path: "/industries/real-estate" },
    { label: "Agriculture", path: "/industries/agriculture" },
    { label: "Construction", path: "/industries/construction" },
    { label: "Education", path: "/industries/education" },
    { label: "Hospitality & Travel", path: "/industries/hospitality-travel" },
  ],
};

export default function ChatUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("welcome");
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [resendTimer, setResendTimer] = useState(0);
  const [email, setEmail] = useState(null);

  const messagesEndRef = useRef(null);
  const welcomeShownRef = useRef(false);
  const chatRef = useRef(null);

  const navigate = useNavigate();

  // Close chat on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Auto scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Prevent body scroll when chat open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Welcome message once
  useEffect(() => {
    if (step === "welcome" && !welcomeShownRef.current) {
      addBotMessage("👋 Hi! I'm the U-System Assistant. Please enter your email to continue.");
      welcomeShownRef.current = true;
    }
  }, [step]);

  // Resend timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  const addMessage = (text, sender) => setMessages((prev) => [...prev, { text, sender }]);
  const addBotMessage = (text) => addMessage(text, "bot");
  const addUserMessage = (text) => addMessage(text, "user");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput) return;
    addUserMessage(userInput);

    if (step === "welcome") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userInput)) {
        setEmail(userInput);
        sendOtp({ addBotMessage, userInput, setStep });
        setResendTimer(60);
      } else {
        addBotMessage("⚠️ Invalid email. Please try again.");
      }
    } else if (step === "otp") {
      verifyOtp({ addBotMessage, userInput, setStep, email });
    }

    setUserInput("");
  };

  const handleOption = (option, category) => {
    addUserMessage(option.label);

    if (category === "main") {
      if (option.path) {
        handleNavigate(option.path);
      } else {
        addBotMessage(`Here are our ${option.label}:`);
        setStep(option.id);
      }
    } else if (["services", "solutions", "industries"].includes(category)) {
      setSelectedService(option);
      addBotMessage(`✅ You selected ${option.label}. How would you like to proceed?`);
    }
  };

  const handleNavigate = (url) => {
    navigate(url);
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919270033002?text=Hi, I'm interested in your services.", "_blank");
    setIsOpen(false);
  };

  const handleBookSlot = () => handleNavigate("/book-call");

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            className="fixed bottom-5 right-5 w-[90vw] sm:w-[400px] h-[80vh] sm:h-[500px] bg-card shadow-xl rounded-xl flex flex-col overflow-hidden font-sans z-50"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white flex flex-col h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/60 to-primary text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex justify-center items-center">
                    <Bot />
                  </div>
                  <div>
                    <TypographyH5>Live Chat</TypographyH5>
                    <div className="flex items-center space-x-1 text-sm opacity-90">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online
                    </div>
                  </div>
                </div>
                <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <FaTimes />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-start space-x-3 ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "bot" ? "bg-primary text-white" : "bg-gray-600 text-white"}`}
                    >
                      {msg.sender === "bot" ? <Bot className="w-4 h-4" /> : <FaUser className="w-4 h-4" />}
                    </div>
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${msg.sender === "bot" ? "bg-gray-100 text-gray-800 border shadow-sm" : "bg-primary text-white"}`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Actions */}
                {step === "welcome" && (
                  <div className="flex gap-2 flex-wrap">
                    <Button onClick={() => handleNavigate("/book-call")} variant="secondary">
                      <FaPhoneAlt className="inline mr-2 text-blue-600" /> Book Call
                    </Button>
                    <Button onClick={() => handleNavigate("/company/careers")} variant="secondary">
                      <FaBriefcase className="inline mr-2 text-slate-700" /> Apply Job
                    </Button>

                    <Button onClick={() => handleNavigate("/contact-us")} variant="secondary">
                      <FaQuestionCircle className="inline mr-2 text-blue-600" /> Need Help?
                    </Button>
                  </div>
                )}

                {/* Main Menu */}
                {step === "menu" && (
                  <div className="grid grid-cols-1 gap-3">
                    {chatbotData.main.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => handleOption(opt, "main")}
                        className="cursor-pointer rounded-xl border border-cyan-200 bg-white/10 
                          p-4 shadow-md backdrop-blur-md transition hover:scale-105 
                          hover:bg-cyan-600/20 hover:shadow-lg"
                      >
                        <p className="text-center font-medium text-cyan-800">{opt.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Services/Solutions/Industries */}
                {["services", "solutions", "industries"].includes(step) && !selectedService && (
                  <div className="space-y-3">
                    <div
                      onClick={() => setStep("menu")}
                      className="cursor-pointer rounded-xl border border-cyan-200 bg-white/10 
                        p-3 shadow-md backdrop-blur-md transition hover:scale-105 
                        hover:bg-cyan-600/20 hover:shadow-lg text-center font-medium text-cyan-800"
                    >
                      <p className="text-center font-sm text-cyan-800">
                        <FaArrowLeft className="inline mr-2" /> Back to Main Menu
                      </p></div>
                    <div className="grid grid-cols-1 gap-2">
                      {chatbotData[step].map((opt) => (
                        <div
                          key={opt.label}
                          onClick={() => handleOption(opt, step)}
                          className="cursor-pointer rounded-xl border border-cyan-200 bg-white/10 
                            p-2.5 shadow-md backdrop-blur-md transition hover:scale-105 
                            hover:bg-cyan-600/20 hover:shadow-lg"
                        >
                          <p className="text-center font-sm text-cyan-800">{opt.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub-options */}
                {selectedService && (
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <div
                      className="cursor-pointer rounded-xl border border-cyan-200 bg-white/10 p-2.5 
                        shadow-md backdrop-blur-md transition hover:scale-105 
                        hover:bg-cyan-600/20 hover:shadow-lg"
                      onClick={() => handleNavigate(selectedService.path)}
                    >
                      <p className="text-center font-sm text-cyan-800">
                        <FaGlobe className="inline mr-2" /> Visit Page
                      </p>
                    </div>
                    <div
                      className="cursor-pointer rounded-xl border border-cyan-200 bg-white/10 p-2.5 
                        shadow-md backdrop-blur-md transition hover:scale-105 
                        hover:bg-cyan-600/20 hover:shadow-lg"
                      onClick={handleBookSlot}
                    >

                      <p className="text-center font-sm text-cyan-800">
                        <FaCalendarAlt className="inline mr-2" /> Book a Slot
                      </p>

                    </div>
                    <div
                      className="cursor-pointer rounded-xl border border-cyan-200 bg-white/10 p-2.5 
                        shadow-md backdrop-blur-md transition hover:scale-105 
                        hover:bg-cyan-600/20 hover:shadow-lg"
                      onClick={handleWhatsApp}
                    >
                      <p className="text-center font-sm text-cyan-800">
                        <FaWhatsapp className="inline mr-2" /> Chat on WhatsApp
                      </p>                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                {(step === "welcome" || step === "otp") && (
                  <div>
                    <div className="flex items-center space-x-2">
                      <input
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={step === "welcome" ? "Enter email..." : "Enter OTP..."}
                        className="flex-1 px-4 py-2 border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        className="bg-primary text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaPaperPlane className="w-4 h-4" />
                      </motion.button>
                    </div>
                    {step === "otp" && (
                      <div className="mt-3 text-center text-sm text-gray-600">
                        {resendTimer > 0 ? (
                          <p>⏳ Resend available in {resendTimer}s</p>
                        ) : (
                          <button
                            onClick={() => {
                              sendOtp({ addBotMessage, userInput: email, setStep });
                              setResendTimer(60);
                            }}
                            className="text-blue-600 font-medium cursor-pointer"
                          >
                            <p className="text-center font-sm text-cyan-800">
                              <FaRedo className="inline mr-2" /> Resend OTP
                            </p>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-16 hover:scale-105 shadow-lg rounded-full bg-primary p-4 text-white cursor-pointer right-5 z-40 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Bot size={26} />
        </motion.div>
      )}
    </>
  );
}
