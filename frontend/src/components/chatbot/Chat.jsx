import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendChatMessage, api } from "../../machine/api";

const Bot = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.38 0-2.5-1.12-2.5-2.5h-1c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5h-1c0 1.38-1.12 2.5-2.5 2.5zm3.5-6c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5S16.33 11 15.5 11zm-7 0c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11z" />
  </svg>
);

const User = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const Send = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const X = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Button = ({ children, onClick, variant = "default", size = "md", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    ghost: "bg-transparent hover:bg-white hover:bg-opacity-20 focus:ring-white text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <motion.button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </motion.button>
  );
};

const chatVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [awaitingEmail, setAwaitingEmail] = useState(false);
  const [awaitingOTP, setAwaitingOTP] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const token = localStorage.getItem("token");

    if (!token && !awaitingEmail && !awaitingOTP) {
      setMessages([{ id: Date.now(), type: "bot", text: "Please provide your email to start chatting." }]);
      setAwaitingEmail(true);
      setInputValue("");
      return;
    }

    if (awaitingEmail) {
      const email = inputValue.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: "Invalid email format. Please enter a valid Gmail ID." }]);
        setInputValue("");
        return;
      }
      try {
        const response = await api.post("/chatbot/send-otp", { email });
        if (response.status === 200) {
          setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: "OTP sent to your email. Please enter the OTP to verify." }]);
          setAwaitingEmail(false);
          setAwaitingOTP(true);
          localStorage.setItem("emailForOTP", email);
        } else {
          setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: response.data.error || "Failed to send OTP." }]);
        }
      } catch (error) {
        setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: "Network error. Please try again later." }]);
      }
      setInputValue("");
      return;
    }

    if (awaitingOTP) {
      const email = localStorage.getItem("emailForOTP");
      const otp = inputValue.trim();
      try {
        const response = await api.post("/chatbot/verify-otp", { email, otp });
        if (response.status === 200) {
          setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: "OTP verified successfully. You can now chat." }]);
          setAwaitingOTP(false);
          localStorage.setItem("token", response.data.token);
        } else {
          setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: response.data.error || "OTP verification failed." }]);
        }
      } catch (error) {
        setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text: "Network error. Please try again later." }]);
      }
      setInputValue("");
      return;
    }

    const newMessage = { id: Date.now(), type: "user", text: inputValue.trim() };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    try {
      const response = await sendChatMessage(inputValue.trim());
      const botReply = { id: Date.now() + 1, type: "bot", text: response.reply };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      const errorReply = { id: Date.now() + 1, type: "bot", text: "An error occurred while sending your message." };
      setMessages((prev) => [...prev, errorReply]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-5 right-5 w-[90vw] sm:w-[400px] h-[80vh] sm:h-[500px] bg-gray-100 shadow-xl rounded-xl flex flex-col overflow-hidden font-sans z-50"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat with Us</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm opacity-90">Online</span>
                    </div>
                  </div>
                </div>
                <Button onClick={toggleChat} variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Action Buttons */}
              {messages.length === 0 && !awaitingOTP && (
                <div className="p-4 flex flex-col gap-3 border-b border-gray-100 flex-shrink-0">
                  <Button variant="outline" size="md" className="w-max self-start">Book call</Button>
                  <Button variant="outline" size="md" className="w-max self-start">Apply job</Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-max self-start"
                    onClick={() => {
                      setMessages([]);
                      setAwaitingEmail(true);
                      setIsOpen(true);
                    }}
                  >
                    Need Help?
                  </Button>
                </div>
              )}

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.length === 0 ? (
                  <motion.div initial="hidden" animate="visible" variants={messageVariants} className="text-center text-gray-500 mt-10">
                    <p className="text-base font-medium">
                      {awaitingEmail
                        ? "Please provide your email so we can continue assisting you."
                        : awaitingOTP
                          ? "Please enter the OTP sent to your email."
                          : "Welcome! How can we help you today?"}
                    </p>
                  </motion.div>
                ) : (
                  messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex items-start space-x-3 ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                      initial="hidden"
                      animate="visible"
                      variants={messageVariants}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === "bot" ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
                          }`}
                      >
                        {message.type === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div
                        className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${message.type === "bot"
                          ? "bg-white text-gray-800 shadow-sm border border-gray-200"
                          : "bg-blue-500 text-white"
                          }`}
                      >
                        <p>{message.text}</p>
                      </div>
                    </motion.div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => {
                      const token = localStorage.getItem("token");
                      if (!token && !awaitingEmail && !awaitingOTP) {
                        setMessages([{ id: Date.now(), type: "bot", text: "Please provide your email to start chatting." }]);
                        setAwaitingEmail(true);
                        setInputValue("");
                      }
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder={awaitingEmail ? "Please enter your email" : awaitingOTP ? "Please enter the OTP" : "Enter your response"}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          aria-label="Open chat"
          className="fixed bottom-5 right-5 bg-blue-600 rounded-full w-14 h-14 text-white text-4xl flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none z-50"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, type: "spring", stiffness: 200 } }}
        >
          +
        </motion.button>
      )}
    </>
  );
}
