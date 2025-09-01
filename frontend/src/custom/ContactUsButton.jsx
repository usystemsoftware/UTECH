import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const ContactUsButton = ({ children, variant, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.pathname.split("/").filter(Boolean).pop() || "home";

  const handlenavigate = () => {
    navigate(`/contact-us?from=${fromPage}`);
  };

  return (
    <Button
      onClick={handlenavigate}
      className={`whitespace-normal break-words text-center ${className}`}
      variant={variant || "default"}
    >
      {children}
    </Button>
  );
};

export default ContactUsButton;
