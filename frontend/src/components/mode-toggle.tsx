import { Moon, Sun } from "lucide-react";
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
