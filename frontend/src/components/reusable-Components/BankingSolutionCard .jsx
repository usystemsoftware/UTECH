// BankingSolutionCard.jsx
import React from "react";

const BankingSolutionCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BankingSolutionCard;
