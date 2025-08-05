import { Moon, Sun, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="goast"
      size="icon"
      className="flex items-center px-2 py-1 md:bg-muted rounded-full text-sm"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}

      {/* Show mode name only on mobile */}
      <span className="block md:hidden text-xs capitalize">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="p-4 bg-card flex flex-col gap-1 relative cursor-pointer text-center hover:border-2 border-blue-950 justify-center items-center rounded-md"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
            <small className="text-xs tracking-normal">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </small>
            {theme === "dark" ? (
                  <div className="absolute top-2 right-2 rounded-full bg-accent p-1">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                ) : null}
        </div>
    );
}