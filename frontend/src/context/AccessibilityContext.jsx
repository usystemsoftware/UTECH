import { createContext, useState, useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const AccessibilityContext = createContext();

const defaultSettings = {
    highlightLinks: false,
    bigText: 0, // 0 = normal, 1 = medium, 2 = large
    textSpacing: false,
    hideImages: false,
    dyslexiaFont: false,
    lineHeight: false,
    pauseAnimations: false,
    textAlign: false, // false | 'left' | 'center' | 'right' | 'justify'
    saturation: false,
    colorPalette: "default",
};

// Load settings from localStorage
const loadSettings = () => {
    try {
        const stored = localStorage.getItem("accessibilitySettings");
        if (stored) {
            return { ...defaultSettings, ...JSON.parse(stored) };
        }
    } catch (err) {
        console.error("Failed to parse accessibility settings from localStorage:", err);
    }
    return defaultSettings;
};

export const AccessibilityProvider = ({ children }) => {
    const [settings, setSettings] = useState(loadSettings);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
    }, [settings]);

    // Apply CSS variable for color palette
    useEffect(() => {
        const root = document.documentElement;
        if (settings.colorPalette !== "default") {
            const palette = colorPalettes.find((p) => p.key === settings.colorPalette);
            if (palette) {
                root.style.setProperty("--primary", palette.color);
                root.style.setProperty("--ring", palette.color);
                root.style.setProperty("--sidebar-primary", palette.color);
            }
        } else {
            root.style.removeProperty("--primary");
            root.style.removeProperty("--ring");
            root.style.removeProperty("--sidebar-primary");
        }
    }, [settings.colorPalette]);

    const toggle = (key) => {
        if (key === "bigText") {
            setSettings((prev) => ({
                ...prev,
                bigText: prev.bigText >= 2 ? 0 : prev.bigText + 1,
            }));
        } else if (key === "pauseAnimations") {
            setSettings((prev) => ({
                ...prev,
                pauseAnimations: !prev.pauseAnimations,
                bigText: !prev.pauseAnimations ? Math.max(prev.bigText, 1) : prev.bigText,
            }));
        } else {
            setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
        }
    };

    const setTextAlign = (alignment) => {
        setSettings((prev) => ({ ...prev, textAlign: alignment }));
    };

    const setColorPalette = (palette) => {
        setSettings((prev) => ({ ...prev, colorPalette: palette }));
    };

    const resetSettings = () => {
        setSettings(defaultSettings);
        localStorage.removeItem("accessibilitySettings");
    };

    const wrapperClass = [
        "accessibility-wrapper",
        settings.highlightLinks && "highlight-links",
        settings.bigText === 1 && "big-text-md",
        settings.bigText === 2 && "big-text-lg",
        settings.textSpacing && "text-spacing",
        settings.hideImages && "hide-images",
        settings.dyslexiaFont && "dyslexia-font",
        settings.lineHeight && "line-height",
        settings.pauseAnimations && "pause-animations",
        settings.textAlign && `text-align-${settings.textAlign}`,
        settings.saturation && "saturation",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <AccessibilityContext.Provider
            value={{
                settings,
                toggle,
                resetSettings,
                setTextAlign,
                setColorPalette,
            }}
        >
            <div className={wrapperClass}>
                <AnimatePresence>{children}</AnimatePresence>
            </div>
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => useContext(AccessibilityContext);

// List of toggleable accessibility options
export const accessibilityOptions = [
    { key: "highlightLinks", label: "Highlight Links", icon: "Link" },
    { key: "bigText", label: "Bigger Text", icon: "Text" },
    { key: "textSpacing", label: "Text Spacing", icon: "ArrowLeftRight" },
    { key: "pauseAnimations", label: "Pause Animations", icon: "PauseCircle" },
    { key: "hideImages", label: "Hide Images", icon: "ImageOff" },
    { key: "dyslexiaFont", label: "Dyslexia Friendly", icon: "Type" },
    { key: "lineHeight", label: "Line Height", icon: "AlignJustify" },
    { key: "textAlign", label: "Text Align", icon: "AlignRight" },
    { key: "saturation", label: "Saturation", icon: "Droplet" },
];

// Color palettes for theming
export const colorPalettes = [
    { key: "default", color: "oklch(0.637 0.237 25.331)" },
    { key: "blue", color: "#3b82f6" },
    { key: "green", color: "#10b981" },
    { key: "orange", color: "#f97316" },
    { key: "purple", color: "#8b5cf6" },
    { key: "pink", color: "#ec4899" },
    { key: "teal", color: "#14b8a6" },
    { key: "red", color: "#ef4444" },
    { key: "yellow", color: "#facc15" },
    { key: "cyan", color: "#22d3ee" },
    { key: "gray", color: "#6b7280" },
    { key: "lime", color: "#84cc16" },
    { key: "sky", color: "#38bdf8" },
    { key: "rose", color: "#f43f5e" },
    { key: "black", color: "#000000" },
    { key: "white", color: "#ffffff" },
];
