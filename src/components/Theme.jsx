import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage after component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
    else if (savedTheme === "light") setDarkMode(false);
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }

    setMounted(true);
  }, []);

  // Update DOM and localStorage when darkMode changes
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="text-yellow-600 text-md hover:scale-110 transition-transform cursor-pointer"
    >
      {darkMode ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default Theme;
