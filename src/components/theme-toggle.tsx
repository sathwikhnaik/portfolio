"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        <Sun className="theme-icon theme-icon--sun" size={16} />
        <Moon className="theme-icon theme-icon--moon" size={16} />
      </span>
      <span className="theme-toggle__label">Theme</span>
    </button>
  );
}
