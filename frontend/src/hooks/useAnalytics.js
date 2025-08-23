import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-ET6TXFFZQH";

export const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 once
        ReactGA.initialize(GA_MEASUREMENT_ID);
    }, []);

    useEffect(() => {
        // Track page view on route change
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);
};
