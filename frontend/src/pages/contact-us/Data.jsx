export const steps = [
    {
        title: "Which service are you interested in?",
        name: "service",
        options: [
            "Product Engineering",
            "Artificial Intelligence",
            "Digital Transformation",
        ],
        required: true,
    },
    {
        title: "How did you know about us? *",
        name: "source",
        options: ["Google", "LinkedIn", "Instagram", "Other"],
        required: true,
    },
    {
        title: "Industry?",
        name: "industry",
        options: ["Aerospace", "Health Care", "Smart Cities & Nation"],
        required: false,
    },
    {
        title: "Budget? *",
        name: "budget",
        options: ["Less Than 5K", "5k to 10k", "10k to 15k", "More than 15k"],
        required: true,
    },
];

export const Locations = [
    {
        title: "Mumbai",
        address: "Anderi (E) Mumbai- 400068",
        phone: "+91 9270033002",
        mapUrl: "https://www.google.com/maps?q=Asia+Specific,+Andheri+(E),+Mumbai+400068",
    },
    {
        title: "Pune",
        address:
            "India Register office : Office no.02,15, Zeroboyz Chowk, Nehru Nagar, Pimpri-Pune, - 411018",
        phone: "+91 9270033002",
        mapUrl:
            "https://www.google.com/maps?q=Zeroboyz+Chowk,+HDFC+Bank,+Nehru+Nagar,+Pimpri,+Pune",
    },
];