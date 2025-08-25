import { CustomAxios } from "@/custom/CustomAxios"
export const sendOtp = async ({ addBotMessage, userInput, setStep }) => {
    try {
        const response = await CustomAxios.post("/auth/send-otp", { email: userInput });

        if (response.status === 200) {
            addBotMessage(`✅ OTP sent to ${userInput}`);
            setStep("otp");
        }
    } catch (error) {
        // Backend error with response
        if (error.response) {
            addBotMessage(`❌ ${error.response.data.message || "Server error, please try again."}`);
        }
        // No response (network error)
        else if (error.request) {
            addBotMessage("⚠️ No response from server. Please check your internet.");
        }
        // Something else
        else {
            addBotMessage("⚠️ Unexpected error occurred.");
        }
    }
};


export const verifyOtp = async ({ addBotMessage, userInput, setStep, email }) => {
    try {
        const response = await CustomAxios.post("/auth/verify-otp", {
            email: email,
            otp: userInput,
        });

        if (response.status === 200 && response.data.success) {
            addBotMessage("🎉 Verified! Please choose an option below.");
            setStep("menu");
        }
    } catch (error) {
        // Backend error with response
        if (error.response) {
            addBotMessage(
                `❌ ${error.response.data.error || "Server error, please try again."}`
            );
        }
        // No response (network error)
        else if (error.request) {
            addBotMessage("⚠️ No response from server. Please check your internet.");
        }
        // Something else
        else {
            addBotMessage("⚠️ Unexpected error occurred.");
        }
    }
};


