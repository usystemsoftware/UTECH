import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendChatMessage, api } from "@/machine/api";
import { Bot, X, Send, User } from "lucide-react";
import { TypographyH5 } from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { version } from "../../../package.json";

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
      setMessages([
        {
          id: Date.now(),
          type: "bot",
          text: "Please provide your email to start chatting.",
        },
      ]);
      setAwaitingEmail(true);
      setInputValue("");
      return;
    }

    if (awaitingEmail) {
      const email = inputValue.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: "bot",
            text: "Invalid email format. Please enter a valid Gmail ID.",
          },
        ]);
        setInputValue("");
        return;
      }
      try {
        const response = await api.post("/chatbot/send-otp", { email });
        if (response.status === 200) {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "bot",
              text: "OTP sent to your email. Please enter the OTP to verify.",
            },
          ]);
          setAwaitingEmail(false);
          setAwaitingOTP(true);
          localStorage.setItem("emailForOTP", email);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "bot",
              text: response.data.error || "Failed to send OTP.",
            },
          ]);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: "bot",
            text: "Network error. Please try again later.",
          },
        ]);
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
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "bot",
              text: "OTP verified successfully. You can now chat.",
            },
          ]);
          setAwaitingOTP(false);
          localStorage.setItem("token", response.data.token);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "bot",
              text: response.data.error || "OTP verification failed.",
            },
          ]);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: "bot",
            text: "Network error. Please try again later.",
          },
        ]);
      }
      setInputValue("");
      return;
    }

    const newMessage = {
      id: Date.now(),
      type: "user",
      text: inputValue.trim(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    try {
      const response = await sendChatMessage(inputValue.trim());
      const botReply = {
        id: Date.now() + 1,
        type: "bot",
        text: response.reply,
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      const errorReply = {
        id: Date.now() + 1,
        type: "bot",
        text: "An error occurred while sending your message.",
      };
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
            className="fixed bottom-5 right-5 w-[90vw] sm:w-[400px] h-[80vh] sm:h-[500px] bg-card shadow-xl rounded-xl flex flex-col overflow-hidden font-sans z-50"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary/60 to-primary text-white p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-white/10 text-white flex justify-center items-center">
                    <Bot />
                  </div>
                  <div>
                    <TypographyH5>Chat With Us</TypographyH5>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm opacity-90">Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={toggleChat}
                  variant="goast"
                  size="sm"
                  className="cursor-pointer"
                >
                  <X />
                </Button>
              </div>

              {/* Action Buttons */}
              {messages.length === 0 && !awaitingOTP && (
                <div className="p-4 flex flex-col gap-3 border-b border-gray-100 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-max self-start cursor-pointer"
                  >
                    Book call
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-max self-start cursor-pointer"
                  >
                    Apply job
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-max self-start cursor-pointer"
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
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                    className="text-center text-gray-500 mt-10"
                  >
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
                      className={`flex items-start space-x-3 ${
                        message.type === "user"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                      initial="hidden"
                      animate="visible"
                      variants={messageVariants}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "bot"
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
                        className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
                          message.type === "bot"
                            ? "bg-gray-100 text-gray-800 shadow-sm border"
                            : "bg-primary text-foreground"
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
              <div className="p-4 border-t bg-white border-gray-200 shadow flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => {
                      const token = localStorage.getItem("token");
                      if (!token && !awaitingEmail && !awaitingOTP) {
                        setMessages([
                          {
                            id: Date.now(),
                            type: "bot",
                            text: "Please provide your email to start chatting.",
                          },
                        ]);
                        setAwaitingEmail(true);
                        setInputValue("");
                      }
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      awaitingEmail
                        ? "Please enter your email"
                        : awaitingOTP
                        ? "Please enter the OTP"
                        : "Enter your response"
                    }
                    className="flex-1 px-4 py-2 border-2 border-primary placeholder:text-black  rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 ease-in-out"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-primary hover:bg-primary/80 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md"
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
        <div
          onClick={toggleChat}
          className="fixed bottom-10 md:bottom-13 hover:scale-105 hover:shadow-2xl shadow-black rounded-full text-sm bg-primary  p-4 text-white cursor-pointer right-5 z-40 flex items-center gap-2"
        >
          <Bot size={32} />
        </div>
      )}

      <span className="fixed bottom-3 right-4 z-50 text-sm">
        Version:{version}
      </span>
    </>
  );
}
