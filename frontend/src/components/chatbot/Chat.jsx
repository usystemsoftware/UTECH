import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User } from "lucide-react";
import { TypographyH5 } from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom"; // 👈 for navigation
import axios from "axios";

const chatVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ChatUI() {
  const [step, setStep] = useState("default"); // default | email | otp | verified
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option) => {
    if (option === "Book Call") navigate("/book-call");
    if (option === "Apply Job") navigate("/apply-job");
    if (option === "Need Help?") navigate("/need-help");
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: "user", text: inputValue.trim() };
    setMessages((prev) => [...prev, userMessage]);

    if (true) {
      console.log(inputValue.trim())
      setEmail(inputValue.trim());
      setStep("otp");

      try {
        const response = await axios.post(
          "http://localhost:5002/auth/send-otp",
          { email: email }, // request body
          { headers: { "Content-Type": "application/json" } } // config
        );


        console.log(response)

        if (response.status === 200) {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 2,
              type: "bot",
              text: "OTP sent to your email ✅. Please enter it below.",
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 2, type: "bot", text: "Error sending OTP ❌" },
          ]);
          setStep("email");
        }
      } catch (err) {
        console.log(err)
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 3, type: "bot", text: "Server error ❌" },
        ]);
        setStep("email");
      }
    }

    if (step === "otp") {
      try {
        const response = await axios.post(
          "http://localhost:5002/auth/verify-otp",
          { email: email, otp: inputValue.trim() }, // request body
          { headers: { "Content-Type": "application/json" } } // config
        );
        if (response.status === 200) {
          setStep("verified");
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 4, type: "bot", text: "✅ Email verified successfully!" },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 5, type: "bot", text: "❌ Invalid OTP, please try again." },
          ]);
        }
      } catch (err) {
        console.log(err)
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 6, type: "bot", text: "Server error ❌" },
        ]);
      }
    }

    setInputValue("");
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-5 right-5 w-[90vw] sm:w-[400px] h-[80vh] sm:h-[500px] bg-card shadow-xl rounded-xl flex flex-col overflow-hidden font-sans z-50"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white flex flex-col h-full">
              {/* Chat Header */}
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
                <Button
                  onClick={toggleChat}
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer text-white hover:bg-white/10"
                >
                  <X />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex items-start space-x-3 ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === "bot"
                        ? "bg-primary text-white"
                        : "bg-gray-600 text-white"
                        }`}
                    >
                      {message.type === "bot" ? (
                        <Bot className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${message.type === "bot"
                        ? "bg-gray-100 text-gray-800 shadow-sm border"
                        : "bg-primary text-white"
                        }`}
                    >
                      <p>{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Show quick options only on default step */}
                {step === "default" && (
                  <div className="flex gap-2 mt-4">
                    {["Book Call", "Apply Job", "Need Help?"].map((opt) => (
                      <Button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        size="sm"
                        className="rounded-full bg-primary/80 text-white hover:bg-primary"
                      >
                        {opt}
                      </Button>
                    ))}
                  </div>
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
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="bg-primary hover:bg-primary/80 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.div
          onClick={toggleChat}
          className="fixed bottom-16 hover:scale-105 shadow-lg rounded-full bg-primary p-4 text-white cursor-pointer right-5 z-40 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Bot size={26} />
        </motion.div>
      )}
    </>
  );
}
