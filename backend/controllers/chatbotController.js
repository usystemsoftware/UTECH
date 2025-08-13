exports.getResponse = (req, res) => {
    const msg = req.body.message?.toLowerCase();

    if (msg.includes("banking"))
        return res.json({ reply: "Banking services: Mobile apps, ATM software, onboarding tools, chatbots." });

    if (msg.includes("retail"))
        return res.json({ reply: "Retail solutions: POS integration, behavior tracking, loyalty programs." });

    return res.json({ reply: "Please ask about our services or industries like banking, retail, healthcare." });
};
