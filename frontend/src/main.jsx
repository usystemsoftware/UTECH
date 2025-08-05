import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AccessibilityProvider } from "@/context/AccessibilityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AccessibilityProvider>
        <BrowserRouter>
          <ThemeProvider defaultTheme="default" storageKey="u-tech-theme">
            <ScrollToTop />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </AccessibilityProvider>
    </HelmetProvider>
  </StrictMode>
);
