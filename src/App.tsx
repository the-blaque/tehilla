import { useState, useEffect } from "react";
import { TbSunset2 } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { GiMoonBats } from "react-icons/gi";

import "./App.css";
import Landing from "./tsx/landing";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for stored theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    // Check for user's system preference for dark mode
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Determine the initial theme
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme); // Set the initial theme

    // Apply the initial theme
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    // Save the initial theme to localStorage
    localStorage.setItem("theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="App">
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto p-8">
          <header className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-xl font-bold">AJ Seeni</h1>
              <div className="relative text-sm">
                <span className="absolute inset-0 overflow-hidden">
                  <span className="block animate-slide absolute h-full w-full -translate-y-full">
                    Software Engineer
                  </span>
                  <span
                    className="block animate-slide absolute h-full w-full -translate-y-full"
                    style={{ animationDelay: "0.83s" }}
                  >
                    Product Lead
                  </span>
                  <span
                    className="block animate-slide absolute h-full w-full -translate-y-full"
                    style={{ animationDelay: "1.83s" }}
                  >
                    Creative
                  </span>
                </span>
                {/* Placeholder text to maintain the space */}
                <span className="invisible">Software Engineer</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/oluwaseeni-ajayi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-orange transition-colors duration-300"
              >
                <IoLogoLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/the-blaque"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-orange transition-colors duration-300"
              >
                <AiFillGithub className="h-6 w-6" />
              </a>
              {theme === "dark" ? (
                <TbSunset2
                  className="h-6 w-6 hover:text-custom-orange transition-colors duration-300 cursor-pointer"
                  onClick={toggleTheme}
                />
              ) : (
                <GiMoonBats
                  className="h-6 w-6 hover:text-custom-orange transition-colors duration-300 cursor-pointer"
                  onClick={toggleTheme}
                />
              )}
            </div>
          </header>
          <Landing />
        </div>
      </div>
    </div>
  );
}

export default App;
