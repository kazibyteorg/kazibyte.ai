'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  const getIcon = (themeName: string) => {
    switch (themeName) {
      case "system":
        return <Monitor className="w-6 h-6" />;
      case "dark":
        return <Moon className="w-6 h-6" />;
      case "light":
        return <Sun className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex justify-center w-16 px-4 py-2 rounded-md shadow-lg shadow-neutral-400 text-base font-medium focus:outline-none text-black dark:text-white hover:bg-green-500"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span>{getIcon(theme || "system")}</span>
        <svg
          className={`w-5 h-5 ml-2 ${dropdownOpen ? "-mr-1" : "mr-1"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <ul className="absolute right-0 z-10 mt-2 w-16 rounded-md shadow-lg shadow-neutral-400 text-black dark:text-white ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
          <li
            className={`cursor-pointer flex items-center justify-center w-full h-12 hover:bg-companyGreen dark:hover:bg-gray-600`}
            onClick={() => handleThemeChange("system")}
          >
            <Monitor className="w-6 h-6" />
          </li>
          <li
            className={`cursor-pointer flex items-center justify-center w-full h-12 hover:bg-companyGreen dark:hover:bg-gray-600`}
            onClick={() => handleThemeChange("dark")}
          >
            <Moon className="w-6 h-6" />
          </li>
          <li
            className={`cursor-pointer flex items-center justify-center w-full h-12 hover:bg-companyGreen dark:hover:bg-gray-600`}
            onClick={() => handleThemeChange("light")}
          >
            <Sun className="w-6 h-6" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitch;
