import React, { useState } from 'react'
import {
    FaChevronUp,
    FaChevronDown
} from "react-icons/fa"
const FaqSection = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0); // ✅ Only ONE index

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if clicking same
        } else {
            setOpenIndex(index); // Open new one
        }
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.length > 0 && faqs.map((faq, index) => (
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
    )
}

export default FaqSection
