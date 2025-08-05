import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IconRenderer } from "@/custom/IconRenderer";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { ThemeToggleButton } from "@/components/mode-toggle";
import {
    colorPalettes,
    accessibilityOptions,
    useAccessibility,
} from "@/context/AccessibilityContext";
import { motion } from "framer-motion";

export default function AccessibilityWidget() {
    const {
        settings,
        toggle,
        resetSettings,
        setTextAlign,
        setColorPalette,
    } = useAccessibility();

    const getAnimation = (index) => {
        const directions = [
            { x: 0, y: -50 }, // top
            { x: 0, y: 50 },  // bottom
            { x: -50, y: 0 }, // left
            { x: 50, y: 0 },  // right
        ];
        return {
            initial: { opacity: 0, ...directions[index % 4] },
            animate: { x: 0, y: 0, opacity: 1 },
            transition: { duration: 0.5, delay: index * 0.05 },
        };
    };

    return (
        <Sheet>
            <div className="text-center text-sm flex bg-muted items-center text-secondary-foreground justify-center text-wrap flex-wrap gap-0">
                Customize your{" "}
                <SheetTrigger>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-blue-800 dark:text-blue-400 text-sm underline font-semibold ml-1"
                    >
                        accessibility settings
                    </Button>
                </SheetTrigger>
            </div>

            <SheetContent
                side="right"
                className="bg-secondary w-[340px] hide-scrollbar overflow-y-auto"
            >
                <SheetHeader>
                    <SheetTitle>Accessibility Menu</SheetTitle>
                </SheetHeader>

                <div className="grid grid-cols-2 gap-4 px-4 pb-6">
                    <ThemeToggleButton />

                    {accessibilityOptions.map((option, index) => {
                        const isTextAlign = option.key === "textAlign";
                        const isActive = isTextAlign
                            ? settings.textAlign
                            : settings[option.key];

                        return (
                            <motion.div
                                key={index}
                                initial={getAnimation(index).initial}
                                animate={getAnimation(index).animate}
                                transition={getAnimation(index).transition}
                                className={`w-[140px] h-[110px] p-4 bg-card flex flex-col gap-1 cursor-pointer text-center justify-center items-center rounded-md relative hover:border-2 border-blue-950 ${isActive ? "border-blue-500 border-2" : ""
                                    }`}
                                onClick={() => {
                                    if (isTextAlign) {
                                        const next =
                                            settings.textAlign === "left"
                                                ? "center"
                                                : settings.textAlign === "center"
                                                    ? "right"
                                                    : "left";
                                        setTextAlign(next);
                                    } else {
                                        toggle(option.key);
                                    }
                                }}
                            >
                                <IconRenderer
                                    strokeWidth={2}
                                    name={option.icon}
                                    size={22}
                                />
                                <small className="text-xs tracking-normal">
                                    {isTextAlign && settings.textAlign
                                        ? `${option.label} (${settings.textAlign})`
                                        : option.label}
                                </small>

                                {isActive && (
                                    <div className="absolute top-2 h-6 w-6 bg-muted flex justify-center items-center rounded-full p-1 right-2">
                                        <Check size={16} className="text-green-500" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}

                    <div className="col-span-2 mt-2">
                        <Label className="font-semibold block mb-2">Color Palette</Label>
                        <div className="flex flex-wrap gap-2">
                            {colorPalettes.map((palette) => (
                                <button
                                    key={palette.key}
                                    onClick={() => setColorPalette(palette.key)}
                                    className={`relative w-8 h-8 cursor-pointer hover:scale-110 transition-all rounded-full focus:outline-none ${settings.colorPalette === palette.key
                                            ? "ring-2 ring-offset-2 ring-primary"
                                            : ""
                                        }`}
                                    style={{
                                        backgroundColor:
                                            palette.key === "default"
                                                ? "var(--primary)"
                                                : palette.color,
                                    }}
                                    aria-label={`Set ${palette.key} color theme`}
                                >
                                    {settings.colorPalette === palette.key && (
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <SheetFooter className="sticky bottom-0 bg-secondary pt-4 pb-2">
                    <Button onClick={resetSettings} className="w-full">
                        <IconRenderer
                            strokeWidth={2}
                            name="RefreshCw"
                            size={20}
                            className="mr-2"
                        />
                        Reset All Settings
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
