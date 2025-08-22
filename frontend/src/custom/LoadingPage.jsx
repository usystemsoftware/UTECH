// LoadingPage.jsx
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const LoadingPage = ({ loading, success, error }) => {
    if (!loading && !success && !error) return null; // Hide if inactive

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-white/20 border border-white/30 shadow-2xl 
                   backdrop-blur-2xl p-8 rounded-3xl w-[90%] max-w-lg 
                   text-center text-white overflow-hidden"
            >
                {/* Decorative Gradient Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10" />

                {loading && (
                    <div className="flex flex-col items-center space-y-4">
                        <Loader2 className="w-12 h-12 animate-spin text-blue-300" />
                        <h2 className="text-xl font-semibold">Sending your request...</h2>
                        <p className="text-sm text-white/80">
                            Please wait while we connect your message to our team.
                        </p>
                    </div>
                )}

                {success && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <CheckCircle className="w-12 h-12 text-green-400 animate-bounce" />
                        <h2 className="text-xl font-semibold">Message Sent Successfully!</h2>
                        <p className="text-sm text-white/80">
                            Thank you for reaching out. Our team will get back to you within
                            24 hours to assist with your request.
                        </p>
                    </motion.div>
                )}

                {error && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <XCircle className="w-12 h-12 text-red-400 animate-pulse" />
                        <h2 className="text-xl font-semibold">Something went wrong!</h2>
                        <p className="text-sm text-white/80">
                            ❌ We couldn’t process your request. Please try again or contact us
                            at <span className="font-medium">support@utechnology.com</span>.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default LoadingPage;
